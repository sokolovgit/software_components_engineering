FROM node:18

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install 

COPY . .

RUN pnpm build

CMD ["pnpm", "start:prod"]
