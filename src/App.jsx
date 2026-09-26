import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Search, ShoppingCart, User, Star, Truck, Shield, Clock, ChevronRight, TrendingUp, Package, Award, Headphones, ArrowRight, CheckCircle, Menu, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import './App.css';
import ChatAssistant from './ChatAssistant';

// Custom Facebook SVG Icon since lucide-react does not have Facebook
const FacebookIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappLink = "https://api.whatsapp.com/send?phone=%2B971552383697&text=Hi%20NOOR%20Al%20FAJR!%20I%20need%20a%20quote%20for%20packaging%20materials.";
  const phone = "+971 55 238 3697";
  const email = "nooralfajrpck@gmail.com";
  const facebookLink = "https://www.facebook.com/profile.php?id=61577771881337";

  const categories = [
    {
      name: "Corrugated Boxes",
      desc: "Custom sizes for every need.",
      count: "150+ Items",
      image: "https://images.unsplash.com/photo-1607166452427-7e4477c1e4d0?q=80&w=800&auto=format&fit=crop",
      cta: "Explore Boxes →"
    },
    {
      name: "Stretch Film",
      desc: "Industrial & retail wrapping.",
      count: "80+ Items",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      cta: "Explore Film →"
    },
    {
      name: "Bubble Wrap",
      desc: "Premium protection rolls.",
      count: "60+ Items",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800&auto=format&fit=crop",
      cta: "Explore Wrap →"
    },
    {
      name: "Tapes & Adhesives",
      desc: "Sealing solutions that last.",
      count: "45+ Items",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
      cta: "Explore Tapes →"
    },
    {
      name: "Cleaning Supplies",
      desc: "Commercial-grade cleaning.",
      count: "90+ Items",
      image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=800&auto=format&fit=crop",
      cta: "Explore Cleaning →"
    },
    {
      name: "Bulk Orders",
      desc: "Volume discounts available.",
      count: "🔥 Best Deals",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
      cta: "Get Quote →",
      highlight: true
    },
  ];

  const products = [
    {
      name: "Heavy Duty Corrugated Box",
      price: "From AED 45",
      image: "https://images.unsplash.com/photo-1607166452427-7e4477c1e4d0?q=80&w=600&auto=format&fit=crop",
      badge: "NEW",
      badgeType: "new",
      rating: 4.9,
      reviews: 128
    },
    {
      name: "Premium Stretch Film 500mm",
      price: "From AED 25",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
      badge: "HOT",
      badgeType: "hot",
      rating: 4.8,
      reviews: 95
    },
    {
      name: "Bubble Wrap Roll 100m",
      price: "From AED 15",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=600&auto=format&fit=crop",
      badge: "NEW",
      badgeType: "new",
      rating: 4.7,
      reviews: 67
    },
    {
      name: "Clear Packing Tape 48mm",
      price: "From AED 8",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop",
      badge: "LIMITED",
      badgeType: "limited",
      rating: 4.6,
      reviews: 203
    },
    {
      name: "Industrial Foam Sheet",
      price: "From AED 35",
      image: "https://images.unsplash.com/photo-1616401784845-180882f6d9c2?q=80&w=600&auto=format&fit=crop",
      rating: 4.5,
      reviews: 44
    },
    {
      name: "Cleaning Chemical Kit",
      price: "From AED 120",
      image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=600&auto=format&fit=crop",
      badge: "HOT",
      badgeType: "hot",
      rating: 4.9,
      reviews: 89
    },
    {
      name: "Masking Tape Roll",
      price: "From AED 12",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop",
      badge: "NEW",
      badgeType: "new",
      rating: 4.4,
      reviews: 56
    },
    {
      name: "Padded Mailer Envelope",
      price: "From AED 30",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600&auto=format&fit=crop",
      badge: "LIMITED",
      badgeType: "limited",
      rating: 4.8,
      reviews: 112
    },
  ];

  const reviews = [
    {
      rating: 5,
      text: "Best packaging supplier in the UAE. Corrugated boxes arrived perfectly cut and the quality is outstanding. Will order again for our warehouse operations!",
      name: "Mohammed Al Rashidi",
      location: "Dubai • Verified Buyer",
      initials: "MR"
    },
    {
      rating: 5,
      text: "WhatsApp response was instant. Ordered stretch film in bulk for our e-commerce business. Great pricing and next-day delivery across Sharjah!",
      name: "Fatima Hassan",
      location: "Sharjah • Verified Buyer",
      initials: "FH"
    },
    {
      rating: 5,
      text: "We switched from our previous supplier to NOOR AL FAJR six months ago. Quality is consistently higher and their cleaning supplies are excellent.",
      name: "Ahmed Khalil",
      location: "Abu Dhabi • Verified Buyer",
      initials: "AK"
    },
  ];

  const industries = [
    { name: "E-Commerce", icon: ShoppingCart, desc: "Shipping & packaging solutions" },
    { name: "Manufacturing", icon: Package, desc: "Industrial-grade materials" },
    { name: "Warehousing", icon: Truck, desc: "Storage & protection" },
    { name: "Retail", icon: Award, desc: "Branded packaging" },
    { name: "Hospitality", icon: Star, desc: "Disposable & cleaning" },
    { name: "Workshops", icon: Shield, desc: "Tools & workshop supplies" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="app">
      {/* Promotion Banner */}
      <motion.div
        className="announcement-bar"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="announcement-content">
          <span className="announcement-tag">LIMITED OFFER</span>
          <p className="announcement-text">
            FREE DELIVERY ACROSS UAE ON ORDERS OVER <strong>AED 500</strong>
          </p>
          <a href="#products" className="announcement-link">Shop Deals →</a>
        </div>
      </motion.div>

      {/* Header */}
      <motion.header
        className="site-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-container">
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={22} />
          </button>

          <a href="#" className="brand-logo">NOOR AL FAJR</a>

          <nav className="desktop-nav">
            <ul className="nav-list">
              <li><a href="#categories" className="nav-item">Packaging</a></li>
              <li><a href="#products" className="nav-item">Products</a></li>
              <li><a href="#industries" className="nav-item">Industries</a></li>
              <li><a href="#why-us" className="nav-item">Why Us</a></li>
              <li><a href="#deals" className="nav-item nav-deals"><span className="badge-dot"></span>Deals</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="action-btn" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="action-btn" aria-label="Account">
              <User size={20} />
            </button>
            <motion.a
              href={facebookLink}
              className="header-facebook-btn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              title="Follow us on Facebook"
              aria-label="Facebook Page"
            >
              <FacebookIcon size={18} />
            </motion.a>
            <motion.a
              href={whatsappLink}
              className="header-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              title="Chat on WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer open">
          <div className="drawer-overlay" onClick={() => setMobileMenuOpen(false)}></div>
          <motion.div
            className="drawer-panel"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="drawer-header">
              <span className="brand-logo">NOOR AL FAJR</span>
              <button className="drawer-close" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="drawer-body">
              <ul className="mobile-nav-list">
                <li><a href="#categories" onClick={() => setMobileMenuOpen(false)}>Packaging <span className="badge-lime">NEW</span></a></li>
                <li><a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a></li>
                <li><a href="#industries" onClick={() => setMobileMenuOpen(false)}>Industries</a></li>
                <li><a href="#deals" onClick={() => setMobileMenuOpen(false)}>Deals <span className="badge-discount">-20%</span></a></li>
                <li><a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why NOOR AL FAJR</a></li>
                <li><a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a></li>
              </ul>
              <div className="drawer-footer">
                <div className="support-pill">
                  <MessageCircle size={18} />
                  <span>WhatsApp: {phone}</span>
                </div>
                <div className="support-pill" style={{ marginTop: '8px' }}>
                  <FacebookIcon size={18} />
                  <a href={facebookLink} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    Follow on Facebook
                  </a>
                </div>
                <p className="drawer-note">Fast Delivery Across UAE • Quality Guaranteed</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <motion.section
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-bg-overlay"></div>
          <div className="hero-container">
            <motion.div
              className="hero-text-col"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="floating-tag">
                <span className="tag-pulse"></span>
                <span>NEW SEASON 2026</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="hero-headline">
                PREMIUM PACKAGING<br />
                <span className="headline-highlight">FOR MODERN BUSINESS.</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="hero-subheading">
                Discover quality packaging, protective materials, and industrial supplies selected for businesses across the UAE.
              </motion.p>

              <motion.div variants={itemVariants} className="hero-cta-group">
                <motion.a
                  href="#products"
                  className="btn btn-lime"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>SHOP NOW</span>
                  <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href={whatsappLink}
                  className="btn btn-outline-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>GET A QUOTE</span>
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants} className="hero-trust-bar">
                <div className="trust-item">
                  <span className="trust-bold">24-48h</span>
                  <span className="trust-label">Express Delivery</span>
                </div>
                <div className="trust-divider"></div>
                <div className="trust-item">
                  <span className="trust-bold">100%</span>
                  <span className="trust-label">Quality Guaranteed</span>
                </div>
                <div className="trust-divider"></div>
                <div className="trust-item">
                  <span className="trust-bold">B2B</span>
                  <span className="trust-label">Bulk Pricing</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual-col"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-visual-card">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop"
                  alt="NOOR AL FAJR Premium Packaging Materials"
                  className="hero-main-img"
                  loading="eager"
                />
                {/* Floating Trending Widget */}
                <motion.div
                  className="floating-product-card card-top-right"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="product-mini-thumb">
                    <img
                      src="https://images.unsplash.com/photo-1607166452427-7e4477c1e4d0?q=80&w=300&auto=format&fit=crop"
                      alt="Corrugated Box"
                    />
                  </div>
                  <div className="product-mini-info">
                    <span className="mini-tag">Trending</span>
                    <p className="mini-title">Premium Stretch Film</p>
                    <span className="mini-price">AED 299</span>
                  </div>
                </motion.div>

                {/* Floating Review Widget */}
                <motion.div
                  className="floating-product-card card-bottom-left"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="rating-stars-mini">★★★★★ 4.9</div>
                  <p className="mini-review-quote">"Best packaging supplier in the UAE."</p>
                  <span className="mini-buyer-tag">✓ Verified Buyer</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Shop by Category */}
        <motion.section
          className="section categories-section"
          id="categories"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container">
            <div className="section-header">
              <div className="section-subtitle">CURATED SELECTIONS</div>
              <h2 className="section-title">SHOP BY CATEGORY</h2>
            </div>

            <motion.div
              className="categories-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {categories.map((cat, idx) => (
                <motion.a
                  key={idx}
                  href="#products"
                  className={`category-card ${cat.highlight ? 'category-card-highlight' : ''}`}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="category-img-wrap">
                    <img src={cat.image} alt={cat.name} loading="lazy" />
                    <div className="category-overlay"></div>
                  </div>
                  <div className="category-content">
                    <span className={`category-count ${cat.highlight ? 'badge-lime-pill' : ''}`}>{cat.count}</span>
                    <h3 className="category-title">{cat.name}</h3>
                    <p className="category-desc">{cat.desc}</p>
                    <span className="category-cta">{cat.cta}</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Products */}
        <motion.section
          id="products"
          className="section section-products"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container">
            <div className="section-header-flex">
              <div>
                <div className="section-subtitle">POPULAR THIS WEEK</div>
                <h2 className="section-title">FEATURED PRODUCTS</h2>
                <p className="section-lead">Quality packaging materials trusted by businesses across the UAE.</p>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="link-arrow">
                REQUEST BULK PRICING →
              </a>
            </div>

            <motion.div
              className="products-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  className="product-card"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  {product.badge && (
                    <span className={`product-badge badge-${product.badgeType}`}>
                      {product.badge}
                    </span>
                  )}
                  <div className="product-img-wrap">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-details">
                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <span className="rating-text">{product.rating} ({product.reviews})</span>
                    </div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price}</p>
                    <motion.a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-action-btn"
                      whileHover={{ x: 4 }}
                    >
                      ORDER NOW →
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Big Promotional Section */}
        <section className="weekend-drop-section" id="deals">
          <div className="weekend-drop-bg">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
              alt="Bulk Order Sale"
              loading="lazy"
            />
            <div className="weekend-overlay"></div>
          </div>
          <div className="container weekend-drop-container">
            <motion.div
              className="weekend-drop-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="drop-badge">BULK ORDER DEALS</div>
              <h2 className="drop-title">VOLUME DISCOUNTS</h2>
              <div className="drop-discount">UP TO 30% OFF</div>
              <p className="drop-desc">
                Special pricing on bulk orders for corrugated boxes, stretch film, tape, and cleaning supplies.
                Perfect for warehouses, e-commerce businesses, and manufacturers.
              </p>
              <div className="drop-actions">
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lime btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>GET BULK QUOTE</span>
                  <ArrowRight size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries We Serve */}
        <motion.section
          className="section industries-section"
          id="industries"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container">
            <div className="section-header text-center">
              <div className="section-subtitle">WHO WE SERVE</div>
              <h2 className="section-title">INDUSTRIES WE SERVE</h2>
              <p className="section-lead max-w-md mx-auto">
                Trusted by businesses across the UAE — from startups to enterprise operations.
              </p>
            </div>

            <motion.div
              className="industries-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <motion.div
                    key={idx}
                    className="industry-card"
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                  >
                    <div className="industry-icon-wrap">
                      <Icon size={28} />
                    </div>
                    <h3 className="industry-title">{ind.name}</h3>
                    <p className="industry-desc">{ind.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* Why NOOR AL FAJR */}
        <motion.section
          className="section why-section"
          id="why-us"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container">
            <div className="section-header text-center">
              <div className="section-subtitle">THE NOOR PROMISE</div>
              <h2 className="section-title">WHY BUSINESSES CHOOSE US</h2>
              <p className="section-lead max-w-md mx-auto">
                We simplify packaging procurement with quality products, fair pricing, and customer-first support.
              </p>
            </div>

            <motion.div
              className="why-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div className="why-card" variants={itemVariants} whileHover={{ y: -6 }}>
                <div className="why-icon-wrap"><Truck size={28} /></div>
                <h3 className="why-title">Express Delivery</h3>
                <p className="why-desc">24-48 hour delivery across all UAE Emirates. Same-day available in Sharjah & Dubai.</p>
              </motion.div>
              <motion.div className="why-card" variants={itemVariants} whileHover={{ y: -6 }}>
                <div className="why-icon-wrap"><Shield size={28} /></div>
                <h3 className="why-title">Quality Guaranteed</h3>
                <p className="why-desc">Every product meets international quality standards. 100% satisfaction or replacement.</p>
              </motion.div>
              <motion.div className="why-card" variants={itemVariants} whileHover={{ y: -6 }}>
                <div className="why-icon-wrap"><Headphones size={28} /></div>
                <h3 className="why-title">WhatsApp Support</h3>
                <p className="why-desc">Instant response via WhatsApp. Get quotes, track orders, and resolve issues in minutes.</p>
              </motion.div>
              <motion.div className="why-card" variants={itemVariants} whileHover={{ y: -6 }}>
                <div className="why-icon-wrap"><Award size={28} /></div>
                <h3 className="why-title">Bulk Pricing</h3>
                <p className="why-desc">Competitive pricing for volume orders. Custom solutions for enterprise packaging needs.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Brand Story */}
        <motion.section
          className="section brand-story-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container">
            <div className="story-grid">
              <div className="story-content">
                <div className="section-subtitle">OUR MISSION</div>
                <h2 className="story-headline">
                  QUALITY PACKAGING.<br />
                  RELIABLE SUPPLY.
                </h2>
                <p className="story-body">
                  NOOR AL FAJR brings together premium packaging materials designed for modern businesses — from corrugated boxes and stretch film to industrial tapes and cleaning supplies. We focus on products worth buying, straightforward pricing, and a supply experience that stays simple.
                </p>
                <p className="story-highlight">
                  "Quality materials. Fair prices. Express delivery across the UAE."
                </p>
                <div className="story-actions">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                    <span>CONTACT US →</span>
                  </a>
                </div>
              </div>
              <div className="story-media">
                <div className="story-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop"
                    alt="NOOR AL FAJR Warehouse"
                    loading="lazy"
                  />
                  <div className="story-badge">
                    <span className="story-badge-year">EST. 2020</span>
                    <span className="story-badge-text">Trusted UAE Supplier</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Customer Reviews */}
        <motion.section
          className="section reviews-section"
          id="reviews"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container">
            <div className="section-header text-center">
              <div className="section-subtitle">AUTHENTIC EXPERIENCES</div>
              <h2 className="section-title">WHAT CUSTOMERS SAY</h2>
              <p className="section-lead max-w-md mx-auto">Real reviews from businesses who trust NOOR AL FAJR every day.</p>
            </div>

            <motion.div
              className="reviews-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {reviews.map((review, idx) => (
                <motion.div key={idx} className="review-card" variants={itemVariants}>
                  <div className="review-stars">★★★★★</div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="reviewer-meta">
                    <div className="reviewer-avatar">{review.initials}</div>
                    <div className="reviewer-details">
                      <span className="reviewer-name">{review.name}</span>
                      <span className="reviewer-location">{review.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="promise-strip">
              <div className="promise-item">
                <Shield size={20} />
                <span>100% Quality Guaranteed</span>
              </div>
              <div className="promise-item">
                <Truck size={20} />
                <span>Free Delivery Over AED 500</span>
              </div>
              <div className="promise-item">
                <MessageCircle size={20} />
                <span>Instant WhatsApp Support</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA / Get Quote Section */}
        <section className="section newsletter-section">
          <div className="container">
            <motion.div
              className="newsletter-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="newsletter-content">
                <span className="newsletter-badge">GET STARTED</span>
                <h2 className="newsletter-title">NEED A CUSTOM QUOTE?</h2>
                <p className="newsletter-sub">Get personalized pricing for bulk orders. WhatsApp us for the fastest response.</p>
                <div className="newsletter-actions">
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lime btn-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle size={20} />
                    <span>WHATSAPP US NOW</span>
                  </motion.a>
                  <motion.a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="btn btn-outline-dark btn-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone size={20} />
                    <span>CALL {phone}</span>
                  </motion.a>
                </div>
                <p className="newsletter-disclaimer">Response within minutes • No obligation • Free delivery across UAE</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-grid">
            <div className="footer-col footer-brand-col">
              <span className="brand-logo footer-logo">NOOR AL FAJR</span>
              <p className="footer-tagline">"Quality Packaging. Reliable Supply."</p>
              <p className="footer-bio">
                Premium packaging materials, cleaning supplies, and industrial products. Trusted across the UAE for quality and express delivery.
              </p>
              <div className="footer-contact-pill">
                <MessageCircle size={16} />
                <span>WhatsApp: </span>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">{phone}</a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">PRODUCTS</h4>
              <ul className="footer-links">
                <li><a href="#categories">Corrugated Boxes</a></li>
                <li><a href="#categories">Stretch Film</a></li>
                <li><a href="#categories">Bubble Wrap</a></li>
                <li><a href="#categories">Tapes & Adhesives</a></li>
                <li><a href="#categories">Cleaning Supplies</a></li>
                <li><a href="#deals">Bulk Deals</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">COMPANY</h4>
              <ul className="footer-links">
                <li><a href="#why-us">About Us</a></li>
                <li><a href="#industries">Industries We Serve</a></li>
                <li><a href="#reviews">Customer Reviews</a></li>
                <li><a href={facebookLink} target="_blank" rel="noopener noreferrer">Facebook</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">CONTACT</h4>
              <ul className="footer-links">
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`tel:${phone.replace(/\s/g, '')}`}>
                    <Phone size={14} /> {phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${email}`}>
                    <Mail size={14} /> {email}
                  </a>
                </li>
                <li>
                  <a href="https://maps.google.com/?q=Industrial+Area+6+Sharjah+UAE" target="_blank" rel="noopener noreferrer">
                    <MapPin size={14} /> Industrial Area 6, Sharjah
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 NOOR AL FAJR Packing & Packaging Material Trading. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* AI Chat Assistant */}
      <ChatAssistant whatsappNumber="+971552383697" />
    </div>
  );
}
