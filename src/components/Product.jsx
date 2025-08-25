import React from "react";

function Product() {
    return (
        <>
            <section class="product" id="product">
                <div class="product-cards">
                    <div class="product-card">
                        <div class="product-card-pic">
                            <img src="./assets/pic/product1.png" alt="product1" />
                        </div>
                        <div class="product-card-title">Spending Power</div>
                        <div class="product-card-text">Our credit card offers personalized limits and exclusive rewards
                            to support your purchases and provide greater financial freedom.</div>
                    </div>
                    <div class="product-card">
                        <div class="product-card-pic">
                            <img src="./assets/pic/product2.png" alt="product2" />
                        </div>
                        <div class="product-card-title">High-Yield</div>
                        <div class="product-card-text">Build your future with a high-yield savings account, combining
                            security and convenience to help your funds grow steadily.</div>
                    </div>
                    <div class="product-card">
                        <div class="product-card-pic">
                            <img src="./assets/pic/product3.png" alt="product3" />
                        </div>
                        <div class="product-card-title">Investments</div>
                        <div class="product-card-text">Explore a variety of investment options designed to meet your
                            financial goals, with personalized support and analysis.</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;