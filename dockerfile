FROM node:23-alpine AS base

RUN npm install -g pnpm

WORKDIR /src

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM node:23-alpine 

WORKDIR /src

COPY . .

COPY --from=base /src/node_modules ./node_modules

EXPOSE 4000

CMD [ "pnpm", "run", "dev" ]