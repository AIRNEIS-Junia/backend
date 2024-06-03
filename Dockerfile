###########################
## Base
###########################
FROM node:20-alpine AS base

RUN npm i -g pnpm

###########################
## Builder
###########################
FROM base AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .
RUN pnpm build

###########################
## Runtime Development
###########################
FROM base AS development
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

EXPOSE 3001
CMD [  "npm", "run", "start:dev" ]

###########################
## Runtime Production
###########################
FROM base AS production
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

EXPOSE 3001
CMD [  "npm", "run", "start:prod" ]