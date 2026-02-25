function ArrowIcon() {
    return (
        <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}>
            <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default function CTAFinal() {
    return (
        <section className="cta-final">
            <div className="cta-final__inner" data-reveal>
                <div className="cta-final__tag">✦ READY?</div>
                <h2>
                    Make this the last<br />supplement decision<br />you ever stress about.
                </h2>
                <a href="#waitlist" className="btn btn--light btn--lg">
                    Get Your Sachets Today <ArrowIcon />
                </a>
            </div>
        </section>
    )
}
