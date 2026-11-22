export type StackGroup = "backend" | "frontend" | "mobile" | "data" | "cloud" | "cms";

export interface Pin {
  number: number;
  tech: string;
  group: StackGroup;
}

const left: [StackGroup, string[]][] = [
  ["backend", [".NET Core", "ASP.NET Core", "C#", "Razor Pages", "Node.js", "Express.js", "NestJS", "GraphQL", "Apollo", "REST API"]],
  ["mobile", ["Flutter", "Dart"]],
  ["cms", ["WordPress", "Drupal"]],
];

const right: [StackGroup, string[]][] = [
  ["frontend", ["Vue.js", "Vuetify", "React", "Astro", "TypeScript", "Tailwind CSS"]],
  ["data", ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Firebase"]],
  ["cloud", ["AWS", "Azure", "Docker"]],
];

const flatten = (side: [StackGroup, string[]][]) =>
  side.flatMap(([group, techs]) => techs.map((tech) => ({ tech, group })));

const leftFlat = flatten(left);
const rightFlat = flatten(right);
const total = leftFlat.length + rightFlat.length;

// DIP numbering: pin 1 top-left, counting down the left side,
// then up the right side so the top-right pin is the highest number.
export const leftPins: Pin[] = leftFlat.map((p, i) => ({ ...p, number: i + 1 }));
export const rightPins: Pin[] = rightFlat.map((p, i) => ({ ...p, number: total - i }));

export const groupOrder: StackGroup[] = ["backend", "frontend", "mobile", "data", "cloud", "cms"];

export const pinRange = (group: StackGroup) => {
  const nums = [...leftPins, ...rightPins].filter((p) => p.group === group).map((p) => p.number);
  return { from: Math.min(...nums), to: Math.max(...nums), count: nums.length };
};

export const PART_NUMBER = "APP-2021";
