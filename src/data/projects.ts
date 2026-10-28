export type ProjectCategory = "Full Stack" | "Intelligence artificielle" | "Mobile" | "Data" | "Expérimentation" | "Développement web"

export interface Project {
  id: string
  name: string
  category: ProjectCategory
  description: string
  longDescription?: string
  technologies: string[]
  features?: string[]
  demoUrl?: string
  githubUrl?: string
  status: "en-cours" | "prototype" | "termine" | "a-venir"
  highlights?: string[]
}

export const projects: Project[] = [
  {
    id: "mitandrina",
    name: "MITANDRINA",
    category: "Intelligence artificielle",
    description: "Plateforme expérimentale d'analyse des risques et de visualisation de données relatives aux catastrophes naturelles.",
    longDescription: "Prototype exploratoire visant à analyser et visualiser des données relatives aux catastrophes naturelles. Ce projet constitue une expérimentation dans le domaine de l'IA appliquée à la gestion des risques.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Visualisation"],
    features: [
      "Visualisation cartographique",
      "Tableau de bord",
      "Analyse de données",
      "Expérimentation de modèles de machine learning",
      "Présentation de résultats et de leurs limites",
    ],
    status: "prototype",
  },
  {
    id: "fullstack-app",
    name: "Application Full Stack",
    category: "Développement web",
    description: "Application complète de gestion de données avec interface moderne, API et base de données.",
    longDescription: "Application web complète intégrant frontend, backend et base de données pour la gestion structurée de données.",
    technologies: ["React", "TypeScript", "Node.js", "API REST"],
    features: [
      "Gestion des données",
      "Recherche",
      "Filtres",
      "Formulaires",
      "Tableau de bord",
      "API REST",
    ],
    status: "en-cours",
  },
  {
    id: "mobile-app",
    name: "Application Mobile",
    category: "Mobile",
    description: "Application mobile développée dans un cadre d'apprentissage pour explorer les approches cross-platform.",
    technologies: ["React Native"],
    features: [
      "Interface utilisateur moderne",
      "Navigation",
      "Gestion d'état",
    ],
    status: "en-cours",
  },
  {
    id: "ml-project",
    name: "Projet Machine Learning",
    category: "Intelligence artificielle",
    description: "Application expérimentale utilisant un modèle de machine learning pour résoudre un problème défini.",
    longDescription: "Projet d'expérimentation en apprentissage automatique avec focus sur la méthodologie : problème, données, préparation, modèle, évaluation et limites.",
    technologies: ["Python", "scikit-learn", "NumPy", "pandas"],
    features: [
      "Analyse du problème étudié",
      "Préparation et exploration des données",
      "Entraînement de modèle",
      "Métriques d'évaluation",
      "Analyse des limites",
    ],
    status: "en-cours",
  },
]
