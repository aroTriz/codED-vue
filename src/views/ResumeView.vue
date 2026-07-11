<template>
  <div class="resume-page section">
    <div class="container">
      <SectionTitle title="Resume" subtitle="My education, experience, and skills that shape who I am as an IT professional." badge="Background" />

      <div class="resume-grid">
        <!-- Left Column: Education -->
        <div class="resume-column" ref="eduRef">
          <div class="resume-column-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c6 3 10 0 12-2v-5"/></svg>
            <h3>Education</h3>
          </div>

          <div v-for="(edu, index) in education" :key="index" class="resume-item" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="resume-item-dot"></div>
            <div class="resume-item-content">
              <div class="resume-item-header">
                <span class="resume-year">{{ edu.year }}</span>
                <h4 class="resume-item-title">{{ edu.degree }}</h4>
              </div>
              <p class="resume-institution">{{ edu.school }}</p>
              <p class="resume-description">{{ edu.description }}</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Experience -->
        <div class="resume-column" ref="expRef">
          <div class="resume-column-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
            <h3>Experience</h3>
          </div>

          <div v-for="(exp, index) in experience" :key="index" class="resume-item" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="resume-item-dot"></div>
            <div class="resume-item-content">
              <div class="resume-item-header">
                <span class="resume-year">{{ exp.year }}</span>
                <h4 class="resume-item-title">{{ exp.role }}</h4>
              </div>
              <p class="resume-institution">{{ exp.company }}</p>
              <ul class="resume-bullets">
                <li v-for="(item, i) in exp.bullets" :key="i">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Section -->
      <div class="projects-section" ref="projectsRef">
        <div class="projects-section-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          <h3>Projects</h3>
          <span class="projects-count">{{ projects.length }} total</span>
        </div>

        <div class="projects-filters">
          <button
            v-for="filter in projectFilters"
            :key="filter.key"
            class="project-filter-btn"
            :class="{ active: activeProjectFilter === filter.key }"
            @click="activeProjectFilter = filter.key"
          >
            {{ filter.label }}
          </button>
        </div>

        <div class="projects-grid">
          <div v-for="(project, index) in filteredProjects" :key="project.id" class="project-card" :style="{ animationDelay: `${index * 0.05}s` }">
            <div class="project-card-header">
              <div class="project-icon">
                <component :is="project.icon" />
              </div>
              <div class="project-meta">
                <span class="project-type" :class="project.type">{{ project.typeLabel }}</span>
                <span class="project-year">{{ project.year }}</span>
              </div>
            </div>
            <h4 class="project-title">{{ project.title }}</h4>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-techs">
              <span v-for="tech in project.techs" :key="tech" class="project-tech">{{ tech }}</span>
            </div>
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" class="project-link" title="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>Repo</span>
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link" title="Live Demo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                <span>Live</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Professional Skills -->
      <div class="skills-section" ref="skillsRef">
        <div class="skills-section-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          <h3>Professional Skills</h3>
        </div>
        <div class="skills-bars">
          <div v-for="(skill, index) in professionalSkills" :key="index" class="skill-bar-item">
            <div class="skill-bar-header">
              <span class="skill-bar-name">{{ skill.name }}</span>
              <span class="skill-bar-percent">{{ skill.percent }}%</span>
            </div>
            <div class="skill-bar-track">
              <div class="skill-bar-fill" :style="{ width: '0%' }" :data-target="skill.percent" ref="barRefs"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'

const education = [
  { year: '2008 - 2014', degree: 'Primary Education', school: 'Baguio Higher Ground Christian School', description: 'Completed elementary education with a strong foundation in academics and values formation.' },
  { year: '2014 - 2016', degree: 'Junior High School', school: 'Baguio Higher Ground Christian School', description: 'Built foundational knowledge in mathematics, sciences, and technology.' },
  { year: '2016 - 2019', degree: 'Senior High School', school: 'University of the Cordilleras', description: 'Focused on the STEM strand, preparing for a career in technology and engineering.' },
  { year: '2019 - 2024', degree: 'BS Information Technology', school: 'Saint Louis University, Baguio', description: 'Graduated with a Bachelor of Science in Information Technology. Gained comprehensive knowledge in software development, networking, database management, and emerging technologies.' },
]

const experience = [
  { year: '2023', role: 'On-the-Job Trainee', company: 'MyVirtual Learning', bullets: ['Applied academic knowledge in a real-world IT environment', 'Assisted in system administration and maintenance tasks', 'Gained hands-on experience with web technologies and database management'] },
  { year: '2021 - 2024', role: 'Academic Project Developer', company: 'Saint Louis University', bullets: ['Developed capstone projects using various programming languages and frameworks', 'Built AR/VR applications using Unity 3D and AR Foundation', 'Created full-stack web applications as part of coursework', 'Collaborated with team members on software development projects'] },
  { year: '2022 - Present', role: 'Freelance Developer', company: 'Self-employed', bullets: ['Developed small web projects for local clients', 'Designed and implemented responsive websites', 'Provided maintenance and technical support services'] },
]

const professionalSkills = [
  { name: 'Frontend Development', percent: 85 },
  { name: 'Backend Development', percent: 75 },
  { name: 'UI/UX Design', percent: 80 },
  { name: 'Database Management', percent: 75 },
  { name: 'System Administration', percent: 70 },
]

// SVG icon components for projects
const CodeIcon = { template: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' }
const SmartphoneIcon = { template: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' }
const GameIcon = { template: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z"/></svg>' }
const PaletteIcon = { template: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.4 1.5-1.5 0-.3-.1-.6-.4-.9-.3-.3-.5-.7-.5-1.1 0-1.1.9-2 2-2h2.5c3.3 0 6-2.7 6-6 0-4.5-4.5-7.5-10-7.5z"/></svg>' }
const DatabaseIcon = { template: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' }
const LayersIcon = { template: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>' }
const GlobeIcon = { template: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>' }
const FolderIcon = { template: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>' }
const BuildIcon = { template: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>' }

const activeProjectFilter = ref('all')

const projectFilters = [
  { key: 'all', label: 'All Projects' },
  { key: 'personal', label: 'Personal' },
  { key: 'academic', label: 'Academic' },
]

const projects = [
  // === PERSONAL PROJECTS (GitHub / Cloudflare-hosted) ===
  {
    id: 1,
    title: 'Shotool',
    description: 'Full-stack mobile application built with Ionic Vue, Nuxt 4, and TypeScript. Features authentication flows, OTP verification, protected routes, and a responsive mobile-first design system with Tailwind CSS.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2025 - 2026',
    techs: ['Nuxt 4', 'Ionic Vue', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Capacitor'],
    icon: SmartphoneIcon,
    github: 'https://github.com/EddysonA15/Shotool',
    demo: ''
  },
  {
    id: 2,
    title: 'codED-vue',
    description: 'Modern portfolio website built with Vue 3, TypeScript, and Vite. Features a clean, minimalist design with smooth animations, responsive layout, and a project showcase with filtering capabilities.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2025 - 2026',
    techs: ['Vue 3', 'TypeScript', 'Vite', 'Vue Router', 'CSS Animations'],
    icon: CodeIcon,
    github: 'https://github.com/EddysonA15/codED',
    demo: 'https://eddysona15.github.io/codED/'
  },
  {
    id: 3,
    title: 'codED (HTML)',
    description: 'Original portfolio website deployed via GitHub Pages using Bootstrap 5. Features a comprehensive personal brand showcase with sections for services, portfolio, resume, and contact.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2025',
    techs: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'GitHub Pages'],
    icon: GlobeIcon,
    github: 'https://github.com/EddysonA15/codED',
    demo: 'https://eddysona15.github.io/codED/'
  },
  {
    id: 4,
    title: 'memory-game',
    description: 'Interactive memory card game built with TypeScript and Vue. Test your memory by matching pairs of cards with smooth flip animations and score tracking.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2025',
    techs: ['TypeScript', 'Vue', 'Vite', 'CSS Animations', 'GitHub Pages'],
    icon: GameIcon,
    github: 'https://github.com/EddysonA15/memory-game',
    demo: 'https://eddysona15.github.io/memory-game/'
  },
  {
    id: 5,
    title: 'Aromin-github-portfolio',
    description: 'Early portfolio website hosted on GitHub Pages showcasing foundational web development skills with a clean card-based layout and responsive design.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2025',
    techs: ['HTML5', 'CSS3', 'GitHub Pages', 'Responsive Design'],
    icon: FolderIcon,
    github: 'https://github.com/EddysonA15/Aromin-github-portfolio',
    demo: 'https://eddysona15.github.io/Aromin-github-portfolio/'
  },
  {
    id: 6,
    title: 'Shotool-Admin',
    description: 'Administrative dashboard scaffold for the Shotool platform. Designed as a companion admin interface for managing users, content, and system settings.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2026',
    techs: ['Vue', 'Admin Dashboard', 'Scaffold'],
    icon: BuildIcon,
    github: 'https://github.com/EddysonA15/Shotool-Admin',
    demo: ''
  },
  {
    id: 7,
    title: 'STracker',
    description: 'Project scaffold and development playground for exploring new technologies and architectural patterns.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2026',
    techs: ['Scaffold', 'Playground'],
    icon: FolderIcon,
    github: 'https://github.com/EddysonA15/STracker',
    demo: ''
  },
  {
    id: 8,
    title: 'Tracker',
    description: 'Project scaffold for a tracking application, serving as a foundation for future feature development.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2026',
    techs: ['Scaffold', 'Playground'],
    icon: FolderIcon,
    github: 'https://github.com/EddysonA15/Tracker',
    demo: ''
  },
  {
    id: 9,
    title: 'Ana',
    description: 'Project playground for experimenting with new frameworks, libraries, and development concepts.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2026',
    techs: ['Playground'],
    icon: FolderIcon,
    github: 'https://github.com/EddysonA15/Ana',
    demo: ''
  },
  {
    id: 10,
    title: 'Fank',
    description: 'Project playground for testing and prototyping new ideas in web development.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2026',
    techs: ['Playground'],
    icon: FolderIcon,
    github: 'https://github.com/EddysonA15/Fank',
    demo: ''
  },
  {
    id: 11,
    title: 'Tan',
    description: 'Project playground for exploring web technologies and development workflows.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2026',
    techs: ['Playground'],
    icon: FolderIcon,
    github: 'https://github.com/EddysonA15/Tan',
    demo: ''
  },
  {
    id: 12,
    title: 'Try',
    description: 'Project playground for quick experiments and proof-of-concept development.',
    type: 'personal',
    typeLabel: 'Personal Project',
    year: '2026',
    techs: ['Playground'],
    icon: FolderIcon,
    github: 'https://github.com/EddysonA15/Try',
    demo: ''
  },

  // === ACADEMIC PROJECTS ===
  {
    id: 13,
    title: 'Capstone Web Application',
    description: 'Full-stack web application developed as a BSIT capstone project. Features user authentication, CRUD operations, responsive design, and database integration solving a real-world problem.',
    type: 'academic',
    typeLabel: 'Academic Project',
    year: '2024',
    techs: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'Responsive Design'],
    icon: CodeIcon,
    github: '',
    demo: ''
  },
  {
    id: 14,
    title: 'AR Learning Application',
    description: 'Augmented reality mobile application built with Unity 3D and AR Foundation. Features marker-based object detection, interactive 3D model viewing, and cross-platform deployment for educational purposes.',
    type: 'academic',
    typeLabel: 'Academic Project',
    year: '2024',
    techs: ['Unity 3D', 'AR Foundation', 'Vuforia', 'C#', 'Mobile'],
    icon: SmartphoneIcon,
    github: '',
    demo: ''
  },
  {
    id: 15,
    title: 'System Interface Design',
    description: 'Comprehensive UI/UX design project featuring wireframes, high-fidelity mockups, and interactive prototypes following HCI principles and user-centered design methodology.',
    type: 'academic',
    typeLabel: 'Academic Project',
    year: '2023',
    techs: ['Figma', 'Canva', 'Wireframing', 'Prototyping', 'HCI'],
    icon: PaletteIcon,
    github: '',
    demo: ''
  },
  {
    id: 16,
    title: 'Database Management System',
    description: 'Relational database management system designed and implemented with MySQL. Includes normalized schema design, complex queries, stored procedures, triggers, and performance optimization.',
    type: 'academic',
    typeLabel: 'Academic Project',
    year: '2023',
    techs: ['MySQL', 'SQL', 'ERD Design', 'Stored Procedures', 'Optimization'],
    icon: DatabaseIcon,
    github: '',
    demo: ''
  },
  {
    id: 17,
    title: 'OJT Web Solutions',
    description: 'Web development projects completed during On-the-Job Training at MyVirtual Learning. Gained practical experience building and maintaining web solutions for real clients.',
    type: 'academic',
    typeLabel: 'Academic Project',
    year: '2023',
    techs: ['PHP', 'JavaScript', 'WordPress', 'CMS', 'Web Dev'],
    icon: LayersIcon,
    github: '',
    demo: ''
  },
  {
    id: 18,
    title: 'Android Mobile Application',
    description: 'Native Android application developed with Kotlin and Android Studio. Demonstrates proficiency in Material Design, activity lifecycle, SQLite persistence, and APK deployment.',
    type: 'academic',
    typeLabel: 'Academic Project',
    year: '2022',
    techs: ['Kotlin', 'Android Studio', 'XML', 'SQLite', 'Material Design'],
    icon: BuildIcon,
    github: '',
    demo: ''
  },
]

const filteredProjects = computed(() => {
  if (activeProjectFilter.value === 'all') return projects
  return projects.filter(p => p.type === activeProjectFilter.value)
})

const eduRef = ref(null)
const expRef = ref(null)
const projectsRef = ref(null)
const skillsRef = ref(null)
const barRefs = ref([])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  if (eduRef.value) observer.observe(eduRef.value)
  if (expRef.value) observer.observe(expRef.value)
  if (projectsRef.value) observer.observe(projectsRef.value)
  if (skillsRef.value) observer.observe(skillsRef.value)

  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-bar-fill')
        bars.forEach(bar => {
          const target = parseInt(bar.dataset.target)
          setTimeout(() => {
            bar.style.width = target + '%'
          }, 300)
        })
        skillsObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })

  if (skillsRef.value) skillsObserver.observe(skillsRef.value)
})
</script>

<style scoped>
.resume-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.resume-column {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.resume-column.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.resume-column-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(220, 38, 38, 0.2);
}

.resume-column-header svg {
  color: var(--color-primary);
}

.resume-column-header h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text);
}

.resume-item {
  position: relative;
  padding-left: 1.5rem;
  padding-bottom: 2rem;
  border-left: 2px solid var(--color-border);
  margin-left: 0.5rem;
  opacity: 0;
  animation: slideUp 0.5s ease forwards;
}

.resume-item:last-child {
  border-left-color: transparent;
  padding-bottom: 0;
}

.resume-item-dot {
  position: absolute;
  left: -6px;
  top: 4px;
  width: 10px;
  height: 10px;
  background: var(--color-primary);
  border-radius: 50%;
  z-index: 1;
}

.resume-year {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  background: rgba(220, 38, 38, 0.1);
  color: var(--color-primary);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.resume-item-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.resume-institution {
  font-size: 0.9rem;
  color: var(--color-primary-light);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.resume-description {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.resume-bullets {
  margin-top: 0.5rem;
}

.resume-bullets li {
  position: relative;
  padding-left: 1.2rem;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.resume-bullets li::before {
  content: '\203A';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.1rem;
}

.skills-section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.skills-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.skills-section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.skills-section-header svg {
  color: var(--color-primary);
}

.skills-section-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
}

.skills-bars {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.skill-bar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-bar-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
}

.skill-bar-percent {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary);
}

.skill-bar-track {
  height: 8px;
  background: var(--color-surface-lighter);
  border-radius: 4px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
  border-radius: 4px;
  transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Projects Section */
.projects-section {
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.projects-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.projects-section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(220, 38, 38, 0.2);
}

.projects-section-header svg {
  color: var(--color-primary);
}

.projects-section-header h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text);
}

.projects-count {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  background: var(--color-surface);
  padding: 0.15rem 0.6rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  margin-left: auto;
}

.projects-filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.project-filter-btn {
  padding: 0.4rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-base);
}

.project-filter-btn:hover {
  border-color: rgba(220, 38, 38, 0.3);
  color: var(--color-text);
}

.project-filter-btn.active {
  background: rgba(220, 38, 38, 0.15);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  transition: all var(--transition-base);
  opacity: 0;
  animation: slideUp 0.4s ease forwards;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: rgba(220, 38, 38, 0.25);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(220, 38, 38, 0.06);
}

.project-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.project-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 38, 38, 0.08);
  border-radius: var(--radius-md);
  color: var(--color-primary);
}

.project-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}

.project-type {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-sm);
}

.project-type.personal {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.project-type.academic {
  background: rgba(220, 38, 38, 0.1);
  color: var(--color-primary);
}

.project-year {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

.project-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.4rem;
}

.project-desc {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: 0.75rem;
  flex: 1;
}

.project-techs {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.project-tech {
  padding: 0.1rem 0.45rem;
  background: rgba(220, 38, 38, 0.06);
  color: var(--color-text-muted);
  border-radius: var(--radius-sm);
  font-size: 0.65rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 0.6rem;
  margin-top: auto;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--color-text-muted);
  padding: 0.25rem 0.6rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition: all var(--transition-base);
  text-decoration: none;
}

.project-link:hover {
  color: var(--color-primary);
  border-color: rgba(220, 38, 38, 0.3);
  background: rgba(220, 38, 38, 0.04);
}

.project-link svg {
  width: 14px;
  height: 14px;
}

@media (max-width: 768px) {
  .resume-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
