import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, duration = 1400 }) {
  const str = String(value)
  const match = str.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  const [count, setCount] = useState(0)
  const started = useRef(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return
      started.current = true
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(target * eased))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      observer.disconnect()
    }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <b ref={ref}>{count}{suffix}</b>
}
