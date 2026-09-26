/**
 * VELORA E-COMMERCE AUTHENTICATION MODULE (login.js)
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
  const toggleSignInPassword = document.getElementById('toggleSignInPassword');

  // Elements: Sign Up Form
  const signUpForm = document.getElementById('signUpForm');
  const signUpFullName = document.getElementById('signUpFullName');
  const signUpEmail = document.getElementById('signUpEmail');
  const signUpPhone = document.getElementById('signUpPhone');
  const signUpPassword = document.getElementById('signUpPassword');
  const signUpSubmitBtn = document.getElementById('signUpSubmitBtn');
  const toggleSignUpPassword = document.getElementById('toggleSignUpPassword');
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

  // Check URL params for direct tab open (e.g. login.html?tab=signup)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('tab') === 'signup' || urlParams.get('tab') === 'register') {
    switchTab('signup');
  }

  // ==========================================================================
  // Password Visibility Toggle
  // ==========================================================================
  function setupPasswordToggle(toggleBtn, inputField) {
    if (!toggleBtn || !inputField) return;

    toggleBtn.addEventListener('click', () => {
      const isPassword = inputField.type === 'password';
      inputField.type = isPassword ? 'text' : 'password';

      const eyeOpen = toggleBtn.querySelector('.eye-open');
      const eyeClosed = toggleBtn.querySelector('.eye-closed');

      if (eyeOpen && eyeClosed) {
        eyeOpen.style.display = isPassword ? 'none' : 'block';
        eyeClosed.style.display = isPassword ? 'block' : 'none';
      }
    });
  }

  setupPasswordToggle(toggleSignInPassword, signInPassword);
  setupPasswordToggle(toggleSignUpPassword, signUpPassword);

  // ==========================================================================
  // Password Strength Analyzer
  // ==========================================================================
  if (signUpPassword) {
    signUpPassword.addEventListener('input', () => {
      const val = signUpPassword.value;
      let score = 0;

      if (val.length >= 8) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[A-Z]/.test(val) || /[^A-Za-z0-9]/.test(val)) score++;

      // Reset bars
      bar1.className = 'strength-bar';
      bar2.className = 'strength-bar';
      bar3.className = 'strength-bar';

      if (val.length === 0) {
        strengthText.textContent = 'Password Strength';
        strengthText.style.color = 'var(--text-subtle)';
        strengthHint.textContent = 'Min 8 chars, 1 number';
        return;
      }

      if (score === 1) {
        bar1.classList.add('weak');
        strengthText.textContent = 'Weak';
        strengthText.style.color = 'var(--badge-red)';
        strengthHint.textContent = 'Add numbers or uppercase letters';
      } else if (score === 2) {
        bar1.classList.add('medium');
        bar2.classList.add('medium');
        strengthText.textContent = 'Good';
        strengthText.style.color = '#f59e0b';
        strengthHint.textContent = 'Add a symbol to make it strong';
      } else if (score >= 3) {
        bar1.classList.add('strong');
        bar2.classList.add('strong');
        bar3.classList.add('strong');
        strengthText.textContent = 'Strong';
        strengthText.style.color = 'var(--badge-green)';
        strengthHint.textContent = 'Great password!';
      }
    });
  }

  // ==========================================================================
  // Pakistani Phone Format Helper
  // ==========================================================================
  if (signUpPhone) {
    signUpPhone.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.startsWith('92')) val = val.substring(2);
      if (val.startsWith('0')) val = val.substring(1);
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
        idFeedback.textContent = 'Please enter your email or Pakistan mobile number.';
        idFeedback.className = 'input-feedback error';
        isValid = false;
      } else {
        signInIdentifier.classList.remove('is-invalid');
        signInIdentifier.classList.add('is-valid');
        idFeedback.textContent = '';
      }

      if (!password || password.length < 6) {
        signInPassword.classList.add('is-invalid');
        passFeedback.textContent = 'Please enter your password (minimum 6 characters).';
        passFeedback.className = 'input-feedback error';
        isValid = false;
      } else {
        signInPassword.classList.remove('is-invalid');
        signInPassword.classList.add('is-valid');
        passFeedback.textContent = '';
      }

      if (!isValid) return;

      // Button Loading State
      signInSubmitBtn.classList.add('loading');

      setTimeout(() => {
        // Save Mock User Session
        const userName = identifier.includes('@') ? identifier.split('@')[0] : 'Shopper';
        const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1);

        const userObj = {
          name: formattedName,
          email: identifier.includes('@') ? identifier : `${identifier}@velora.pk`,
          phone: identifier.includes('@') ? '03001234567' : identifier,
          isLoggedIn: true,
          joined: new Date().toISOString()
        };

        localStorage.setItem('velora_user', JSON.stringify(userObj));
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

      const nameFeedback = document.getElementById('signUpFullNameFeedback');
      const emailFeedback = document.getElementById('signUpEmailFeedback');
      const phoneFeedback = document.getElementById('signUpPhoneFeedback');
      const passFeedback = document.getElementById('signUpPasswordFeedback');

      if (!fullName || fullName.length < 2) {
        signUpFullName.classList.add('is-invalid');
        nameFeedback.textContent = 'Please enter your full name.';
        nameFeedback.className = 'input-feedback error';
        isValid = false;
      } else {
        signUpFullName.classList.remove('is-invalid');
        signUpFullName.classList.add('is-valid');
        nameFeedback.textContent = '';
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email)) {
        signUpEmail.classList.add('is-invalid');
        emailFeedback.textContent = 'Please enter a valid email address.';
        emailFeedback.className = 'input-feedback error';
        isValid = false;
      } else {
        signUpEmail.classList.remove('is-invalid');
        signUpEmail.classList.add('is-valid');
        emailFeedback.textContent = '';
      }

      if (!phone || phone.length < 10) {
        signUpPhone.classList.add('is-invalid');
        phoneFeedback.textContent = 'Please enter a valid 10-digit mobile number (e.g. 3001234567).';
        phoneFeedback.className = 'input-feedback error';
        isValid = false;
      } else {
        signUpPhone.classList.remove('is-invalid');
        signUpPhone.classList.add('is-valid');
        phoneFeedback.textContent = '✓ Verified for Pakistan delivery updates';
        phoneFeedback.className = 'input-feedback success';
      }

      if (!password || password.length < 8) {
        signUpPassword.classList.add('is-invalid');
        passFeedback.textContent = 'Password must be at least 8 characters long.';
        passFeedback.className = 'input-feedback error';
        isValid = false;
      } else {
        signUpPassword.classList.remove('is-invalid');
        signUpPassword.classList.add('is-valid');
        passFeedback.textContent = '';
      }

      if (!termsAccepted) {
        showToast('Please agree to the Terms & Privacy Policy to continue.', '⚠️');
        isValid = false;
      }

      if (!isValid) return;

      // Button Loading
      signUpSubmitBtn.classList.add('loading');

      setTimeout(() => {
        const userObj = {
          name: fullName,
          email: email,
          phone: `+92 ${phone}`,
          isLoggedIn: true,
          welcomeCoupon: 'VELORA10',
          joined: new Date().toISOString()
        };

        localStorage.setItem('velora_user', JSON.stringify(userObj));
        showToast(`Welcome to VELORA, ${fullName}! 10% coupon unlocked.`, '🎉');

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
        name: provider === 'Google' ? 'Syed Google User' : provider === 'WhatsApp' ? 'WhatsApp User' : 'Apple User',
        email: `shopper@${provider.toLowerCase()}.com`,
        phone: '+92 300 1234567',
        isLoggedIn: true,
        provider: provider,
        joined: new Date().toISOString()
      };

      localStorage.setItem('velora_user', JSON.stringify(userObj));
      showToast(`Signed in with ${provider}! Redirecting...`, '⚡');

      setTimeout(() => {
        window.location.href = 'index.html?logged_in=1';
      }, 1000);
    }, 800);
  }

  if (googleLoginBtn) googleLoginBtn.addEventListener('click', () => handleSocialLogin('Google'));
  if (whatsappLoginBtn) whatsappLoginBtn.addEventListener('click', () => handleSocialLogin('WhatsApp'));
  if (appleLoginBtn) appleLoginBtn.addEventListener('click', () => handleSocialLogin('Apple'));

  // ==========================================================================
  // Forgot Password / OTP Modal Flow
  // ==========================================================================
  function openForgotModal() {
    if (forgotModalBackdrop) {
      forgotModalBackdrop.classList.add('open');
      resetStep1.style.display = 'block';
      resetStep2.style.display = 'none';
      resetStep3.style.display = 'none';
      if (resetIdentifier) {
        resetIdentifier.value = signInIdentifier.value || '';
        setTimeout(() => resetIdentifier.focus(), 200);
      }
    }
  }

  function closeForgotModal() {
    if (forgotModalBackdrop) forgotModalBackdrop.classList.remove('open');
  }

  if (openForgotModalBtn) openForgotModalBtn.addEventListener('click', openForgotModal);
  if (closeForgotModalBtn) closeForgotModalBtn.addEventListener('click', closeForgotModal);
  if (forgotModalBackdrop) {
    forgotModalBackdrop.addEventListener('click', (e) => {
      if (e.target === forgotModalBackdrop) closeForgotModal();
    });
  }

  // Step 1: Send OTP
  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = resetIdentifier.value.trim();
      const feedback = document.getElementById('resetIdentifierFeedback');

      if (!val) {
        resetIdentifier.classList.add('is-invalid');
        feedback.textContent = 'Please enter your registered email or phone.';
        feedback.className = 'input-feedback error';
        return;
      }

      sendOtpBtn.classList.add('loading');

      setTimeout(() => {
        sendOtpBtn.classList.remove('loading');
        resetStep1.style.display = 'none';
        resetStep2.style.display = 'block';
        if (resetTargetDisplay) resetTargetDisplay.textContent = val;

        // Auto focus first OTP input
        if (otpInputs.length > 0) otpInputs[0].focus();
        showToast('Verification code sent: 849201', '📩');
      }, 900);
    });
  }

  // Step 2: OTP Input Navigation (Auto focus next input)
  otpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const val = e.target.value;
      if (val && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && index > 0) {
        otpInputs[index - 1].focus();
      }
    });

    // Handle paste of full 6-digit code
    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const pastedData = (e.clipboardData || window.clipboardData).getData('text').trim();
      if (/^\d{6}$/.test(pastedData)) {
        pastedData.split('').forEach((digit, i) => {
          if (otpInputs[i]) otpInputs[i].value = digit;
        });
        otpInputs[5].focus();
      }
    });
  });

  // Resend OTP button
  if (resendOtpBtn) {
    resendOtpBtn.addEventListener('click', () => {
      showToast('New code sent: 519340', '📲');
    });
  }

  // Verify OTP
  if (otpForm) {
    otpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const verifyOtpBtn = document.getElementById('verifyOtpBtn');
      verifyOtpBtn.classList.add('loading');

      setTimeout(() => {
        verifyOtpBtn.classList.remove('loading');
        resetStep2.style.display = 'none';
        resetStep3.style.display = 'block';
      }, 900);
    });
  }

  if (finishResetBtn) {
    finishResetBtn.addEventListener('click', () => {
      closeForgotModal();
      switchTab('signin');
      showToast('You can now sign in with your updated credentials.', '🔑');
    });
  }
});
