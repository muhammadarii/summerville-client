import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async () => {
  const baseUrl = "https://summervilleintech.vercel.app";

  const routes = [
    "/",
    "/about",
    "/work",
    "/service",
    "/careers",
    "/contact",
    "/login",
    "/register",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          return `
            <url>
              <loc>${baseUrl}${route}</loc>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
