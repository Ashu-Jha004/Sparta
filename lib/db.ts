// a hack because of this no new prisma client  delcared on hot reload during development

import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () => {
  return new PrismaClient();
};
declare const globalThis: {
  prismaGlobal: ReturnType<typeof PrismaClientSingleton>;
};
const prisma = globalThis.prismaGlobal ?? PrismaClientSingleton();
export default prisma;
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
