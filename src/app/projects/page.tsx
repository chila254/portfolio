/// <reference types="node" />

import { getGithubStats } from "@/lib/github";
import Projects from "./page-content";

export const revalidate = 3600;

export default async function Page() {
  const githubStats = await getGithubStats();
  return <Projects githubStats={githubStats} />;
}
