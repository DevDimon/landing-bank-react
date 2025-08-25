import React from "react";

function Insights() {
    return (
        <>
            <section class="insight" id="insight">
                <div class="insight-title">
                    Safeguard Your Investments with Insightful Precision
                </div>
                <div class="insight-cards">
                    <div class="insight-card reverse-card">
                        <div class="insight-card-text gradient-text">Protect Your Finances with Precision</div>
                        <div class="insight-card-pic">
                            <img src="./assets/pic/insight1.png" alt="insight1" />
                        </div>
                        <div class="insight-bottom-text1 gradient-text">90.000 <span>New Users</span></div>
                    </div>
                    <div class="insight-card">
                        <div class="insight-card-text">Secure Your Assets with Accuracy</div>
                        <div class="insight-card-pic">
                            <img src="./assets/pic/insight2.png" alt="insight2" />
                        </div>
                    </div>
                    <div class="insight-card">
                        <div class="insight-card-text">Financial solutions for optimized</div>
                        <div class="insight-card-pic">
                            <img src="./assets/pic/insight3.png" alt="insight3" />
                        </div>
                        <div class="insight-bottom-text2">We offer innovative financial solutions designed to fit your
                            business needs.</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Insights;