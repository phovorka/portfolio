import { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { getUserLocale } from "@/services/locale";
import "./globals.css";

const firaCode = Fira_Code({
    display: "swap",
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-fira-code",
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const locale = (await params).locale;

    const t = await getTranslations({ locale });

    return { title: t("HomePage.title") };
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
        <html className={`${firaCode.variable}`} lang={locale}>
            <NextIntlClientProvider messages={messages}>
                <body className="h-screen min-h-screen p-4 md:p-16">
                    <div className="relative flex h-full flex-col rounded-lg border border-primary bg-primary md:overflow-hidden">
                        <Header locale={userLocale} />
                        {props.children}
                        <Footer />
                    </div>
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
