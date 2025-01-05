import { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { ReactNode, Suspense } from "react";
import { HighlightInit } from "@highlight-run/next/client";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import PlausibleProvider from "next-plausible";
import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import ogImageCs from "@/public/og_image_cs.png";
import ogImageEn from "@/public/og_image_en.png";
import { getUserLocale } from "@/services/locale";
import "./globals.css";

const firaCode = Fira_Code({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-fira-code",
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const locale = (await params).locale;

    const t = await getTranslations({ locale });

    return {
        description: t("Metadata.description"),
        openGraph: {
            description: t("Metadata.description"),
            images: [
                {
                    url: locale === "en" ? ogImageEn.src : ogImageCs.src,
                },
            ],
            locale,
            title: t("Metadata.title"),
            type: "website",
        },
        title: t("Metadata.title"),
    };
}

interface Props {
    children: ReactNode;
}

export default async function RootLayout(props: Props) {
    const locale = await getLocale();
    const userLocale = await getUserLocale();

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <>
            <HighlightInit
                networkRecording={{
                    enabled: true,
                    recordHeadersAndBody: true,
                    urlBlocklist: [],
                }}
                projectId="qe98ykpd"
                serviceName="portfolio"
                tracingOrigins
            />

            <html className={`${firaCode.variable}`} lang={locale}>
                <head>
                    <PlausibleProvider
                        customDomain="https://analytics.lukis.dev"
                        domain="lukis.dev"
                        hash
                        selfHosted
                        trackOutboundLinks
                    />
                </head>
                <NextIntlClientProvider messages={messages}>
                    <body className="h-dvh overflow-hidden p-4 md:p-16">
                        <div className="relative flex h-full flex-col rounded-lg border border-primary bg-primary-base md:overflow-hidden">
                            <Header locale={userLocale} />
                            <Suspense>{props.children}</Suspense>
                            <Footer />
                        </div>
                        <Analytics />
                        <SpeedInsights />
                    </body>
                </NextIntlClientProvider>
            </html>
        </>
    );
}
