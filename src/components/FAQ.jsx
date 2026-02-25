import { useState } from 'react'
import { trackFAQOpened } from '../utils/analytics'

const questions = [
    {
        q: 'Can one sachet really replace all my supplements?',
        a: "Yes — for most people, absolutely. Each sachet contains 22 nutrients at clinical doses chosen to cover the gaps most modern diets miss. If you have a specific medical condition or are prescribed supplements by a doctor, please consult them first. For the general healthy adult, Sachet Daily covers everything.",
    },
    {
        q: 'How does the sachet taste?',
        a: "Mild, pleasant citrus and mint — designed to be refreshing, not overpowering. It dissolves cleanly in 200–300ml of water in about 10 seconds.",
    },
    {
        q: 'When should I take it?',
        a: "Morning is ideal — most of the nutrients work best taken with your first meal. However, it can be taken anytime that works best for your routine. Consistency matters more than timing.",
    },
    {
        q: 'Are your ingredients third-party tested?',
        a: "Every batch is third-party tested for purity, potency, and heavy metals. We publish the Certificates of Analysis (CoA) for each batch on our website. What you see on the label is what's in the sachet.",
    },
    {
        q: 'Is there a return policy?',
        a: "Yes. If you're not satisfied within 30 days of purchase — for any reason — we'll refund you completely. No questions, no forms, no hassle. Just email us and it's done.",
    },
]

function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false)
    return (
        <div className={`faq-item${open ? ' open' : ''}`} data-reveal>
            <button
                className="faq-item__q"
                onClick={() => {
                    const next = !open
                    setOpen(next)
                    if (next) trackFAQOpened(q)
                }}
                aria-expanded={open}
            >
                {q}
                <span className="faq-icon">+</span>
            </button>
            <div className="faq-item__a">
                <p>{a}</p>
            </div>
        </div>
    )
}

export default function FAQ() {
    return (
        <section className="faq" id="faq">
            <div className="container container--narrow">
                <div className="section-tag" data-reveal>✦ FAQ</div>
                <h2 className="section-title" data-reveal>
                    Your questions,<br /><em>answered.</em>
                </h2>
                <div className="faq__list">
                    {questions.map((item) => (
                        <FAQItem key={item.q} q={item.q} a={item.a} />
                    ))}
                </div>
            </div>
        </section>
    )
}
