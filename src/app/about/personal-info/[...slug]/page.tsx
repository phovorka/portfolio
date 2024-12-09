import { PageContent } from "@/components/page-content/page-content";

export default async function PersonalInfoPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    return <PageContent slug={slug} />;
}
