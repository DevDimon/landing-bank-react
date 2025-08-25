import React from "react";

function Footer() {
    return (
        <>
            <section class="footer">
                <div class="footer-left">
                    <div class="footer-left-bottom">
                        <div class="footer-left-logo">
                            <div class="footer-logo-pic">
                                <img src="./assets/pic/logo-big.png" alt="logo" />
                            </div>
                            <div class="footer-logo-text">Finex Bank</div>
                        </div>
                        <div class="footer-left-bottom-title">Subscribe</div>
                        <div class="footer-input">
                            <input type="text" placeholder="Enter your email address" />
                            <button class="footer-left-bottom-button gradient-to-right">
                                <img src="./assets/pic/whiteArrow.png" alt="whiteArrow" />
                            </button>
                        </div>
                        <div class="footer-left-bottom-text">Subscribe to receive the latest updates, special offers,
                            and exclusive promotions directly in your inbox!</div>
                        <div class="footer-left-bottom-pics">
                            <div class="footer-social-media">
                                <img src="./assets/pic/instagram.png" alt="instagram" />
                            </div>
                            <div class="footer-social-media">
                                <img src="./assets/pic/facebook.png" alt="facebook" />
                            </div>
                            <div class="footer-social-media">
                                <img src="./assets/pic/linkedin.png" alt="linkedin" />
                            </div>
                            <div class="footer-social-media">
                                <img src="./assets/pic/twitter.png" alt="twitter" />
                            </div>
                        </div>
                        <div class="footer-left-bottom-copy">© 2024 TechFlow. All rights reserved.</div>
                    </div>
                </div>
                <div class="footer-right">
                    <div class="footer-right-links">
                        <div class="footer-right-links-support">
                            <div class="footer-right-links-support-title">Support</div>
                            <div class="footer-right-links-support-text">
                                <div class="footer-right-links-text gradient-text">+ FAQ</div>
                                <div class="footer-right-links-text">Contact Us</div>
                                <div class="footer-right-links-text">Account Help</div>
                                <div class="footer-right-links-text">Security Center</div>
                                <div class="footer-right-links-text">Feedback</div>
                            </div>
                        </div>
                        <div class="footer-right-links-services">
                            <div class="footer-right-links-services-title">Services</div>
                            <div class="footer-right-links-services-text">
                                <div class="footer-right-links-text gradient-text">+ About</div>
                                <div class="footer-right-links-text">Solutions</div>
                                <div class="footer-right-links-text">Product</div>
                                <div class="footer-right-links-text">Company</div>
                                <div class="footer-right-links-text">Insights</div>
                            </div>
                        </div>
                        <div class="footer-right-links-contacts">
                            <div class="footer-right-links-contacts-title">Contacts</div>
                            <div class="footer-right-links-contacts-text">
                                <div class="footer-right-links-text gradient-text">+bank@finex.com</div>
                                <div class="footer-right-links-text">+1 (555) 123-4567</div>
                                <div class="footer-right-links-text">123 Tech Street, </div>
                                <div class="footer-right-links-text">Suite 100, City, </div>
                                <div class="footer-right-links-text">Country</div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-right-bottom">
                        <div class="footer-right-bottom-policy border-underline">Privacy Policy</div>
                        <div class="footer-right-bottom-terms border-underline">Terms of Service</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;