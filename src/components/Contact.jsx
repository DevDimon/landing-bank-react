import React from "react";

function Contact() {
    return (
        <>
            <section class="contact">
                <div class="contact-border">
                    <div class="contact-pic">
                        <img src="./assets/pic/contact2.png" alt="contact2" class="contact2-pic" />
                        <img src="./assets/pic/contact1.png" alt="contact1" class="contact1-pic" />
                    </div>
                    <div class="contact-info">
                        <div class="contact-info-title">Digital Banking for Your Business</div>
                        <div class="contact-info-text">Discover innovative financial solutions designed to streamline
                            your finances and empower your business. With Finex Bank, managing your money has never been
                            easier or more efficient. Start your journey towards financial freedom today.</div>
                        <div class="contact-info-buttons">
                            <button class="open-account gradient-to-right">Download the App</button>
                            <button class="watch-tutorial">
                                <div class="watch-img">
                                    <img src="./assets/pic/watch.png" alt="watch" />
                                </div>
                                Chat with Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;