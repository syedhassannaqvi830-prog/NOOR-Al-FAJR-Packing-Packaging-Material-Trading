/* ==========================================================================
   VELORA AI HELP CHATBOT - JavaScript Engine
   Agent Router API Integration
   ========================================================================== */

(function() {
  'use strict';

  // ── Configuration ──────────────────────────────────────────────────────
  const CONFIG = {
    API_ENDPOINT: 'http://localhost:20128',
    API_KEY: 'sk-0a89dc15e9a55685-64ad30-15aab669',
    MODEL: 'auto',
    MAX_HISTORY: 20,
    TYPING_DELAY_MIN: 800,
    TYPING_DELAY_MAX: 2000,
    WIDGET_ID: 'velora-chat-widget'
  };

  // ── VELORA Catalog for contextual answers ──────────────────────────────
  const VELORA_INFO = {
    storeName: 'VELORA',
    tagline: '"Find What Moves You."',
    supportPhone: '+92 300 1234567',
    supportWhatsApp: 'https://wa.me/923001234567',
    email: 'support@velora.pk',
    deliveryInfo: '24-48 hour express delivery across Pakistan. Free delivery on orders above Rs. 3,000.',
    paymentMethods: 'Cash on Delivery (COD), Bank Transfer, JazzCash, EasyPaisa, Visa/Mastercard',
    returnPolicy: '7-day hassle-free returns and replacements on eligible products.',
    categories: ['Fashion', 'Electronics', 'Beauty', 'Home & Living', 'Accessories', 'Trending'],
    trustPoints: [
      '100% Genuine Guaranteed Products',
      'Secure Checkout with Encryption',
      'Cash on Delivery Anywhere in Pakistan',
      '7-Day Easy Replacement Policy',
      'Express 24-48h Delivery',
      'Dedicated WhatsApp Support'
    ],
    welcomeMsg: `Assalam-o-Alaikum! 👋 Welcome to **${CONFIG.API_ENDPOINT === 'https://agentrouter.org' ? 'VELORA' : 'VELORA'}** — your one-stop shop for fashion, tech, beauty & home essentials in Pakistan. I'm your AI shopping assistant. How can I help you today?`,
    quickReplies: [
      '📦 Track my order',
      '🚚 Delivery info',
      '💳 Payment methods',
      '🔄 Return policy',
      '🏷️ Current deals',
      '📞 Talk to human'
    ]
  };

  // ── Bot response logic (fallback when API unavailable) ─────────────────
  function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase().trim();

    if (/track|order.*status|where.*order|order.*location/i.test(msg)) {
      return `To track your order, please share your Order ID with us on WhatsApp: **${VELORA_INFO.supportWhatsApp.replace('https://', '')}** — our team will respond within minutes!`;
    }
    if (/delivery|shipping|dispatch|reach|time/i.test(msg)) {
      return VELORA_INFO.deliveryInfo + '\n\nWe deliver to all major cities across Pakistan: Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta & more.';
    }
    if (/payment|pay|cod|cash|jazzcash|easypaisa|bank|card/i.test(msg)) {
      return `We accept these payment methods:\n\n• **Cash on Delivery (COD)** — Pay when your order arrives 🚚\n• **Bank Transfer** — Meezan, HBL, Bank Alfalah\n• **Mobile Wallets** — JazzCash & EasyPaisa\n• **Debit/Credit Cards** — Visa & Mastercard\n\nCOD is our most popular option!`;
    }
    if (/return|refund|exchange|replace/i.test(msg)) {
      return VELORA_INFO.returnPolicy + '\n\nIf you need a return, contact us on WhatsApp and we\'ll arrange a pickup from your doorstep.';
    }
    if (/deal|offer|discount|sale|coupon|promo|price/i.test(msg)) {
      return `Here are our current deals:\n\n🔥 **Flash Deals** — Up to 50% off on selected items\n🏷️ **Budget Picks** — Everything under Rs. 999\n📦 **Bundle & Save** — Save Rs. 2,000+ on curated bundles\n⭐ **New Member Offer** — Get 10% off your first order!\n\nCheck the DEALS section on our homepage for all active offers.`;
    }
    if (/category|shop|fashion|electronics|beauty|home|accessories/i.test(msg)) {
      return `VELORA offers products across these categories:\n\n👗 **Fashion** — Trending clothing, shoes & more\n📱 **Electronics** — Smart watches, earbuds, gadgets\n💄 **Beauty** — Skincare, makeup, grooming\n🏠 **Home & Living** — Decor, kitchen, organization\n👜 **Accessories** — Bags, jewellery, watches\n🔥 **Trending** — Top picks everyone's buying\n\nWhich category interests you?`;
    }
    if (/hello|hi|hey|salam|Assalam|namaste|good morning|good evening/i.test(msg)) {
      return `Hello! 👋 Welcome to **VELORA**! I'm here to help you with anything — product info, orders, deals, or delivery. What can I do for you?`;
    }
    if (/contact|human|agent|support|whatsapp|phone|number|talk/i.test(msg)) {
      return `You can reach our human support team anytime:\n\n💬 **WhatsApp**: [${VELORA_INFO.supportPhone}](tel:+923001234567)\n📧 **Email**: ${VELORA_INFO.email}\n\nOur team is available Mon–Sat, 10 AM – 8 PM PKT.`;
    }
    if (/thank|thanks|shukriya|great|awesome|nice/i.test(msg)) {
      return `You're welcome! 😊 Happy to help. If you need anything else, just ask. Shop smart at **VELORA**! 🛍️`;
    }
    if (/new|arrival|latest|recent|fresh/i.test(msg)) {
      return `We update our collection every week with fresh arrivals! Check the **NEW ARRIVALS** section on our homepage for the latest products in fashion, tech, beauty, and home.`;
    }
    if (/authentic|genuine|original|real|fake|copy/i.test(msg)) {
      return `All products at **VELORA** are **100% genuine and original**. We source directly from trusted brands and suppliers. Every purchase comes with our authenticity guarantee. ✅`;
    }
    if (/popular|bestseller|top|favorite|trend|hot/i.test(msg)) {
      return `Our most popular items include:\n\n⌚ **Smart Watch Pro** — Rs. 5,999 (Rs. 8,499)\n🎧 **Wireless Earbuds** — Rs. 2,499\n👕 **Oversized Hoodie** — Rs. 1,999\n💄 **Skincare Set** — Rs. 1,499\n🏠 **Ceramic Desk Lamp** — Rs. 2,299\n\nCheck the "Trending" and "Customer Favorites" sections for the full list!`;
    }
    if (/login|sign in|account|register|signup/i.test(msg)) {
      return `To create an account or sign in, visit our [Login Page](login.html). Members get exclusive perks like:\n\n• 10% off first order\n• Early access to new drops\n• Order tracking & history\n• Wishlist saved across devices`;
    }
    if (/cancellation|cancel|stop|remove/i.test(msg)) {
      return `You can cancel your order within 2 hours of placing it. Please contact us on WhatsApp at **${VELORA_INFO.supportPhone}** with your Order ID, and we'll process the cancellation immediately.`;
    }

    // Generic fallback
    return `Thanks for your message! I'm here to help you with:\n\n• 📦 **Order tracking** — Share your order ID\n• 🚚 **Delivery info** — Shipping times & areas\n• 💳 **Payment methods** — COD, cards, wallets\n• 🔄 **Returns & refunds** — Easy 7-day policy\n• 🏷️ **Current deals** — Best offers right now\n• 📞 **Human support** — Connect via WhatsApp\n\nWhat would you like to know?`;
  }

  // ── Store state ────────────────────────────────────────────────────────
  let isOpen = false;
  let isProcessing = false;
  let conversationHistory = [];
  let apiReachable = null; // null = unknown

  // ── DOM refs (cached after init) ───────────────────────────────────────
  let fab, panel, messagesEl, inputEl, sendBtn, typingEl;

  // ── Build Widget ───────────────────────────────────────────────────────
  function buildWidget() {
    const wrapper = document.createElement('div');
    wrapper.id = CONFIG.WIDGET_ID;
    wrapper.setAttribute('aria-roledescription', 'Chat widget');
    wrapper.innerHTML = `
      <!-- FAB Button -->
      <button class="velora-chat-fab" id="veloraChatFab" aria-label="Open chat" title="Chat with VELORA Assistant">
        <svg class="chat-icon" viewBox="0 0 64 64" fill="none">
          <!-- Robot head -->
          <rect x="8" y="10" width="48" height="38" rx="14" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
          <!-- Eyes - glowing blue slots -->
          <rect x="14" y="22" width="12" height="6" rx="3" fill="#00e5ff" stroke="none"/>
          <rect x="38" y="22" width="12" height="6" rx="3" fill="#00e5ff" stroke="none"/>
          <!-- Antennas -->
          <line x1="20" y1="10" x2="16" y2="3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="44" y1="10" x2="48" y2="3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="16" cy="3" r="3" fill="currentColor" stroke="none"/>
          <circle cx="48" cy="3" r="3" fill="currentColor" stroke="none"/>
          <!-- Mouth -->
          <path d="M24 36 Q32 40 40 36" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
          <!-- Body -->
          <rect x="16" y="48" width="32" height="12" rx="6" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
          <!-- Arms -->
          <path d="M16 50 L10 46 L10 54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <path d="M48 50 L54 46 L54 54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
        <svg class="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <span class="velora-chat-fab-badge" id="fabBadge">1</span>
      </button>

      <!-- Chat Panel -->
      <div class="velora-chat-panel" id="veloraChatPanel" role="dialog" aria-label="VELORA Help Chat">
        <div class="velora-chat-header">
          <div class="velora-chat-avatar">
            <svg viewBox="0 0 64 64" fill="none">
              <rect x="8" y="10" width="48" height="38" rx="14" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
              <rect x="14" y="22" width="12" height="6" rx="3" fill="#00e5ff" stroke="none"/>
              <rect x="38" y="22" width="12" height="6" rx="3" fill="#00e5ff" stroke="none"/>
              <line x1="20" y1="10" x2="16" y2="3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="44" y1="10" x2="48" y2="3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="16" cy="3" r="3" fill="currentColor" stroke="none"/>
              <circle cx="48" cy="3" r="3" fill="currentColor" stroke="none"/>
              <path d="M24 36 Q32 40 40 36" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
              <rect x="16" y="48" width="32" height="12" rx="6" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
              <path d="M16 50 L10 46 L10 54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <path d="M48 50 L54 46 L54 54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </div>
          <div class="velora-chat-header-info">
            <div class="velora-chat-header-title">VELORA Assistant</div>
            <div class="velora-chat-header-status">
              <span class="velora-status-dot"></span>
              <span id="headerStatusText">Online • Ready to help</span>
            </div>
          </div>
          <button class="velora-chat-header-close" id="veloraChatClose" aria-label="Close chat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="velora-chat-messages" id="veloraChatMessages">
          <!-- Messages injected here -->
        </div>

        <div class="velora-chat-input-area">
          <div class="velora-chat-input-wrap">
            <textarea class="velora-chat-input" id="veloraChatInput" placeholder="Type your message..." rows="1" aria-label="Type your message"></textarea>
          </div>
          <button class="velora-chat-send" id="veloraChatSend" aria-label="Send message" disabled>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>

        <div class="velora-chat-powered">
          Powered by <a href="${CONFIG.API_ENDPOINT}" target="_blank" rel="noopener">Agent Router</a> × VELORA AI
        </div>
      </div>
    `;

    document.body.appendChild(wrapper);

    // Cache DOM references
    fab = document.getElementById('veloraChatFab');
    panel = document.getElementById('veloraChatPanel');
    messagesEl = document.getElementById('veloraChatMessages');
    inputEl = document.getElementById('veloraChatInput');
    sendBtn = document.getElementById('veloraChatSend');
    typingEl = null;

    // ── FAB Toggle ─────────────────────────────────────────────────────
    fab.addEventListener('click', toggleChat);

    // ── Close button ───────────────────────────────────────────────────
    document.getElementById('veloraChatClose').addEventListener('click', closeChat);

    // ── Send on click ──────────────────────────────────────────────────
    sendBtn.addEventListener('click', sendMessage);

    // ── Enter to send ──────────────────────────────────────────────────
    inputEl.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    // ── Auto-resize textarea ───────────────────────────────────────────
    inputEl.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 100) + 'px';
      sendBtn.disabled = !this.value.trim();
    });

    // ── Close on Escape ────────────────────────────────────────────────
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen) closeChat();
    });

    // ── Click outside to close ─────────────────────────────────────────
    document.addEventListener('click', function(e) {
      if (isOpen && !panel.contains(e.target) && !fab.contains(e.target)) {
        closeChat();
      }
    });

    // ── Check API reachability on load ─────────────────────────────────
    checkAPIReachability();

    // ── Show welcome after short delay ─────────────────────────────────
    setTimeout(addWelcomeMessage, 500);
  }

  // ── API Health Check ───────────────────────────────────────────────────
  async function checkAPIReachability() {
    try {
      const res = await fetch(CONFIG.API_ENDPOINT, {
        method: 'GET',
        headers: { 'Accept': 'text/html' },
        signal: AbortSignal.timeout(4000)
      });
      apiReachable = res.ok;
      updateStatusText(apiReachable ? 'Online • AI Connected' : 'Online • Limited mode');
    } catch (e) {
      apiReachable = false;
      updateStatusText('Online • Fallback mode');
    }
  }

  function updateStatusText(text) {
    const el = document.getElementById('headerStatusText');
    if (el) el.textContent = text;
  }

  // ── Toggle ─────────────────────────────────────────────────────────────
  function toggleChat() {
    if (isOpen) {
      closeChat();
    } else {
      openChat();
    }
  }

  function openChat() {
    isOpen = true;
    panel.classList.add('open');
    fab.classList.add('open');
    fab.setAttribute('aria-label', 'Close chat');
    // Remove badge
    const badge = document.getElementById('fabBadge');
    if (badge) badge.style.display = 'none';
    // Focus input after animation
    setTimeout(() => inputEl.focus(), 350);
  }

  function closeChat() {
    isOpen = false;
    panel.classList.remove('open');
    fab.classList.remove('open');
    fab.setAttribute('aria-label', 'Open chat');
    inputEl.value = '';
    inputEl.style.height = 'auto';
    sendBtn.disabled = true;
  }

  // ── Welcome Message ────────────────────────────────────────────────────
  function addWelcomeMessage() {
    // Welcome card
    const card = document.createElement('div');
    card.className = 'velora-msg bot';
    card.innerHTML = `
      <div class="velora-msg-avatar">🤖</div>
      <div>
        <div class="velora-welcome-card">
          <h4>Welcome to VELORA! 🛍️</h4>
          <p>I'm your AI shopping assistant. I can help you find products, track orders, learn about deals, and connect you with our support team.</p>
          <div class="velora-welcome-features">
            <div class="velora-welcome-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Product recommendations</span>
            </div>
            <div class="velora-welcome-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Order tracking help</span>
            </div>
            <div class="velora-welcome-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Deals & discounts info</span>
            </div>
            <div class="velora-welcome-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Delivery & payment help</span>
            </div>
          </div>
        </div>
        <div class="velora-quick-replies" id="veloraQuickReplies">
          ${VELORA_INFO.quickReplies.map(r => `<button class="velora-quick-btn" data-msg="${r}">${r}</button>`).join('')}
        </div>
      </div>
    `;
    messagesEl.appendChild(card);

    // Bind quick reply buttons
    card.querySelectorAll('.velora-quick-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const msg = this.getAttribute('data-msg');
        if (msg) handleUserMessage(msg);
      });
    });

    scrollToBottom();
  }

  // ── Send Message ───────────────────────────────────────────────────────
  function sendMessage() {
    const text = inputEl.value.trim();
    if (!text || isProcessing) return;
    inputEl.value = '';
    inputEl.style.height = 'auto';
    sendBtn.disabled = true;
    handleUserMessage(text);
  }

  function handleUserMessage(text) {
    if (isProcessing) return;
    isProcessing = true;

    // Add user message
    addUserMessage(text);

    // Add to history
    conversationHistory.push({ role: 'user', content: text });
    if (conversationHistory.length > CONFIG.MAX_HISTORY) {
      conversationHistory = conversationHistory.slice(-CONFIG.MAX_HISTORY);
    }

    // Show typing indicator
    showTypingIndicator();
    updateStatusText('Typing...');

    // Call API or fallback
    callBotAPI(text)
      .then(response => {
        hideTypingIndicator();
        addBotMessage(response);
        conversationHistory.push({ role: 'assistant', content: response });
        updateStatusText('Online • Ready to help');
      })
      .catch(err => {
        console.error('[VELORA Chatbot] Error:', err);
        hideTypingIndicator();
        const fallback = getBotResponse(text);
        addBotMessage(fallback);
        conversationHistory.push({ role: 'assistant', content: fallback });
        updateStatusText('Online • Fallback mode');
      })
      .finally(() => {
        isProcessing = false;
        sendBtn.disabled = !inputEl.value.trim();
      });
  }

  // ── API Call ───────────────────────────────────────────────────────────
  async function callBotAPI(userMessage) {
    // Try multiple endpoint patterns for agentrouter.org
    const apiPaths = [
      '/v1/messages',
      '/api/v1/messages',
      '/v1/chat/completions',
      '/api/v1/chat/completions'
    ];

    const systemPrompt = `You are VELORA AI Assistant, a friendly and helpful customer support chatbot for VELORA, a Pakistani e-commerce store. VELORA sells fashion, electronics, beauty products, home & living items, and accessories.

Store details:
- Store name: VELORA
- Tagline: "Find What Moves You."
- Support WhatsApp: +92 300 1234567
- Email: support@velora.pk
- Delivery: 24-48h across Pakistan, free above Rs. 3,000
- Payment: COD, Bank Transfer, JazzCash, EasyPaisa, Visa/Mastercard
- Returns: 7-day hassle-free returns
- Trust: 100% genuine products guaranteed

Always respond in a friendly, conversational tone. Keep responses concise (2-4 sentences max). Use emojis occasionally. If the user asks about something outside your knowledge, direct them to contact human support via WhatsApp.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory
    ];

    // Try each endpoint until one works
    let lastError = null;
    for (const path of apiPaths) {
      try {
        const url = CONFIG.API_ENDPOINT.replace(/\/$/, '') + path;
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);

        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CONFIG.API_KEY}`,
            'X-API-Key': CONFIG.API_KEY
          },
          body: JSON.stringify({
            model: CONFIG.MODEL,
            messages: messages,
            max_tokens: 500,
            temperature: 0.7,
            stream: false
          }),
          signal: controller.signal
        });
        clearTimeout(timeout);

        if (res.ok) {
          const data = await res.json();
          // Handle various response formats
          if (data.choices && data.choices[0] && data.choices[0].message) {
            return data.choices[0].message.content;
          }
          if (data.content && Array.isArray(data.content)) {
            const textBlock = data.content.find(c => c.type === 'text');
            if (textBlock) return textBlock.text;
          }
          if (data.message) return data.message;
          if (data.response) return data.response;
          if (typeof data === 'string') return data;
          return JSON.stringify(data);
        }

        lastError = new Error(`HTTP ${res.status}: ${res.statusText}`);
        // If it's an auth error, stop trying other endpoints
        if (res.status === 401 || res.status === 403) {
          throw lastError;
        }
      } catch (e) {
        if (e.name === 'AbortError') {
          lastError = new Error('Request timeout');
        } else {
          lastError = e;
        }
      }
    }

    throw lastError || new Error('All API endpoints failed');
  }

  // ── Message Rendering ──────────────────────────────────────────────────
  function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'velora-msg user';
    div.innerHTML = `
      <div class="velora-msg-avatar">U</div>
      <div>
        <div class="velora-msg-bubble">${escapeHtml(text)}</div>
        <div class="velora-msg-time">${getTimeString()}</div>
      </div>
    `;
    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function addBotMessage(text) {
    const div = document.createElement('div');
    div.className = 'velora-msg bot';
    // Parse simple markdown: **bold**, - bullet, newlines
    const formatted = formatBotText(text);
    div.innerHTML = `
      <div class="velora-msg-avatar">🤖</div>
      <div>
        <div class="velora-msg-bubble">${formatted}</div>
        <div class="velora-msg-time">${getTimeString()}</div>
      </div>
    `;
    messagesEl.appendChild(div);

    // Show quick replies after each bot message (only a couple)
    showQuickRepliesAfterReply();

    scrollToBottom();
  }

  function showTypingIndicator() {
    if (typingEl) return;
    typingEl = document.createElement('div');
    typingEl.className = 'velora-typing-indicator';
    typingEl.id = 'veloraTypingIndicator';
    typingEl.innerHTML = `
      <div class="velora-msg-avatar" style="background:#fff;width:28px;height:28px;font-size:0.9rem;border:1.5px solid rgba(0,0,0,0.1);">🤖</div>
      <div class="velora-typing-dots">
        <span></span><span></span><span></span>
      </div>
    `;
    messagesEl.appendChild(typingEl);
    scrollToBottom();
  }

  function hideTypingIndicator() {
    if (typingEl) {
      typingEl.remove();
      typingEl = null;
    }
  }

  function showQuickRepliesAfterReply() {
    // Remove old quick replies if any
    const old = messagesEl.querySelector('.velora-msg:last-child .velora-quick-replies');
    if (old) old.remove();

    const lastMsg = messagesEl.querySelector('.velora-msg.bot:last-child');
    if (!lastMsg) return;
    const timeEl = lastMsg.querySelector('.velora-msg-time');
    if (!timeEl) return;

    const replies = document.createElement('div');
    replies.className = 'velora-quick-replies';
    const suggestions = pickQuickReplies();
    replies.innerHTML = suggestions.map(r =>
      `<button class="velora-quick-btn" data-msg="${r}">${r}</button>`
    ).join('');
    timeEl.after(replies);

    replies.querySelectorAll('.velora-quick-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const msg = this.getAttribute('data-msg');
        if (msg) handleUserMessage(msg);
      });
    });
  }

  function pickQuickReplies() {
    const all = VELORA_INFO.quickReplies;
    // Pick 3-4 random ones
    const shuffled = [...all].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3 + Math.floor(Math.random() * 2));
  }

  // ── Helpers ────────────────────────────────────────────────────────────
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function formatBotText(text) {
    // Basic markdown-like formatting
    let html = escapeHtml(text);
    // Bold: **text**
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Newlines
    html = html.replace(/\n/g, '<br>');
    return html;
  }

  function getTimeString() {
    return new Date().toLocaleTimeString('en-PK', { hour: 'numeric', minute: '2-digit', hour12: true });
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    });
  }

  // ── Initialize ─────────────────────────────────────────────────────────
  function init() {
    if (document.getElementById(CONFIG.WIDGET_ID)) return; // Already loaded
    buildWidget();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external control
  window.VeloraChat = {
    open: openChat,
    close: closeChat,
    toggle: toggleChat,
    send: function(msg) { if (msg) handleUserMessage(msg); },
    isOpen: function() { return isOpen; }
  };

})();
