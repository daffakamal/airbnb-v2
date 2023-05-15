import { PrismaClient } from "@prisma/client"

// It declares a variable named prisma of type PrismaClient | undefined. This declaration allows the prisma variable to be accessed globally
declare global {
  var prisma: PrismaClient | undefined
}

// Create a client variable, which is initialized with the value of globalThis.prisma if it exists or a new instance of PrismaClient if it doesn't
const client = globalThis.prisma || new PrismaClient()
// Check if the NODE_ENV environment variable is not set to "production". If it's not, it sets the globalThis.prisma variable to the client instance
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client