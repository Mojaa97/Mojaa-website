import { useEffect } from 'react'

// Sets reveal state via inline styles rather than a CSS class. React fully re-sets an
// element's `className` attribute on every re-render of that element (to whatever the JSX
// computes), which would silently wipe out a class added imperatively outside React's
// tracking — e.g. clicking an accordion open re-renders its className, erasing a `.in`
// class the observer had added and snapping already-revealed content back to invisible.
// Inline styles set via `.style` aren't managed by React unless the JSX itself sets `style`,
// so they survive unrelated re-renders of the same node.
export function useReveal() {
  useEffect(() => {
    const reveal = (el) => {
      el.style.transition = 'opacity .8s cubic-bezier(.16,.8,.28,1), transform .8s cubic-bezier(.16,.8,.28,1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }
    const revealStagger = (container) => {
      const children = Array.from(container.children)
      children.forEach((child, i) => {
        child.style.transition = `opacity .6s cubic-bezier(.16,.8,.28,1), transform .6s cubic-bezier(.16,.8,.28,1)`
        child.style.transitionDelay = `${Math.min(i, 10) * 0.07 + 0.02}s`
        child.style.opacity = '1'
        child.style.transform = 'translateY(0)'
      })
    }

    const targets = document.querySelectorAll('.reveal, .reveal-stagger')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          if (e.target.classList.contains('reveal-stagger')) {
            revealStagger(e.target)
          } else {
            reveal(e.target)
          }
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    targets.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
