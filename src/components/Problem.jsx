const problems = [
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <path d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="24" cy="16" r="2" fill="currentColor" />
                <path d="M20 36h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'Pill Overwhelm',
        desc: '5, 6, 7 bottles cluttering your counter. Different forms, different doses, easy to miss one — or all of them.',
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none">
                <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
                <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Guessing Games',
        desc: "Not sure if your Vitamin D is bioavailable? If your magnesium actually absorbs? Most people are just guessing.",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none">
                <rect x="10" y="16" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 16v-4a8 8 0 0 1 16 0v4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="24" cy="26" r="3" fill="currentColor" opacity="0.6" />
                <path d="M24 29v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            </svg>
        ),
        title: 'Zero Consistency',
        desc: "Complex routines get abandoned. When it's hard, you skip. When you skip, you feel it. The cycle never ends.",
    },
]

export default function Problem() {
    return (
        <section className="problem" id="problem">
            <div className="container">
                <div className="section-tag" data-reveal>✦ SOUND FAMILIAR?</div>
                <h2 className="section-title" data-reveal>
                    The daily supplement<br />struggle is <em>real.</em>
                </h2>
                <div className="problem__grid">
                    {problems.map((p) => (
                        <div className="problem-card" data-reveal key={p.title}>
                            <div className="problem-card__icon">{p.icon}</div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
