import React from "react";

function Hero() {
    return (
        <>
            <section class="hero">
                <div class="nav">
                    <div class="logo">
                        <div class="logo-pic">
                            <img src="./assets/pic/logo.png" alt="logo" />
                        </div>
                        <div class="logo-text">Finex Bank</div>
                    </div>
                    <ul class="menu">
                        <li><a href="#about">About</a></li>
                        <li><a href="#solutions">Solutions</a></li>
                        <li><a href="#product">Product</a></li>
                        <li><a href="#company">Company</a></li>
                        <li><a href="#insight">Insight</a></li>
                    </ul>
                    <div class="nav-buttons">
                        <button class="login">Login</button>
                        <button class="signup gradient-to-right">Sign up</button>
                    </div>
                </div>
                <div class="hero-content">
                    <div class="hero-left">
                        <div class="hero-text">
                            <div class="hero-title">The Digital Banking for Your Business</div>
                            <div class="hero-subtitle">We provide innovative financial solutions tailored to meet your
                                business needs. Simplify your finances and unlock the freedom to grow with confidence
                                and agility.</div>
                            <div class="hero-buttons">
                                <button class="open-account gradient-to-right">Open Account</button>
                                <button class="watch-tutorial">
                                    <div class="watch-img">
                                        <img src="./assets/pic/watch.png" alt="watch" />
                                    </div>
                                    <div>Watch Tutorial</div>
                                </button>
                            </div>
                        </div>
                        <div class="leaders-text">
                            <div class="leaders-title">Backed by Leaders</div>
                            <ul class="leaders-list">
                                <li>
                                    <img src="./assets/pic/openaipic.png" alt="openaipic" />
                                    OpenAi
                                </li>
                                <li>
                                    <img src="./assets/pic/mspic.png" alt="mspic" />
                                    Microsoft
                                </li>
                                <li>
                                    <img src="./assets/pic/googlepic.png" alt="googlepic" />
                                    Google
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="hero-right">
                        <div class="hero-card">
                            <img src="./assets/pic/person1.png" alt="person1" id="person1" />
                            <img src="./assets/pic/Graph1.png" alt="Graph1" id="graph1" />
                            <div class="card-up">
                                <img src="./assets/pic/Card1.png" alt="card1" />
                                <img src="./assets/pic/Card2.png" alt="card2" />
                            </div>
                            <div class="card-bottom">
                                <img src="./assets/pic/Card3.png" alt="card3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;