<template>
  <div class="service-detail-page section">
    <div class="container">
      <router-link to="/services" class="back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Services
      </router-link>

      <div v-if="service" class="detail-content">
        <div class="service-header">
          <div class="service-icon-large">
            <component :is="service.icon" />
          </div>
          <SectionTitle :title="service.title" :subtitle="service.subtitle" badge="Service" />
        </div>

        <div class="service-body">
          <div class="service-description-wide">
            <p>{{ service.description }}</p>
          </div>

          <div class="service-highlights">
            <div v-for="(item, index) in service.highlights" :key="index" class="highlight-card">
              <div class="highlight-number">{{ String(index + 1).padStart(2, '0') }}</div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>

          <div class="service-cta">
            <h3>Interested in this service?</h3>
            <p>Let's discuss how I can help you with your project needs.</p>
            <router-link to="/contact" class="btn btn-primary">
              Get In Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>
        </div>
      </div>

      <div v-else class="not-found">
        <h2>Service not found</h2>
        <router-link to="/services" class="btn btn-primary">View All Services</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SectionTitle from '../components/SectionTitle.vue'

const route = useRoute()
const serviceId = computed(() => parseInt(route.params.id))

const services = [
  { 
    id: 1, title: 'Custom Web Development', subtitle: 'Building modern, responsive web solutions', icon: { template: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
    description: 'I build responsive, high-performance websites and web applications using modern technologies. From simple landing pages to complex full-stack solutions, I deliver clean, maintainable code that meets your specific needs. My approach focuses on creating fast, accessible, and user-friendly web experiences.',
    highlights: [
      { title: 'Responsive Design', description: 'Websites that work flawlessly across all devices and screen sizes, from mobile to desktop.' },
      { title: 'Modern Technologies', description: 'Using the latest web technologies including HTML5, CSS3, JavaScript, and modern frameworks.' },
      { title: 'Performance Optimized', description: 'Fast loading times, optimized assets, and efficient code for the best user experience.' },
      { title: 'SEO Friendly', description: 'Clean semantic markup and best practices for search engine visibility.' }
    ]
  },
  { 
    id: 2, title: 'Mobile App Solutions', subtitle: 'Creating engaging mobile experiences', icon: { template: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' },
    description: 'I develop mobile applications for Android and cross-platform needs. With experience in Kotlin, Java, and Unity, I can create engaging and functional mobile experiences. Whether it is a native Android app or a cross-platform solution, I focus on performance, usability, and reliability.',
    highlights: [
      { title: 'Android Development', description: 'Native Android apps built with Kotlin and Java following Material Design guidelines.' },
      { title: 'Cross-Platform Solutions', description: 'Flexible approaches to reach users across different mobile platforms.' },
      { title: 'AR/VR Experiences', description: 'Immersive mobile experiences using Unity 3D and augmented reality technologies.' },
      { title: 'App Lifecycle Management', description: 'From concept to deployment, managing the entire mobile app development cycle.' }
    ]
  },
  { 
    id: 3, title: 'UI/UX Design', subtitle: 'Designing intuitive and beautiful interfaces', icon: { template: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.4 1.5-1.5 0-.3-.1-.6-.4-.9-.3-.3-.5-.7-.5-1.1 0-1.1.9-2 2-2h2.5c3.3 0 6-2.7 6-6 0-4.5-4.5-7.5-10-7.5z"/></svg>' },
    description: 'I design intuitive and visually compelling user interfaces using Figma and Canva. Applying Human-Computer Interaction (HCI) principles and user-centered design methodologies, I create seamless digital experiences that are both beautiful and functional.',
    highlights: [
      { title: 'User Research', description: 'Understanding user needs and behaviors to inform design decisions and create better experiences.' },
      { title: 'Wireframing', description: 'Structuring layouts and user flows to create clear, logical navigation paths.' },
      { title: 'Visual Design', description: 'Crafting aesthetically pleasing interfaces with proper color theory, typography, and spacing.' },
      { title: 'Prototyping', description: 'Creating interactive prototypes to test and validate design concepts before development.' }
    ]
  },
  { 
    id: 4, title: 'Cloud Computing', subtitle: 'Scalable cloud infrastructure solutions', icon: { template: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>' },
    description: 'I assist with cloud infrastructure setup, management, and deployment. With knowledge of cloud concepts and platform configurations, I help businesses leverage cloud technology for scalable and reliable solutions. From migration to optimization, I provide guidance on cloud best practices.',
    highlights: [
      { title: 'Infrastructure Setup', description: 'Setting up and configuring cloud resources for optimal performance and cost efficiency.' },
      { title: 'Deployment Support', description: 'Assisting with application deployment and hosting configuration on cloud platforms.' },
      { title: 'Security Best Practices', description: 'Implementing security measures to protect cloud resources and data.' },
      { title: 'Cost Optimization', description: 'Analyzing and optimizing cloud resource usage to minimize costs.' }
    ]
  },
  { 
    id: 5, title: 'Data Management & Analytics', subtitle: 'Organizing and analyzing your data', icon: { template: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
    description: 'I manage and organize data using MySQL and other data management tools. From database design to data analysis, I help transform raw data into actionable insights. My skills include creating efficient database schemas, writing complex queries, and generating reports.',
    highlights: [
      { title: 'Database Design', description: 'Designing normalized, efficient database schemas for optimal data organization.' },
      { title: 'Data Analysis', description: 'Analyzing data to extract meaningful insights and support decision-making.' },
      { title: 'Reporting', description: 'Creating clear and informative reports and visualizations from raw data.' },
      { title: 'Data Integrity', description: 'Ensuring data accuracy, consistency, and reliability through proper management practices.' }
    ]
  },
  { 
    id: 6, title: 'Quality Assurance & Testing', subtitle: 'Ensuring software quality and reliability', icon: { template: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
    description: 'I perform thorough software testing to ensure robust and reliable applications. My QA skills include test case creation, bug tracking, regression testing, and performance testing. I am committed to delivering high-quality software that meets user expectations and requirements.',
    highlights: [
      { title: 'Test Case Creation', description: 'Developing comprehensive test cases covering various scenarios and edge cases.' },
      { title: 'Bug Tracking', description: 'Systematically identifying, documenting, and tracking software defects.' },
      { title: 'Regression Testing', description: 'Ensuring new changes do not break existing functionality through thorough regression tests.' },
      { title: 'Performance Testing', description: 'Evaluating application performance under various conditions and loads.' }
    ]
  }
]

const service = computed(() => services.find(s => s.id === serviceId.value))
</script>

<style scoped>
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color var(--transition-base);
}

.back-link:hover {
  color: var(--color-primary);
}

.service-header {
  text-align: center;
  margin-bottom: 3rem;
}

.service-icon-large {
  display: inline-flex;
  padding: 1rem;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 50%;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.service-description-wide {
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.service-highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.highlight-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  transition: all var(--transition-base);
}

.highlight-card:hover {
  border-color: rgba(220, 38, 38, 0.3);
  transform: translateY(-2px);
}

.highlight-number {
  font-size: 2rem;
  font-weight: 800;
  color: rgba(220, 38, 38, 0.2);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.highlight-card h4 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.highlight-card p {
  font-size: 0.88rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.service-cta {
  text-align: center;
  padding: 2.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.service-cta h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.service-cta p {
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

.not-found {
  text-align: center;
  padding: 4rem 0;
}

.not-found h2 {
  margin-bottom: 1.5rem;
  color: var(--color-text-muted);
}

@media (max-width: 640px) {
  .service-highlights {
    grid-template-columns: 1fr;
  }
}
</style>
