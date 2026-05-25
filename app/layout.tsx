import type { Metadata } from 'next'
import { Cinzel, Cinzel_Decorative, EB_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})
const cinzelDecorative = Cinzel_Decorative({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel-decorative',
  display: 'swap',
})
const ebGaramond = EB_Garamond({ 
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Família à Luz da Fé | Coleção de Ebooks de Formação Católica',
  description: 'Uma coleção de 3 ebooks de formação parental enraizada na sabedoria católica — com orientações práticas para o dia a dia.',
  keywords: ['educação católica', 'formação parental', 'ebooks', 'obediência', 'birras', 'crianças'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="pt" 
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${ebGaramond.variable} bg-navy scroll-smooth`}
    >
      <body className="font-body antialiased">

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4509292342725804');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=4509292342725804&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HXV91N2Q0D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HXV91N2Q0D');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wo6z65xj8h");
          `}
        </Script>

        {/* UTM Transfer Script */}
        <Script id="utm-transfer" strategy="afterInteractive">
          {`
            (function() {
              function getUTMParams() {
                var params = {};
                var search = window.location.search;
                if (!search) return params;
                var pairs = search.slice(1).split('&');
                pairs.forEach(function(pair) {
                  var kv = pair.split('=');
                  if (kv[0].indexOf('utm_') === 0) {
                    params[kv[0]] = decodeURIComponent(kv[1] || '');
                  }
                });
                return params;
              }
              function appendUTMsToLinks() {
                var utms = getUTMParams();
                if (Object.keys(utms).length === 0) return;
                var query = Object.keys(utms)
                  .map(function(k) { return k + '=' + encodeURIComponent(utms[k]); })
                  .join('&');
                var links = document.querySelectorAll('a[href*="hotmart.com"]');
                links.forEach(function(link) {
                  var href = link.getAttribute('href');
                  var separator = href.indexOf('?') !== -1 ? '&' : '?';
                  link.setAttribute('href', href + separator + query);
                });
              }
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', appendUTMsToLinks);
              } else {
                appendUTMsToLinks();
              }
            })();
          `}
        </Script>

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}

      </body>
    </html>
  )
}
