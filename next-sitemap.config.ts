import type { IConfig, ISitemapField } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://www.vironexdigital.com',
  generateRobotsTxt: true,

  // Manually add your 4 dynamic routes
  additionalPaths: async () => {
    const urls: ISitemapField[] = [
      { loc: '/pricing/custom-web-development', changefreq: 'monthly', priority: 0.8 },
      { loc: '/pricing/app-development', changefreq: 'monthly', priority: 0.8 },
      { loc: '/pricing/AI-development', changefreq: 'monthly', priority: 0.8 },
      { loc: '/pricing/Saas-Product-Development', changefreq: 'monthly', priority: 0.8 },
    ];
    return urls;
  },
};

export default config;
