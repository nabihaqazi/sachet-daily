export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                    <a href="#" className="nav__logo footer__logo">
                        <svg className="nav__logo-icon" viewBox="0 0 32 32" fill="none">
                            <rect x="4" y="10" width="24" height="14" rx="7" fill="currentColor" opacity="0.15" />
                            <rect x="4" y="10" width="24" height="14" rx="7" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="16" y1="10" x2="16" y2="24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                        </svg>
                        Sachet Daily
                    </a>
                    <p>End supplement fatigue forever. One sachet, everything your body needs.</p>
                </div>
                <div className="footer__links">
                    <div className="footer__col">
                        <h5>Product</h5>
                        <ul>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#ingredients">Ingredients</a></li>
                            <li><a href="#waitlist">Order</a></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h5>Company</h5>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h5>Legal</h5>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2025 Sachet Daily. All rights reserved.</p>
                <p className="footer__disclaimer">
                    These statements have not been evaluated by the Food and Drug Administration.
                    This product is not intended to diagnose, treat, cure, or prevent any disease.
                </p>
            </div>
        </footer>
    )
}
