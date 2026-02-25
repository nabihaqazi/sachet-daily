const reviews = [
    {
        featured: true,
        quote:
            "I was the person with 8 bottles on my bathroom counter. Started Sachet Daily three months ago — I threw them all out by week two. My energy is noticeably different. So is my skin. Can't believe I waited so long.",
        name: 'Shah Rukh Khan',
        role: 'Actor, Mumbai',
        initial: 'S',
        color: 'var(--sage-dark)',
    },
    {
        quote:
            "The consistency I've built is incredible. One sachet in my morning water — it's become my ritual. Zero pill fatigue, zero excuse not to take it.",
        name: 'Émilie Dupont',
        role: 'Entrepreneur, Paris',
        initial: 'É',
        color: '#8FAF7E',
    },
    {
        quote:
            "I was skeptical — everything in one sachet sounded too good. Then I checked the doses. This is the real deal. Full clinical doses, bioavailable forms. No compromise.",
        name: 'Hiroshi Tanaka',
        role: 'Nutritionist, Tokyo',
        initial: 'H',
        color: '#C4A882',
    },
    {
        quote:
            'Three weeks in — sleep quality has improved dramatically. I actually wake up feeling refreshed. The magnesium + ashwagandha combo is a game changer.',
        name: 'Luca Moretti',
        role: 'Software Engineer, Milan',
        initial: 'L',
        color: '#A8BFA8',
    },
]

export default function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-tag" data-reveal>✦ REAL RESULTS</div>
                <h2 className="section-title" data-reveal>What our customers say</h2>
                <div className="testimonials__grid">
                    {reviews.map((r) => (
                        <div
                            key={r.name}
                            className={`testimonial${r.featured ? ' testimonial--featured' : ''}`}
                            data-reveal
                        >
                            <div className="testimonial__stars">★★★★★</div>
                            <p className="testimonial__quote">"{r.quote}"</p>
                            <div className="testimonial__author">
                                <div className="testimonial__avatar" style={{ background: r.color }}>
                                    {r.initial}
                                </div>
                                <div>
                                    <strong>{r.name}</strong>
                                    <span>{r.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
