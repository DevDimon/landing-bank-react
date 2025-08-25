import React from "react";

function Company() {
    return (
        <>
            <section class="company" id="company">
                <div class="company-left">
                    <div class="company-left-pic">
                        <img src="./assets/pic/company1.png" alt="company1" />
                    </div>
                </div>
                <div class="company-right">
                    <div class="company-title-text">
                        <div class="company-title">Manage Your Money with Confidence</div>
                        <div class="company-text">Discover innovative financial solutions designed to simplify how you
                            handle money. With our digital platform, sending and receiving funds has never been easier
                            or more secure.</div>
                    </div>
                    <div class="company-info">
                        <div class="company-info-pic">
                            <img src="./assets/pic/company2.png" alt="company2" />
                        </div>
                        <div class="company-subinfo">
                            <div class="company-info-title">Seamless Transfers Anytime, Anywhere</div>
                            <div class="company-info-text">Send and receive money instantly with our easy-to-use
                                platform, giving you the flexibility to manage your finances.</div>
                        </div>
                    </div>
                    <div class="company-info">
                        <div class="company-info-pic">
                            <img src="./assets/pic/company3.png" alt="company3" />
                        </div>
                        <div class="company-subinfo">
                            <div class="company-info-title">Security You Can Rely On</div>
                            <div class="company-info-text">With top-tier encryption and real-time monitoring, your
                                financial transactions are safe and secure, ensuring peace.</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Company;