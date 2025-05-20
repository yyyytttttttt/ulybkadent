import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Mobile-friendly */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
        <meta name="yandex-verification" content="b729bdcea20a0819" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:image" content="https://ulybkadent.ru/images/ssilka.jpeg" />
        <meta name="twitter:image" content="https://ulybkadent.ru/images/ssilka.jpeg" />
        
        {/* Yandex.Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
          (function (d, w, c) {
              (w[c] = w[c] || []).push(function() {
                  try {
                      w.yaCounter56479978 = new Ya.Metrika({
                          id:56479978,
                          clickmap:true,
                          trackLinks:true,
                          accurateTrackBounce:true,
                          webvisor:true
                      });
                  } catch(e) { }
              });

              var n = d.getElementsByTagName("script")[0],
                  x = "https://mc.yandex.ru/metrika/watch.js",
                  s = d.createElement("script"),
                  f = function () { n.parentNode.insertBefore(s, n); };
              for (var i = 0; i < document.scripts.length; i++) {
                  if (document.scripts[i].src === x) { return; }
              }
              s.type = "text/javascript";
              s.async = true;
              s.src = x;

              if (w.opera == "[object Opera]") {
                  d.addEventListener("DOMContentLoaded", f, false);
              } else { f(); }
          })(document, window, "yandex_metrika_callbacks");
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* JSON-LD (Structured Data) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Стоматология «Улыбка»",
              "url": "https://ulybkadent.ru/",
              "logo": "https://ulybkadent.ru/images/ssilka.jpeg",
              "image": "https://ulybkadent.ru/images/ssilka.jpeg",
              "description": "Профессиональный уход за зубами в клинике «Улыбка» – профилактика, ортодонтия, имплантация.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Звездная 10, ул. Заречная 9",
                "addressLocality": "Балашиха",
                "postalCode": "143900",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "55.7963",
                "longitude": "37.9382"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+7 (495) 523-31-74",
                "contactType": "customer service",
                "availableLanguage": "Russian"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "20:00"
                }
              ],
              "sameAs": [
                "https://vk.com/ulybkadent",
                "https://dzen.ru/id/67160b4d551d051402496432"
              ]
            }),
          }}
        />
        
        {/* NoScript для Яндекс.Метрики */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/56479978"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

      </body>
    </html>
  );
}
