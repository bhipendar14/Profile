# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌙 Dark/Light theme toggle
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 14
- 🎨 Smooth animations with Framer Motion
- 📧 Contact form with email functionality
- 🎓 Education and certification showcase
- 💼 Project portfolio with live demos
- 🛠️ Skills section with interactive elements

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
Create a `.env.local` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── header.tsx         # Navigation header
│   ├── hero-section.tsx   # Hero section
│   ├── about-section.tsx  # About section
│   ├── skills-section.tsx # Skills showcase
│   ├── projects-section.tsx # Projects portfolio
│   ├── flutter-section.tsx # Flutter certifications
│   ├── education-section.tsx # Education & certifications
│   ├── contact-section.tsx # Contact form
│   └── theme-toggle.tsx   # Theme switcher
├── public/               # Static assets
├── styles/              # Global styles
└── lib/                 # Utility functions
```

## Sections

### Hero Section
- Introduction and call-to-action
- Animated text and buttons
- Professional photo

### About Section
- Personal background
- Professional summary
- Key highlights

### Skills Section
- Technical skills with progress bars
- Categorized by expertise level
- Interactive hover effects

### Projects Section
- Featured projects with descriptions
- Live demo links
- GitHub repository links
- Technology stack used

### Flutter Section
- Flutter certifications
- Certificate downloads
- Skills and achievements

### Education Section
- Academic background
- Professional certifications
- Timeline layout

### Contact Section
- Contact form with email functionality
- Social media links
- Professional contact information

## Email Setup

To enable the contact form email functionality:

1. Enable 2-Step Verification on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. Add the credentials to `.env.local`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

## Deployment

The project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Next.js framework
3. Environment variables will need to be added in Vercel dashboard
4. Deploy with the following settings:
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: Next.js default
   - **Install Command**: `npm install`

## Customization

### Adding New Projects
Edit `components/projects-section.tsx` and add new project objects to the `projects` array.

### Updating Skills
Edit `components/skills-section.tsx` and modify the `skills` array with your skills and proficiency levels.

### Changing Theme Colors
Modify the Tailwind configuration in `tailwind.config.ts` to customize the color scheme.

### Adding New Sections
Create new components in the `components/` directory and import them in `app/page.tsx`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, reach out through the contact form on the website or via email. 