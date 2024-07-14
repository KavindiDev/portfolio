FROM node:20-alpine

WORKDIR /app
COPY ./ /app/
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

EXPOSE 3000
CMD ["pnpm", "run", "start"]