import React from 'react';



const Footer = () => {
    return (
        <footer className="footer bg-dark text-light">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4 footer-section">
                        <h4>SPTask's <i class="fa-solid fa-pen"></i></h4>
                        <p>Manage your tasks efficiently and effortlessly.</p>
                    </div>
                    <div className="col-md-4 footer-section">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Home</a></li>
                            <li><a href="/view" className="text-light">Tasks</a></li>
                            <li><a href="https://github.com/sp1862004" className="text-light">Profile</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://github.com/sp1862004" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://github.com/sp1862004" className="text-light me-3"><i className="fab fa-twitter"></i></a>
                            <a href="https://github.com/sp1862004" className="text-light"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center py-3 bg-secondary">
                <p className="mb-0">&copy; 2024 SPTask's <i class="fa-solid fa-pen"></i>. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
