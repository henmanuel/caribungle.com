import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Social from '../section-components/social';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <div>
                <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
                    <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="ltn__top-bar-menu">
                                        <ul>
                                            <li><a href="mailto:caribungle@gmail.com" target="_blank"><i
                                                className="icon-mail"/> caribungle@gmail.com</a></li>
                                            <li><a href="https://goo.gl/maps/w8Ccnh5L6rVPpAxR9" target="_blank"><i
                                                className="icon-placeholder"/> San Rafáel, Cahuita, Limón, CR</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="top-bar-right text-end">
                                        <div className="ltn__top-bar-menu">
                                            <ul>
                                                <li>
                                                    <Social/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="site-logo-wrap">
                                        <div className="site-logo go-top">
                                            <Link to="/"><img className={'siteLogo'} src={publicUrl + "assets/img/caribungleLogo.svg"} alt="Logo"/></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col header-menu-column">
                                    <div className="header-menu d-none d-xl-block">
                                        <nav>
                                            <div className="ltn__main-menu go-top">
                                                <ul>
                                                    <li className="menu-icon"><Link to="/">Home</Link>
                                                        <ul className="sub-menu menu-pages-img-show">
                                                            <li>
                                                                <Link to="/">Home Style 01</Link>
                                                                <img
                                                                    src={publicUrl + "assets/img/home-demos/home-1.jpg"}
                                                                    alt="#"/>
                                                            </li>
                                                            <li>
                                                                <Link to="/home-v2">Home Style 02</Link>
                                                                <img
                                                                    src={publicUrl + "assets/img/home-demos/home-2.jpg"}
                                                                    alt="#"/>
                                                            </li>
                                                            <li>
                                                                <Link to="/home-v3">Home Style 03</Link>
                                                                <img
                                                                    src={publicUrl + "assets/img/home-demos/home-3.jpg"}
                                                                    alt="#"/>
                                                            </li>
                                                            <li>
                                                                <Link to="/home-v4">Home Style 04</Link>
                                                                <img
                                                                    src={publicUrl + "assets/img/home-demos/home-4.jpg"}
                                                                    alt="#"/>
                                                            </li>
                                                            <li>
                                                                <Link to="/home-v5">Home Style 05 <span
                                                                    className="menu-item-badge">video</span></Link>
                                                                <img
                                                                    src={publicUrl + "assets/img/home-demos/home-5.jpg"}
                                                                    alt="#"/>
                                                            </li>
                                                            <li>
                                                                <Link to="/home-v6">Home Style 06</Link>
                                                                <img
                                                                    src={publicUrl + "assets/img/home-demos/home-6.jpg"}
                                                                    alt="#"/>
                                                            </li>
                                                            <li>
                                                                <Link to="/home-v7">Home Style 07</Link>
                                                                <img
                                                                    src={publicUrl + "assets/img/home-demos/home-7.jpg"}
                                                                    alt="#"/>
                                                            </li>
                                                            <li>
                                                                <Link to="/home-v8">Home Style 08</Link>
                                                                <img
                                                                    src={publicUrl + "assets/img/home-demos/home-8.jpg"}
                                                                    alt="#"/>
                                                            </li>
                                                            <li>
                                                                <Link to="/home-v9">Home Style 09</Link>
                                                                <img
                                                                    src={publicUrl + "assets/img/home-demos/home-9.jpg"}
                                                                    alt="#"/>
                                                            </li>
                                                            <li>
                                                                <Link to="/home-v10">Home Style 10</Link>
                                                                <img
                                                                    src={publicUrl + "assets/img/home-demos/home-11.jpg"}
                                                                    alt="#"/>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-icon"><Link to="/about">About</Link>
                                                        <ul>
                                                            <li><Link to="/about">About</Link></li>
                                                            <li><Link to="/service">Services</Link></li>
                                                            <li><Link to="/service-details">Service Details</Link></li>
                                                            <li><Link to="/portfolio">Portfolio</Link></li>
                                                            <li><Link to="/portfolio-v2">Portfolio - 02</Link></li>
                                                            <li><Link to="/portfolio-details">Portfolio Details</Link>
                                                            </li>
                                                            <li><Link to="/team">Team</Link></li>
                                                            <li><Link to="/team-details">Team Details</Link></li>
                                                            <li><Link to="/faq">FAQ</Link></li>
                                                            <li><Link to="/location">Google Map Locations</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-icon"><Link to="/shop">Shop</Link>
                                                        <ul>
                                                            <li><Link to="/shop">Shop</Link></li>
                                                            <li><Link to="/shop-grid">Shop Grid</Link></li>
                                                            <li><Link to="/shop-left-sidebar">Shop Left sidebar</Link>
                                                            </li>
                                                            <li><Link to="/shop-right-sidebar">Shop Right sidebar</Link>
                                                            </li>
                                                            <li><Link to="/product-details">Shop Details</Link></li>
                                                            <li><Link to="/cart">Cart</Link></li>
                                                            <li><Link to="/checkout">Checkout</Link></li>
                                                            <li><Link to="/my-account">My Account</Link></li>
                                                            <li><Link to="/login">Sign in</Link></li>
                                                            <li><Link to="/register">Register</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-icon"><Link to="/blog-grid">News</Link>
                                                        <ul>
                                                            <li><Link to="/blog">News</Link></li>
                                                            <li><Link to="/blog-grid">News Grid</Link></li>
                                                            <li><Link to="/blog-left-sidebar">News Left sidebar</Link>
                                                            </li>
                                                            <li><Link to="/blog-right-sidebar">News Right sidebar</Link>
                                                            </li>
                                                            <li><Link to="/blog-details">News details</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-icon"><Link to="#">Pages</Link>
                                                        <ul className="mega-menu">
                                                            <li><a href="#">Inner Pages</a>
                                                                <ul>
                                                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                                                    <li><Link to="/portfolio-v2">Portfolio - 02</Link>
                                                                    </li>
                                                                    <li><Link to="/portfolio-details">Portfolio
                                                                        Details</Link></li>
                                                                    <li><Link to="/team">Team</Link></li>
                                                                    <li><Link to="/team-details">Team Details</Link>
                                                                    </li>
                                                                    <li><Link to="/faq">FAQ</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link to="#">Inner Pages</Link>
                                                                <ul>
                                                                    <li><Link to="/history">History</Link></li>
                                                                    <li><Link to="/add-listing">Add Listing</Link></li>
                                                                    <li><Link to="/location">Google Map Locations</Link>
                                                                    </li>
                                                                    <li><Link to="/404">404</Link></li>
                                                                    <li><Link to="/contact">Contact</Link></li>
                                                                    <li><Link to="/coming-soon">Coming Soon</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link to="#">Shop Pages</Link>
                                                                <ul>
                                                                    <li><Link to="/shop">Shop</Link></li>
                                                                    <li><Link to="/shop-left-sidebar">Shop Left
                                                                        sidebar</Link></li>
                                                                    <li><Link to="/shop-right-sidebar">Shop right
                                                                        sidebar</Link></li>
                                                                    <li><Link to="/shop-grid">Shop Grid</Link></li>
                                                                    <li><Link to="/product-details">Shop details </Link>
                                                                    </li>
                                                                    <li><Link to="/cart">Cart</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link to="/shop"><img
                                                                src={publicUrl + "assets/img/banner/menu-banner-1.jpg"}
                                                                alt="#"/></Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
                    <div className="ltn__utilize-menu-inner ltn__scrollbar">
                        <div className="ltn__utilize-menu-head">
                            <div className="site-logo">
                                <Link to="/"><img src={publicUrl + "assets/img/caribungleLogo.svg"} alt="Logo"/></Link>
                            </div>
                            <button className="ltn__utilize-close">×</button>
                        </div>
                        <div className="ltn__utilize-menu-search-form">
                            <form action={"#"}>
                                <input type="text" placeholder="Search..."/>
                                <button><i className="fas fa-search"/></button>
                            </form>
                        </div>
                        <div className="ltn__utilize-menu">
                            <ul>
                                <li><a href="#">Home</a>
                                    <ul className="sub-menu">
                                        <li><Link to="/">Home Style 01</Link></li>
                                        <li><Link to="/home-v2">Home Style 02</Link></li>
                                        <li><Link to="/home-v3">Home Style 03</Link></li>
                                        <li><Link to="/home-v4">Home Style 04</Link></li>
                                        <li><Link to="/home-v5">Home Style 05 <span
                                            className="menu-item-badge">video</span></Link></li>
                                        <li><Link to="/home-v6">Home Style 06</Link></li>
                                        <li><Link to="/home-v7">Home Style 07</Link></li>
                                        <li><Link to="/home-v8">Home Style 08</Link></li>
                                        <li><Link to="/home-v9">Home Style 09</Link></li>
                                        <li><Link to="/home-v10">Home Style 10</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about">About</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/service">Services</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/portfolio-v2">Portfolio - 02</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="/team-details">Team Details</Link></li>
                                        <li><Link to="/faq">FAQ</Link></li>
                                        <li><Link to="/location">Google Map Locations</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/shop">Shop</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/shop-grid">Shop Grid</Link></li>
                                        <li><Link to="/shop-left-sidebar">Shop Left sidebar</Link></li>
                                        <li><Link to="/shop-right-sidebar">Shop Right sidebar</Link></li>
                                        <li><Link to="/product-details">Shop Details</Link></li>
                                        <li><Link to="/cart">Cart</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                        <li><Link to="/my-account">My Account</Link></li>
                                        <li><Link to="/login">Sign in</Link></li>
                                        <li><Link to="/register">Register</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/blog-grid">News</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/blog">News</Link></li>
                                        <li><Link to="/blog-grid">News Grid</Link></li>
                                        <li><Link to="/blog-left-sidebar">News Left sidebar</Link></li>
                                        <li><Link to="/blog-right-sidebar">News Right sidebar</Link></li>
                                        <li><Link to="/blog-details">News details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/service">Services</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/portfolio-2">Portfolio - 02</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="/team-details">Team Details</Link></li>
                                        <li><Link to="/faq">FAQ</Link></li>
                                        <li><Link to="/history">History</Link></li>
                                        <li><Link to="/add-listing">Add Listing</Link></li>
                                        <li><Link to="/locations">Google Map Locations</Link></li>
                                        <li><Link to="/404">404</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/coming-soon">Coming Soon</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="ltn__social-media-2">
                            <ul>
                                <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"/></a></li>
                                <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"/></a></li>
                                <li><a href="#" title="Instagram"><i className="fab fa-instagram"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
