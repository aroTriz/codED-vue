import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observer = ref(null)
  
  const observe = (el, animationClass = 'animate-fadeIn', delay = 0) => {
    if (!el) return
    
    const observerInstance = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animationClass)
            }, delay)
            observerInstance.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    
    observerInstance.observe(el)
    return observerInstance
  }
  
  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })
  
  return { observe }
}
