function ArrowIcon() {
    return (
        <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}>
            <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default function Solution() {
    return (
        <section className="solution" id="solution">
            {/* Visual col */}
            <div className="solution__visual-col" data-reveal-left>
                <div className="solution__bottles-before">
                    {['Vit D', 'Mg', 'B12', 'Omega', 'Zinc'].map((b, i) => (
                        <div className={`bottle b${i + 1}`} key={b}><span>{b}</span></div>
                    ))}
                    <div className="vs-arrow">
                        <svg viewBox="0 0 40 40" fill="none">
                            <path d="M8 20h24M22 12l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="after-sachet">
                        <div className="sachet-mini">
                            <div className="sachet-mini__inner">
                                <span>Sachet</span><br /><span>Daily</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text col */}
            <div className="solution__text-col" data-reveal>
                <div className="section-tag">✦ THE SOLUTION</div>
                <h2 className="section-title">
                    One sachet.<br /><em>Everything</em> your<br />body needs.
                </h2>
                <p className="solution__desc">
                    We packed 22 clinically-dosed nutrients into a single tasteful sachet.
                    No pill fatigue. No guesswork. Just open, mix, drink.
                </p>
                <ul className="check-list">
                    {[
                        '22 nutrients at clinical doses — not fairy dusted',
                        'Bioavailable forms your body can actually absorb',
                        'No artificial colors, flavors, or preservatives',
                        'Third-party lab tested, every batch',
                        'Mixes easily — tastes like mild citrus & mint',
                    ].map((item) => (
                        <li key={item}><span className="check">✓</span> {item}</li>
                    ))}
                </ul>
                <a href="#waitlist" className="btn btn--dark btn--lg">
                    Get Your Sachets <ArrowIcon />
                </a>
            </div>
        </section>
    )
}
