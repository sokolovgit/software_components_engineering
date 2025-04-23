FROM node:18

# Вмикаємо corepack і активуємо pnpm
RUN corepack enable && corepack prepare pnpm@8.15.4 --activate

# Робоча директорія у контейнері
WORKDIR /app

# Копіюємо лише файли залежностей для кешування
COPY package.json pnpm-lock.yaml ./

# Встановлюємо залежності з pnpm
RUN pnpm install
# Копіюємо решту файлів
COPY . .

# Білдимо проєкт
RUN pnpm build

# Запускаємо продакшн
CMD ["pnpm", "start:prod"]
