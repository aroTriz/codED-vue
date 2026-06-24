<template>
  <div class="services-page section">
    <div class="container">
      <SectionTitle title="Services" subtitle="Professional services I can offer to help you build and grow your digital presence." badge="What I Do" />

      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card" :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="service-icon-wrapper" v-html="service.icon"></div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <router-link :to="`/services/${index + 1}`" class="service-link">
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'

const services = [
  {
    title: 'Custom Web Development',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    description: 'Building responsive, high-performance websites and web applications using modern technologies. From simple landing pages to complex full-stack solutions, I deliver clean, maintainable code.'
  },
  {
    title: 'Mobile App Solutions',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    description: 'Developing mobile applications for Android and cross-platform needs. Experienced with Kotlin, Java, and Unity for creating engaging and functional mobile experiences.'
  },
  {
    title: 'UI/UX Design',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.4 1.5-1.5 0-.3-.1-.6-.4-.9-.3-.3-.5-.7-.5-1.1 0-1.1.9-2 2-2h2.5c3.3 0 6-2.7 6-6 0-4.5-4.5-7.5-10-7.5z"/></svg>',
    description: 'Designing intuitive and visually compelling user interfaces using Figma and Canva. Applying HCI principles and user-centered design to create seamless digital experiences.'
  },
  {
    title: 'Cloud Computing',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>',
    description: 'Assisting with cloud infrastructure setup, management, and deployment. Knowledgeable in cloud concepts and platform configurations for scalable solutions.'
  },
  {
    title: 'Data Management & Analytics',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    description: 'Managing and organizing data using MySQL, CSV, and other data management tools. Providing insights through data analysis and reporting for informed decision-making.'
  },
  {
    title: 'Quality Assurance & Testing',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    description: 'Performing thorough software testing including test case creation, bug tracking, regression testing, and performance testing to ensure robust and reliable applications.'
  }
]
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.service-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: slideUp 0.5s ease forwards;
}

.service-card:hover {
  border-color: rgba(220, 38, 38, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(220, 38, 38, 0.08);
}

.service-icon-wrapper {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 38, 38, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-primary);
  margin-bottom: 1.25rem;
  transition: all var(--transition-base);
}

.service-card:hover .service-icon-wrapper {
  background: rgba(220, 38, 38, 0.2);
  transform: scale(1.05);
}

.service-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.service-description {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all var(--transition-base);
}

.service-link:hover {
  gap: 0.75rem;
  color: var(--color-primary-light);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 968px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
