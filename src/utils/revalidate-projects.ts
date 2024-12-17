"use server";

import { revalidatePath } from "next/cache";

export async function revalidateProjects() {
    return revalidatePath("/projects");
}
