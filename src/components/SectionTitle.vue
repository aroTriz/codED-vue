<template>
  <div class="section-title-wrapper" ref="titleRef">
    <span class="section-badge">{{ badge }}</span>
    <h2 class="section-heading">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
    <div class="section-divider">
      <span class="divider-line"></span>
      <span class="divider-dot"></span>
      <span class="divider-line"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: 'Section' }
})

const titleRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-title')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  if (titleRef.value) observer.observe(titleRef.value)
})
</script>

<style scoped>
.section-title-wrapper {
  text-align: center;
  margin-bottom: 3.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.section-title-wrapper.animate-title {
  opacity: 1;
  transform: translateY(0);
}

.section-badge {
  display: inline-block;
  padding: 0.35rem 1rem;
  background: rgba(220, 38, 38, 0.1);
  color: #DC2626;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.section-heading {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.75rem;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.section-subtitle {
  color: #6B7280;
  font-size: 1.05rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
}

.divider-line {
  width: 40px;
  height: 2px;
  background: rgba(220, 38, 38, 0.3);
  border-radius: 2px;
}

.divider-dot {
  width: 6px;
  height: 6px;
  background: #DC2626;
  border-radius: 50%;
}
</style>
