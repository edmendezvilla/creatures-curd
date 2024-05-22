import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.creature.upsert({
    where: { name: 'depredador' },
    update: {},
    create: {
      name: 'depredador',
      description: 'es un cazador feo',
      lastSee:
        "feria libre",
      countLastSee:12,  
      extinct: false,
    },
  });

    const post2 = await prisma.creature.upsert({
    where: { name: 'duende' },
    update: {},
    create: {
      name: 'duende',
      description: 'quiero oro.',
      lastSee:
        "miracho",
      countLastSee:5,  
      extinct: false,
    },
  });



  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });