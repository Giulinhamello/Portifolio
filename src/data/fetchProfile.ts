import { supabase } from "../lib/supabase";

export type ProfileData = {
  formacao: { title: string; extra: string }[];
  sobre: { title: string; extra: string }[];
  projetos: { title: string; extra: string; imageKey: string }[];
  extras: { title: string; extra: string }[];
};

export async function fetchProfile(slug = "giulia"): Promise<ProfileData> {
  const { data, error } = await supabase
    .from("portfolio_profile")
    .select("data")
    .eq("slug", slug)
    .single();

  if (error) throw error;
  return data.data as ProfileData;
}