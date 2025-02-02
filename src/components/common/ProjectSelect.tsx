import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";

const projects = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Grapes" },
  { id: 4, name: "Pineapple" },
  { id: 5, name: "Blueberry" },
];

export function ProjectSelect({
  onSelect,
}: {
  onSelect: (project: { name: string } | null) => void;
}) {
  const handleSelectChange = (value: string) => {
    const project = projects.find((project) => project.name) || null;
    onSelect(project);
  };

  return (
    <div className="space-y-2">
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select project" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Projects</SelectLabel>
            {projects.map((project) => (
              <SelectItem key={project.id} value={project.name}>
                {project.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
