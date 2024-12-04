import { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
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

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html className={`${firaCode.variable}`} lang={locale}>
            <NextIntlClientProvider messages={messages}>
                <body className="h-screen min-h-screen p-4 md:p-16">
                    <div className="border-primary bg-primary relative flex h-full flex-col overflow-hidden rounded-lg border">
                        <Header />
                        {props.children}
                        <Footer />
                    </div>
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
