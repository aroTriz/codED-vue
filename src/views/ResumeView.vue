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
import { ref, onMounted } from 'vue'
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

const eduRef = ref(null)
const expRef = ref(null)
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

@media (max-width: 768px) {
  .resume-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
