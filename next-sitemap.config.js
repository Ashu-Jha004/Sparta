/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://sparta009.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: [
    "/admin/*",
    "/private/*",
    "/api/*",
    "/server/*",
    "/config/*",
    "/tmp/*",
    "/node_modules/*",
  ],
  robotsTxtOptions: {
    additionalSitemaps: ["https://sparta009.vercel.app/sitemap.xml"],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/private/",
          "/api/",
          "/server/",
          "/config/",
          "/tmp/",
          "/node_modules/",
        ],
      },
    ],
  },
};

module.exports = config;
