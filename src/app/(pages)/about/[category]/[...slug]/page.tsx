import { getLocale } from "next-intl/server";
import { PageContent } from "@/components/page-content/page-content";

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
