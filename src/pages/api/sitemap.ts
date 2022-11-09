import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;

  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  // generate sitemap here
  const xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
      <loc>https://ploow.store/</loc>
      <lastmod><?php echo $hoje; ?></lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
  </url>
  
  <url>
      <loc>https://ploow.store/login</loc>
      <lastmod><?php echo $hoje; ?></lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
  </url>
  
  <url>
      <loc>https://ploow.store/register</loc>
      <lastmod><?php echo $hoje; ?></lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
  </url>
  
  <url>
      <loc>https://ploow.store/tos</loc>
      <lastmod><?php echo $hoje; ?></lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
  </url>
</urlset>`;

  res.end(xml);
}
