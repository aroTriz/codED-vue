<template>
  <div class="about-page section">
    <div class="container">
      <SectionTitle title="About" subtitle="A BS Information Technology Fresh Graduate from Saint Louis University Baguio with hands-on experience from academic projects, seminars, and on-the-job training." badge="Who I Am" />

      <!-- Intro Section -->
      <div class="intro-section" ref="introRef">
        <div class="intro-grid">
          <div class="intro-image-col">
            <div class="intro-image-wrapper">
              <div class="image-glow"></div>
              <img :src="profileImg" alt="Eddyson Aromin" class="intro-image" />
            </div>
          </div>
          <div class="intro-text-col">
            <span class="intro-eyebrow">Hello there</span>
            <h2 class="intro-headline">Hi, I'm Eddyson - a passionate information technologist eager to start my professional career, continuously learn, grow, and contribute.</h2>
            <p class="intro-lead">I possess dynamic skills and knowledge in the field such as Software Development, Web Development, Database Management, System Administration, Data Analytics, Quality Assurance, and many more.</p>
            <p class="intro-text">I am open to onsite, hybrid, or remote roles and am willing to work overseas with or without visa sponsorship.</p>
            <div class="intro-actions">
              <router-link to="/portfolio" class="btn btn-ghost">
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </router-link>
              <a href="https://drive.google.com/file/d/1UZmrFQFgcn229_6EVd63Yw8fJgFoUHw0/view?usp=drive_link" target="_blank" class="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download Resume & CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Grid -->
      <div class="skills-section" ref="skillsRef">
        <h3 class="section-subheading">
          <span class="subheading-line"></span>
          Skills & Expertise
          <span class="subheading-line"></span>
        </h3>
        <div class="skills-grid">
          <div v-for="(skill, index) in skills" :key="index" class="skill-card" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="skill-icon">
              <component :is="skill.icon" />
            </div>
            <h4 class="skill-title">{{ skill.title }}</h4>
            <p class="skill-desc">{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <!-- Journey Timeline -->
      <div class="journey-section" ref="journeyRef">
        <h3 class="section-subheading">
          <span class="subheading-line"></span>
          My Journey
          <span class="subheading-line"></span>
        </h3>
        <div class="journey-timeline">
          <div v-for="(item, index) in journey" :key="index" class="journey-item" :style="{ animationDelay: `${index * 0.15}s` }">
            <div class="journey-dot">
              <div class="journey-dot-inner"></div>
            </div>
            <div class="journey-content">
              <span class="journey-year">{{ item.year }}</span>
              <h4 class="journey-title">{{ item.title }}</h4>
              <p class="journey-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quote -->
      <div class="quote-section" ref="quoteRef">
        <blockquote class="personal-quote">
          <svg class="quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <p class="quote-text">"Building clean and meaningful experiences through thoughtful code and quiet design."</p>
        </blockquote>
      </div>

      <!-- Fun Facts -->
      <div class="facts-section" ref="factsRef">
        <h3 class="section-subheading">
          <span class="subheading-line"></span>
          Fun Facts
          <span class="subheading-line"></span>
        </h3>
        <div class="facts-grid">
          <div v-for="(fact, index) in funFacts" :key="index" class="fact-pill" :style="{ animationDelay: `${index * 0.1}s` }">
            <component :is="fact.icon" />
            <span>{{ fact.label }}</span>
          </div>
        </div>
      </div>

      <!-- References -->
      <div class="references-section" ref="refsRef">
        <h3 class="section-subheading">
          <span class="subheading-line"></span>
          References
          <span class="subheading-line"></span>
        </h3>
        <div class="references-grid">
          <div v-for="(ref, index) in references" :key="index" class="reference-card">
            <div class="reference-content">
              <h4 class="ref-name">{{ ref.name }}</h4>
              <p v-for="(role, i) in ref.roles" :key="i" class="ref-role">{{ role }}</p>
              <a :href="'mailto:' + ref.email" class="ref-email">{{ ref.email }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'

const profileImg = '/images/profile/profile-square-11.webp'

const skills = [
  { icon: 'CodeSlash', title: 'Full-Stack Web Development', description: 'HTML, CSS, Javascript, PHP, Node JS, Wordpress, Joomla' },
  { icon: 'Terminal', title: 'Software Development & ML', description: 'C, C++, C#, Java, Python, Kotlin, Luau, Unity, Android Studio, SQL' },
  { icon: 'Layers', title: 'Emerging Technologies', description: 'Augmented Reality, Unity 3D, AR Foundation, Vuforia, 3D modelling, IoT' },
  { icon: 'Server', title: 'System Administration', description: 'User account management, Server setup, System security, Backup and recovery' },
  { icon: 'Database', title: 'Data Management', description: 'MySQL, CSV, XLSX' },
  { icon: 'Palette', title: 'Web Design', description: 'Figma, Canva, Bootstrap, UI/UX Principles, Wireframing, Prototyping' },
  { icon: 'FileText', title: 'Office Software', description: 'MS Word, Excel, PowerPoint, Google Sheets, Google Docs' },
  { icon: 'CheckCircle', title: 'Quality Assurance', description: 'Software testing, Test case creation, Bug tracking, Regression testing' },
]

const journey = [
  { year: '2018', title: 'Started at Saint Louis University', description: 'Began my BS Information Technology journey at SLU Baguio, building a strong foundation in computing and technology.' },
  { year: '2021', title: 'On-the-Job Training', description: 'Applied academic knowledge in real-world environments, gaining practical experience in software development and systems.' },
  { year: '2024', title: 'Graduated with BSIT Degree', description: 'Earned my Bachelor of Science in Information Technology, equipped with diverse skills across the tech landscape.' },
  { year: 'Present', title: 'Ready for Professional Career', description: 'Seeking opportunities to contribute, learn, and grow as an IT professional in a dynamic organization.' },
]

const funFacts = [
  { icon: 'Sparkles', label: 'Minimalism' },
  { icon: 'Headphones', label: 'Lo-fi Beats' },
  { icon: 'MapPin', label: 'City Walks' },
  { icon: 'Paintbrush', label: 'Sketching' },
]

const references = [
  { name: 'Lambert Famorca', roles: ['University Instructor (SLU)', 'Founder & System Administrator of MyVirtual Learning'], email: 'support@myvirtuallearning.org' },
  { name: 'Britanny Baldovino', roles: ['University Instructor (SLU)'], email: 'bmbaldovino@slu.edu.ph' },
]

// SVG Icon components
const CodeSlash = { template: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' }
const Terminal = { template: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>' }
const Layers = { template: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>' }
const Server = { template: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>' }
const Database = { template: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' }
const Palette = { template: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.4 1.5-1.5 0-.3-.1-.6-.4-.9-.3-.3-.5-.7-.5-1.1 0-1.1.9-2 2-2h2.5c3.3 0 6-2.7 6-6 0-4.5-4.5-7.5-10-7.5z"/></svg>' }
const FileText = { template: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>' }
const CheckCircle = { template: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' }
const Sparkles = { template: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z"/><line x1="18" y1="2" x2="18" y2="6"/><line x1="22" y1="4" x2="18" y2="4"/></svg>' }
const Headphones = { template: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>' }
const MapPin = { template: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' }
const Paintbrush = { template: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 00-2.82 0L8 7l9 9 1.59-1.59a2 2 0 000-2.82L17 10l4.37-4.37a2.12 2.12 0 10-3-3z"/><path d="M9 8c-2 3-4 4-6 4 2 0 4 2 4 4 0-2 2-4 4-6"/><path d="M8 12c2 2 3 4 3 6 0-2 2-4 4-6"/></svg>' }

const introRef = ref(null)
const skillsRef = ref(null)
const journeyRef = ref(null)
const quoteRef = ref(null)
const factsRef = ref(null)
const refsRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  const refs = [introRef, skillsRef, journeyRef, quoteRef, factsRef, refsRef]
  refs.forEach(r => { if (r.value) observer.observe(r.value) })
})
</script>

<style scoped>
.intro-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
}

.intro-image-wrapper {
  position: relative;
  width: 320px;
  height: 320px;
  margin: 0 auto;
}

.image-glow {
  position: absolute;
  inset: -10px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(220,38,38,0.2), transparent);
  opacity: 0;
  transition: opacity 0.6s ease;
}

.intro-image-wrapper:hover .image-glow {
  opacity: 1;
}

.intro-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 2px solid var(--color-border);
  position: relative;
  z-index: 1;
}

.intro-eyebrow {
  display: inline-block;
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.intro-headline {
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.intro-lead {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

.intro-text {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.intro-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Skills */
.section-subheading {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 2rem;
  justify-content: center;
}

.subheading-line {
  flex: 1;
  max-width: 60px;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--color-primary), transparent);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 4rem;
}

.skill-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  transition: all var(--transition-base);
  opacity: 0;
  animation: slideUp 0.5s ease forwards;
}

.skill-card:hover {
  border-color: rgba(220,38,38,0.3);
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(220,38,38,0.1);
}

.skill-icon {
  color: var(--color-primary);
  margin-bottom: 1rem;
  width: 24px;
  height: 24px;
}

.skill-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.skill-desc {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

/* Journey Timeline */
.journey-section {
  margin-bottom: 4rem;
}

.journey-timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  position: relative;
}

.journey-timeline::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 2rem;
  right: 2rem;
  height: 2px;
  background: linear-gradient(to right, var(--color-primary), var(--color-border), var(--color-primary));
}

.journey-item {
  position: relative;
  padding-top: 2rem;
  opacity: 0;
  animation: slideUp 0.5s ease forwards;
}

.journey-dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  background: var(--color-bg);
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.journey-dot-inner {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
}

.journey-year {
  display: inline-block;
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.journey-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.journey-desc {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

/* Quote */
.quote-section {
  margin-bottom: 4rem;
}

.personal-quote {
  text-align: center;
  padding: 3rem 2rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  position: relative;
}

.quote-icon {
  color: var(--color-primary);
  opacity: 0.3;
  margin-bottom: 1rem;
}

.quote-text {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-style: italic;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Fun Facts */
.facts-section {
  margin-bottom: 4rem;
}

.facts-grid {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.fact-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all var(--transition-base);
  opacity: 0;
  animation: slideUp 0.4s ease forwards;
}

.fact-pill:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(220,38,38,0.05);
}

.fact-pill svg {
  color: var(--color-primary);
}

/* References */
.references-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
}

.reference-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  transition: all var(--transition-base);
}

.reference-card:hover {
  border-color: rgba(220,38,38,0.3);
  transform: translateY(-2px);
}

.ref-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.ref-role {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.25rem;
  line-height: 1.4;
}

.ref-email {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--color-primary);
  transition: color var(--transition-base);
}

.ref-email:hover {
  color: var(--color-primary-light);
  text-decoration: underline;
}

/* Scroll animations */
.animate-visible .intro-grid,
.animate-visible .skills-grid,
.animate-visible .journey-timeline,
.animate-visible .personal-quote,
.animate-visible .facts-grid,
.animate-visible .references-grid {
  animation: fadeIn 0.6s ease forwards;
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 968px) {
  .intro-grid { grid-template-columns: 1fr; text-align: center; }
  .intro-actions { justify-content: center; }
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
  .journey-timeline { grid-template-columns: repeat(2, 1fr); }
  .journey-timeline::before { display: none; }
}

@media (max-width: 640px) {
  .skills-grid { grid-template-columns: 1fr; }
  .journey-timeline { grid-template-columns: 1fr; }
  .references-grid { grid-template-columns: 1fr; }
  .intro-image-wrapper { width: 220px; height: 220px; }
}
</style>
