<template>
  <div class="contact-page section">
    <div class="container">
      <SectionTitle title="Contact" subtitle="Have a question, project idea, or just want to connect? I'd love to hear from you." badge="Get In Touch" />

      <div class="contact-grid">
        <div class="contact-info" ref="infoRef">
          <h3 class="contact-info-title">Contact Info</h3>
          <p class="contact-info-text">Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.</p>

          <div class="info-items">
            <div class="info-item">
              <div class="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="info-content">
                <h4>My Location</h4>
                <p>#003, Loakan Proper</p>
                <p>Baguio City, Benguet, Philippines 2600</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div class="info-content">
                <h4>Phone Number</h4>
                <a href="tel:+639452616251">+639452616251</a>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div class="info-content">
                <h4>Email Address</h4>
                <a href="mailto:aromintristan@gmail.com">aromintristan@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-wrapper" ref="formRef">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <h3 class="form-title">Send Me a Message</h3>
            <p class="form-text">Fill out the form below and I'll get back to you as soon as possible.</p>

            <div class="form-row">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  placeholder="John Doe"
                  required
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <label for="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  placeholder="john@example.com"
                  required
                  class="form-input"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                placeholder="Project Collaboration"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="5" 
                placeholder="Tell me about your project or just say hello..."
                required
                class="form-input form-textarea"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary submit-btn" :disabled="sending">
              <span v-if="!sending">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </span>
              <span v-else class="sending-text">
                <span class="sending-spinner"></span>
                Sending...
              </span>
            </button>

            <div v-if="submitted" class="form-success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Thank you! Your message has been sent successfully.
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const sending = ref(false)
const submitted = ref(false)

function handleSubmit() {
  sending.value = true
  setTimeout(() => {
    sending.value = false
    submitted.value = true
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    setTimeout(() => { submitted.value = false }, 5000)
  }, 1500)
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2.5rem;
  align-items: start;
}

.contact-info-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.contact-info-text {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.info-item:hover {
  border-color: rgba(220, 38, 38, 0.3);
}

.info-icon {
  width: 44px;
  height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 38, 38, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-primary);
}

.info-content h4 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.info-content p,
.info-content a {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.info-content a {
  color: var(--color-primary);
  transition: color var(--transition-base);
}

.info-content a:hover {
  color: var(--color-primary-light);
}

.contact-form-wrapper {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
}

.form-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.form-text {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-bottom: 0.4rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-size: 0.9rem;
  transition: all var(--transition-base);
  outline: none;
}

.form-input::placeholder {
  color: var(--color-text-muted);
  opacity: 0.6;
}

.form-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 0.85rem;
  font-size: 1rem;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.sending-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
}

.sending-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.form-success {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: var(--radius-md);
  color: #22C55E;
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
