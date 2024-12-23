FROM node:23-alpine AS base

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM node:23-alpine AS app

RUN npm install -g pnpm

WORKDIR /app

COPY . .

COPY --from=base /app/node_modules ./node_modules


EXPOSE 3000


CMD [ "pnpm", "run", "dev" ]