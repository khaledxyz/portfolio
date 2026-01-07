import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Fragment } from "react/jsx-runtime";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);

    return {
      title: project.metadata.title,
      description:
        project.metadata.description || `Project: ${project.metadata.title}`,
      openGraph: {
        title: project.metadata.title,
        description: project.metadata.description,
        images: [project.metadata.thumbnail],
      },
    };
  } catch {
    return {
      title: "Project Not Found",
    };
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);
    const { metadata, content } = project;

    // Format date
    const formattedDate = new Date(metadata.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <Fragment>
        <div className="container mb-10 space-y-8">
          <Button asChild className="group gap-2" variant="ghost">
            <Link href="/#projects">
              <Icon
                className="transition-transform group-hover:-translate-x-0.5"
                icon="hugeicons:arrow-left-02"
              />
              Back to Projects
            </Link>
          </Button>
          <div className="space-y-5">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
              <Image
                alt={metadata.title}
                className="object-cover"
                fill
                priority
                src={metadata.thumbnail}
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start">
              <div className="flex-1 space-y-2">
                <h1 className="font-bold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                  {metadata.title}
                </h1>
                {metadata.description ? (
                  <p className="text-base text-muted-foreground sm:text-lg">
                    {metadata.description}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-2 pt-1 sm:pt-0">
                {metadata.demo ? (
                  <Button asChild size="sm">
                    <Link
                      className="group"
                      href={metadata.demo}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Icon
                        className="transition-transform group-hover:rotate-45"
                        icon="hugeicons:arrow-up-right-01"
                      />
                      Demo
                    </Link>
                  </Button>
                ) : null}
                {metadata.github ? (
                  <Button asChild size="sm" variant="secondary">
                    <Link
                      href={metadata.github}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Icon icon="hugeicons:github-01" />
                      GitHub
                    </Link>
                  </Button>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
              <time dateTime={metadata.date}>{formattedDate}</time>
              {Array.isArray(metadata.tags) && metadata.tags.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex flex-wrap gap-1.5">
                    {metadata.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>{" "}
          <Separator className="my-8" />
          {/* Article Content */}
          <article
            className="prose prose-neutral dark:prose-invert prose-li:my-1 prose-ol:my-4 prose-p:my-4 prose-ul:my-4 prose-headings:mt-8 prose-headings:mb-4 max-w-none prose-img:rounded-lg prose-img:border prose-headings:font-bold prose-a:text-primary prose-headings:tracking-tight prose-a:no-underline hover:prose-a:underline" // biome-ignore lint/security/noDangerouslySetInnerHtml: <this happens server-side only anyway>
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </Fragment>
    );
  } catch {
    notFound();
  }
}
