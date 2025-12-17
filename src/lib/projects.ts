import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export interface ProjectMetadata {
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
  github?: string;
  demo?: string;
  tags?: string[];
  date: string;
}

export interface Project {
  metadata: ProjectMetadata;
  content: string;
}

// Get all project slugs for generating static pages
const EXTENSION_REGEX = /\.md$/;
export function getAllProjectSlugs(): string[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(EXTENSION_REGEX, ""));
}

// Get all projects with metadata (for listing page)
export function getAllProjects(): ProjectMetadata[] {
  const slugs = getAllProjectSlugs();
  const projects = slugs.map((slug) => {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug,
    } as ProjectMetadata;
  });

  // Sort by date (newest first)
  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Get single project by slug (for project page)
export async function getProjectBySlug(slug: string): Promise<Project> {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse frontmatter
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const htmlContent = await marked(content);

  return {
    metadata: data as ProjectMetadata,
    content: htmlContent,
  };
}
