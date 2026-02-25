import { trackPricingClick } from '../utils/analytics'

const plans = [
    {
        badge: 'TRY IT',
        name: 'Starter Pack',
        price: '1,299',
        count: '30 sachets',
        note: '~₹43 per day',
        features: ['30-day supply', 'All 22 nutrients', 'Free shipping'],
        cta: 'Order Starter',
        featured: false,
    },
    {
        badge: 'MOST POPULAR',
        name: '3-Month Supply',
        price: '3,299',
        count: '90 sachets',
        note: 'Save ₹598 · ~₹37 per day',
        features: ['90-day supply', 'All 22 nutrients', 'Free express shipping', '30-day money-back guarantee'],
        cta: 'Order 3-Month Pack',
        featured: true,
    },
    {
        badge: 'BEST VALUE',
        name: '6-Month Supply',
        price: '5,799',
        count: '180 sachets',
        note: 'Save ₹1,995 · ~₹32 per day',
        features: ['180-day supply', 'All 22 nutrients', 'Priority express shipping', '30-day money-back guarantee', 'Exclusive wellness guide'],
        cta: 'Order 6-Month Pack',
        featured: false,
    },
]

export default function Pricing() {
    return (
        <section className="order" id="order">
            <div className="container">
                <div className="section-tag" data-reveal>✦ START YOUR RITUAL</div>
                <h2 className="section-title" data-reveal>
                    Simple pricing.<br /><em>No surprises.</em>
                </h2>
                <div className="pricing__grid">
                    {plans.map((p) => (
                        <div
                            key={p.name}
                            className={`pricing-card${p.featured ? ' pricing-card--featured' : ''}`}
                            data-reveal
                        >
                            <div className={`pricing-card__badge${p.featured ? ' pricing-card__badge--hot' : ''}`}>
                                {p.badge}
                            </div>
                            <h3>{p.name}</h3>
                            <div className="price">
                                <span>₹</span>{p.price}
                                <span className="per">/{p.count}</span>
                            </div>
                            <p className="price-note">{p.note}</p>
                            <ul className="check-list">
                                {p.features.map((f) => (
                                    <li key={f}><span className="check">✓</span> {f}</li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className={`btn btn--full ${p.featured ? 'btn--light' : 'btn--outline'}`}
                                onClick={() => trackPricingClick({ plan: p.name, price: p.price })}
                            >
                                {p.cta}
                            </a>
                        </div>
                    ))}
                </div>
                <p className="order__guarantee" data-reveal>
                    <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}>
                        <path d="M10 2l1.5 4.5H16l-3.5 2.5 1.5 4.5L10 11l-4 2.5 1.5-4.5L4 6.5h4.5z" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    30-Day Money-Back Guarantee. No questions asked.
                </p>
            </div>
        </section>
    )
}
