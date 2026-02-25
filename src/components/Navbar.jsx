import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const close = () => setMenuOpen(false)

    return (
        <>
            <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
                <div className="nav__inner">
                    <a href="#" className="nav__logo">
                        <svg className="nav__logo-icon" viewBox="0 0 32 32" fill="none">
                            <rect x="4" y="10" width="24" height="14" rx="7" fill="currentColor" opacity="0.15" />
                            <rect x="4" y="10" width="24" height="14" rx="7" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="16" y1="10" x2="16" y2="24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                        </svg>
                        Sachet Daily
                    </a>
                    <ul className="nav__links">
                        <li><a href="#quiz">Find My Formula</a></li>
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#ingredients">Ingredients</a></li>
                        <li><a href="#testimonials">Stories</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                    <a href="#waitlist" className="btn btn--dark nav__cta">Get Your Sachets</a>
                    <button
                        className={`nav__hamburger${menuOpen ? ' open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
                <a href="#quiz" onClick={close}>Find My Formula</a>
                <a href="#how-it-works" onClick={close}>How It Works</a>
                <a href="#ingredients" onClick={close}>Ingredients</a>
                <a href="#testimonials" onClick={close}>Stories</a>
                <a href="#faq" onClick={close}>FAQ</a>
                <a href="#waitlist" className="btn btn--dark" onClick={close}>Get Your Sachets</a>
            </div>
        </>
    )
}
