<template>
  <div class="portfolio-page section">
    <div class="container">
      <SectionTitle title="Portfolio" subtitle="A showcase of my academic projects, hands-on work, and creative endeavors." badge="My Work" />

      <div class="portfolio-filters" ref="filterRef">
        <button 
          v-for="filter in filters" 
          :key="filter.key"
          class="filter-btn"
          :class="{ active: activeFilter === filter.key }"
          @click="setFilter(filter.key)"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="portfolio-grid" ref="gridRef">
        <div 
          v-for="(item, index) in filteredItems" 
          :key="item.id"
          class="portfolio-item"
          :class="item.categories"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="portfolio-card">
            <div class="portfolio-image">
              <div class="portfolio-placeholder">
                <component :is="item.icon" />
              </div>
              <div class="portfolio-overlay">
                <div class="overlay-links">
                  <router-link :to="`/portfolio/${item.id}`" class="overlay-link" title="View Details">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="portfolio-info">
              <h4 class="portfolio-title">{{ item.title }}</h4>
              <p class="portfolio-category">{{ item.category }}</p>
              <div class="portfolio-tags">
                <span v-for="tag in item.tags" :key="tag" class="portfolio-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'

const activeFilter = ref('all')

const filters = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Development' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'design', label: 'UI/UX Design' },
  { key: 'systems', label: 'Systems' },
]

const items = [
  { id: 1, title: 'Capstone Web Application', category: 'Web Development', categories: ['cat-web'], icon: { template: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' }, tags: ['HTML/CSS', 'JavaScript', 'PHP'] },
  { id: 2, title: 'AR Learning Application', category: 'Mobile Apps', categories: ['cat-mobile'], icon: { template: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' }, tags: ['Unity 3D', 'AR Foundation', 'Vuforia'] },
  { id: 3, title: 'System Interface Design', category: 'UI/UX Design', categories: ['cat-design'], icon: { template: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.4 1.5-1.5 0-.3-.1-.6-.4-.9-.3-.3-.5-.7-.5-1.1 0-1.1.9-2 2-2h2.5c3.3 0 6-2.7 6-6 0-4.5-4.5-7.5-10-7.5z"/></svg>' }, tags: ['Figma', 'Canva', 'Wireframing'] },
  { id: 4, title: 'Database Management System', category: 'Systems', categories: ['cat-systems'], icon: { template: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' }, tags: ['MySQL', 'Database Design', 'SQL'] },
  { id: 5, title: 'OJT Web Solutions', category: 'Web Development', categories: ['cat-web'], icon: { template: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>' }, tags: ['Web Dev', 'OJT', 'MyVirtual'] },
  { id: 6, title: 'Android Mobile Application', category: 'Mobile Apps', categories: ['cat-mobile'], icon: { template: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/></svg>' }, tags: ['Kotlin', 'Android Studio', 'Mobile Dev'] },
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return items
  return items.filter(item => item.categories.includes(`cat-${activeFilter.value}`))
})

function setFilter(key) {
  activeFilter.value = key
}
</script>

<style scoped>
.portfolio-filters {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-base);
}

.filter-btn:hover {
  border-color: rgba(220, 38, 38, 0.3);
  color: var(--color-text);
}

.filter-btn.active {
  background: rgba(220, 38, 38, 0.15);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.portfolio-item {
  opacity: 0;
  animation: fadeScale 0.4s ease forwards;
}

@keyframes fadeScale {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.portfolio-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
}

.portfolio-card:hover {
  border-color: rgba(220, 38, 38, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(220, 38, 38, 0.08);
}

.portfolio-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: var(--color-surface-light);
}

.portfolio-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  opacity: 0.5;
}

.portfolio-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}

.overlay-links {
  display: flex;
  gap: 0.75rem;
}

.overlay-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 38, 38, 0.2);
  border-radius: 50%;
  color: #fff;
  transition: all var(--transition-base);
}

.overlay-link:hover {
  background: var(--color-primary);
  transform: scale(1.1);
}

.portfolio-info {
  padding: 1.25rem;
}

.portfolio-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.portfolio-category {
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.portfolio-tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.portfolio-tag {
  padding: 0.15rem 0.5rem;
  background: rgba(220, 38, 38, 0.08);
  color: var(--color-text-muted);
  border-radius: var(--radius-sm);
  font-size: 0.72rem;
}

@media (max-width: 968px) {
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .portfolio-grid { grid-template-columns: 1fr; }
}
</style>
