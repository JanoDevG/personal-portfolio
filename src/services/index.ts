"use server";

import { promises as fs } from "fs";
import path from "path";
import { Project, Testimonial } from "@/lib/types";

/* ---------------------------------------------------
   🔧 Utility: Read + parse any JSON file
--------------------------------------------------- */
const readJsonFile = async <T>(filePath: string): Promise<T> => {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
};

/* ---------------------------------------------------
   🔧 Utility: Read all JSON files in a folder
--------------------------------------------------- */
const readJsonFolder = async <T>(folder: string): Promise<T[]> => {
  const dirPath = path.resolve(process.cwd(), folder);
  const files = await fs.readdir(dirPath);

  return Promise.all(
    files.map((name) => {
      const filePath = path.join(dirPath, name);
      return readJsonFile<T>(filePath);
    })
  );
};

/* ---------------------------------------------------
   📚 Get all projects (sorted by priority)
--------------------------------------------------- */
export const getAllProjects = async (): Promise<Project[]> => {
  try {
    const projects = await readJsonFolder<Project>("content/projects");
    return projects.sort((a, b) => a.priority - b.priority);
  } catch (err) {
    console.error("Error reading projects:", err);
    return [];
  }
};

/* ---------------------------------------------------
   💬 Get all testimonials (sorted by date)
--------------------------------------------------- */
export const getAllTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const testimonials = await readJsonFolder<Testimonial>("content/testimonials");
    return testimonials.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } catch (err) {
    console.error("Error reading testimonials:", err);
    return [];
  }
};
