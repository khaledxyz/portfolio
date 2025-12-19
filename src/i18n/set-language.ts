"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import type { LanguageId } from "@/config/languages.config";

export async function setLanguage(languageId: LanguageId) {
  const jar = await cookies();
  jar.set("language", languageId, {
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
  });
  revalidatePath("/");
}
