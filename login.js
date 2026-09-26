/**
 * NOOR Al-FAJR AUTHENTICATION MODULE (login.js)
 * High-Converting, Zero-Dependency Client Authentication Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements: Tabs
  const tabSignInBtn = document.getElementById('tabSignInBtn');
  const tabSignUpBtn = document.getElementById('tabSignUpBtn');
  const signInPanel = document.getElementById('signInPanel');
  const signUpPanel = document.getElementById('signUpPanel');
  const switchToSignInLink = document.getElementById('switchToSignInLink');

  // Elements: Sign In Form
  const signInForm = document.getElementById('signInForm');
  const signInIdentifier = document.getElementById('signInIdentifier');
  const signInPassword = document.getElementById('signInPassword');
  const signInSubmitBtn = document.getElementById('signInSubmitBtn');

  // Elements: Sign Up Form
  const signUpForm = document.getElementById('signUpForm');
  const signUpFullName = document.getElementById('signUpFullName');
  const signUpEmail = document.getElementById('signUpEmail');
  const signUpPhone = document.getElementById('signUpPhone');
  const signUpPassword = document.getElementById('signUpPassword');
  const signUpSubmitBtn = document.getElementById('signUpSubmitBtn');
  const termsOptIn = document.getElementById('termsOptIn');

  // Elements: Password Strength
  const bar1 = document.getElementById('bar1');
  const bar2 = document.getElementById('bar2');
  const bar3 = document.getElementById('bar3');
  const strengthText = document.getElementById('strengthText');
  const strengthHint = document.getElementById('strengthHint');

  // Elements: Social Logins
  const googleLoginBtn = document.getElementById('googleLoginBtn');
  const whatsappLoginBtn = document.getElementById('whatsappLoginBtn');
  const appleLoginBtn = document.getElementById('appleLoginBtn');

  // Elements: Forgot Password Modal
  const openForgotModalBtn = document.getElementById('openForgotModalBtn');
  const forgotModalBackdrop = document.getElementById('forgotModalBackdrop');
  const closeForgotModalBtn = document.getElementById('closeForgotModalBtn');
  const forgotForm = document.getElementById('forgotForm');
  const resetIdentifier = document.getElementById('resetIdentifier');
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  const resetStep1 = document.getElementById('resetStep1');
  const resetStep2 = document.getElementById('resetStep2');
  const resetStep3 = document.getElementById('resetStep3');
  const resetTargetDisplay = document.getElementById('resetTargetDisplay');
  const otpForm = document.getElementById('otpForm');
  const otpInputs = document.querySelectorAll('.otp-input');
  const resendOtpBtn = document.getElementById('resendOtpBtn');
  const finishResetBtn = document.getElementById('finishResetBtn');

  // ==========================================================================
  // Toast Notification System
  // ==========================================================================
  function showToast(message, icon = '✓') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-message">${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ==========================================================================
  // Tab Switching
  // ==========================================================================
  function switchTab(tab) {
    if (tab === 'signup') {
      tabSignUpBtn.classList.add('active');
      tabSignUpBtn.setAttribute('aria-selected', 'true');
      tabSignInBtn.classList.remove('active');
      tabSignInBtn.setAttribute('aria-selected', 'false');
      signUpPanel.classList.add('active');
      signInPanel.classList.remove('active');
    } else {
      tabSignInBtn.classList.add('active');
      tabSignInBtn.setAttribute('aria-selected', 'true');
      tabSignUpBtn.classList.remove('active');
      tabSignUpBtn.setAttribute('aria-selected', 'false');
      signInPanel.classList.add('active');
      signUpPanel.classList.remove('active');
    }
  }

  if (tabSignInBtn) tabSignInBtn.addEventListener('click', () => switchTab('signin'));
  if (tabSignUpBtn) tabSignUpBtn.addEventListener('click', () => switchTab('signup'));
  if (switchToSignInLink) {
    switchToSignInLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('signin');
    });
  }

  // ==========================================================================
  // Pakistani/UAE Phone Format Helper
  // ==========================================================================
  if (signUpPhone) {
    signUpPhone.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      e.target.value = val;
    });
  }

  // ==========================================================================
  // Sign In Handler
  // ==========================================================================
  if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const identifier = signInIdentifier.value.trim();
      const password = signInPassword.value.trim();
      let isValid = true;

      const idFeedback = document.getElementById('signInIdentifierFeedback');
      const passFeedback = document.getElementById('signInPasswordFeedback');

      if (!identifier) {
        signInIdentifier.classList.add('is-invalid');
        idFeedback.textContent = 'Please enter your email or UAE mobile number.';
        isValid = false;
      } else {
        signInIdentifier.classList.remove('is-invalid');
        idFeedback.textContent = '';
      }

      if (!password || password.length < 6) {
        signInPassword.classList.add('is-invalid');
        passFeedback.textContent = 'Please enter your password.';
        isValid = false;
      } else {
        signInPassword.classList.remove('is-invalid');
        passFeedback.textContent = '';
      }

      if (!isValid) return;

      signInSubmitBtn.classList.add('loading');

      setTimeout(() => {
        const userName = identifier.includes('@') ? identifier.split('@')[0] : 'Trade Partner';
        const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1);

        const userObj = {
          name: formattedName,
          email: identifier.includes('@') ? identifier : `${identifier}@nooralfajr.ae`,
          phone: identifier.includes('@') ? '+971 55 123 4567' : identifier,
          isLoggedIn: true,
          joined: new Date().toISOString()
        };

        localStorage.setItem('nooralfajr_user', JSON.stringify(userObj));
        showToast(`Welcome back, ${formattedName}! Redirecting...`, '⚡');

        setTimeout(() => {
          window.location.href = 'index.html?logged_in=1';
        }, 1200);
      }, 1000);
    });
  }

  // ==========================================================================
  // Sign Up Handler
  // ==========================================================================
  if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = signUpFullName.value.trim();
      const email = signUpEmail.value.trim();
      const phone = signUpPhone.value.trim();
      const password = signUpPassword.value;
      const termsAccepted = termsOptIn.checked;

      let isValid = true;

      if (!fullName) {
        signUpFullName.classList.add('is-invalid');
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email)) {
        signUpEmail.classList.add('is-invalid');
        isValid = false;
      }

      if (!phone || phone.length < 9) {
        signUpPhone.classList.add('is-invalid');
        isValid = false;
      }

      if (!password || password.length < 8) {
        signUpPassword.classList.add('is-invalid');
        isValid = false;
      }

      if (!termsAccepted) {
        showToast('Please agree to terms.', '⚠️');
        isValid = false;
      }

      if (!isValid) return;

      signUpSubmitBtn.classList.add('loading');

      setTimeout(() => {
        const userObj = {
          name: fullName,
          email: email,
          phone: `+971 ${phone}`,
          isLoggedIn: true,
          welcomeCoupon: 'NOOR10',
          joined: new Date().toISOString()
        };

        localStorage.setItem('nooralfajr_user', JSON.stringify(userObj));
        showToast(`Welcome to NOOR Al-FAJR, ${fullName}! 10% coupon unlocked.`, '🎉');

        setTimeout(() => {
          window.location.href = 'index.html?registered=1';
        }, 1200);
      }, 1200);
    });
  }

  // ==========================================================================
  // Social Login Mock Handlers
  // ==========================================================================
  function handleSocialLogin(provider) {
    showToast(`Connecting to ${provider}...`, '⏳');
    setTimeout(() => {
      const userObj = {
        name: 'Shared User',
        email: `partner@${provider.toLowerCase()}.com`,
        phone: '+971 55 123 4567',
        isLoggedIn: true,
        provider: provider,
        joined: new Date().toISOString()
      };

      localStorage.setItem('nooralfajr_user', JSON.stringify(userObj));
      showToast(`Signed in with ${provider}!`, '⚡');
      setTimeout(() => { window.location.href = 'index.html?logged_in=1'; }, 1000);
    }, 800);
  }

  if (googleLoginBtn) googleLoginBtn.addEventListener('click', () => handleSocialLogin('Google'));
  if (whatsappLoginBtn) whatsappLoginBtn.addEventListener('click', () => handleSocialLogin('WhatsApp'));
  if (appleLoginBtn) appleLoginBtn.addEventListener('click', () => handleSocialLogin('Apple'));
});
