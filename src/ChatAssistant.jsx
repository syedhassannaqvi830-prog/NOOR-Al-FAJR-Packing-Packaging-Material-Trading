import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, Phone, ArrowRight, CheckCircle2, ChevronDown, RefreshCw } from 'lucide-react';
import './ChatAssistant.css';

const KNOWLEDGE_BASE = [
  {
    keywords: ['moq', 'minimum', 'quantity', 'order limit', 'least order', 'small order'],
    response: "Our standard minimum order quantity (MOQ) depends on the item:\n• Standard In-Stock Boxes & Films: No strict minimum (from 1 bundle/roll)\n• Custom Printed Boxes: MOQ is typically 500 - 1,000 units\n• Bulk Wholesale Orders: Extra 15-30% volume discounts start at 50+ rolls or 500+ boxes.\n\nWould you like a custom quote for a specific quantity?"
  },
  {
    keywords: ['delivery', 'shipping', 'sharjah', 'dubai', 'abu dhabi', 'ajman', 'time', 'how long', 'emirates'],
    response: "🚚 **Delivery Information:**\n• **Dubai & Sharjah:** Same-day or 24-hour express delivery.\n• **Abu Dhabi, Ajman, RAK, Fujairah, UAQ:** 24 - 48 hours delivery.\n• **Free Delivery:** Available on all UAE orders exceeding **AED 500**.\n\nOur delivery fleet operates 6 days a week across all 7 Emirates!"
  },
  {
    keywords: ['box', 'boxes', 'corrugated', 'carton', 'custom size', 'printing', 'dimensions', 'ply'],
    response: "📦 **Corrugated Packaging Options:**\n• **3-Ply (Single Wall):** Ideal for lightweight e-commerce & shipping.\n• **5-Ply (Double Wall):** Heavy-duty protection for industrial goods & moving.\n• **7-Ply (Triple Wall):** Heavy industrial machinery & export grade.\n• **Custom Sizing & Logo Printing:** Tailored to your exact length, width, and height.\n\nSend us your desired dimensions on WhatsApp for an immediate CAD mock-up & quotation!"
  },
  {
    keywords: ['stretch', 'film', 'wrap', 'pallet', 'manual', 'machine', 'roll', 'micron'],
    response: "🎞️ **Stretch Film & Pallet Wraps:**\n• Available in **Manual Hand Rolls** (1.5kg - 4kg) and **Automatic Machine Rolls** (15kg+).\n• Standard Thicknesses: **17 Micron, 23 Micron, and 30 Micron**.\n• Colors: High-clarity **Clear** and security **Black Opaque**.\n• High puncture resistance & exceptional cling property."
  },
  {
    keywords: ['bubble', 'bubble wrap', 'protection', 'cushion', 'rolls', 'fragile'],
    response: "🫧 **Bubble Wrap & Protective Rolls:**\n• Standard 100-meter rolls in widths: 50cm, 100cm, 120cm, and 150cm.\n• Single layer & double layer heavy-duty bubbles.\n• Also available: **Foam rolls (EPE foam), corrugated paper rolls, and air column bags**."
  },
  {
    keywords: ['tape', 'tapes', 'adhesive', 'bopp', 'masking', 'printed tape', 'duct'],
    response: "🎗️ **Industrial Tapes & Adhesives:**\n• **BOPP Packaging Tape:** Clear, Tan/Brown (48mm, 72mm width / 50m to 100m length).\n• **Custom Logo Printed Tape:** Brand your shipments.\n• **Specialty Tapes:** Masking tape, duct tape, double-sided tissue/foam tape, and fragile warning tape."
  },
  {
    keywords: ['price', 'pricing', 'cost', 'quote', 'rate', 'discount', 'cheap', 'how much'],
    response: "💰 **Wholesale & Direct Factory Pricing:**\nBecause raw material rates vary by quantity and specs, we offer transparent tiered wholesale rates:\n• Standard Stretch Film starts from **AED 22 - 28 / roll**\n• Corrugated Moving Boxes start from **AED 2.50 - 8.00 / box**\n• Clear Tapes start from **AED 2.50 - 4.50 / roll**\n\nClick the button below to receive an instant official invoice quotation via WhatsApp!"
  },
  {
    keywords: ['location', 'where', 'address', 'visit', 'shop', 'store', 'office'],
    response: "📍 **Our Location:**\nWe are located at **Industrial Area 6, Block Side of 1 to 10 Market, Sharjah, United Arab Emirates**.\n• Hours: Saturday – Thursday, 8:00 AM – 8:00 PM\n• Fast dispatches to all UAE locations daily.\n• You can also arrange warehouse pickup for immediate collection."
  },
  {
    keywords: ['cleaning', 'chemical', 'sanitizer', 'detergent', 'disposable', 'supplies'],
    response: "🧼 **Cleaning & Hygiene Chemicals:**\nWe supply commercial-grade cleaning chemicals, floor cleaners, degreasers, sanitizers, hand soaps, garbage bags, and tissue rolls for offices, facilities, and warehouses in bulk containers (5L, 20L drums)."
  },
  {
    keywords: ['human', 'person', 'agent', 'call', 'talk', 'whatsapp', 'sales', 'representative', 'phone'],
    response: "📞 **Connect with our Live Team:**\nOur sales engineers are active right now on WhatsApp (+971 55 193 7833) and ready to answer your technical questions or send formal PDF quotations."
  }
];

const QUICK_PROMPTS = [
  "📦 What is your Minimum Order Quantity (MOQ)?",
  "🚚 Delivery time and free shipping terms?",
  "📐 Can I order custom size printed boxes?",
  "💰 Stretch film & tape wholesale rates?",
  "📍 Where is your warehouse located?"
];

export default function ChatAssistant({ whatsappNumber = "+971552383697" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 I'm **Noor AI**, your 24/7 packaging advisor. How can I help you with boxes, stretch film, tapes, or custom quotes today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      showWhatsAppCTA: false
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const generateAnswer = (userQuery) => {
    const query = userQuery.toLowerCase();

    // Check if user is asking for quote or human
    const isContactQuery = ['quote', 'contact', 'call', 'human', 'whatsapp', 'phone', 'urgent', 'buy', 'order now'].some(k => query.includes(k));

    for (const item of KNOWLEDGE_BASE) {
      if (item.keywords.some(kw => query.includes(kw))) {
        return {
          text: item.response,
          showWhatsAppCTA: isContactQuery || true
        };
      }
    }

    return {
      text: "Thank you for reaching out! We supply a complete range of corrugated boxes, stretch film, bubble wraps, tapes, and industrial packaging across the UAE.\n\nFor custom dimensions, exact volume pricing, or special specifications, our sales team can immediately assist you on WhatsApp.",
      showWhatsAppCTA: true
    };
  };

  const handleSend = (textToSend = null) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const { text, showWhatsAppCTA } = generateAnswer(query);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showWhatsAppCTA: showWhatsAppCTA
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const createWhatsAppLink = (context = "") => {
    const base = `https://api.whatsapp.com/send?phone=${encodeURIComponent(whatsappNumber)}`;
    const text = context
      ? `Hello NOOR AL FAJR! I was using your website AI assistant. Question: "${context}" - Please provide pricing & availability.`
      : `Hello NOOR AL FAJR! I would like to request a quotation for packaging materials.`;
    return `${base}&text=${encodeURIComponent(text)}`;
  };

  const renderFormattedText = (text) => {
    // Simple markdown-style rendering for bold and line breaks
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <div key={i} className="chat-line">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j}>{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </div>
      );
    });
  };

  return (
    <div className="ai-chat-widget-wrapper">
      {/* Floating Toggle Button */}
      <motion.button
        className="ai-chat-trigger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Toggle AI Packaging Assistant"
      >
        <div className="trigger-icon-container">
          {isOpen ? <X size={24} /> : <Bot size={26} />}
        </div>
        {!isOpen && (
          <div className="trigger-label-pill">
            <span className="ai-sparkle-dot"></span>
            <span>Ask Noor AI</span>
          </div>
        )}
        {!isOpen && unreadCount > 0 && (
          <span className="chat-badge-counter">{unreadCount}</span>
        )}
      </motion.button>

      {/* Main Chat Drawer / Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ai-chat-window"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Window Header */}
            <div className="ai-chat-header">
              <div className="ai-header-profile">
                <div className="ai-avatar-badge">
                  <Bot size={20} />
                  <span className="online-indicator"></span>
                </div>
                <div className="ai-header-info">
                  <div className="ai-header-title">
                    <h4>Noor AI Specialist</h4>
                    <span className="ai-verified-tag">B2B Advisor</span>
                  </div>
                  <p className="ai-status-text">Replies instantly • Packaging Expert</p>
                </div>
              </div>
              <div className="ai-header-actions">
                <button
                  className="ai-icon-btn"
                  onClick={() => setMessages([{
                    id: Date.now(),
                    sender: 'bot',
                    text: "Chat cleared! How can I assist you with packaging materials today?",
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  }])}
                  title="Reset conversation"
                >
                  <RefreshCw size={15} />
                </button>
                <button className="ai-icon-btn" onClick={() => setIsOpen(false)} title="Close Chat">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Quick Banner */}
            <div className="ai-chat-subbanner">
              <Sparkles size={14} className="sparkle-icon" />
              <span>Instant UAE Quotes • Boxes, Films & Tapes</span>
            </div>

            {/* Message Feed */}
            <div className="ai-messages-area">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-message-row ${msg.sender}`}>
                  {msg.sender === 'bot' && (
                    <div className="bot-avatar-small">
                      <Bot size={14} />
                    </div>
                  )}
                  <div className="chat-bubble">
                    <div className="bubble-text">
                      {renderFormattedText(msg.text)}
                    </div>
                    <span className="bubble-time">{msg.time}</span>

                    {msg.showWhatsAppCTA && msg.sender === 'bot' && (
                      <a
                        href={createWhatsAppLink(messages[messages.length - 2]?.text || "")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chat-whatsapp-action"
                      >
                        <Phone size={14} />
                        <span>Confirm Order on WhatsApp →</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="chat-message-row bot">
                  <div className="bot-avatar-small">
                    <Bot size={14} />
                  </div>
                  <div className="chat-bubble typing-bubble">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Suggestions */}
            <div className="ai-quick-prompts-bar">
              <div className="prompts-scroll-container">
                {QUICK_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    className="quick-chip"
                    onClick={() => handleSend(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <form
              className="ai-chat-input-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <input
                type="text"
                placeholder="Ask about boxes, film, prices, delivery..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="ai-chat-input"
              />
              <button
                type="submit"
                className="ai-chat-send-btn"
                disabled={!inputMessage.trim()}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
