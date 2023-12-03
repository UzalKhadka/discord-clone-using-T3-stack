import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = db;
// this is a hack to make sure that we don't create multiple instances of Prisma Client on hot reload in development environment
