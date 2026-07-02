# Stage 1: Dependencies and Build
FROM node:20-alpine AS builder
WORKDIR /app

# Install build dependencies if needed
RUN apk add --no-cache libc6-compat

COPY package*.json ./
RUN npm ci

COPY . .

# Generate Prisma Client and build project
RUN npx prisma generate
RUN npm run build

# Stage 2: Production Execution
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy build artifacts and dependencies
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Run Next.js server
CMD ["npm", "run", "start"]
