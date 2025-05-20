export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://ulybkadent.ru";

  const pages = [
    "/",
    "/details/",
    "/price-list/",
    "/location/",
    "/AboutUs/",
    "/documents/",
    "/News/top5-tooth-tips/",
    "/News/cleaning-care/",
    "/News/Ilainer/",
    "/oms/",
    "/higher-authorities/"
  ];

  const doctors = [
    "Agureeva", "Alexsandrova", "Bogatireva", "Chegoleva",
    "dediev", "Ecimova", "dobrinceva", "Garipova",
    "Hironin", "Hordicova", "Kapustina", "Kobzeva",
    "Kovalskaya", "Krapivnaia", "Kuzin", "Kuzina",
    "Mechechcova", "Nosenco", "Pavlova", "Savateeva",
    "Ulmer", "Zabroda", "Zemcova", "Zherdina", "zozyla"
  ].map((doctor) => `/doctors/${doctor}/`);

  const urls = [...pages, ...doctors]
    .map((url) => `<url><loc>${baseUrl}${url}</loc></url>`)
    .join("\n  ");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
