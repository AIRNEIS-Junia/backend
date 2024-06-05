import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Param,
  Body,
  Post,
  Delete,
  Get,
  Patch,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Query, Res
} from "@nestjs/common";
import { ProductService } from '../../domain/services/product.service';
import {
  ProductCategoryCreateDto,
  ProductCreateDto,
  ProductFindByNameDto,
  ProductTypeCreateDto,
} from '../dto/product.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../infrastructure/guards/roles.guard';
import { Roles } from '../../infrastructure/decorators/roles.decorator';
import { Response } from 'express';

@Controller('products')
@ApiTags('products')
@ApiBearerAuth()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('search')
  //@UseGuards(AuthGuard('jwt-at'))
  async findByName(@Query() query: ProductFindByNameDto) {
    return this.productService.findByName(query.name);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt-at'))
  async findById(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt-at'))
  async getAll(@Res() res: Response) {
    const products = await this.productService.getAll();
    const total = products.length;

    res.set('Content-Range', `products 0-10/${total}`);
    res.json(products);
  }

  @Post()
  @Roles('admin')
  @UseGuards(AuthGuard('jwt-at'), RolesGuard)
  @UsePipes(new ValidationPipe())
  async create(@Body() body: ProductCreateDto) {
    return this.productService.create(body);
  }

  @Patch(':id')
  @Roles('admin')
  @UseGuards(AuthGuard('jwt-at'), RolesGuard)
  @UsePipes(new ValidationPipe())
  async modify(@Param('id') id: string, @Body() body: ProductCreateDto) {
    return this.productService.modify(id, body);
  }

  @Delete(':id')
  @Roles('admin')
  @UseGuards(AuthGuard('jwt-at'), RolesGuard)
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }

  @Get('categories')
  @UseGuards(AuthGuard('jwt-at'))
  async getAllCategory() {
    return this.productService.getAllCategories();
  }

  @Get('categories/:id')
  @UseGuards(AuthGuard('jwt-at'))
  async getCategoryById(@Param('id') id: string) {
    return this.productService.getCategoryById(id);
  }

  @Post('categories')
  @Roles('admin')
  @UseGuards(AuthGuard('jwt-at'), RolesGuard)
  @UsePipes(new ValidationPipe())
  async createCategory(@Body() body: ProductCategoryCreateDto) {
    return this.productService.createCategory(body);
  }

  @Delete('categories/:id')
  @Roles('admin')
  @UseGuards(AuthGuard('jwt-at'), RolesGuard)
  async deleteCategory(@Param('id') id: string) {
    return this.productService.deleteCategory(id);
  }

  @Get('types')
  @UseGuards(AuthGuard('jwt-at'), RolesGuard)
  async getAllType() {
    return this.productService.getAllTypes();
  }

  @Post('types')
  @Roles('admin')
  @UseGuards(AuthGuard('jwt-at'), RolesGuard)
  async createType(@Body() body: ProductTypeCreateDto) {
    return this.productService.createType(body);
  }

  @Delete('types/:id')
  @Roles('admin')
  @UseGuards(AuthGuard('jwt-at'), RolesGuard)
  async deleteType(@Param('id') id: string) {
    return this.productService.deleteType(id);
  }

  @Patch('types/:id')
  @Roles('admin')
  @UseGuards(AuthGuard('jwt-at'), RolesGuard)
  async modifyType(
    @Param('id') id: string,
    @Body() body: ProductTypeCreateDto,
  ) {
    return this.productService.modifyType(id, body);
  }
}
