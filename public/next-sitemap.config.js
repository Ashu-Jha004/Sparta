/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://sparta009.vercel.app/",
  generateRobotsTxt: true, // (optional)
  // ...other options
};

module.exports = config;
