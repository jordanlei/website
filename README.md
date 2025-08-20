# Jordan Lei - Personal Website

A modern, responsive personal website built with Next.js showcasing my research, experience, and artwork. See demo at [jordanlei.com](https://jordanlei.com)

## 🚀 Features

- **Personal Portfolio**: Professional presentation of research, experience, and education
- **Research Showcase**: Detailed descriptions of neuroscience and machine learning projects
- **Art Gallery**: Portfolio of traditional and digital artwork
- **Responsive Design**: Mobile-first design with smooth parallax effects
- **Modern Tech Stack**: Built with Next.js, React, and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS, CSS Modules
- **UI Components**: Reactstrap, Bootstrap 5
- **Deployment**: Vercel-ready configuration

## 📁 Project Structure

```
website/
├── components/          # React components
│   ├── layout.js       # Main layout wrapper
│   ├── menu.js         # Navigation menu
│   ├── welcome.js      # Hero section with parallax
│   ├── about.js        # About section
│   ├── research.js     # Research projects
│   ├── experience.js   # Work experience
│   ├── education.js    # Education history
│   ├── contact.js      # Contact information
│   ├── parallax.js     # Parallax effect component
│   ├── gallery.js      # Image gallery component
│   └── lightbox-components/  # Image lightbox
├── pages/              # Next.js pages
│   ├── index.js        # Home page
│   └── art/            # Art portfolio page
├── public/             # Static assets
│   └── images/         # Images and logos
└── styles/             # CSS modules and global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Adding New Sections

1. Create a new component in the `components/` directory
2. Import and add it to `pages/index.js`
3. Add corresponding navigation link in `components/menu.js`

### Styling

- Global styles: `styles/global.css`
- Component-specific styles: `styles/[component].module.css`
- Tailwind CSS classes for utility styling

### Images

- Place images in `public/images/`
- Use Next.js `Image` component for optimization
- Support for various formats: JPG, PNG, SVG

## 📱 Responsive Design

The website is built with a mobile-first approach:
- Responsive navigation with dropdown menu for mobile
- Optimized image loading and display
- Touch-friendly interactions

## 🚀 Deployment

The project is configured for easy deployment on Vercel:
- Automatic builds on git push
- Optimized for Next.js
- Static asset optimization

## 📄 License

This project is private and proprietary.

## 👤 About Jordan Lei

Jordan Lei is a PhD Candidate in Neuroscience at New York University, studying planning and decision making in the brain. His research focuses on the intersection of neuroscience and deep learning, with expertise in reinforcement learning and cognitive modeling.

**Research Areas:**
- Neural mechanisms of planning
- Decision making under uncertainty
- Cognitive modeling in chess
- Visual attention and deep learning

**Contact:** jordanlei.work at gmail.com

---

Built with ❤️ using Next.js and modern web technologies.
