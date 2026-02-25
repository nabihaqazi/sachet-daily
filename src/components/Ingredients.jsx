const cards = [
    {
        icon: '🧠',
        title: 'Cognitive Blend',
        items: ["Lion's Mane 500mg", 'Bacopa Monnieri 300mg', 'Choline 250mg'],
    },
    {
        icon: '⚡',
        title: 'Energy & Vitality',
        items: ['B-Complex (full spectrum)', 'CoQ10 100mg', 'Iron bisglycinate 18mg'],
    },
    {
        icon: '🛡️',
        title: 'Immune Defense',
        items: ['Vitamin D3 + K2', 'Zinc picolinate 15mg', 'Elderberry extract'],
    },
    {
        icon: '🌿',
        title: 'Recovery & Calm',
        items: ['Magnesium glycinate', 'Ashwagandha KSM-66', 'L-Theanine 200mg'],
    },
    {
        icon: '💙',
        title: 'Gut & Heart',
        items: ['Omega-3 (algae-based)', 'Probiotics 5B CFU', 'Digestive enzymes'],
    },
]

export default function Ingredients() {
    return (
        <section className="ingredients" id="ingredients">
            <div className="ingredients__bg" />
            <div className="container">
                <div className="section-tag light" data-reveal>✦ INSIDE EVERY SACHET</div>
                <h2 className="section-title light" data-reveal>
                    22 nutrients.<br />Zero <em>compromise.</em>
                </h2>
                <div className="ingredients__grid">
                    {cards.map((c) => (
                        <div className="ingredient-card" data-reveal key={c.title}>
                            <div className="ingredient-card__icon">{c.icon}</div>
                            <h4>{c.title}</h4>
                            <ul>
                                {c.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="ingredient-card ingredient-card--cta" data-reveal>
                        <p>
                            All forms are bioavailable, third-party verified, and at clinical
                            doses — not the minimums you find in most supplements.
                        </p>
                        <a href="#waitlist" className="btn btn--light">Start Today</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
