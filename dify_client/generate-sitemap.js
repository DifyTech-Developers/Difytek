// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs';

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://difytek.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  // Add your routes manually or dynamically
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/privacy', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/terms', changefreq: 'monthly', priority: 0.7 });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ Sitemap generated');
})();
