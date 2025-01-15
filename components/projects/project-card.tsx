import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-transparent dark:border-gray-700">
      <div className="relative w-full h-[200px]">
        <Image
          className="object-cover border border-gray-200 rounded-lg dark:border-gray-700"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.companyName}
        </h5>
        <p className="font-normal text-gray-700 line-clamp-3 dark:text-gray-400">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/project/${project.id}`}>
          <Button variant={"default"} className="mt-2">
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute p-3 bg-white border border-gray-200 rounded-full bottom-4 right-4 dark:border-gray-700 dark:bg-gray-950 ">
        {project.type === "Personal Project" ? (
          <Icons.userFill className="w-4 h-4" />
        ) : (
          <Icons.work className="w-4 h-4" />
        )}
      </div>
    </div>
  );
}
