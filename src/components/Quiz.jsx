import { useState } from 'react'
import { trackQuizStarted, trackQuizCompleted, trackOrderClick } from '../utils/analytics'

/* ─── DATA ──────────────────────────────────────── */
const identities = [
    {
        id: 'warrior',
        emoji: '🎓',
        title: 'The Academic Warrior',
        sub: 'Focused on brain & exam stress',
        color: '#E8F0E4',
        borderColor: '#8FAF7E',
    },
    {
        id: 'performer',
        emoji: '💼',
        title: 'The High-Performer',
        sub: 'Office burnout & daily energy',
        color: '#EDE4D6',
        borderColor: '#C4A882',
    },
    {
        id: 'mother',
        emoji: '🌸',
        title: 'The Vitality Mother',
        sub: 'Recovery, iron & hormonal balance',
        color: '#F5EFE6',
        borderColor: '#D4A0A0',
    },
    {
        id: 'athlete',
        emoji: '🏃',
        title: 'The Active Achiever',
        sub: 'Endurance, muscle & recovery',
        color: '#E4EAF0',
        borderColor: '#7E9FAF',
    },
]

const boosts = [
    { id: 'glow', emoji: '✨', title: 'Glow', sub: 'Skin & Hair' },
    { id: 'rest', emoji: '🌙', title: 'Rest', sub: 'Calm & De-stress' },
    { id: 'sleep', emoji: '💤', title: 'Deep Sleep', sub: 'Restorative rest' },
    { id: 'immune', emoji: '🛡️', title: 'Immunity', sub: 'Defence shield' },
]

/* ─── RESULT LOGIC - 16 UNIQUE COMBOS ──────────── */
const results = {
    /* ── WARRIOR (Academic) ── */
    warrior_glow: {
        name: 'The Scholar\'s Radiance',
        tagline: 'Ace your exams - and glow doing it.',
        description:
            'Brain-boosting nootropics meet skin-nourishing biotin and collagen. Stay razor-sharp during study marathons while your skin radiates from within.',
        highlights: ['Lion\'s Mane 500mg', 'Bacopa Monnieri', 'Biotin 5000mcg', 'Collagen Peptides'],
        accent: '#8FAF7E',
        boostLabel: '+ Glow Booster',
        boostDetail: 'Biotin 5000mcg · Collagen peptides · Vitamin E',
        boostEmoji: '✨',
    },
    warrior_rest: {
        name: 'The Calm Scholar',
        tagline: 'Focus without the anxiety. Perform without the crash.',
        description:
            'Built for students who burn the midnight oil but still need calm clarity. L-Theanine and lemon balm tame exam anxiety while Ashwagandha fuels sustained focus.',
        highlights: ['Lion\'s Mane 500mg', 'Ashwagandha KSM-66', 'L-Theanine 200mg', 'Lemon Balm Extract'],
        accent: '#8FAF7E',
        boostLabel: '+ Rest Booster',
        boostDetail: 'L-Theanine 200mg · Lemon balm · Chamomile extract',
        boostEmoji: '🌙',
    },
    warrior_sleep: {
        name: 'The Night Scholar',
        tagline: 'Study hard. Sleep deep. Wake sharp.',
        description:
            'Your brain consolidates knowledge during deep sleep. This blend pairs cognitive nootropics with restorative sleep aids so every night of rest makes you smarter.',
        highlights: ['Bacopa Monnieri', 'Ashwagandha KSM-66', 'Magnesium Glycinate', 'Valerian Root'],
        accent: '#8FAF7E',
        boostLabel: '+ Deep Sleep Booster',
        boostDetail: 'Melatonin 0.5mg · Magnesium glycinate · Valerian',
        boostEmoji: '💤',
    },
    warrior_immune: {
        name: 'The Shielded Scholar',
        tagline: 'Don\'t let a cold steal your semester.',
        description:
            'Exam season is no time to get sick. This formula stacks cognitive enhancers with elderberry, beta-glucan, and Vitamin C to keep your immune system as strong as your study game.',
        highlights: ['Lion\'s Mane 500mg', 'L-Theanine 200mg', 'Elderberry Extract', 'Vitamin C 500mg'],
        accent: '#8FAF7E',
        boostLabel: '+ Immunity Booster',
        boostDetail: 'Elderberry · Beta-glucan · Vitamin C 500mg',
        boostEmoji: '🛡️',
    },

    /* ── PERFORMER (High-Performer) ── */
    performer_glow: {
        name: 'The Executive Glow',
        tagline: 'Boardroom energy. Red-carpet skin.',
        description:
            'CoQ10 and B-vitamins power your days while biotin and collagen peptides keep your skin, hair, and nails looking as sharp as your presentations.',
        highlights: ['B-Complex Full Spectrum', 'CoQ10 100mg', 'Biotin 5000mcg', 'Vitamin E'],
        accent: '#C4A882',
        boostLabel: '+ Glow Booster',
        boostDetail: 'Biotin 5000mcg · Collagen peptides · Vitamin E',
        boostEmoji: '✨',
    },
    performer_rest: {
        name: 'The Burnout Shield',
        tagline: 'Peak performance without the burnout.',
        description:
            'Rhodiola and B-vitamins for all-day output; L-Theanine and chamomile to downshift cleanly when the day is done. No crash, no jitters - just flow.',
        highlights: ['Rhodiola Rosea', 'B-Complex Full Spectrum', 'L-Theanine 200mg', 'Chamomile Extract'],
        accent: '#C4A882',
        boostLabel: '+ Rest Booster',
        boostDetail: 'L-Theanine 200mg · Lemon balm · Chamomile extract',
        boostEmoji: '🌙',
    },
    performer_sleep: {
        name: 'The Recharge Protocol',
        tagline: 'Work hard by day. Recharge deep by night.',
        description:
            'Your best work happens after real rest. This blend combines sustained-energy vitamins with clinically-dosed sleep aids - so you wake up already in peak mode.',
        highlights: ['CoQ10 100mg', 'Magnesium Glycinate', 'Melatonin 0.5mg', 'Valerian Root'],
        accent: '#C4A882',
        boostLabel: '+ Deep Sleep Booster',
        boostDetail: 'Melatonin 0.5mg · Magnesium glycinate · Valerian',
        boostEmoji: '💤',
    },
    performer_immune: {
        name: 'The Iron Executive',
        tagline: 'Can\'t close deals from a sick day.',
        description:
            'Stay unstoppable through back-to-back meetings and travel. Full-spectrum B-vitamins for energy, plus elderberry and beta-glucan to keep your immune defences airtight.',
        highlights: ['B-Complex Full Spectrum', 'Rhodiola Rosea', 'Elderberry Extract', 'Beta-Glucan'],
        accent: '#C4A882',
        boostLabel: '+ Immunity Booster',
        boostDetail: 'Elderberry · Beta-glucan · Vitamin C 500mg',
        boostEmoji: '🛡️',
    },

    /* ── MOTHER (Vitality Mother) ── */
    mother_glow: {
        name: 'The Radiant Mother',
        tagline: 'Nourish from within. Glow from every angle.',
        description:
            'Iron and folate for recovery, biotin and collagen for that postpartum glow-up. Clinical doses - not the token amounts found in generic multivitamins.',
        highlights: ['Iron Bisglycinate 18mg', 'Folate 400mcg', 'Biotin 5000mcg', 'Collagen Peptides'],
        accent: '#D4A0A0',
        boostLabel: '+ Glow Booster',
        boostDetail: 'Biotin 5000mcg · Collagen peptides · Vitamin E',
        boostEmoji: '✨',
    },
    mother_rest: {
        name: 'The Calm Mother',
        tagline: 'Find your calm in the beautiful chaos.',
        description:
            'Hormonal adaptogens meet stress-relief botanicals. Maca for balance, chamomile and lemon balm for those moments when you need to breathe and reset.',
        highlights: ['Maca Root', 'Vitamin D3 + K2', 'L-Theanine 200mg', 'Lemon Balm Extract'],
        accent: '#D4A0A0',
        boostLabel: '+ Rest Booster',
        boostDetail: 'L-Theanine 200mg · Lemon balm · Chamomile extract',
        boostEmoji: '🌙',
    },
    mother_sleep: {
        name: 'The Rested Mother',
        tagline: 'Because you deserve real rest, not just survival.',
        description:
            'Iron and folate to rebuild, magnesium and valerian to unlock deep, restorative sleep. Wake up feeling like yourself again - energised and whole.',
        highlights: ['Iron Bisglycinate 18mg', 'Folate 400mcg', 'Magnesium Glycinate', 'Valerian Root'],
        accent: '#D4A0A0',
        boostLabel: '+ Deep Sleep Booster',
        boostDetail: 'Melatonin 0.5mg · Magnesium glycinate · Valerian',
        boostEmoji: '💤',
    },
    mother_immune: {
        name: 'The Guardian Mother',
        tagline: 'Protect yourself so you can protect them.',
        description:
            'Recovery-focused nutrition plus a full immunity shield. Elderberry and Vitamin C on top of iron and D3+K2 - because mums don\'t get sick days.',
        highlights: ['Iron Bisglycinate 18mg', 'Vitamin D3 + K2', 'Elderberry Extract', 'Vitamin C 500mg'],
        accent: '#D4A0A0',
        boostLabel: '+ Immunity Booster',
        boostDetail: 'Elderberry · Beta-glucan · Vitamin C 500mg',
        boostEmoji: '🛡️',
    },

    /* ── ATHLETE (Active Achiever) ── */
    athlete_glow: {
        name: 'The Athletic Glow',
        tagline: 'Train hard. Look even better.',
        description:
            'Electrolytes and anti-inflammatories for recovery, collagen and biotin for skin and joints. Built for athletes who care about performance and appearance.',
        highlights: ['Electrolyte Complex', 'Tart Cherry Extract', 'Collagen Peptides', 'Biotin 5000mcg'],
        accent: '#7E9FAF',
        boostLabel: '+ Glow Booster',
        boostDetail: 'Biotin 5000mcg · Collagen peptides · Vitamin E',
        boostEmoji: '✨',
    },
    athlete_rest: {
        name: 'The Recovery Flow',
        tagline: 'Recover like a pro. Come back stronger.',
        description:
            'Post-workout inflammation meets deep relaxation. Tart cherry and zinc for muscle repair, L-Theanine and chamomile to bring your nervous system back to baseline.',
        highlights: ['Zinc Picolinate', 'Tart Cherry Extract', 'L-Theanine 200mg', 'Chamomile Extract'],
        accent: '#7E9FAF',
        boostLabel: '+ Rest Booster',
        boostDetail: 'L-Theanine 200mg · Lemon balm · Chamomile extract',
        boostEmoji: '🌙',
    },
    athlete_sleep: {
        name: 'The Deep Recovery',
        tagline: 'Your muscles grow while you sleep. Make it count.',
        description:
            'Magnesium and valerian for restorative deep sleep, electrolytes and Vitamin C for overnight muscle rebuilding. Recovery starts the moment your head hits the pillow.',
        highlights: ['Electrolyte Complex', 'Vitamin C 1000mg', 'Magnesium Glycinate', 'Valerian Root'],
        accent: '#7E9FAF',
        boostLabel: '+ Deep Sleep Booster',
        boostDetail: 'Melatonin 0.5mg · Magnesium glycinate · Valerian',
        boostEmoji: '💤',
    },
    athlete_immune: {
        name: 'The Athlete\'s Armour',
        tagline: 'Don\'t let illness break your streak.',
        description:
            'Intense training can suppress immunity. This formula pairs performance essentials with elderberry, beta-glucan, and extra Vitamin C to keep you in the game.',
        highlights: ['Electrolyte Complex', 'Zinc Picolinate', 'Elderberry Extract', 'Beta-Glucan'],
        accent: '#7E9FAF',
        boostLabel: '+ Immunity Booster',
        boostDetail: 'Elderberry · Beta-glucan · Vitamin C 500mg',
        boostEmoji: '🛡️',
    },
}

/* ─── COMPONENT ─────────────────────────────────── */
export default function Quiz() {
    const [identity, setIdentity] = useState(null)
    const [boost, setBoost] = useState(null)
    const [revealed, setReveal] = useState(false)
    const [animating, setAnimating] = useState(false)

    const comboKey = identity && boost ? `${identity}_${boost}` : null
    const result = comboKey ? results[comboKey] : null

    const handleReveal = () => {
        if (!identity || !boost) return
        trackQuizStarted()
        setAnimating(true)
        setTimeout(() => {
            setReveal(true)
            setAnimating(false)
            const sachetName = result?.name ?? ''
            trackQuizCompleted({ identity, boost, sachetName })
        }, 400)
    }

    const handleReset = () => {
        setReveal(false)
        setIdentity(null)
        setBoost(null)
    }

    const handleOrderClick = () => {
        // Save quiz selection to localStorage so the Waitlist can include it
        if (result) {
            localStorage.setItem('sachet_quiz', JSON.stringify({
                identity,
                boost,
                formulaName: result.name,
            }))
        }
        trackOrderClick({ location: 'Quiz Result', plan: result?.name ?? '' })
    }

    return (
        <section className="quiz" id="quiz">
            <div className="container">
                {/* Header */}
                <div className="quiz__header" data-reveal>
                    <div className="section-tag">✦ BUILD YOUR FORMULA</div>
                    <h2 className="section-title">
                        Find your perfect<br /><em>daily sachet.</em>
                    </h2>
                    <p className="quiz__intro">
                        Answer two questions and we'll curate your ideal formula in seconds.
                    </p>
                </div>

                <div className={`quiz__body${animating ? ' quiz__body--exit' : ''}`}>
                    {!revealed ? (
                        /* ── QUIZ PANEL ── */
                        <div className="quiz__panel">
                            {/* Q1 */}
                            <div className="quiz__question" data-reveal>
                                <p className="quiz__q-label">
                                    <span className="quiz__step">01</span>
                                    Who are you fueling today?
                                    <span className="quiz__q-hint">Pick one</span>
                                </p>
                                <div className="quiz__identity-grid">
                                    {identities.map((p) => (
                                        <button
                                            key={p.id}
                                            className={`identity-card${identity === p.id ? ' identity-card--selected' : ''}`}
                                            style={{
                                                '--card-bg': p.color,
                                                '--card-border': p.borderColor,
                                            }}
                                            onClick={() => setIdentity(p.id)}
                                        >
                                            <span className="identity-card__emoji">{p.emoji}</span>
                                            <strong>{p.title}</strong>
                                            <span>{p.sub}</span>
                                            {identity === p.id && <div className="identity-card__check">✓</div>}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Q2 */}
                            <div className={`quiz__question quiz__question--boost${identity ? ' quiz__question--visible' : ''}`} data-reveal>
                                <p className="quiz__q-label">
                                    <span className="quiz__step">02</span>
                                    One extra boost for your day?
                                    <span className="quiz__q-hint">Pick one</span>
                                </p>
                                <div className="quiz__boost-grid">
                                    {boosts.map((b) => (
                                        <button
                                            key={b.id}
                                            className={`boost-pill${boost === b.id ? ' boost-pill--selected' : ''}`}
                                            onClick={() => setBoost(b.id)}
                                        >
                                            <span className="boost-pill__emoji">{b.emoji}</span>
                                            <span className="boost-pill__title">{b.title}</span>
                                            <span className="boost-pill__sub">{b.sub}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className={`quiz__cta-wrap${identity && boost ? ' quiz__cta-wrap--visible' : ''}`}>
                                <button className="btn btn--dark btn--lg quiz__reveal-btn" onClick={handleReveal}>
                                    Build My Sachet
                                    <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}>
                                        <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    ) : (
                        /* ── RESULT PANEL ── */
                        <div className="quiz__result quiz__result--enter">
                            <div className="result__left">
                                <div className="result__tag">✦ YOUR CUSTOM SACHET IS READY</div>
                                <h3 className="result__name" style={{ color: result.accent }}>
                                    {result.name}
                                </h3>
                                <p className="result__tagline">{result.tagline}</p>
                                <p className="result__desc">{result.description}</p>

                                <div className="result__highlights">
                                    {result.highlights.map((h) => (
                                        <div className="result__highlight-item" key={h}>
                                            <span style={{ color: result.accent }}>✓</span> {h}
                                        </div>
                                    ))}
                                </div>

                                <div className="result__addon">
                                    <span className="result__addon-badge" style={{ background: result.accent + '22', color: result.accent }}>
                                        {result.boostEmoji} {result.boostLabel}
                                    </span>
                                    <p className="result__addon-detail">{result.boostDetail}</p>
                                </div>

                                <div className="result__actions">
                                    <a
                                        href="#waitlist"
                                        className="btn btn--dark btn--lg"
                                        onClick={handleOrderClick}
                                    >
                                        Join the Waitlist
                                        <svg viewBox="0 0 20 20" fill="none" style={{ width: 16 }}>
                                            <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <button className="btn btn--ghost" onClick={handleReset}>Retake Quiz</button>
                                </div>
                            </div>

                            <div className="result__right">
                                <div className="result__sachet-display" style={{ '--accent': result.accent }}>
                                    <div className="result__sachet">
                                        <div className="result__sachet-inner">
                                            <div className="result__sachet-logo">Sachet<br />Daily</div>
                                            <div className="result__sachet-formula">{result.name}</div>
                                            <div className="result__sachet-divider" />
                                            <div className="result__sachet-icons">
                                                {result.highlights.slice(0, 3).map((h) => (
                                                    <span key={h} className="result__sachet-tag">{h.split(' ')[0]}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="result__ring result__ring--outer" />
                                    <div className="result__ring result__ring--inner" />
                                    <div className="result__unlock">
                                        <span>✦</span>
                                        Unlock Your Best Self
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

