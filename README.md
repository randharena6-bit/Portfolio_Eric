# Portfolio ERIC.DEV

Portfolio personnel haut de gamme pour Eric - Développeur Full Stack & AI Engineering.

## Technologies

- [React](https://react.dev/) - Bibliothèque UI
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Vite](https://vitejs.dev/) - Outil de build
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icônes

## Installation

### Prérequis
- Node.js (v18 ou supérieur)
- npm

### Étapes

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

## Personnalisation

### 1. Informations personnelles
Modifiez le fichier `src/data/profile.ts` pour mettre à jour vos informations :

```typescript
export const profile = {
  name: "Votre nom",
  brand: "VOTRE.MARQUE",
  title: "Votre titre",
  // ...
  contact: {
    email: "votre.email@exemple.com",
    github: "https://github.com/votre-username",
    linkedin: "https://linkedin.com/in/votre-username",
    cv: "lien-vers-votre-cv.pdf",
  },
}
```

### 2. Ajouter des projets
Modifiez le fichier `src/data/projects.ts` :

```typescript
{
  id: "mon-projet",
  name: "Nom du projet",
  category: "Full Stack",
  description: "Description courte",
  longDescription: "Description détaillée",
  technologies: ["React", "Node.js"],
  features: ["Fonctionnalité 1", "Fonctionnalité 2"],
  demoUrl: "https://demo.exemple.com", // ou undefined
  githubUrl: "https://github.com/...", // ou undefined
  status: "termine", // "en-cours" | "prototype" | "termine" | "a-venir"
}
```

### 3. Modifier les compétences
Modifiez le fichier `src/data/skills.ts`. Changez le statut :
- `used` - Utilisé dans des projets
- `learning` - En cours d'apprentissage  
- `explore` - À explorer

### 4. Ajouter votre CV
1. Placez votre fichier CV dans le dossier `public/` (ex: `cv.pdf`)
2. Mettez à jour l'URL dans `src/data/profile.ts` : `cv: "/cv.pdf"`

### 5. Formulaire de contact
Le formulaire frontend nécessite une intégration avec un service de formulaire. Options recommandées :
- [Formspree](https://formspree.io/) - Gratuit et simple
- [EmailJS](https://www.emailjs.com/) - Envoi direct depuis le navigateur
- [Netlify Forms](https://www.netlify.com/products/forms/) - Si hébergé sur Netlify

Ajoutez l'intégration dans `src/sections/Contact.tsx`.

## Déploiement

### Vercel (Recommandé)
1. Poussez votre code sur GitHub
2. Connectez votre repository à [Vercel](https://vercel.com/)
3. Vercel détectera automatiquement Vite et configurera le build
4. Déployez

Commandes de build :
```bash
npm run build
```

Le dossier `dist/` contiendra les fichiers prêts pour la production.

## Structure du projet

```
src/
├── assets/       # Ressources statiques
├── components/   # Composants réutilisables
├── data/         # Données configurables
├── hooks/        # Hooks personnalisés
├── lib/          # Utilitaires
├── sections/     # Sections de la page
├── App.tsx       # Composant principal
├── main.tsx      # Point d'entrée
└── index.css     # Styles globaux
```

## Éléments à configurer

- [ ] Adresse e-mail dans `src/data/profile.ts`
- [ ] URL GitHub dans `src/data/profile.ts`
- [ ] URL LinkedIn dans `src/data/profile.ts`
- [ ] CV dans `public/` et URL dans `src/data/profile.ts`
- [ ] Projets réels avec liens GitHub/démo
- [ ] Intégration du formulaire de contact
- [ ] Favicon personnalisé

## Notes

- Le portfolio présente Eric comme étudiant en formation, sans prétendre d'expérience professionnelle.
- Les projets sont présentés comme prototypes/en cours si non terminés.
- Le design respecte les préférences `prefers-reduced-motion`.
- Entièrement responsive (mobile, tablette, desktop).
