import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

const siteUrl = "https://zinqme.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zinq | Plataforma Completa de Gestão, Equipes e Atendimento com IA",
  description:
    "O ecossistema definitivo para o seu negócio. Do agendamento online e atendimento IA 24h ao Chat Interno, Kanban de projetos e gamificação para a sua equipe.",
  keywords: [
    "plataforma de gestão",
    "agenda com ia",
    "chat corporativo",
    "kanban",
    "gamificação para empresas",
    "inteligência artificial",
    "agendamento online",
    "pagamentos anti-calote",
    "zinq",
    "software para equipes",
  ],
  authors: [{ name: "Zinq Tecnologia" }],
  alternates: { canonical: siteUrl },
  robots: "index, follow",
  other: {
    "google-site-verification": "VHpudcM3NKnQrxbckITSzz6axQHO4ON7oPT3rzpbmWg",
  },
  openGraph: {
    title: "Zinq | O Ecossistema Definitivo para o Seu Negócio",
    description:
      "Mais que uma agenda. Gerencie a sua equipe com Chat interno e Kanban, automatize vendas com IA 24h e elimine faltas com a taxa anti-calote.",
    url: siteUrl,
    siteName: "Zinq",
    images: [
      {
        url: "https://ronfhewvlaxtisyqtlat.supabase.co/storage/v1/object/public/project-images/user-10/logozinqq.png",
        width: 1200,
        height: 630,
        alt: "Zinq Gestão Inteligente",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zinq | Gestão Inteligente de Equipes e Atendimento",
    description:
      "Eleve o nível da sua operação. Agendamento inteligente, IA de atendimento, comunicação corporativa e projetos num único lugar.",
    images: [
      "https://ronfhewvlaxtisyqtlat.supabase.co/storage/v1/object/public/project-images/user-10/logozinqq.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Zinq",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description:
      "Ecossistema de gestão definitivo para negócios modernos: Agendamento Inteligente, Comunicação Interna (Chat corporativo), Kanban de Projetos, Gamificação e Pagamentos seguros.",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "BRL",
      description: "Teste grátis de 7 dias com funcionalidades Premium",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2557",
    },
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* 🎯 Google Tag Manager - Carregamento Otimizado */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WWV2BGJ3');
          `}
        </Script>

        {/* 🎯 Google Ads & Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11509902356"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11509902356');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        {/* NoScript GTM */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWV2BGJ3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ScrollToTop />
        <Analytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
