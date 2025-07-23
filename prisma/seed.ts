import { PrismaService } from './prisma.service';
const prisma = new PrismaService();

async function main() {
  console.log('🌱 Seeding database...');

  // 📌 Seed Country Table
  const countries = [
    { name: 'Bangladesh', iso_code: 'BD', phone_code: '+880' },
    { name: 'United States', iso_code: 'US', phone_code: '+1' },
    { name: 'India', iso_code: 'IN', phone_code: '+91' },
    { name: 'United Kingdom', iso_code: 'GB', phone_code: '+44' },
    { name: 'Canada', iso_code: 'CA', phone_code: '+1' },
    { name: 'Germany', iso_code: 'DE', phone_code: '+49' },
    { name: 'France', iso_code: 'FR', phone_code: '+33' },
    { name: 'Italy', iso_code: 'IT', phone_code: '+39' },
    { name: 'Australia', iso_code: 'AU', phone_code: '+61' },
    { name: 'Saudi Arabia', iso_code: 'SA', phone_code: '+966' },
  ];

  for (const country of countries) {
    await prisma.country.upsert({
      where: { iso_code: country.iso_code },
      update: {},
      create: country,
    });
  }
  console.log('✅ Countries seeded successfully!');

  // 📷 Seed Photos
  const existingPhotos = await prisma.photos.findMany();
  if (existingPhotos.length === 0) {
    console.log('📷 Creating default photos...');
    await prisma.photos.createMany({
      data: [
        {
          serial_id: 'default-article',
          original: '/images/default-article.png',
          large: '/images/default-article-large.png',
          medium: '/images/default-article-medium.png',
          small: '/images/default-article-small.png',
        },
        {
          serial_id: 'default-article1',
          original: '/images/default-article1.png',
          large: '/images/default-article1-large.png',
          medium: '/images/default-article1-medium.png',
          small: '/images/default-article1-small.png',
        },
        {
          serial_id: 'default-article2',
          original: '/images/default-article2.png',
          large: '/images/default-article2-large.png',
          medium: '/images/default-article2-medium.png',
          small: '/images/default-article2-small.png',
        },
        {
          serial_id: 'default-article3',
          original: '/images/default-article3.png',
          large: '/images/default-article3-large.png',
          medium: '/images/default-article3-medium.png',
          small: '/images/default-article3-small.png',
        },
        {
          serial_id: 'default-article4',
          original: '/images/default-article4.png',
          large: '/images/default-article4-large.png',
          medium: '/images/default-article4-medium.png',
          small: '/images/default-article4-small.png',
        },
      ],
    });
    console.log('✅ Photos seeded successfully!');
  } else {
    console.log('⚡ Photos already exist, skipping creation.');
  }

  // 📝 Seed Articles
  const photos = await prisma.photos.findMany();
  const photoIds = photos.map((photo) => photo.photo_id);

  function getRandomDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
  }

  const articlesData = [
    {
      title: 'Understanding Forex Market Trends',
      description: 'A comprehensive guide to understanding the key factors...',
      content: 'The Forex market operates 24 hours a day...',
      photo_id: photoIds[1],
      video_url: 'https://vimeo.com/76979871',
      created_at: getRandomDate(new Date(2023, 0, 1), new Date()),
    },
    {
      title: 'How to Improve Your Trading Strategy',
      description: 'Advanced techniques and strategies for traders...',
      content: 'Trading requires patience, discipline, and a solid strategy...',
      photo_id: null,
      video_url: 'https://vimeo.com/12345678',
      created_at: getRandomDate(new Date(2023, 0, 1), new Date()),
    },
    {
      title: 'The Future of Cryptocurrency',
      description: 'An in-depth look at the evolution of cryptocurrency...',
      content:
        'Cryptocurrency has transformed the way people think about money...',
      photo_id: photoIds[0],
      video_url: null,
      created_at: getRandomDate(new Date(2023, 0, 1), new Date()),
    },
    {
      title: 'Stock Market Investment Guide',
      description:
        'A beginner-friendly guide to investing in the stock market...',
      content:
        'Stock investing is one of the most effective ways to build wealth...',
      photo_id: null,
      video_url: 'https://vimeo.com/23456789',
      created_at: getRandomDate(new Date(2023, 0, 1), new Date()),
    },
    {
      title: 'Introduction to Blockchain Technology',
      description: 'Exploring the fundamental principles of blockchain...',
      content: 'Blockchain technology has revolutionized industries...',
      photo_id: null,
      video_url: 'https://vimeo.com/34567890',
      created_at: getRandomDate(new Date(2023, 0, 1), new Date()),
    },
    {
      title: 'Real Estate Investment Tips',
      description: 'Expert insights into the real estate market...',
      content:
        'Real estate investments provide long-term financial stability...',
      photo_id: photoIds[2],
      video_url: null,
      created_at: getRandomDate(new Date(2023, 0, 1), new Date()),
    },
    {
      title: 'Artificial Intelligence in Finance',
      description: 'A look at how AI is transforming financial markets...',
      content:
        'AI-powered trading bots and data analytics are revolutionizing...',
      photo_id: null,
      video_url: 'https://vimeo.com/45678901',
    },
    {
      title: 'Understanding Interest Rates',
      description:
        'A deep dive into the impact of interest rates on economies...',
      content:
        'Interest rates play a crucial role in shaping economic conditions...',
      photo_id: photoIds[3],
      video_url: 'https://vimeo.com/45678901',
      created_at: getRandomDate(new Date(2023, 0, 1), new Date()),
    },
    {
      title: 'Personal Finance Tips for Beginners',
      description: 'A practical guide to managing personal finances...',
      content: 'Personal finance is about budgeting, saving, and investing...',
      photo_id: photoIds[4],
      video_url: 'https://vimeo.com/56789012',
      created_at: getRandomDate(new Date(2023, 0, 1), new Date()),
    },
    {
      title: 'The Role of Hedge Funds',
      description: 'An inside look at how hedge funds operate...',
      content:
        'Hedge funds use various investment strategies to maximize returns...',
      photo_id: null,
      video_url: null,
      created_at: getRandomDate(new Date(2023, 0, 1), new Date()),
    },
  ];

  for (const article of articlesData) {
    await prisma.article.create({ data: article });
  }

  console.log('✅ Mock articles added successfully!');
}

main()
  .catch((error) => {
    console.error('❌ Seeding failed:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
