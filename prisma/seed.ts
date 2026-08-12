import { PrismaClient } from "../app/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "seed@casa-licor.test",
      name: "Seed User",
    },
  });

  await prisma.subscription.create({
    data: {
      userId: user.id,
      renewsAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  const season = await prisma.season.create({
    data: {
      name: "Season 0",
      startDate: new Date(),
      endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    },
  });

  const tier = await prisma.tier.create({
    data: {
      seasonId: season.id,
      level: 1,
      xpRequired: 100,
      discountPct: 5,
      name: "Bronze",
    },
  });

  await prisma.userProgress.create({
    data: {
      userId: user.id,
      seasonId: season.id,
      currentXp: 0,
      currentLevel: 0,
    },
  });

  const kit = await prisma.kit.create({
    data: {
      name: "Kit de prueba",
      description: "Kit seed para verificar el schema",
      basePrice: 1000,
      xpReward: 10,
    },
  });

  const order = await prisma.order.create({
    data: {
      userId: user.id,
      totalAmount: 1000,
    },
  });

  await prisma.orderItem.create({
    data: {
      orderId: order.id,
      kitId: kit.id,
      quantity: 1,
      unitPrice: 1000,
    },
  });

  console.log("Seed completo:", { user, season, tier, kit, order });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
