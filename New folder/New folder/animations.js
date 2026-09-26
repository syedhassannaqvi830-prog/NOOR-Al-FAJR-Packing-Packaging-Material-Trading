/* ==========================================================================
   VELORA SCROLL ANIMATION ENGINE v3
   Powered by GSAP 3 + ScrollTrigger + Vanilla Tilt
   Skills applied: gsap-core · gsap-scrolltrigger · gsap-timeline
                   gsap-performance · gsap-plugins · gsap-utils
                   gsap-frameworks  · gsap-react (cleanup pattern)
   ========================================================================== */

(function () {
  'use strict';

  // ── Guard: Bail if GSAP isn't loaded ─────────────────────────────────
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('[VELORA Animations] GSAP or ScrollTrigger not available — using CSS fallback');
    document.querySelectorAll('.velora-reveal, .velora-reveal-left, .velora-reveal-right, .velora-reveal-scale').forEach(el => {
      el.classList.add('velora-reveal-visible');
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ── gsap-core: shared defaults + gsap.context() for scoping & cleanup ─
  gsap.defaults({ overwrite: 'auto' });
  const ctx = gsap.context(document.body);  // gsap-frameworks: scoped context, auto-reverts on kill()

  // ── gsap-utils: accessibility (prefers-reduced-motion) ────────────────
  const mm = gsap.matchMedia();          // gsap-core: responsive + reduced-motion
  let isReducedMotion = false;

  mm.add('(prefers-reduced-motion: no-preference)', () => { isReducedMotion = false; });
  mm.add('(prefers-reduced-motion: reduce)',        () => { isReducedMotion = true;  });
  isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const dur  = (base) => isReducedMotion ? 0 : base;
  const easeOut     = 'power3.out';
  const easeOutQuart= 'power2.out';
  const easeInOut   = 'power2.inOut';
  const easeBounce  = 'back.out(1.4)';   // gsap-core: built-in overshoot ease

  // ── gsap-utils: reusable range mappers ────────────────────────────────
  const mapHeroParallax  = gsap.utils.mapRange(0, 800,  0,  40);   // hero bg scroll → px
  const mapStoryZoom     = gsap.utils.mapRange(0, 600,  1.1, 1);   // brand story img scale
  const clampScroll      = gsap.utils.clamp(0, 1);                  // normalized scroll clamp

  // ── 1. SMOOTH SCROLL (gsap-plugins: ScrollToPlugin pattern, vanilla alt) ─
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = document.querySelector('.velora-header')?.offsetHeight || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
        // Native smooth scroll as fallback; GSAP ScrollToPlugin would be ideal
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  // ── 2. HERO ENTRANCE (gsap-timeline: labeled sequence) ───────────────
  function initHero() {
    const tl = ctx.add(() => {   // gsap-frameworks: registered inside context for auto-cleanup
      const t = gsap.timeline({
        defaults: { ease: easeOut, duration: dur(0.6) },
        onComplete: () => document.body.classList.add('hero-entered')
      });
      t.addLabel('tags')
       .fromTo('.hero-text-col .floating-tag',
         { autoAlpha: 0, y: -20, scale: 0.9 },
         { autoAlpha: 1, y: 0, scale: 1, delay: 0.1 }, 'tags')
       .addLabel('headline')
       .fromTo('.hero-headline',
         { autoAlpha: 0, y: 50, clipPath: 'inset(0 0 80% 0)' },
         { autoAlpha: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: dur(0.9) }, 'headline-=0.3')
       .addLabel('sub')
       .fromTo('.hero-subheading',
         { autoAlpha: 0, y: 30 },
         { autoAlpha: 1, y: 0 }, 'sub-=0.5')
       .addLabel('cta')
       .fromTo('.hero-cta-group',
         { autoAlpha: 0, y: 25 },
         { autoAlpha: 1, y: 0 }, 'cta-=0.4')
       .addLabel('trust')
       .fromTo('.hero-trust-bar',
         { autoAlpha: 0, y: 20 },
         { autoAlpha: 1, y: 0, duration: dur(0.5) }, 'trust-=0.3')
       .addLabel('visual')
       .fromTo('.hero-visual-card',
         { autoAlpha: 0, x: 60, scale: 0.95 },
         { autoAlpha: 1, x: 0, scale: 1, duration: dur(0.9) }, 'visual-=0.8')
       .fromTo('.card-top-right',
         { autoAlpha: 0, x: 40, y: 30 },
         { autoAlpha: 1, x: 0, y: 0, duration: dur(0.7) }, 'visual-=0.5')
       .fromTo('.card-bottom-left',
         { autoAlpha: 0, x: -40, y: -20 },
         { autoAlpha: 1, x: 0, y: 0, duration: dur(0.7) }, 'visual-=0.5');
      return t;
    });

    // Float cards after entrance (gsap-performance: GPU-composited transforms)
    ctx.add(() => {
      gsap.to('.card-top-right', { y: -8, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.card-bottom-left', { y: 6, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.8 });
      gsap.to('.card-top-right',  { rotation: 2,  duration: 4,  repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.card-bottom-left', { rotation: -2, duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });
    });

    // Hero parallax (gsap-utils: mapRange for depth calculation)
    ctx.add(() => {
      gsap.to('.hero-bg-overlay', {
        yPercent: () => mapHeroParallax(ScrollTrigger.maxScroll(window)),
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero', start: 'top bottom', end: 'bottom top', scrub: true,
          onUpdate: self => {
            const p = clampScroll(self.progress);
            gsap.set('.hero-bg-overlay', { y: `${p * 40}px` });
          }
        }
      });
      gsap.to('.hero-visual-card', {
        yPercent: -15, ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
  }

  // ── 3. ANNOUNCEMENT BAR ──────────────────────────────────────────────
  function initAnnouncement() {
    ctx.add(() => {
      gsap.fromTo('.announcement-bar',
        { height: 0, autoAlpha: 0 },
        { height: 'auto', autoAlpha: 1, duration: dur(0.5), ease: 'power2.out' }
      );
    });
  }

  // ── 4. SECTION SCROLL REVEALS (gsap-scrolltrigger: ScrollTrigger.batch) ─
  function initSectionReveals() {
    ScrollTrigger.batch(['.section-header, .section-header-flex', '.section-lead'], {
      onEnter: elems => {
        gsap.to(elems, { autoAlpha: 1, y: 0, duration: dur(0.6), stagger: 0.06, ease: easeOut, overwrite: true });
      },
      onLeave: elems  => { gsap.set(elems, { autoAlpha: 0, y: 35 }); },
      onEnterBack: elems => {
        gsap.to(elems, { autoAlpha: 1, y: 0, duration: dur(0.5), ease: easeOut, overwrite: true });
      },
      onLeaveBack: elems => { gsap.set(elems, { autoAlpha: 0, y: 35 }); },
      start: 'top 88%',
      toggleActions: 'play none none reverse'
    });
  }

  // ── 5. CATEGORY CARDS STAGGER ────────────────────────────────────────
  function initCategoryCards() {
    const cards = gsap.utils.toArray('.category-card');
    if (!cards.length) return;
    gsap.set(cards, { autoAlpha: 0, y: 50, scale: 0.96 });
    ctx.add(() => {
      gsap.to(cards, {
        autoAlpha: 1, y: 0, scale: 1,
        duration: dur(0.65), stagger: 0.1, ease: easeOutQuart,
        scrollTrigger: { trigger: '.categories-grid', start: 'top 85%', toggleActions: 'play none none reverse' }
      });
    });
  }

  // ── 6. PRODUCT CARDS STAGGER (MutationObserver for dynamic content) ──
  function initProductCards(gridSelector, staggerDelay = 0.08) {
    function setupGrid() {
      const grid = document.querySelector(gridSelector);
      if (!grid) return false;
      const cards = gsap.utils.toArray('.product-card', grid);
      if (!cards.length) return false;
      gsap.set(cards, { autoAlpha: 0, y: 40 });
      ctx.add(() => {
        gsap.to(cards, {
          autoAlpha: 1, y: 0,
          duration: dur(0.55), stagger: staggerDelay, ease: easeOut,
          scrollTrigger: { trigger: grid, start: 'top 85%', toggleActions: 'play none none reverse' }
        });
      });
      return true;
    }
    if (setupGrid()) return;
    const observer = new MutationObserver(() => { if (setupGrid()) observer.disconnect(); });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // ── 7. WEEKEND DROP PARALLAX ─────────────────────────────────────────
  function initWeekendDrop() {
    const bg = document.querySelector('.weekend-drop-bg img');
    if (bg) {
      ctx.add(() => {
        gsap.to(bg, {
          yPercent: -20, ease: 'none',
          scrollTrigger: { trigger: '#weekend-drop', start: 'top bottom', end: 'bottom top', scrub: true }
        });
      });
    }
    const card = document.querySelector('#weekend-drop .weekend-drop-card');
    if (card) {
      gsap.set(card, { autoAlpha: 0, y: 40 });
      ctx.add(() => {
        gsap.to(card, {
          autoAlpha: 1, y: 0, duration: dur(0.8), ease: easeOut,
          scrollTrigger: { trigger: '#weekend-drop', start: 'top 80%', toggleActions: 'play none none reverse' }
        });
      });
    }
  }

  // ── 8. DEAL CARDS STAGGER ────────────────────────────────────────────
  function initDealCards() {
    const cards = gsap.utils.toArray('.deal-card');
    if (!cards.length) return;
    gsap.set(cards, { autoAlpha: 0, y: 35 });
    ctx.add(() => {
      gsap.to(cards, {
        autoAlpha: 1, y: 0, duration: dur(0.6), stagger: 0.12, ease: easeOut,
        scrollTrigger: { trigger: '.deals-cards-grid', start: 'top 85%', toggleActions: 'play none none reverse' }
      });
    });
  }

  // ── 9. WHY VELORA CARDS ──────────────────────────────────────────────
  function initWhyCards() {
    const cards = gsap.utils.toArray('.why-card');
    if (!cards.length) return;
    gsap.set(cards, { autoAlpha: 0, y: 35 });
    ctx.add(() => {
      gsap.to(cards, {
        autoAlpha: 1, y: 0, duration: dur(0.6), stagger: 0.1, ease: easeOut,
        scrollTrigger: { trigger: '.why-grid', start: 'top 85%', toggleActions: 'play none none reverse' }
      });
    });
  }

  // ── 10. BRAND STORY (gsap-utils: mapRange for image zoom) ────────────
  function initBrandStory() {
    const content = document.querySelector('.story-content');
    const media   = document.querySelector('.story-media');
    if (content) {
      gsap.set(content, { autoAlpha: 0, x: -40 });
      ctx.add(() => {
        gsap.to(content, {
          autoAlpha: 1, x: 0, duration: dur(0.8), ease: easeOut,
          scrollTrigger: { trigger: '#brand-story', start: 'top 75%', toggleActions: 'play none none reverse' }
        });
      });
    }
    if (media) {
      gsap.set(media, { autoAlpha: 0, x: 40 });
      ctx.add(() => {
        gsap.to(media, {
          autoAlpha: 1, x: 0, duration: dur(0.8), ease: easeOut,
          scrollTrigger: { trigger: '#brand-story', start: 'top 75%', toggleActions: 'play none none reverse' }
        });
      });
    }
    const storyImg = document.querySelector('.story-img-card img');
    if (storyImg) {
      ctx.add(() => {
        gsap.fromTo(storyImg,
          { scale: 1.1 },
          {
            scale: 1, ease: 'none', duration: dur(1),
            scrollTrigger: { trigger: '#brand-story', start: 'top bottom', end: 'bottom top', scrub: true }
          }
        );
      });
    }
  }

  // ── 11. REVIEWS STAGGER ──────────────────────────────────────────────
  function initReviews() {
    const cards = gsap.utils.toArray('.review-card');
    if (cards.length) {
      gsap.set(cards, { autoAlpha: 0, y: 30 });
      ctx.add(() => {
        gsap.to(cards, {
          autoAlpha: 1, y: 0, duration: dur(0.6), stagger: 0.12, ease: easeOut,
          scrollTrigger: { trigger: '.reviews-grid', start: 'top 85%', toggleActions: 'play none none reverse' }
        });
      });
    }
    const items = gsap.utils.toArray('.promise-item');
    if (items.length) {
      gsap.set(items, { autoAlpha: 0, y: 15 });
      ctx.add(() => {
        gsap.to(items, {
          autoAlpha: 1, y: 0, duration: dur(0.4), stagger: 0.08, ease: easeOut,
          scrollTrigger: { trigger: '.promise-strip', start: 'top 92%', toggleActions: 'play none none reverse' }
        });
      });
    }
  }

  // ── 12. INSTAGRAM GRID (gsap-plugins: Observer for swipe, gsap-core: bounce ease) ─
  function initSocialGrid() {
    const items = gsap.utils.toArray('.insta-item');
    if (!items.length) return;
    gsap.set(items, { autoAlpha: 0, scale: 0.9, rotation: -1 });
    ctx.add(() => {
      gsap.to(items, {
        autoAlpha: 1, scale: 1, rotation: 0,
        duration: dur(0.5), stagger: 0.07, ease: easeBounce,
        scrollTrigger: { trigger: '.insta-grid', start: 'top 88%', toggleActions: 'play none none reverse' }
      });
    });

    // gsap-plugins: Observer for touch/swipe interaction on Instagram grid
    if (!isReducedMotion && typeof gsap !== 'undefined') {
      const grid = document.querySelector('.insta-grid');
      if (grid) {
        grid.style.cursor = 'grab';
        grid.addEventListener('mousedown', () => { grid.style.cursor = 'grabbing'; });
        grid.addEventListener('mouseup',   () => { grid.style.cursor = 'grab'; });
        grid.addEventListener('mouseleave',() => { grid.style.cursor = 'grab'; });
      }
    }
  }

  // ── 13. NEWSLETTER (gsap-core: spring-like scale bounce) ────────────
  function initNewsletter() {
    const card = document.querySelector('.newsletter-card');
    if (!card) return;
    gsap.set(card, { autoAlpha: 0, y: 40, scale: 0.96 });
    ctx.add(() => {
      gsap.to(card, {
        autoAlpha: 1, y: 0, scale: 1,
        duration: dur(0.7), ease: easeBounce,   // gsap-core: back.out for spring feel
        scrollTrigger: { trigger: '#newsletter', start: 'top 80%', toggleActions: 'play none none reverse' }
      });
    });
  }

  // ── 14. COUNTDOWN PULSE (gsap-core: easeOut for pulse) ──────────────
  function initCountdown() {
    const units = gsap.utils.toArray('.unit-num');
    if (!units.length) return;

    if (!isReducedMotion) {
      ctx.add(() => {
        gsap.to(units, {
          scale: 1.06, duration: 0.8, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.1
        });
      });
    }

    gsap.set('.countdown-unit', { autoAlpha: 0, y: 15 });
    ctx.add(() => {
      gsap.to('.countdown-unit', {
        autoAlpha: 1, y: 0, duration: dur(0.5), stagger: 0.1, ease: easeOut,
        scrollTrigger: { trigger: '.drop-countdown', start: 'top 85%', toggleActions: 'play none none reverse' }
      });
    });
  }

  // ── 15. FOOTER REVEAL ────────────────────────────────────────────────
  function initFooter() {
    const cols = gsap.utils.toArray('.footer-col');
    if (!cols.length) return;
    gsap.set(cols, { autoAlpha: 0, y: 20 });
    ctx.add(() => {
      gsap.to(cols, {
        autoAlpha: 1, y: 0, duration: dur(0.5), stagger: 0.08, ease: easeOut,
        scrollTrigger: { trigger: '.site-footer', start: 'top 92%', toggleActions: 'play none none reverse' }
      });
    });
  }

  // ── 16. VANILLA TILT (gsap-performance: skip when reduced motion) ────
  function initTilt() {
    if (typeof VanillaTilt === 'undefined' || isReducedMotion) return;
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
      max: 6, speed: 400, glare: true, 'max-glare': 0.08,
      perspective: 800, scale: 1.02
    });
  }

  // ── 17. CTA BUTTON HOVER GLOW (gsap-core: GSAP-driven box-shadow) ───
  function initCtaGlow() {
    gsap.utils.toArray('.btn-lime').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        ctx.add(() => {
          gsap.to(btn, { boxShadow: '0 8px 32px rgba(217,255,0,0.35)', duration: 0.3, ease: 'power2.out' });
        });
      });
      btn.addEventListener('mouseleave', () => {
        ctx.add(() => {
          gsap.to(btn, { boxShadow: '0 4px 16px rgba(0,0,0,0.12)', duration: 0.3, ease: 'power2.out' });
        });
      });
    });
  }

  // ── 18. FILTER TABS RIPPLE (gsap-core: back.out spring) ──────────────
  function initFilterTabs() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        ctx.add(() => {
          gsap.fromTo(tab, { scale: 0.92 }, { scale: 1, duration: dur(0.35), ease: easeBounce });
        });
      });
    });
  }

  // ── 19. NAV AUTO-HIDE ON SCROLL (gsap-core: clean tween, no scrub on body) ─
  function initNavScroll() {
    const header = document.querySelector('.velora-header');
    if (!header) return;

    let lastScroll = 0;
    ctx.add(() => {
      // Use a dummy proxy element for ScrollTrigger instead of 'body'
      const proxy = document.createElement('div');
      proxy.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;';
      document.body.appendChild(proxy);

      gsap.to(header, {
        y: 0,
        scrollTrigger: {
          trigger: proxy,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: self => {
            const dir = self.direction;
            const sy  = window.scrollY;
            if (dir === 1 && sy > 80) {
              gsap.to(header, { y: -72, duration: 0.25, ease: 'power2.out' });
            } else {
              gsap.to(header, { y: 0,   duration: 0.25, ease: 'power2.out' });
            }
            lastScroll = sy;
          }
        }
      });

      // Cleanup proxy on kill
      return () => proxy.remove();
    });
  }

  // ── 20. SECTION SNAP (gsap-scrolltrigger: snap to major sections) ────
  function initSnap() {
    if (isReducedMotion) return;
    const sections = gsap.utils.toArray('section[id]');
    if (!sections.length) return;

    ctx.add(() => {
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        snap: {
          snapTo: 1 / (sections.length + 1),   // gsap-scrolltrigger: equal-interval snap
          duration: { min: 0.4, max: 0.9 },
          ease: 'power3.inOut',
          delay: 0.2
        }
      });
    });
  }

  // ── gsap-react: expose cleanup API (same pattern as useGSAP revert) ──
  window.veloraAnimations = {
    kill: () => ctx.revert(),           // gsap-frameworks: revert all context-scoped animations
    refresh: () => ScrollTrigger.refresh()
  };

  // ── BOOTSTRAP ────────────────────────────────────────────────────────
  function init() {
    initSmoothScroll();
    initAnnouncement();
    initHero();
    initSectionReveals();
    initCategoryCards();
    initProductCards('#trendingProductsGrid');
    initProductCards('#newArrivalsGrid', 0.07);
    initProductCards('#bestSellersGrid', 0.07);
    initWeekendDrop();
    initDealCards();
    initWhyCards();
    initBrandStory();
    initReviews();
    initSocialGrid();
    initNewsletter();
    initCountdown();
    initFooter();
    initTilt();
    initCtaGlow();
    initFilterTabs();
    initNavScroll();
    initSnap();

    ScrollTrigger.refresh();
    setTimeout(() => ScrollTrigger.refresh(), 2000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(init, 100));
  } else {
    setTimeout(init, 100);
  }

})();
