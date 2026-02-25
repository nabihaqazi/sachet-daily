import { Fragment } from 'react'

const steps = [
    {
        num: '01',
        title: 'Tear Open',
        desc: "Grab your morning sachet from the box. One pull and it's open — no scissors, no struggle.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none">
                <rect x="8" y="20" width="48" height="30" rx="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 28h48M24 20V14a8 8 0 0 1 16 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M26 38l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Pour & Mix',
        desc: 'Empty into a glass of water. Stir for 10 seconds. Watch it dissolve into a light, refreshing drink.',
        icon: (
            <svg viewBox="0 0 64 64" fill="none">
                <path d="M32 8v8M16 14l5.7 5.7M12 32h8M16 50l5.7-5.7M32 56v-8M48 50l-5.7-5.7M52 32h-8M48 14l-5.7 5.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.3" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Feel the Difference',
        desc: 'Clear mind. Sustained energy. Better sleep. Your body gets everything it needs, every single day.',
        icon: (
            <svg viewBox="0 0 64 64" fill="none">
                <path d="M20 48c0-13.3 5.4-26 14-34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M44 48c0-13.3-5.4-26-14-34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 48h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="32" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M30 22l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

const Connector = () => (
    <div className="step__connector" aria-hidden="true">
        <svg viewBox="0 0 80 20" fill="none">
            <path d="M4 10 Q40 0 76 10" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        </svg>
    </div>
)

export default function HowItWorks() {
    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <div className="section-tag" data-reveal>✦ SIMPLE BY DESIGN</div>
                <h2 className="section-title" data-reveal>
                    Three steps.<br />That&apos;s <em>it.</em>
                </h2>
                <div className="steps">
                    {steps.map((s, i) => (
                        <Fragment key={s.num}>
                            <div className="step" data-reveal>
                                <div className="step__num">{s.num}</div>
                                <div className="step__icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                            {i < steps.length - 1 && <Connector />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}
