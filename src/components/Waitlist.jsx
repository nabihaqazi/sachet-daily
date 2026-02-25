import { useState } from 'react'
import { trackWaitlistSignup } from '../utils/analytics'

// ⬇️ Replace this with YOUR deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwcMbglJeiUwOYy9hsTIYhyNr3e6cJtxDnxyu-H1nl9AbcYR6Y1Xzqkun2CXdoCEcnrMw/exec'

export default function Waitlist() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email) return
        setLoading(true)
        setError('')

        // Read quiz selection if available (saved by Quiz component)
        let quizData = {}
        try {
            const raw = localStorage.getItem('sachet_quiz')
            if (raw) quizData = JSON.parse(raw)
        } catch (_) { /* ignore parse errors */ }

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    timestamp: new Date().toISOString(),
                    identity: quizData.identity || '',
                    boost: quizData.boost || '',
                    formulaName: quizData.formulaName || '',
                }),
            })
            // mode: 'no-cors' means we won't get a readable response,
            // but the request will still reach Google Apps Script
            setSubmitted(true)
            trackWaitlistSignup()
            // Clean up quiz data from localStorage
            localStorage.removeItem('sachet_quiz')
        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="waitlist" id="waitlist">
            <div className="waitlist__bg-glow" />
            <div className="container waitlist__inner">
                <div className="section-tag" data-reveal>✦ COMING SOON</div>
                <h2 className="section-title" data-reveal>
                    Your personalised<br /><em>supplement ritual</em><br />is almost here.
                </h2>
                <p className="waitlist__desc" data-reveal>
                    Our personalised supplement service is launching soon. Join the waitlist to get early access, updates, and exclusive launch offers.
                </p>

                {!submitted ? (
                    <>
                        <form className="waitlist__form" onSubmit={handleSubmit} data-reveal>
                            <div className="waitlist__input-wrap">
                                <svg className="waitlist__input-icon" viewBox="0 0 20 20" fill="none">
                                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
                                    <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                                </svg>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="waitlist__input"
                                    required
                                    aria-label="Email Address"
                                />
                            </div>
                            <button type="submit" className="btn btn--dark btn--lg waitlist__btn" disabled={loading}>
                                {loading ? (
                                    <span className="waitlist__spinner" />
                                ) : (
                                    <>
                                        Join the Waitlist
                                        <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}>
                                            <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                        {error && <p className="waitlist__error">{error}</p>}
                    </>
                ) : (
                    <div className="waitlist__success" data-reveal>
                        <div className="waitlist__success-icon">
                            <svg viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3>You're on the list!</h3>
                        <p>We'll send you early access details and exclusive launch offers. Stay tuned!</p>
                    </div>
                )}

                <p className="waitlist__note" data-reveal>
                    <svg viewBox="0 0 20 20" fill="none" style={{ width: 14, height: 14 }}>
                        <path d="M10 2l1.5 4.5H16l-3.5 2.5 1.5 4.5L10 11l-4 2.5 1.5-4.5L4 6.5h4.5z" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    No spam — just launch updates and early access.☺️
                </p>
            </div>
        </section>
    )
}
