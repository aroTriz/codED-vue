<template>
  <section class="hero-section">
    <!-- Animated background -->
    <div class="hero-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>

    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text" ref="textRef">
          <span class="hero-greeting">Hello, I'm</span>
          <h1 class="hero-name">
            <span class="text-gradient">Eddyson Tristan Aromin</span>
          </h1>
          <div class="hero-role-wrapper">
            <span class="hero-role-label">Entry-Level</span>
            <span class="hero-role" ref="roleRef">{{ currentRole }}</span>
            <span class="hero-cursor" :class="{ typing: isTyping }">|</span>
          </div>
          <p class="hero-description">
            A Fresh Graduate Information Technologist from Saint Louis University Baguio. 
            I possess Dynamic Skills and Knowledge in Software Development, Web Development, 
            Database Management, System Administration, Data Analytics, Quality Assurance, 
            and many more. I am eager to start my professional career, continuously learn, grow, and contribute.
          </p>
          <div class="hero-actions">
            <router-link to="/portfolio" class="btn btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
            <router-link to="/contact" class="btn btn-outline">
              Get In Touch
            </router-link>
          </div>
          <div class="hero-social">
            <a href="https://www.linkedin.com/in/eddyson-tristan-aromin-2956992a1" target="_blank" class="hero-social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://github.com/EddysonA15" target="_blank" class="hero-social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="hero-visual" ref="visualRef">
        <div class="profile-frame">
          <div class="profile-glow"></div>
          <img :src="profileImg" alt="Eddyson Tristan Aromin" class="profile-img" />
          <div class="floating-cards">
            <div class="float-card card-design">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span>Design</span>
            </div>
            <div class="float-card card-code">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              <span>Code</span>
            </div>
            <div class="float-card card-ideas">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M12 2v4M12 22v-2M4.93 4.93l2.83 2.83M16.24 7.76l2.83-2.83M2 12h4M18 12h4"/></svg>
              <span>Ideas</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <span class="scroll-text">Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const profileImg = '/images/profile/profile-square-11.webp'

const roles = [
  'Information Technologist',
  'Software Developer', 
  'Mobile Application Developer',
  'Full-Stack Web Developer',
  'Web Designer',
  'Quality Assurance Analyst',
  'System Administrator'
]

const currentRole = ref('')
const isTyping = ref(true)

let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typingTimer = null

function typeEffect() {
  const current = roles[roleIndex]
  
  if (!isDeleting) {
    currentRole.value = current.substring(0, charIndex + 1)
    charIndex++
    
    if (charIndex === current.length) {
      isDeleting = true
      typingTimer = setTimeout(typeEffect, 2000)
      return
    }
    typingTimer = setTimeout(typeEffect, 80)
  } else {
    currentRole.value = current.substring(0, charIndex - 1)
    charIndex--
    
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
      typingTimer = setTimeout(typeEffect, 500)
      return
    }
    typingTimer = setTimeout(typeEffect, 40)
  }
}

onMounted(() => {
  setTimeout(typeEffect, 500)
})

onUnmounted(() => {
  if (typingTimer) clearTimeout(typingTimer)
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 6rem 1.5rem 3rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #DC2626, transparent);
  top: -10%;
  right: -5%;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #EF4444, transparent);
  bottom: -10%;
  left: -5%;
  animation: float 10s ease-in-out infinite reverse;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #991B1B, transparent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

.hero-container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-content {
  animation: slideUp 0.8s ease forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-greeting {
  display: block;
  font-size: 1.1rem;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.hero-name {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}

.hero-role-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  min-height: 2rem;
}

.hero-role-label {
  color: var(--color-text-muted);
  font-weight: 400;
}

.hero-role {
  color: var(--color-primary-light);
  font-weight: 600;
}

.hero-cursor {
  color: var(--color-primary);
  font-weight: 100;
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.hero-description {
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 540px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.hero-social {
  display: flex;
  gap: 0.75rem;
}

.hero-social-link {
  color: var(--color-text-muted);
  transition: all var(--transition-base);
  padding: 0.5rem;
  border-radius: var(--radius-md);
  display: flex;
  border: 1px solid var(--color-border);
}

.hero-social-link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background: rgba(220, 38, 38, 0.1);
  transform: translateY(-2px);
}

/* Profile Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideUp 0.8s ease 0.2s forwards;
  opacity: 0;
}

.profile-frame {
  position: relative;
  width: 380px;
  height: 380px;
}

.profile-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(220, 38, 38, 0.2), transparent 70%);
  animation: pulseGlow 3s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 1; }
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(220, 38, 38, 0.3);
  position: relative;
  z-index: 1;
  box-shadow: 0 0 40px rgba(220, 38, 38, 0.15);
}

.floating-cards {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--color-surface-light);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);
}

.float-card svg {
  color: var(--color-primary);
}

.card-design { top: 10%; right: -10%; animation: floatCard 4s ease-in-out infinite; }
.card-code { bottom: 20%; left: -15%; animation: floatCard 5s ease-in-out infinite 0.5s; }
.card-ideas { bottom: -5%; right: 5%; animation: floatCard 4.5s ease-in-out infinite 1s; }

@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: fadeIn 1s ease 1.5s forwards;
  opacity: 0;
}

.scroll-text {
  color: var(--color-text-muted);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--color-primary), transparent);
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  50.1% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* Responsive */
@media (max-width: 968px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-social {
    justify-content: center;
  }

  .profile-frame {
    width: 280px;
    height: 280px;
  }

  .card-design { right: -5%; }
  .card-code { left: -10%; }
}

@media (max-width: 480px) {
  .profile-frame {
    width: 220px;
    height: 220px;
  }
  
  .float-card {
    display: none;
  }
}
</style>
