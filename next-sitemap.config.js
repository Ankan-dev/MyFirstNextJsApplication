/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.vironexdigital.com',
  generateRobotsTxt: true,
  additionalPaths: async () => [
    { loc: '/pricing/custom-web-development', changefreq: 'monthly', priority: 0.8 },
    { loc: '/pricing/app-development', changefreq: 'monthly', priority: 0.8 },
    { loc: '/pricing/AI-development', changefreq: 'monthly', priority: 0.8 },
    { loc: '/pricing/Saas-Product-Development', changefreq: 'monthly', priority: 0.8 },
  ],
};
