import { Social } from "./Social"
import logo from '../images/logo.png';

export const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="information">
                <section className="description">
                    <img src={ logo } />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima cumque suscipit animi omnis ipsa doloremque rerum </p>
                </section>
                <section className="about-us">
                    <h2>About Us</h2>
                    <ul>
                        <li><a href="">Vision</a></li>
                        <li><a href="">Articles</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Service terms</a></li>
                        <li><a href="">Donate</a></li>
                    </ul>
                </section>
                <section className="discover">
                    <h2>Discover</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Books</a></li>
                        <li><a href="">Author</a></li>
                        <li><a href="">Subjects</a></li>
                        <li><a href="">Advanced Search</a></li>
                    </ul>
                </section>
                <section className="account">
                    <h2>My Account</h2>
                    <ul>
                        <li><a href="">Sign In</a></li>
                        <li><a href="">View Cart</a></li>
                        <li><a href="">My Wishtlist</a></li>
                        <li><a href="">Track My Order</a></li>
                    </ul>
                </section>
                <section className="help">
                    <h2>Help</h2>
                    <ul>
                        <li><a href="">Help center</a></li>
                        <li><a href="">Report a problem</a></li>
                        <li><a href="">Suggesting edits</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </section>
            </div>
            <div className="footer-bottom">
                <span>© 2022 All rights reserved. Free HTML Template by <a href="">TemplatesJungle</a></span>
                <Social />
            </div>
        </div>
    )
}
