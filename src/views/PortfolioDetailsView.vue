<template>
  <div class="portfolio-detail-page section">
    <div class="container">
      <router-link to="/portfolio" class="back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Portfolio
      </router-link>

      <div v-if="project" class="detail-content">
        <SectionTitle :title="project.title" :subtitle="project.category" badge="Project" />
        
        <div class="detail-grid">
          <div class="detail-media">
            <div class="detail-image-placeholder">
              <component :is="project.icon" />
            </div>
            <div class="tech-badges">
              <span v-for="tag in project.tags" :key="tag" class="tech-badge">{{ tag }}</span>
            </div>
          </div>

          <div class="detail-info">
              <div class="detail-meta">
                <div class="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <span>{{ project.date }}</span>
                </div>
                <div class="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c6 3 10 0 12-2v-5"/></svg>
                  <span>{{ project.category }}</span>
                </div>
                <span class="detail-type-badge" :class="project.type.toLowerCase()">{{ project.type }}</span>
              </div>

            <h3 class="detail-description-title">Project Overview</h3>
            <p class="detail-description">{{ project.description }}</p>

            <h3 class="detail-features-title">Key Highlights</h3>
            <ul class="detail-features">
              <li v-for="(feature, i) in project.features" :key="i">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div v-else class="not-found">
        <h2>Project not found</h2>
        <router-link to="/portfolio" class="btn btn-primary">View All Projects</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SectionTitle from '../components/SectionTitle.vue'

const route = useRoute()
const projectId = computed(() => parseInt(route.params.id))

const projects = [
  { id: 1, title: 'Capstone Web Application', category: 'Web Development', type: 'Academic', icon: { template: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' }, tags: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'], date: '2024', description: 'A full-stack web application developed as part of my BSIT capstone project. Built with modern web technologies to solve a real-world problem, this project demonstrates proficiency in frontend and backend development, database integration, and user experience design.', features: ['Responsive design for all devices', 'User authentication and authorization', 'Database integration with CRUD operations', 'Clean and intuitive user interface', 'Comprehensive documentation'] },
  { id: 2, title: 'AR Learning Application', category: 'Mobile Apps', type: 'Academic', icon: { template: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' }, tags: ['Unity 3D', 'AR Foundation', 'Vuforia', 'C#'], date: '2024', description: 'An augmented reality mobile application built with Unity 3D and AR Foundation. This project explores the intersection of education and emerging technology, creating immersive learning experiences through AR.', features: ['Marker-based AR object detection', 'Interactive 3D model viewing', 'Cross-platform deployment', 'Performance-optimized rendering', 'User-friendly interface'] },
  { id: 3, title: 'System Interface Design', category: 'UI/UX Design', type: 'Academic', icon: { template: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.4 1.5-1.5 0-.3-.1-.6-.4-.9-.3-.3-.5-.7-.5-1.1 0-1.1.9-2 2-2h2.5c3.3 0 6-2.7 6-6 0-4.5-4.5-7.5-10-7.5z"/></svg>' }, tags: ['Figma', 'Canva', 'Wireframing', 'Prototyping'], date: '2023', description: 'A comprehensive UI/UX design project for a system interface. Using Figma and Canva, I created wireframes, high-fidelity mockups, and interactive prototypes following HCI principles and user-centered design.', features: ['User flow diagrams and wireframes', 'High-fidelity mockups', 'Interactive clickable prototype', 'Design system and component library', 'Usability testing documentation'] },
  { id: 4, title: 'Database Management System', category: 'Systems', type: 'Academic', icon: { template: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' }, tags: ['MySQL', 'Database Design', 'SQL', 'ERD'], date: '2023', description: 'A relational database management system designed and implemented using MySQL. This project involved creating an efficient database schema, writing complex queries, and ensuring data integrity and performance.', features: ['Normalized database schema', 'Complex SQL queries and joins', 'Stored procedures and triggers', 'Data backup and recovery plan', 'Performance optimization'] },
  { id: 5, title: 'OJT Web Solutions', category: 'Web Development', type: 'Academic', icon: { template: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>' }, tags: ['Web Dev', 'PHP', 'JavaScript', 'WordPress'], date: '2023', description: 'Web development projects completed during my On-the-Job Training at MyVirtual Learning. Gained practical experience in building and maintaining web-based solutions for real clients.', features: ['Content management system integration', 'Responsive frontend development', 'API integration and testing', 'Website maintenance and updates', 'Technical documentation'] },
  { id: 6, title: 'Android Mobile Application', category: 'Mobile Apps', type: 'Academic', icon: { template: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/></svg>' }, tags: ['Kotlin', 'Android Studio', 'XML', 'Mobile Dev'], date: '2022', description: 'An Android mobile application developed using Kotlin and Android Studio. This project demonstrates proficiency in native Android development, including activity lifecycle, UI components, and data persistence.', features: ['Native Android UI with Material Design', 'Data persistence with SQLite', 'Activity and fragment management', 'Network connectivity handling', 'APK packaging and deployment'] },
  { id: 7, title: 'Shotool', category: 'Mobile Apps', type: 'Personal', icon: { template: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' }, tags: ['Ionic Vue', 'Nuxt 4', 'TypeScript', 'Capacitor'], date: '2025-2026', description: 'A full-stack mobile application built with Ionic Vue, Nuxt 4, and TypeScript. Features authentication flows, OTP verification, protected routes, and a mobile-first design system.', features: ['Ionic Vue cross-platform mobile UI', 'Authentication with OTP verification', 'Protected route navigation', 'Responsive mobile-first design', 'Pinia state management'] },
  { id: 8, title: 'codED Portfolio', category: 'Web Development', type: 'Personal', icon: { template: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' }, tags: ['Vue 3', 'TypeScript', 'Vite', 'Vue Router'], date: '2025-2026', description: 'A modern portfolio website built with Vue 3, TypeScript, and Vite. Features a clean minimalist design with smooth page transitions, responsive layout, and comprehensive project showcase.', features: ['Vue 3 Composition API with TypeScript', 'Smooth page transitions and animations', 'Responsive design across all devices', 'Project filtering and categorization', 'Interactive UI components'] },
  { id: 9, title: 'memory-game', category: 'Web Development', type: 'Personal', icon: { template: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z"/></svg>' }, tags: ['TypeScript', 'Vue', 'Vite', 'GitHub Pages'], date: '2025', description: 'An interactive memory card game built with TypeScript and Vue. Features smooth card flip animations, match tracking, and responsive design — deployed live on GitHub Pages.', features: ['Card matching mechanics with flip animations', 'Score and attempt tracking', 'Responsive mobile-friendly layout', 'GitHub Pages deployment', 'Pure TypeScript logic'] },
]

const project = computed(() => projects.find(p => p.id === projectId.value))

const SvgComponents = {}
</script>

<style scoped>
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
  transition: color var(--transition-base);
}

.back-link:hover {
  color: var(--color-primary);
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.detail-image-placeholder {
  width: 100%;
  aspect-ratio: 16/10;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.tech-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-badge {
  padding: 0.3rem 0.75rem;
  background: rgba(220, 38, 38, 0.1);
  color: var(--color-primary);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
}

.detail-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.meta-item svg {
  color: var(--color-primary);
}

.detail-type-badge {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
}

.detail-type-badge.personal {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.detail-type-badge.academic {
  background: rgba(220, 38, 38, 0.1);
  color: var(--color-primary);
}

.detail-description-title,
.detail-features-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.detail-description {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.detail-features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.detail-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.detail-features li svg {
  color: var(--color-primary);
  min-width: 16px;
  margin-top: 3px;
}

.not-found {
  text-align: center;
  padding: 4rem 0;
}

.not-found h2 {
  margin-bottom: 1.5rem;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
