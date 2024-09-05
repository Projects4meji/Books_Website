import React from "react";

const priceStyles = {
    borderRadius: "10% 10% 0 0", 
    marginRight: "0", 
    marginLeft: "0", 
    display: "contents", 
    left: "15%"
}

function Pricing() {
return(
    <section className="contact">
            <div className="container">
                <div className="container py-3" style={priceStyles}>
                    <header>
                        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                            <h2 className="display-4 fw-normal text-body-emphasis">Pricing</h2>
                            <p className="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
                        </div>
                    </header>            
                    <main>
                        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">Free</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>10 users included</li>
                                            <li>2 GB of storage</li>
                                            <li>Email support</li>
                                        </ul>
                                        <button type="button" className="w-100 btn btn-lg btn-outline-dark">Sign up for free</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">Pro</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>20 users included</li>
                                            <li>10 GB of storage</li>
                                            <li>Priority email support</li>
                                        </ul>
                                        <button type="button" className="w-100 btn btn-lg btn-dark">Get started</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3 text-bg-dark">
                                        <h4 className="my-0 fw-normal">Enterprise</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>30 users included</li>
                                            <li>15 GB of storage</li>
                                            <li>Phone and email support</li>
                                        </ul>
                                        <button type="button" className="w-100 btn btn-lg btn-dark">Contact us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}

export default Pricing;