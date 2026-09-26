// ==========================================================================
// VELORA E-COMMERCE ENGINE (Powered by UI/UX Pro Max)
// High-Performance Interactive Architecture
// ==========================================================================

// Global Product Catalog
const VELORA_CATALOG = [
  {
    id: 'prod-1',
    name: 'Wireless Smart Watch Pro',
    category: 'electronics',
    categoryName: 'Electronics',
    tag: 'TRENDING',
    rating: 4.8,
    reviewsCount: 142,
    price: 5999,
    oldPrice: 8999,
    discount: '33% OFF',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80'
    ],
    variants: [
      { name: 'Matte Obsidian', color: '#111111' },
      { name: 'Silver Steel', color: '#d1d5db' },
      { name: 'Midnight Blue', color: '#1e3a8a' }
    ],
    description: 'Ultra-responsive AMOLED curved display, 14-day battery life, continuous biometric health tracking, sleep monitoring, and IP68 waterproof rating engineered for modern living.'
  },
  {
    id: 'prod-2',
    name: 'Studio ANC Wireless Headphones',
    category: 'electronics',
    categoryName: 'Electronics',
    tag: 'BEST SELLER',
    rating: 4.9,
    reviewsCount: 218,
    price: 9499,
    oldPrice: 14999,
    discount: '36% OFF',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80'
    ],
    variants: [
      { name: 'Carbon Black', color: '#18181b' },
      { name: 'Pure White', color: '#ffffff' },
      { name: 'Sandstone Gold', color: '#d4af37' }
    ],
    description: 'Active Noise Cancellation with 40mm high-resolution beryllium drivers, spatial audio immersion, ultra-soft memory foam ear cushions, and 45-hour playback.'
  },
  {
    id: 'prod-3',
    name: 'Minimalist Modular Commuter Backpack',
    category: 'fashion',
    categoryName: 'Fashion & Bags',
    tag: 'NEW',
    rating: 4.7,
    reviewsCount: 89,
    price: 4799,
    oldPrice: 6500,
    discount: '26% OFF',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80'
    ],
    variants: [
      { name: 'Stealth Black', color: '#1c1917' },
      { name: 'Slate Gray', color: '#64748b' }
    ],
    description: 'Waterproof ballistic nylon with dedicated 16” laptop compartment, hidden passport security pockets, ergonomic padded straps, and magnetic quick-access latch.'
  },
  {
    id: 'prod-4',
    name: 'Handcrafted Ceramic Pour-Over Set',
    category: 'home',
    categoryName: 'Home & Living',
    tag: 'POPULAR',
    rating: 4.9,
    reviewsCount: 110,
    price: 3499,
    oldPrice: 4800,
    discount: '27% OFF',
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80'
    ],
    variants: [
      { name: 'Matte Charcoal', color: '#27272a' },
      { name: 'Bone Ceramic', color: '#f4f4f5' }
    ],
    description: 'Artisanal ceramic dripper with heat-resistant borosilicate glass carafe for the ultimate morning coffee ritual. Includes 40 unbleached filters.'
  },
  {
    id: 'prod-5',
    name: 'Hydra-Glow Botanical Skincare Serum',
    category: 'beauty',
    categoryName: 'Beauty & Wellness',
    tag: 'TRENDING',
    rating: 4.8,
    reviewsCount: 95,
    price: 2899,
    oldPrice: 3800,
    discount: '24% OFF',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
      'https://images.unsplash.com/photo-1608248597359-0a6e355fb5dc?w=800&q=80'
    ],
    variants: [
      { name: '30ml Essential', color: '#e4d5b7' },
      { name: '50ml Deluxe', color: '#c5a880' }
    ],
    description: 'Clean organic formulation with Niacinamide, Triple Hyaluronic Acid, and Botanical Vitamin C for 24-hour radiant moisture barrier support.'
  },
  {
    id: 'prod-6',
    name: 'Titanium Minimalist Chronograph',
    category: 'accessories',
    categoryName: 'Accessories',
    tag: 'MOST LOVED',
    rating: 4.9,
    reviewsCount: 167,
    price: 7999,
    oldPrice: 11500,
    discount: '30% OFF',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80'
    ],
    variants: [
      { name: 'Gunmetal Titanium', color: '#374151' },
      { name: 'Brushed Silver', color: '#e5e7eb' },
      { name: 'Rose Accent', color: '#b45309' }
    ],
    description: 'Japanese quartz chronograph movement, sapphire crystal anti-reflective glass, and genuine Italian calfskin leather strap with quick-release bars.'
  },
  {
    id: 'prod-7',
    name: 'Precision Grooming & Trimmer Kit',
    category: 'beauty',
    categoryName: 'Beauty & Grooming',
    tag: 'NEW',
    rating: 4.7,
    reviewsCount: 76,
    price: 3799,
    oldPrice: 4999,
    discount: '24% OFF',
    images: [
      'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80',
      'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=800&q=80'
    ],
    variants: [
      { name: 'Matte Black', color: '#09090b' },
      { name: 'Chrome Silver', color: '#9ca3af' }
    ],
    description: 'Self-sharpening stainless steel micro-blades, 90-minute fast USB-C charge, IPX7 100% washable, and 5 adjustable precision length guards.'
  },
  {
    id: 'prod-8',
    name: 'Ultra-Comfort Heavyweight Hoodie',
    category: 'fashion',
    categoryName: 'Fashion',
    tag: 'HOT',
    rating: 4.8,
    reviewsCount: 132,
    price: 3299,
    oldPrice: 4500,
    discount: '27% OFF',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80'
    ],
    variants: [
      { name: 'Obsidian Black', color: '#111111' },
      { name: 'Cream Oat', color: '#fef3c7' },
      { name: 'Sage Olive', color: '#3f6212' }
    ],
    description: '450 GSM heavyweight organic cotton fleece with double-lined hood, seamless kangaroo pouch, and drop-shoulder relaxed street silhouette.'
  }
];

// App State
const state = {
  cart: [
    {
      productId: 'prod-1',
      variant: 'Matte Obsidian',
      quantity: 1,
      price: 5999
    },
    {
      productId: 'prod-5',
      variant: '30ml Essential',
      quantity: 1,
      price: 2899
    }
  ],
  wishlist: ['prod-1', 'prod-6'],
  freeDeliveryThreshold: 3000,
  activeFilter: 'all',
  selectedModalProduct: null,
  selectedModalVariant: null,
  selectedModalQty: 1
};

// ==========================================================================
// Formatting & Utilities
// ==========================================================================
function formatPKR(num) {
  return 'Rs. ' + Number(num).toLocaleString('en-PK');
}

function showToast(message, icon = '✓') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================================================
// Product Rendering
// ==========================================================================
function createProductCardHTML(product) {
  const isWishlisted = state.wishlist.includes(product.id);
  const initialVariant = product.variants[0];

  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-media" onclick="openProductModal('${product.id}')">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        ${product.discount ? `<span class="product-discount-badge">${product.discount}</span>` : ''}
        <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}"
                onclick="event.stopPropagation(); toggleWishlist('${product.id}', this)"
                title="Save to Wishlist" aria-label="Save to Wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <div class="quick-view-overlay-btn">QUICK VIEW</div>
      </div>
      <div class="product-body">
        <span class="product-category-sub">${product.categoryName}</span>
        <h3 class="product-title" onclick="openProductModal('${product.id}')">${product.name}</h3>
        <div class="product-rating">
          <span class="stars-score">★★★★★</span>
          <span class="rating-num">${product.rating}</span>
          <span class="rating-count">(${product.reviewsCount})</span>
        </div>
        <div class="product-price-row">
          <span class="current-price">${formatPKR(product.price)}</span>
          ${product.oldPrice ? `<span class="old-price">${formatPKR(product.oldPrice)}</span>` : ''}
        </div>
        <div class="product-variants">
          ${product.variants.map((v, i) => `
            <span class="variant-dot ${i === 0 ? 'active' : ''}"
                  style="background-color: ${v.color}"
                  title="${v.name}"
                  onclick="selectCardVariant(this, '${product.id}', '${v.name}')"></span>
          `).join('')}
        </div>
        <button class="btn-add-cart" onclick="addToCart('${product.id}', '${initialVariant.name}', 1)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          ADD TO CART
        </button>
      </div>
    </div>
  `;
}

function renderCatalog() {
  const trendingContainer = document.getElementById('trendingProductsGrid');
  const arrivalsContainer = document.getElementById('newArrivalsGrid');
  const bestSellersContainer = document.getElementById('bestSellersGrid');

  if (trendingContainer) {
    trendingContainer.innerHTML = VELORA_CATALOG.slice(0, 4).map(createProductCardHTML).join('');
  }
  if (arrivalsContainer) {
    arrivalsContainer.innerHTML = VELORA_CATALOG.slice(2, 6).map(createProductCardHTML).join('');
  }
  if (bestSellersContainer) {
    bestSellersContainer.innerHTML = VELORA_CATALOG.slice(4, 8).map(createProductCardHTML).join('');
  }
}

function selectCardVariant(el, productId, variantName) {
  const parent = el.closest('.product-variants');
  if (parent) {
    parent.querySelectorAll('.variant-dot').forEach(d => d.classList.remove('active'));
    el.classList.add('active');
  }
  const card = el.closest('.product-card');
  const addBtn = card.querySelector('.btn-add-cart');
  if (addBtn) {
    addBtn.setAttribute('onclick', `addToCart('${productId}', '${variantName}', 1)`);
  }
}

// ==========================================================================
// Cart State & Slide-over Drawer
// ==========================================================================
function updateCartUI() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isFreeDelivery = subtotal >= state.freeDeliveryThreshold;
  const deliveryFee = (isFreeDelivery || subtotal === 0) ? 0 : 250;
  const grandTotal = subtotal + deliveryFee;

  // Header counters & total
  const cartCounter = document.getElementById('cartCount');
  if (cartCounter) cartCounter.textContent = totalItems;

  const headerTotal = document.getElementById('headerCartTotal');
  if (headerTotal) headerTotal.textContent = formatPKR(subtotal);

  // Cart Drawer
  const countLabel = document.getElementById('cartItemsCountLabel');
  if (countLabel) countLabel.textContent = `(${totalItems} ${totalItems === 1 ? 'item' : 'items'})`;

  // Free shipping bar
  const shippingMsg = document.getElementById('shippingBarMsg');
  const shippingFill = document.getElementById('shippingProgressFill');
  if (shippingMsg && shippingFill) {
    if (subtotal === 0) {
      shippingMsg.innerHTML = `Add <strong>${formatPKR(state.freeDeliveryThreshold)}</strong> more for <strong>FREE DELIVERY</strong>`;
      shippingFill.style.width = '0%';
    } else if (isFreeDelivery) {
      shippingMsg.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked <strong>FREE DELIVERY!</strong>`;
      shippingFill.style.width = '100%';
      shippingFill.style.backgroundColor = '#10b981';
    } else {
      const remaining = state.freeDeliveryThreshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / state.freeDeliveryThreshold) * 100));
      shippingMsg.innerHTML = `Add <strong>${formatPKR(remaining)}</strong> more to get <strong>FREE DELIVERY</strong>`;
      shippingFill.style.width = `${pct}%`;
      shippingFill.style.backgroundColor = 'var(--obsidian)';
    }
  }

  // Cart items container
  const itemsContainer = document.getElementById('cartItemsContainer');
  if (itemsContainer) {
    if (state.cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 16px; color: #a1a1aa;">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 6px;">Your cart is empty</h4>
          <p style="font-size: 0.85rem; color: #666; margin-bottom: 20px;">Discover trending picks and enjoy fast delivery across Pakistan.</p>
          <button class="btn btn-dark" onclick="closeCartDrawer(); window.location.href='#trending';">START SHOPPING</button>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = state.cart.map(item => {
        const prod = VELORA_CATALOG.find(p => p.id === item.productId);
        if (!prod) return '';
        return `
          <div class="cart-item">
            <img src="${prod.images[0]}" alt="${prod.name}" class="cart-item-img">
            <div class="cart-item-info">
              <h4 class="cart-item-title">${prod.name}</h4>
              <span class="cart-item-variant">${item.variant}</span>
              <span class="cart-item-price">${formatPKR(item.price)}</span>
              <div class="cart-item-stepper">
                <button class="stepper-btn" onclick="updateCartQty('${item.productId}', '${item.variant}', -1)">−</button>
                <span class="stepper-val">${item.quantity}</span>
                <button class="stepper-btn" onclick="updateCartQty('${item.productId}', '${item.variant}', 1)">+</button>
              </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.productId}', '${item.variant}')" title="Remove Item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        `;
      }).join('');
    }
  }

  // Totals in Drawer
  const subtotalEl = document.getElementById('cartSubtotal');
  const deliveryEl = document.getElementById('cartDelivery');
  const totalEl = document.getElementById('cartTotal');

  if (subtotalEl) subtotalEl.textContent = formatPKR(subtotal);
  if (deliveryEl) deliveryEl.innerHTML = isFreeDelivery ? '<span class="free-badge">FREE</span>' : formatPKR(deliveryFee);
  if (totalEl) totalEl.textContent = formatPKR(grandTotal);

  // Totals in Checkout
  const checkoutTotal = document.getElementById('checkoutTotalVal');
  if (checkoutTotal) checkoutTotal.textContent = formatPKR(grandTotal);
}

function addToCart(productId, variantName, quantity = 1) {
  const prod = VELORA_CATALOG.find(p => p.id === productId);
  if (!prod) return;

  const targetVariant = variantName || prod.variants[0].name;
  const existing = state.cart.find(i => i.productId === productId && i.variant === targetVariant);

  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      productId,
      variant: targetVariant,
      quantity,
      price: prod.price
    });
  }

  updateCartUI();
  showToast(`Added "${prod.name}" to cart!`);
  openCartDrawer();
}

function updateCartQty(productId, variantName, delta) {
  const item = state.cart.find(i => i.productId === productId && i.variant === variantName);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId, variantName);
    } else {
      updateCartUI();
    }
  }
}

function removeFromCart(productId, variantName) {
  state.cart = state.cart.filter(i => !(i.productId === productId && i.variant === variantName));
  updateCartUI();
  showToast('Item removed from cart');
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawerBackdrop');
  if (drawer) drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawerBackdrop');
  if (drawer) drawer.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// Wishlist Logic
// ==========================================================================
function toggleWishlist(productId, btnElement) {
  const index = state.wishlist.indexOf(productId);
  const prod = VELORA_CATALOG.find(p => p.id === productId);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    if (btnElement) btnElement.classList.remove('active');
    showToast(`Removed from wishlist`);
  } else {
    state.wishlist.push(productId);
    if (btnElement) btnElement.classList.add('active');
    showToast(`Saved "${prod ? prod.name : 'Item'}" to wishlist!`, '♥');
  }

  const wishlistCount = document.getElementById('wishlistCount');
  if (wishlistCount) wishlistCount.textContent = state.wishlist.length;
}

// ==========================================================================
// Product Quick-View / Detail Modal
// ==========================================================================
function openProductModal(productId) {
  const product = VELORA_CATALOG.find(p => p.id === productId);
  if (!product) return;

  state.selectedModalProduct = product;
  state.selectedModalVariant = product.variants[0];
  state.selectedModalQty = 1;

  const contentContainer = document.getElementById('productDetailContent');
  if (!contentContainer) return;

  contentContainer.innerHTML = `
    <div class="product-gallery">
      <img src="${product.images[0]}" alt="${product.name}" class="main-preview-img" id="modalMainImg">
      <div class="gallery-thumbs">
        ${product.images.map((img, i) => `
          <img src="${img}" class="gallery-thumb ${i === 0 ? 'active' : ''}"
               onclick="switchModalImg(this, '${img}')" alt="Gallery thumb">
        `).join('')}
      </div>
    </div>
    <div class="product-info-col">
      <span class="product-category-sub">${product.categoryName}</span>
      <h2 class="modal-product-title">${product.name}</h2>
      <div class="product-rating">
        <span class="stars-score">★★★★★</span>
        <span class="rating-num">${product.rating}</span>
        <span class="rating-count">(${product.reviewsCount} verified reviews)</span>
      </div>
      <div class="modal-price-row">
        <span class="modal-current-price">${formatPKR(product.price)}</span>
        ${product.oldPrice ? `<span class="modal-old-price">${formatPKR(product.oldPrice)}</span>` : ''}
        ${product.discount ? `<span class="modal-discount-tag">${product.discount}</span>` : ''}
      </div>
      <p style="font-size: 0.95rem; color: #555; line-height: 1.6; margin-bottom: 20px;">
        ${product.description}
      </p>

      <div class="modal-option-label">Select Color / Variant:</div>
      <div class="modal-variants-row" id="modalVariants">
        ${product.variants.map((v, i) => `
          <button class="modal-color-pill ${i === 0 ? 'active' : ''}"
                  onclick="selectModalVariant(this, '${v.name}')">
            <span class="badge-dot" style="background-color: ${v.color}"></span>
            ${v.name}
          </button>
        `).join('')}
      </div>

      <div class="modal-qty-actions">
        <div class="modal-qty-stepper">
          <button type="button" onclick="changeModalQty(-1)">−</button>
          <span id="modalQtyNum">1</span>
          <button type="button" onclick="changeModalQty(1)">+</button>
        </div>
      </div>

      <div class="modal-action-btns">
        <button class="btn btn-lime btn-lg btn-block" onclick="addModalProductToCart()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          ADD TO CART
        </button>
        <button class="btn btn-dark btn-block" onclick="buyModalProductNow()">
          BUY NOW WITH CASH ON DELIVERY
        </button>
      </div>

      <div class="modal-trust-list">
        <span>🚚 <strong>Express Delivery:</strong> Delivered in 24-48 hours across Pakistan.</span>
        <span>↩️ <strong>Easy 7-Day Returns:</strong> No questions asked return & exchange policy.</span>
        <span>🔐 <strong>Guaranteed Authentic:</strong> 100% genuine products with manufacturer warranty.</span>
      </div>
    </div>
  `;

  const modal = document.getElementById('productModalBackdrop');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeProductModal() {
  const modal = document.getElementById('productModalBackdrop');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function switchModalImg(thumb, src) {
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) mainImg.src = src;
}

function selectModalVariant(pill, variantName) {
  document.querySelectorAll('.modal-color-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  if (state.selectedModalProduct) {
    state.selectedModalVariant = state.selectedModalProduct.variants.find(v => v.name === variantName);
  }
}

function changeModalQty(delta) {
  state.selectedModalQty = Math.max(1, state.selectedModalQty + delta);
  const qtyEl = document.getElementById('modalQtyNum');
  if (qtyEl) qtyEl.textContent = state.selectedModalQty;
}

function addModalProductToCart() {
  if (!state.selectedModalProduct) return;
  addToCart(state.selectedModalProduct.id, state.selectedModalVariant.name, state.selectedModalQty);
  closeProductModal();
}

function buyModalProductNow() {
  if (!state.selectedModalProduct) return;
  addToCart(state.selectedModalProduct.id, state.selectedModalVariant.name, state.selectedModalQty);
  closeProductModal();
  openCheckoutModal();
}

// ==========================================================================
// Checkout Flow (Pakistan Optimized)
// ==========================================================================
function openCheckoutModal() {
  closeCartDrawer();
  const modal = document.getElementById('checkoutModalBackdrop');
  if (modal) {
    updateCartUI();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModalBackdrop');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  if (state.cart.length === 0) {
    showToast('Your cart is empty!', '⚠️');
    return;
  }

  const name = document.getElementById('cName').value.trim();
  const phone = document.getElementById('cPhone').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const province = document.getElementById('cProvince').value;
  const city = document.getElementById('cCity').value.trim();
  const area = document.getElementById('cArea').value.trim();
  const address = document.getElementById('cAddress').value.trim();

  const payInput = document.querySelector('input[name="paymentMethod"]:checked');
  const payMethod = payInput ? payInput.value.toUpperCase() : 'COD';

  const orderId = 'VEL-' + Math.floor(100000 + Math.random() * 900000);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isFreeDelivery = subtotal >= state.freeDeliveryThreshold;
  const delivery = isFreeDelivery ? 0 : 250;
  const total = subtotal + delivery;

  // Format WhatsApp Link
  const itemsBreakdown = state.cart.map(i => {
    const p = VELORA_CATALOG.find(prod => prod.id === i.productId);
    return `• ${p ? p.name : 'Product'} (${i.variant}) x${i.quantity} = ${formatPKR(i.price * i.quantity)}`;
  }).join('%0A');

  const waText = `*New Order Placed on VELORA*%0A%0A*Order ID:* ${orderId}%0A*Customer:* ${name}%0A*Phone:* ${phone}%0A*Delivery City:* ${city}, ${province}%0A*Address:* ${area}, ${address}%0A*Payment Method:* ${payMethod}%0A%0A*Ordered Items:*%0A${itemsBreakdown}%0A%0A*Subtotal:* ${formatPKR(subtotal)}%0A*Delivery:* ${isFreeDelivery ? 'FREE' : formatPKR(delivery)}%0A*Total Amount:* ${formatPKR(total)}%0A%0APlease confirm my order delivery!`;
  const waURL = `https://wa.me/923001234567?text=${waText}`;

  // Update Confirmation Modal
  const orderIdEl = document.getElementById('confirmedOrderId');
  if (orderIdEl) orderIdEl.textContent = '#' + orderId;

  const waBtn = document.getElementById('orderWhatsappLink');
  if (waBtn) waBtn.href = waURL;

  // Reset Cart and display Success Modal
  state.cart = [];
  updateCartUI();
  closeCheckoutModal();

  const successModal = document.getElementById('orderSuccessBackdrop');
  if (successModal) {
    successModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeSuccessModal() {
  const successModal = document.getElementById('orderSuccessBackdrop');
  if (successModal) successModal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// Live Search Modal
// ==========================================================================
function openSearchModal() {
  const modal = document.getElementById('searchModalBackdrop');
  if (modal) {
    modal.classList.add('open');
    const input = document.getElementById('liveSearchInput');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 150);
      filterSearch('');
    }
    document.body.style.overflow = 'hidden';
  }
}

function closeSearchModal() {
  const modal = document.getElementById('searchModalBackdrop');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function filterSearch(query) {
  const container = document.getElementById('searchResultsContainer');
  if (!container) return;

  const q = query.toLowerCase().trim();
  const results = VELORA_CATALOG.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.categoryName.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );

  if (results.length === 0) {
    container.innerHTML = `<div style="padding: 36px 20px; text-align: center; color: #888;">No products found matching "<strong>${query}</strong>".</div>`;
    return;
  }

  container.innerHTML = results.map(p => `
    <div class="search-result-item" onclick="closeSearchModal(); openProductModal('${p.id}');">
      <img src="${p.images[0]}" alt="${p.name}" class="search-thumb">
      <div class="search-info">
        <h4 class="search-title">${p.name}</h4>
        <span style="font-size: 0.75rem; color: #888;">${p.categoryName}</span>
        <span class="search-price">${formatPKR(p.price)}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// Countdown Timer for "The Weekend Drop"
// ==========================================================================
function startCountdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(23, 59, 59, 0);

  function update() {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;
    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const d = document.getElementById('cdDays');
    const h = document.getElementById('cdHours');
    const m = document.getElementById('cdMins');
    const s = document.getElementById('cdSecs');

    if (d) d.textContent = String(days).padStart(2, '0');
    if (h) h.textContent = String(hours).padStart(2, '0');
    if (m) m.textContent = String(mins).padStart(2, '0');
    if (s) s.textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// Event Listeners & Binding
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCartUI();
  startCountdown();

  // Wishlist counter init
  const wishlistCount = document.getElementById('wishlistCount');
  if (wishlistCount) wishlistCount.textContent = state.wishlist.length;

  // Header Scroll Effect
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 30);
    }
  });

  // Cart Drawer Triggers
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');

  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartDrawerBackdrop) {
    cartDrawerBackdrop.addEventListener('click', (e) => {
      if (e.target === cartDrawerBackdrop) closeCartDrawer();
    });
  }

  // Checkout Button
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);

  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const checkoutModalBackdrop = document.getElementById('checkoutModalBackdrop');
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckoutModal);
  if (checkoutModalBackdrop) {
    checkoutModalBackdrop.addEventListener('click', (e) => {
      if (e.target === checkoutModalBackdrop) closeCheckoutModal();
    });
  }

  // Checkout Form Submit
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

  // Success Modal
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');
  const orderSuccessBackdrop = document.getElementById('orderSuccessBackdrop');
  if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeSuccessModal);
  if (orderSuccessBackdrop) {
    orderSuccessBackdrop.addEventListener('click', (e) => {
      if (e.target === orderSuccessBackdrop) closeSuccessModal();
    });
  }

  // Product Modal Close
  const closeProductModalBtn = document.getElementById('closeProductModalBtn');
  const productModalBackdrop = document.getElementById('productModalBackdrop');
  if (closeProductModalBtn) closeProductModalBtn.addEventListener('click', closeProductModal);
  if (productModalBackdrop) {
    productModalBackdrop.addEventListener('click', (e) => {
      if (e.target === productModalBackdrop) closeProductModal();
    });
  }

  // Search Modal Triggers
  const searchTriggerBtn = document.getElementById('searchTriggerBtn');
  const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');
  const searchModalBackdrop = document.getElementById('searchModalBackdrop');
  const liveSearchInput = document.getElementById('liveSearchInput');

  if (searchTriggerBtn) searchTriggerBtn.addEventListener('click', openSearchModal);
  if (closeSearchModalBtn) closeSearchModalBtn.addEventListener('click', closeSearchModal);
  if (searchModalBackdrop) {
    searchModalBackdrop.addEventListener('click', (e) => {
      if (e.target === searchModalBackdrop) closeSearchModal();
    });
  }
  if (liveSearchInput) {
    liveSearchInput.addEventListener('input', (e) => filterSearch(e.target.value));
  }

  // Mobile Menu Drawer
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (drawerOverlay && mobileDrawer) {
    drawerOverlay.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (drawerCloseBtn && mobileDrawer) {
    drawerCloseBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletterEmail');
      const feedback = document.getElementById('newsletterFeedback');
      if (input && feedback) {
        feedback.textContent = '🎉 10% discount coupon VELORA10 unlocked and copied to clipboard!';
        feedback.className = 'form-feedback success';
        showToast('Coupon code VELORA10 unlocked!', '🏷️');
        input.value = '';
      }
    });
  }

  // Category Filtering in Trending Section
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-filter');
      const grid = document.getElementById('trendingProductsGrid');
      if (grid) {
        const filtered = cat === 'all'
          ? VELORA_CATALOG.slice(0, 4)
          : VELORA_CATALOG.filter(p => p.category === cat);
        grid.innerHTML = (filtered.length ? filtered : VELORA_CATALOG.slice(0, 4))
          .map(createProductCardHTML).join('');
      }
    });
  });

  // Deal card quick triggers
  document.querySelectorAll('.btn-deal-action').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Opening Deal Selection...');
      const target = document.getElementById('trending');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Account Trigger & Auth Management
  const accountTriggerBtn = document.getElementById('accountTriggerBtn');
  const accountModalBackdrop = document.getElementById('accountModalBackdrop');
  const closeAccountModalBtn = document.getElementById('closeAccountModalBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  function updateAuthState() {
    let savedUser = null;
    try {
      savedUser = JSON.parse(localStorage.getItem('velora_user'));
    } catch (e) {
      savedUser = null;
    }

    const mobileAccountText = document.getElementById('mobileAccountText');

    if (savedUser && savedUser.isLoggedIn) {
      const displayName = savedUser.name || 'Member';
      if (accountTriggerBtn) {
        accountTriggerBtn.innerHTML = `
          <div style="width:24px;height:24px;border-radius:50%;background:var(--obsidian);color:var(--accent-lime);font-size:0.75rem;font-weight:800;display:flex;align-items:center;justify-content:center;">
            ${displayName.charAt(0).toUpperCase()}
          </div>
          <span class="action-label" style="font-weight:700;color:var(--obsidian);">Hi, ${displayName.split(' ')[0]}</span>
        `;
        accountTriggerBtn.setAttribute('title', `Logged in as ${displayName}`);
      }

      if (mobileAccountText) {
        mobileAccountText.textContent = `👤 Hi, ${displayName.split(' ')[0]} (My Profile)`;
      }

      // Populate Modal Fields
      const profileUserName = document.getElementById('profileUserName');
      const profileUserEmail = document.getElementById('profileUserEmail');
      const userAvatarInitial = document.getElementById('userAvatarInitial');
      if (profileUserName) profileUserName.textContent = displayName;
      if (profileUserEmail) profileUserEmail.textContent = savedUser.email || savedUser.phone || 'VIP Customer';
      if (userAvatarInitial) userAvatarInitial.textContent = displayName.charAt(0).toUpperCase();
    } else {
      if (accountTriggerBtn) {
        accountTriggerBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span class="action-label">Sign In</span>
        `;
        accountTriggerBtn.setAttribute('title', 'Sign In or Register');
      }
      if (mobileAccountText) {
        mobileAccountText.textContent = '👤 Account / Sign In';
      }
    }
  }

  // Check URL parameters for login / register toast
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('logged_in')) {
    let savedUser = null;
    try { savedUser = JSON.parse(localStorage.getItem('velora_user')); } catch (e) {}
    const name = savedUser ? savedUser.name : 'Shopper';
    showToast(`Welcome back, ${name}! Enjoy your shopping.`, '⚡');
    window.history.replaceState({}, document.title, window.location.pathname);
  } else if (urlParams.has('registered')) {
    showToast('🎉 Welcome to VELORA Club! Coupon VELORA10 applied.', '🎁');
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  updateAuthState();

  if (accountTriggerBtn) {
    accountTriggerBtn.addEventListener('click', () => {
      let savedUser = null;
      try { savedUser = JSON.parse(localStorage.getItem('velora_user')); } catch (e) {}

      if (savedUser && savedUser.isLoggedIn) {
        if (accountModalBackdrop) accountModalBackdrop.classList.add('open');
      } else {
        window.location.href = 'login.html';
      }
    });
  }

  if (closeAccountModalBtn && accountModalBackdrop) {
    closeAccountModalBtn.addEventListener('click', () => {
      accountModalBackdrop.classList.remove('open');
    });
  }

  if (accountModalBackdrop) {
    accountModalBackdrop.addEventListener('click', (e) => {
      if (e.target === accountModalBackdrop) {
        accountModalBackdrop.classList.remove('open');
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('velora_user');
      if (accountModalBackdrop) accountModalBackdrop.classList.remove('open');
      updateAuthState();
      showToast('Signed out successfully.', '👋');
    });
  }

  // Wishlist Trigger
  const wishlistTriggerBtn = document.getElementById('wishlistTriggerBtn');
  if (wishlistTriggerBtn) {
    wishlistTriggerBtn.addEventListener('click', () => {
      showToast(`You have ${state.wishlist.length} items saved in your Wishlist.`, '♥');
    });
  }

  // Escape key closes all open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeProductModal();
      closeCheckoutModal();
      closeSearchModal();
      closeSuccessModal();
      if (mobileDrawer) {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  });
});
