export const dynamic = "force-static";

export function GET() {
  const robots = `
User-agent: *
Allow: /

Sitemap: https://ulybkadent.ru/sitemap.xml
  `.trim();

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
