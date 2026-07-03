import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/ui/CaseStudy";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <CaseStudy
      title={project.title}
      problem={project.caseStudy.problem}
      solution={project.caseStudy.solution}
      features={project.caseStudy.features}
      techStack={project.caseStudy.techStack}
      architecture={project.caseStudy.architecture}
      security={project.caseStudy.security}
      deployment={project.caseStudy.deployment}
      future={project.caseStudy.future}
      liveLink={project.liveLink}
      githubLink={project.githubLink}
      challenges={project.caseStudy.challenges}
      solutions={project.caseStudy.solutions}
      highlight={project.caseStudy.highlight}
    />
  );
}
