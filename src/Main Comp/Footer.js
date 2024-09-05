import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

function Footer(){
return(
    <section className="contact">
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center pb-1 my-1 pt-3 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24"></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© {currentYear} Company, Inc</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="https://twitter.com/i/flow/login"><img src="./images/twitter-x.svg" height="30px" alt="tweet"/></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="https://www.facebook.com/"><img src="./images/facebook.svg" height="30px" alt="facebook"/></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com/"><img src="./images/instagram.svg" height="30px" alt="insta"/></a></li>
                </ul>
            </footer>
        </div>
    </section>
);
}
export default Footer;