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
  Query,
} from '@nestjs/common';
import { ProductService } from '../../domain/services/product.service';
import {
  CategoryFindBySlugDto,
  ProductCategoryCreateDto,
  ProductCreateDto, ProductFindByNameDto,
  ProductFindBySlugDto,
  ProductTypeCreateDto
} from "../dto/product.dto";
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../infrastructure/guards/roles.guard';
import { Roles } from '../../infrastructure/decorators/roles.decorator';

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

  @Get('search/slug/:slug')
  //@UseGuards(AuthGuard('jwt-at'))
  async findByProductSlug(@Param('slug') slug: string) {
    return this.productService.findBySlug(slug);
  }

  @Get()
  async getAll() {
    return this.productService.getAll();
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
  async getAllCategory() {
    return this.productService.getAllCategories();
  }

  @Get('categories/:slug')
  //@UseGuards(AuthGuard('jwt-at'))
  async findByProductCategorySlug(@Param('slug') slug: string) {
    return this.productService.getCategoryBySlug(slug);
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
