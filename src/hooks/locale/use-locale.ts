import { getUserLocale } from "@/services/locale";

export async function useLocale() {
    const userLocale = await getUserLocale();

    return { userLocale };
}
