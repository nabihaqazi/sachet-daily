import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const selector = '[data-reveal], [data-reveal-left], [data-reveal-right]'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    // Observe all reveal elements
    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el)
    })

    // Re-observe periodically for dynamically added elements (quiz reset, etc.)
    const interval = setInterval(() => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el)
        }
      })
    }, 1000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])
}
