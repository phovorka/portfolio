import { getLocale } from "next-intl/server";
import { PageContent } from "@/components/page-content/page-content";

export const dynamicParams = false;

export function generateStaticParams() {
    return [
        { slug: "kiwico" },
        { slug: "cesys" },
        { slug: "high-school" },
        { slug: "make" },
        { slug: "me" },
        { slug: "university" },
        { slug: "uxf" },
        { slug: "dago" },
        { slug: "d3config" },
    ];
}

export default async function AboutWithSlugPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    const locale = await getLocale();

    const { default: Content } = await import(
        `@/markdown/${locale}/${slug}.mdx`
    );

    return (
        <PageContent slug={slug}>
            <Content />
        </PageContent>
    );
}
