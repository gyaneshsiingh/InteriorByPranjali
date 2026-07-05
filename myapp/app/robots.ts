import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://interiorbypranjali.com'; // Adjust this to your actual production URL

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Add any paths you don't want crawlers to access
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
