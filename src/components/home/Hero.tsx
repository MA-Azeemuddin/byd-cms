"use client";
import { Input } from "../shadcn/ui/input";
import { Button } from "../shadcn/ui/button";
import { ProjectSelect } from "../common/ProjectSelect";
import { useState } from "react";

export default function Hero() {
  const [selectedProject, setSelectedProject] = useState<{
    name: string;
  } | null>(null);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center py-12 md:py-20 text-center text-6xl font-bold">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4 text-2xl md:text-8xl">
          <h1 className="text-4xl md:text-8xl tracking-tight">
            Build Your Home with{" "}
          </h1>
          <p className=" flex items-center text-4xl md:text-8xl">
            eTameer (CMS)!
          </p>
          <p className="text-muted-foreground/80 text-sm md:text-xl w-1/2 font-light">
            Just the basics - Everything you need to know to set up your account
            and database. Learn more about eTameer CMS and how to use it from
            start to finish.
          </p>
        </div>
        <div className="md:flex items-center gap-2 mt-8">
          <Input placeholder="Email" type="email" className="w-full" />
          <Button>Read the docs</Button>
        </div>
        <ProjectSelect onSelect={setSelectedProject} />
      </div>
      <div>
        {selectedProject && (
          <p className="mt-4">
            Selected Project: {selectedProject.name.toUpperCase()}
          </p>
        )}
      </div>
    </>
  );
}
