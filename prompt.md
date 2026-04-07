## Prompt

**Role**: You are an expert Creative Developer specializing in high-end, game-inspired Web UI/UX.

**Objective**: Rebuild my personal portfolio from scratch using a **Persona 3 Reload (P3R)** aesthetic. The site must feel like a premium game interface, with dynamic animations, slanted geometry, and a vibrant Blue/White/Black color palette.

### 🎨 Design System (Persona 3 Reload Style)

- **Palette**:
  - Primary: `#00A1F1` (Vibrant P3 Blue)
  - Secondary: `#FFFFFF` and `#000000`
  - Accents: `#F0F0F0` (Off-white), `#222222` (Dark gray)
- **Typography**: Bold, sans-serif fonts (e.g., *Inter*, *Outfit*, or *Bebas Neue*). Use italics and varying font weights to create hierarchy.
- **Shapes**:
  - Use **slanted panels** (skewed by 5-10 degrees).
  - Overlapping "paper-cut" or "shattered glass" layers.
  - Circular elements for the main navigation menu.
- **Background**: A deep blue gradient with moving "glass shards" or subtle "water ripple" effects (prefer CSS animations or a light Canvas effect).
- **Animations**:
  - **Snappy Transitions**: Pages should slide in with a "speed line" effect or a "shatter" transition.
  - **Hover Effects**: Elements should "jump" or expand with a sharp, elastic easing function.
  - **Cut-ins**: Use "All-Out Attack" style cut-ins for section titles or project highlights.

### 🛠️ Technical Stack

- **Framework**: Next.js 14+ (App Router) - chosen for its performance and routing.
- **Styling**: Vanilla CSS or CSS Modules (to easily handle complex clip-paths and transforms).
- **Animations**: Framer Motion (essential for the P3R feel).
- **Icons**: Lucide React + React Icons.

### 📂 Content to Migrate

#### 1. About / Operator Profile

- **Bio**: "Développeur, designer et animateur 2D. Créateur de sites web, d'animations 2D, de vidéos et de projets de jeux vidéo. Mon but est de créer des contenus de qualité avec un design moderne et professionnel."
- **Status**: ACTIVE | Clearance: FULL ACCESS | Availability: IMMEDIATE.
- **Skills**: React, JavaScript, CSS, Node.js, Python, Git, GDScript, C++, C#, PowerShell, GLSL, Rust.
- **Timeline**:
  - 2026: App Dev (C#/C++/Python...), Shader Dev (GLSL), Game Dev (Godot).
  - 2025: Advanced Web (React/JS).
  - 2024: Web Foundations (HTML/CSS).
  - 2023: Discord Bot Development.

#### 2. Projects (Mission Archive)

[
  { name: 'VERSUSITE', desc: 'Tournament bracket creator', tech: ['React', 'JS', 'CSS'], completion: 95 },
  { name: 'POKEDEXIA', desc: 'Beautiful Pokédex app', tech: ['JS', 'HTML', 'CSS'], completion: 100 },
  { name: 'PORTFOLIO R.E.P.O.', desc: 'Tactical UI Portfolio', tech: ['React', 'Framer', 'CSS'], completion: 100 },
  { name: 'CLIMBING GAMBLING', desc: 'Godot Climbing Game', tech: ['Godot', 'GDScript'], completion: 10 },
  { name: 'OFFSHADES', desc: 'Minecraft Shaders', tech: ['GLSL'], completion: 30 },
  { name: 'OSMV Series', desc: 'OBS Music Visualizers & Site', tech: ['Rust', 'C#', 'JS', 'HTML'], completion: 100 },
  { name: 'ani-cli-fr', desc: 'Anime CLI fork (FR sub/dub)', tech: ['Shell', 'Python'], completion: 100 },
  { name: 'Dark Patterns', desc: 'School project on UX ethics', tech: ['PHP', 'MySQL', 'JS'], completion: 100 },
  { name: 'antmap', desc: 'GPS using Ant Colony Optimization', tech: ['Rust'], completion: 100 }
]

#### 3. Socials

- Github (@Ulyxx3), Twitter (@Ulyxx31), Instagram (@ulyxx3), Pinterest, TikTok, Twitch, Discord, Youtube, Steam, Spotify, Bluesky, VGen, Backloggd, Ko-fi.

### ✨ NEW Section: Arts & Animation Archive

Add a dedicated section for visual works. Use a "Gallery" layout where each item has:

- **Image/Video URL**: (Placeholder link for now)
- **Title**: Project Name
- **Category**: (Drawing / 2D Animation / Motion Graphics)
- **Description**: Short context for each piece.
- **Design**: Use the P3R "Social Link" or "Compendium" style for this list. Large character/art cut-ins on hover.

### 📝 Instructions for Implementation

1. **Main Menu**: Create a vertical or circular menu inspired by the P3R command hub.
2. **State Management**: Use React state to handle page transitions without losing the "game state" feel.
3. **Responsive**: Ensure the slanted layout works on mobile (adjust skew angles if necessary).
4. **Interactive**: Add key-binding support (Arrows to navigate, Enter to select) just like a game menu.

**Initial Goal**: Produce the code for the main layout, the home screen, and the dynamic background with the transition logic first
