export interface Skill {
  name: string
  icon?: string
  status: "used" | "learning" | "explore"
}

export interface SkillGroup {
  title: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", status: "used" },
      { name: "CSS", status: "used" },
      { name: "JavaScript", status: "used" },
      { name: "React", status: "used" },
      { name: "TypeScript", status: "learning" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", status: "learning" },
      { name: "Express", status: "learning" },
    ],
  },
  {
    title: "Langages",
    skills: [
      { name: "Python", status: "used" },
      { name: "Java", status: "learning" },
      { name: "JavaScript", status: "used" },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      { name: "PostgreSQL", status: "learning" },
      { name: "SQLite", status: "used" },
    ],
  },
  {
    title: "Intelligence Artificielle",
    skills: [
      { name: "NumPy", status: "learning" },
      { name: "pandas", status: "learning" },
      { name: "scikit-learn", status: "learning" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", status: "learning" },
      { name: "Flutter", status: "explore" },
    ],
  },
  {
    title: "Outils",
    skills: [
      { name: "Git", status: "used" },
      { name: "GitHub", status: "used" },
      { name: "Linux", status: "used" },
      { name: "Docker", status: "explore" },
    ],
  },
]
