/**
 * Sachet Daily — Google Analytics 4 Utility
 *
 * All tracking calls go through this file. Update MEASUREMENT_ID once and
 * all calls stay in sync. Replace 'G-XXXXXXXXXX' with your real GA4 ID.
 *
 * GA4 automatically captures:
 *   • Users (unique visitors via client_id cookie)
 *   • Sessions (session_id, session_start event)
 *   • Traffic Sources (utm params / document.referrer)
 *   • Bounce Rate (single-event sessions)
 *
 * This file adds custom conversion events so you can track:
 *   • Quiz completions  → 'quiz_completed'    (micro-conversion)
 *   • CTA clicks        → 'select_content'    (engagement)
 *   • Order button hits → 'begin_checkout'    (macro-conversion)
 *   • FAQ interactions  → 'faq_opened'        (engagement)
 *   • Waitlist signups  → 'waitlist_signup'   (conversion)
 */

const MEASUREMENT_ID = 'G-ECF6CZCL8M' // ← replace this

/** Safe wrapper — silently skips if gtag hasn't loaded yet */
function gtag(...args) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

/* ─── Pageview ──────────────────────────────────── */
/** Call when the SPA navigates to a new logical page */
export function trackPageview(path = window.location.pathname) {
  gtag('config', MEASUREMENT_ID, { page_path: path })
}

/* ─── Quiz Events ───────────────────────────────── */
/**
 * Fired when the user clicks "Build My Sachet"
 * → counts as a micro-conversion in GA4 funnels
 */
export function trackQuizStarted() {
  gtag('event', 'quiz_started', {
    event_category: 'Quiz',
    event_label: 'Find My Formula',
  })
}

/**
 * Fired when the result panel is revealed
 * @param {string} identity  e.g. 'warrior'
 * @param {string} boost     e.g. 'glow'
 * @param {string} sachetName e.g. 'The Focus Formula'
 */
export function trackQuizCompleted({ identity, boost, sachetName }) {
  gtag('event', 'quiz_completed', {
    event_category: 'Quiz',
    event_label: sachetName,
    quiz_identity: identity,
    quiz_boost: boost,
    value: 1,
  })
  // Also mark as a GA4 conversion (enable this event in GA4 → Conversions)
  gtag('event', 'generate_lead', {
    currency: 'INR',
    value: 0,
  })
}

/* ─── CTA / Engagement Events ───────────────────── */
/**
 * Fired when any "Order" / "Get Your Sachets" CTA link is clicked
 * @param {string} location  Readable location, e.g. 'Hero', 'Pricing', 'CTA Section'
 * @param {string} plan      e.g. '3-Month Supply' (optional)
 */
export function trackOrderClick({ location, plan = '' }) {
  gtag('event', 'begin_checkout', {
    event_category: 'Conversion',
    event_label: location,
    plan_name: plan,
    currency: 'INR',
  })
  gtag('event', 'select_content', {
    content_type: 'cta_button',
    item_id: location,
  })
}

/**
 * Fired when a pricing plan CTA is clicked — sends which plan
 */
export function trackPricingClick({ plan, price }) {
  gtag('event', 'begin_checkout', {
    event_category: 'Pricing',
    event_label: plan,
    value: parseFloat(price.replace(/,/g, '')),
    currency: 'INR',
    items: [{ item_name: plan, price: parseFloat(price.replace(/,/g, '')) }],
  })
}

/* ─── FAQ Events ────────────────────────────────── */
/**
 * Fired when a user opens a FAQ accordion item
 * @param {string} question  First 60 chars of the question text
 */
export function trackFAQOpened(question) {
  gtag('event', 'faq_opened', {
    event_category: 'Engagement',
    event_label: question.slice(0, 60),
  })
}

/* ─── Waitlist Events ───────────────────────────── */
/**
 * Fired when a user successfully submits their email to the waitlist.
 * NOTE: We do NOT send the email to GA4 (PII is prohibited).
 */
export function trackWaitlistSignup() {
  gtag('event', 'waitlist_signup', {
    event_category: 'Conversion',
    event_label: 'Waitlist',
    value: 1,
  })
  gtag('event', 'generate_lead', {
    currency: 'INR',
    value: 0,
  })
}

/* ─── Scroll Depth (auto) ───────────────────────── */
/**
 * Call once on mount to enable GA4's built-in scroll-depth tracking.
 * GA4 will fire 'scroll' events at 25 / 50 / 75 / 90 % page depth.
 * (Already enabled by default in GA4 Enhanced Measurement — no code needed.)
 */
export function enableScrollDepthTracking() {
  // GA4 handles this natively via Enhanced Measurement.
  // This function is a no-op kept here as documentation.
}
