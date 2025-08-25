import React from "react";

function Testimonial() {
    return (
        <>
            <section class="testimonial">
                <div class="testimonial-top">
                    <div class="testimonial-title">What Our Customers Say About Us</div>
                    <div class="testimonial-text">At Finex Bank, we take pride in delivering exceptional digital banking
                        experiences. Here’s what our customers have to say about how we’ve helped them manage their
                        finances with ease and confidence.</div>
                </div>
                <div class="testimonial-bottom">
                    <div class="testimonial-arrow arrowLeft">
                        <button class="button-round">
                            <img src="./assets/pic/arrowLeft.png" alt="arrowLeft" />
                        </button>
                    </div>
                    <div class="testimonial-pic">
                        <img src="./assets/pic/testimonial1.png" alt="testimonial1" />
                    </div>
                    <div class="testimonial-card">
                        <div class="testimonial-card-text">"Finex Bank has made managing my business finances so much
                            easier. The platform is simple to use, and I can quickly track my expenses and make payments
                            without any hassle. The customer support is top-notch, always available to help whenever I
                            need assistance. It’s been a game-changer for my financial management, and I couldn’t be
                            more satisfied."</div>
                        <div class="testimonial-card-bottom">
                            <div class="testimonial-card-bottom-left">
                                <div class="testimonial-card-bottom-left-title">John Anderson</div>
                                <div class="testimonial-card-bottom-left-text">Client Bank</div>
                            </div>
                            <div class="testimonial-card-bottom-right">
                                <img src="./assets/pic/testimonial2.png" alt="testimonial2" />
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-arrow arrowRight">
                        <button class="button-round gradient-to-bottom">
                            <img src="./assets/pic/arrowRight.png" alt="arrowRight" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial;