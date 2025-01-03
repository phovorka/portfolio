import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import { withPlausibleProxy } from "next-plausible";

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX();

const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withPlausibleProxy({
    customDomain: "https://analytics.lukis.dev",
})(withNextIntl(withMDX(nextConfig)));
