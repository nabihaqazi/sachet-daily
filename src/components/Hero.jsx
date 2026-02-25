import { useEffect, useRef } from 'react'

function CheckIcon() {
    return (
        <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14 }}>
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
            <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function ArrowIcon() {
    return (
        <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}>
            <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default function Hero() {
    const statRefs = useRef([])

    // Animate count-up numbers
    useEffect(() => {
        const counters = document.querySelectorAll('[data-count]')
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target
                    const target = +el.getAttribute('data-count')
                    let start = 0
                    const duration = 1800
                    const step = timestamp => {
                        if (!start) start = timestamp
                        const progress = Math.min((timestamp - start) / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        el.textContent = Math.floor(eased * target).toLocaleString()
                        if (progress < 1) requestAnimationFrame(step)
                    }
                    requestAnimationFrame(step)
                    obs.unobserve(el)
                }
            })
        }, { threshold: 0.5 })

        counters.forEach(c => obs.observe(c))
        return () => obs.disconnect()
    }, [])

    return (
        <section className="hero" id="hero">
            <div className="hero__bg-shapes">
                <div className="shape shape--1" />
                <div className="shape shape--2" />
                <div className="shape shape--3" />
            </div>

            <div className="hero__content">
                {/* Text */}
                <div className="hero__text" data-reveal>
                    <span className="hero__tag">✦ ONE SACHET. EVERYTHING.</span>
                    <h1 className="hero__headline">
                        End Supplement<br /><em>Fatigue</em><br />Forever.
                    </h1>
                    <p className="hero__sub">
                        Tired of staring at 5+ pill bottles every morning?<br />
                        We created the one-sachet solution that replaces<br />
                        your entire supplement shelf.
                    </p>
                    <div className="hero__actions">
                        <a href="#waitlist" className="btn btn--dark btn--lg">
                            Start Your Daily Ritual <ArrowIcon />
                        </a>
                        <a href="#how-it-works" className="btn btn--ghost">See How It Works</a>
                    </div>
                    <div className="hero__stats">
                        <div className="stat">
                            <span className="stat__num" data-count="12000">0</span>
                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--sage-dark)' }}>+</span>
                            <p>Happy customers</p>
                        </div>
                        <div className="stat__divider" />
                        <div className="stat">
                            <span className="stat__num" data-count="22">0</span>
                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--sage-dark)' }}>+</span>
                            <p>Nutrients per sachet</p>
                        </div>
                        <div className="stat__divider" />
                        <div className="stat">
                            <span className="stat__num" data-count="1">0</span>
                            <p>Sachet a day</p>
                        </div>
                    </div>
                </div>

                {/* Visual */}
                <div className="hero__visual" data-reveal-right>
                    <div className="sachet-showcase">
                        <div className="ring ring--outer" />
                        <div className="ring ring--inner" />
                        <div className="sachet-wrap">
                            <div className="sachet">
                                <div className="sachet__inner">
                                    <div className="sachet__logo">Sachet<br />Daily</div>
                                    <div className="sachet__label">COMPLETE DAILY FORMULA</div>
                                    <div className="sachet__sub">22 Nutrients × 1 Sachet</div>
                                    <div className="sachet__divider" />
                                    <div className="sachet__icons">
                                        <span>🌿</span><span>⚡</span><span>🧠</span><span>💪</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="badge badge--1"><CheckIcon /> Clinically dosed</div>
                        <div className="badge badge--2"><CheckIcon /> No filler ingredients</div>
                        <div className="badge badge--3"><CheckIcon /> 30-day guarantee</div>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-hint">
                <span>Scroll to explore</span>
                <div className="scroll-line"><div className="scroll-dot" /></div>
            </div>
        </section>
    )
}
