/* ==========================================================================
   Banrendi | Main JavaScript
   ========================================================================== */

(function () {
  'use strict';

  // ---- Translations ----
  var translations = {
    es: {
      // Nav
      navLink1: 'Cómo Funciona',
      navLink2: 'Resultados',
      navLink3: 'Por Qué Nosotros',
      navLink4: 'Empezar',
      navCta: 'Acceso Anticipado',

      // Hero
      heroSocialProof: 'El asistente financiero hecho para contratistas',
      heroLabel: 'Plataforma Financiera Segura',
      heroTitle: 'Estás ganando bien. ¿Sabes a dónde va tu dinero?',
      heroSubtitle: 'Sabe lo que tienes, lo que te deben, y lo que se viene — antes de que sea un problema.',
      heroCta1: 'Descargar App',
      heroCta2: 'Ver Cómo Funciona',
      heroPartnersLabel: 'Infraestructura Segura Impulsada Por',
      heroPartnersTagline: 'Pagos seguros y cuentas conectadas con encriptación bancaria',
      heroStat1Value: '256-bit',
      heroStat1Label: 'Encriptación de nivel bancario',
      heroStat2Value: 'Stripe',
      heroStat2Label: 'Pagos seguros y rápidos',
      heroStat3Value: 'Plaid',
      heroStat3Label: 'Conecta todas tus cuentas',
      
      // Problem
      problemLabel: 'Te Entendemos',
      problemTitle: 'Construimos la forma más fácil de controlar tu dinero',
      problemSubtitle: 'Ganar dinero es lo que haces. Perderle la pista es lo que se interpone.',
      problem1Title: 'Conecta tus cuentas',
      problem1Text: 'Vincula tus bancos y apps de pago en segundos — todo en un solo lugar desde el primer día.',
      problem2Title: 'Dinos qué importa',
      problem2Text: 'Flujo de efectivo, ganancia por proyecto, gastos próximos — tu panel muestra exactamente lo que necesitas.',
      problem3Title: 'Tus reportes, siempre listos',
      problem3Text: 'P&L, ingresos, gastos — actualizados en tiempo real. Sin hojas de cálculo, sin esperas, sin adivinar.',
      
      // Solutions
      solutionsLabel: '',
      solutionsTitle: '',

      solution1Badge: 'Claridad Financiera',
      solution1Title: 'Banrendi funciona como tu asistente financiero de negocios.',
      solution1Text: 'Ganar dinero importa. Saber a dónde va importa igual.',
      solution1Feature1: '✅ Ingresos y gastos rastreados automáticamente',
      solution1Feature2: '✅ Recibe alertas cuando algo no cuadra',
      solution1Feature3: '',
      solution1Feature4: '',

      before: 'Antes',
      now: 'Ahora',

      solution2Badge: 'Tus Libros, Reinventados',
      solution2Title: 'Antes así. Ahora así.',
      solution2Text: 'Antes: pide cita, espera días para respuestas. Ahora: pregúntale a Banrendi y obtén respuestas al instante, 24/7.',
      solution2Feature1: 'Pide cita con tu contador',
      solution2Feature2: 'Espera días para una respuesta',
      solution2Feature3: 'Pregúntale a Banrendi cualquier pregunta, cuando quieras',
      solution2Feature4: 'Respuestas al instante, 24/7 — sin esperas, sin llamadas',

      solution3Badge: 'Pérdidas y Ganancias',
      solution3Title: 'El reporte que maneja tu negocio — y lo demuestra.',
      solution3Text: 'Tu P&L es lo que piden los prestamistas y el IRS. Banrendi lo genera automáticamente — para que siempre estés listo.',
      solution3Feature1: '✅ P&L listo para impuestos, siempre actualizado',
      solution3Feature2: '✅ Comparte con tu banco o prestamista con un clic',
      solution3Feature3: '',
      solution3Feature4: '',
      
      // How it works
      howLabel: 'Cómo Funciona',
      howTitle: 'Empieza en minutos, califica para la tarjeta',
      howSubtitle: 'Entre más usas la app, más rápido calificas para tu tarjeta de gasto al 0%.',
      step1Title: 'Conecta tus cuentas',
      step1Text: 'Vincula tus bancos, Stripe, Venmo y más con Plaid. Ve todos tus ingresos y gastos en un solo lugar.',
      step2Title: 'Cotiza y cobra',
      step2Text: 'Envía cotizaciones profesionales, actualiza change orders, y convierte a facturas. Tus clientes pagan en línea con Stripe.',
      step3Title: 'Califica para la tarjeta',
      step3Text: 'Mientras usas la app, construyes tu perfil. Califica para una tarjeta de gasto al 0% basada en tu flujo real.',
      
      // Results
      resultsLabel: 'Resultados Reales',
      resultsTitle: 'Lo que están viendo contratistas como tú',
      result1Value: '14 días',
      result1Text: 'Más rápido en cobrar comparado con cotizaciones en papel',
      result2Value: '3 horas',
      result2Text: 'Ahorradas por semana en cotizaciones, facturas, y papeleo',
      result3Value: '100%',
      result3Text: 'Visibilidad de tu dinero en todas tus cuentas conectadas',
      
      // AI Chat
      aiLabel: 'Rendi IA',
      aiTitle: 'Lo detectamos. Y si tienes una pregunta — solo pregunta.',
      aiText: 'Recibe alertas cuando el flujo es bajo o es hora de cobrar. ¿Quieres saber más? Solo pregunta.',
      aiMobile: 'Móvil',
      aiWeb: 'Web',
      aiUserMsg: '¿Qué tan cerca estoy de mi meta de ingresos este mes?',
      aiBotIntro: 'Analizando tus ingresos de los últimos 3 meses:',
      aiData1: '<strong>Marzo de 2025:</strong> $23,518.46',
      aiData2: '<strong>Abril de 2025:</strong> $28,433.59',
      aiData3: '<strong>Mayo de 2025:</strong> $19,836.63',
      aiBotInsight: 'Vas al <strong>68%</strong> de tu meta mensual. Necesitas <strong>$1,200</strong> más para alcanzarla.',

      // Bilingual
      bilingualLabel: '100% en Español',
      bilingualTitle: 'Cotizaciones, facturas y reportes en tu idioma',
      bilingualText: 'Toda la app funciona en español. Tus cotizaciones salen profesionales. Tus clientes reciben facturas claras. Y tú entiendes cada número en tus reportes.',
      
      // About
      aboutLabel: 'Por Qué Banrendi',
      aboutTitle: 'Lo construimos porque hemos estado en tu lugar',
      aboutSubtitle: 'Nuestro equipo incluye contratistas y gerentes de construcción. Sabemos lo que es esperar semanas para cobrar.',
      about1Title: 'Seguridad de nivel bancario',
      about1Text: 'Encriptación de nivel bancario. Plaid conecta tus cuentas de forma segura. Tus datos siempre protegidos.',
      about2Title: 'Simple y rápido',
      about2Text: 'Estás ocupado. Si sabes enviar textos, puedes usar Banrendi.',
      about3Title: 'No somos un banco',
      about3Text: 'Sin sucursales, sin filas, sin papeleo. Solo herramientas que funcionan.',
      
      // CTA
      ctaTradesLabel: 'Para techadores, plomeros, electricistas, pintores y más',
      ctaTitle: '¿Listo para hacerte la vida más fácil?',
      ctaSubtitle: 'Descarga la app y empieza a ver tus finanzas claramente — en minutos.',
      ctaName: 'Tu nombre',
      ctaEmail: 'Correo electrónico',
      ctaCompany: 'Nombre de tu empresa',
      ctaType: '¿Qué tipo de trabajo haces?',
      ctaTypeGeneral: 'Contratista General',
      ctaTypeSub: 'Subcontratista',
      ctaTypeSpecialty: 'Especialidad (Eléctrico, Plomería, HVAC)',
      ctaTypeOther: 'Otro',
      ctaButton: 'Quiero Acceso Anticipado',
      ctaDisclaimer: 'Solo te escribiremos cuando sea tu turno. Sin spam, nunca.',
      
      // Footer
      footerTagline: 'Claridad financiera para contratistas y sus familias. Disponible en inglés y español.',
      footerProduct: 'Producto',
      footerProd1: 'Cómo Funciona',
      footerProd2: 'Resultados',
      footerProd3: 'Rendi IA',
      footerCompany: 'Empresa',
      footerComp1: 'Por Qué Nosotros',
      footerComp2: 'Resultados',
      footerComp3: 'Empezar',
      footerLegal: 'Legal',
      footerLegal1: 'Política de Privacidad',
      footerLegal2: 'Términos de Servicio',
      footerCopy: '© 2026 Banrendi. Todos los derechos reservados.',
      
      // Mission
      missionTitle: 'Nuestra misión es tu éxito',
      
      // Mock UI
      mockQuoteLabel: 'Cotización #247',
      mockQuoteItem1: 'Remodelación baño',
      mockQuoteItem2: 'Materiales',
      mockQuoteBtn: 'Enviar al Cliente',
      mockCardLabel: 'Tarjeta de Gasto Banrendi',
      mockCardAvailable: 'Disponible',
      mockCardInterest: 'Interés',
      mockCardBtn: 'Usar Tarjeta',
      mockReportLabel: 'Flujo de Efectivo - Junio',
      mockReportIncome: 'Ingresos',
      mockReportExpenses: 'Gastos',
      mockReportProject: 'Proyecto más rentable',
      mockReportProjectName: 'Remodelación Cocina',
      mockReportMargin: '32% margen'
    },
    en: {
      // Nav
      navLink1: 'How It Works',
      navLink2: 'Results',
      navLink3: 'Why Us',
      navLink4: 'Get Started',
      navCta: 'Early Access',

      // Hero
      heroSocialProof: 'The financial assistant built for contractors',
      heroLabel: 'Secure Finance Platform',
      heroTitle: 'You\'re making good money. Do you know where it\'s going?',
      heroSubtitle: 'Know what you have, what you\'re owed, and what\'s coming — before it becomes a problem.',
      heroCta1: 'Download App',
      heroCta2: 'See How It Works',
      heroPartnersLabel: 'Secure Infrastructure Powered By',
      heroPartnersTagline: 'Secure payments and connected accounts with bank-level encryption',
      heroStat1Value: '256-bit',
      heroStat1Label: 'Bank-level encryption',
      heroStat2Value: 'Stripe',
      heroStat2Label: 'Fast, secure payments',
      heroStat3Value: 'Plaid',
      heroStat3Label: 'Connect all your accounts',
      
      // Problem
      problemLabel: 'We Get It',
      problemTitle: "We built the easiest way for you to stay on top of your money",
      problemSubtitle: "Making money is what you do. Losing track of it is what gets in the way.",
      problem1Title: 'Connect your accounts',
      problem1Text: "Link your banks and payment apps in seconds — everything in one place from day one.",
      problem2Title: 'Tell us what matters to you',
      problem2Text: "Cash flow, project profit, upcoming expenses — your dashboard shows exactly what you need.",
      problem3Title: "Your reports, always ready",
      problem3Text: "P&L, income, expenses — updated in real time. No spreadsheets, no waiting, no guessing.",
      
      // Solutions
      solutionsLabel: '',
      solutionsTitle: '',

      solution1Badge: 'Financial Clarity',
      solution1Title: 'Banrendi works like your business financial assistant',
      solution1Text: 'Making money matters. Knowing where it goes matters just as much.',
      solution1Feature1: '✅ Income and expenses tracked automatically',
      solution1Feature2: '✅ Get notified when something looks off',
      solution1Feature3: '',
      solution1Feature4: '',
      
      before: 'Before',
      now: 'Now',

      solution2Badge: 'Your Books, Reinvented',
      solution2Title: 'That was then. This is now.',
      solution2Text: 'Before: book an appointment, wait days for answers. Now: ask Banrendi and get answers instantly, 24/7.',
      solution2Feature1: 'Book an appointment with your bookkeeper',
      solution2Feature2: 'Wait days for a response',
      solution2Feature3: 'Ask Banrendi any financial question, anytime',
      solution2Feature4: 'Get instant answers, 24/7 — no waiting, no calls',
      
      solution3Badge: 'Profit & Loss',
      solution3Title: 'The one report that runs your business — and proves it.',
      solution3Text: 'Your P&L is what lenders and the IRS ask for. Banrendi generates it automatically — so you\'re always ready.',
      solution3Feature1: '✅ Tax-ready P&L, always current',
      solution3Feature2: '✅ Share with your bank or lender in one click',
      solution3Feature3: '',
      solution3Feature4: '',
      
      // How it works
      howLabel: 'How It Works',
      howTitle: 'Start in minutes, qualify for the card',
      howSubtitle: 'The more you use the app, the faster you qualify for your 0% spend card.',
      step1Title: 'Connect your accounts',
      step1Text: 'Link your banks, Stripe, Venmo and more with Plaid. See all your income and expenses in one place.',
      step2Title: 'Quote and collect',
      step2Text: 'Send professional quotes, update change orders, and convert to invoices. Your clients pay online with Stripe.',
      step3Title: 'Qualify for the card',
      step3Text: 'As you use the app, you build your profile. Qualify for a 0% spend card based on your real cash flow.',
      
      // Results
      resultsLabel: 'Real Results',
      resultsTitle: 'What contractors like you are seeing',
      result1Value: '14 days',
      result1Text: 'Faster to collect compared to paper quotes',
      result2Value: '3 hours',
      result2Text: 'Saved per week on quotes, invoices, and paperwork',
      result3Value: '100%',
      result3Text: 'Visibility of your money across all connected accounts',
      
      // AI Chat
      aiLabel: 'Rendi AI',
      aiTitle: 'We\'ll flag it. And if you have a question — ask it.',
      aiText: 'Get alerted when cash flow looks tight or it\'s time to collect. Want to dig deeper? Just ask — answers in seconds.',
      aiMobile: 'Mobile',
      aiWeb: 'Web',
      aiUserMsg: 'How much have I spent with Roofing Direct this year?',
      aiBotIntro: 'You\'ve paid <strong>Roofing Direct</strong> a total of <strong>$34,820</strong> across 9 transactions in 2024. That\'s up 18% from last year.',
      aiData1: '<strong>Largest payment:</strong> $8,400 — March 14',
      aiData2: '<strong>Most recent:</strong> $3,200 — Oct 2',
      aiData3: '',
      aiBotInsight: '💡 Based on your volume, you may qualify for contractor pricing. Negotiating a 10% discount could save you <strong>~$3,400/year</strong>.',

      // Bilingual
      bilingualLabel: '100% Bilingual',
      bilingualTitle: 'Quotes, invoices and reports in your language',
      bilingualText: 'The entire app works in English and Spanish. Your quotes look professional. Your clients receive clear invoices. And you understand every number in your reports.',
      
      // About
      aboutLabel: 'Why Banrendi',
      aboutTitle: "We built this because we've been in your shoes",
      aboutSubtitle: 'Our team includes contractors and construction managers. We know what it\'s like to wait weeks to get paid.',
      about1Title: 'Bank-level security',
      about1Text: 'Bank-level encryption. Plaid connects your accounts securely. Your data is always protected.',
      about2Title: 'Simple and fast',
      about2Text: "You're busy. If you can text, you can use Banrendi.",
      about3Title: "We're not a bank",
      about3Text: "No branches, no lines, no paperwork. Just tools that work.",
      
      // CTA
      ctaTradesLabel: 'For roofers, plumbers, electricians, painters and more',
      ctaTitle: 'Ready to make your life easier?',
      ctaSubtitle: 'Download the app and start seeing your finances clearly — in minutes.',
      ctaName: 'Your name',
      ctaEmail: 'Email address',
      ctaCompany: 'Company name',
      ctaType: 'What type of work do you do?',
      ctaTypeGeneral: 'General Contractor',
      ctaTypeSub: 'Subcontractor',
      ctaTypeSpecialty: 'Specialty Trade (Electric, Plumbing, HVAC)',
      ctaTypeOther: 'Other',
      ctaButton: 'Get Early Access',
      ctaDisclaimer: "We'll only email you when it's your turn. No spam, ever.",
      
      // Footer
      footerTagline: 'Financial clarity for contractors and their families. Available in English and Spanish.',
      footerProduct: 'Product',
      footerProd1: 'How It Works',
      footerProd2: 'Results',
      footerProd3: 'Rendi AI',
      footerCompany: 'Company',
      footerComp1: 'Why Us',
      footerComp2: 'Results',
      footerComp3: 'Get Started',
      footerLegal: 'Legal',
      footerLegal1: 'Privacy Policy',
      footerLegal2: 'Terms of Service',
      footerCopy: '© 2026 Banrendi. All rights reserved.',
      
      // Mission
      missionTitle: 'Our mission is your success',
      
      // Mock UI
      mockQuoteLabel: 'Quote #247',
      mockQuoteItem1: 'Bathroom remodel',
      mockQuoteItem2: 'Materials',
      mockQuoteBtn: 'Send to Client',
      mockCardLabel: 'Banrendi Spend Card',
      mockCardAvailable: 'Available',
      mockCardInterest: 'Interest',
      mockCardBtn: 'Use Card',
      mockReportLabel: 'Cash Flow - June',
      mockReportIncome: 'Income',
      mockReportExpenses: 'Expenses',
      mockReportProject: 'Most profitable project',
      mockReportProjectName: 'Kitchen Remodel',
      mockReportMargin: '32% margin'
    }
  };

  var currentLang = 'en'; // Start in English

  // ---- Navigation scroll behavior ----
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  // ---- Mobile menu toggle ----
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');

      if (mobileMenu.classList.contains('active')) {
        mobileMenu.style.display = 'block';
        mobileMenu.offsetHeight;
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        setTimeout(function () {
          if (!mobileMenu.classList.contains('active')) {
            mobileMenu.style.display = 'none';
          }
        }, 250);
      }
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(function () {
          mobileMenu.style.display = 'none';
        }, 250);
      });
    });
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = nav ? nav.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---- Hero text cascade animation - disabled, hero loads instantly ----
  function initHeroAnimation() {}

  // ---- Nav scroll effect ----
  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    
    var scrollThreshold = 50;
    
    function updateNav() {
      if (window.scrollY > scrollThreshold) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav(); // Initial check
  }

  // ---- Parallax effect on scroll ----
  function initParallax() {
    var hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
      var scrolled = window.scrollY;
      var rate = scrolled * 0.3;
      
      if (scrolled < window.innerHeight) {
        hero.style.setProperty('--parallax-offset', rate + 'px');
      }
    }, { passive: true });
  }

  // ---- Scroll-triggered fade-in animations ----
  function initScrollAnimations() {
    // Standard fade-in elements
    var fadeSelectors = [
      '.problem-card',
      '.step-card',
      '.market-stat-card',
      '.value-card',
      '.section-header',
      '.ai-feature-content'
    ];

    fadeSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el, index) {
        el.classList.add('fade-in');
        // Stagger delays for grid items
        var delay = (index % 4) + 1;
        el.classList.add('fade-in-delay-' + delay);
      });
    });

    // Slide in from left (content sections)
    document.querySelectorAll('.solution-feature-content').forEach(function(el) {
      el.classList.add('slide-in-left');
    });

    // Slide in from right (visual sections)
    document.querySelectorAll('.solution-feature-visual, .ai-feature-visual').forEach(function(el) {
      el.classList.add('slide-in-right');
    });

    // Handle reversed sections
    document.querySelectorAll('.solution-feature-reverse .solution-feature-content').forEach(function(el) {
      el.classList.remove('slide-in-left');
      el.classList.add('slide-in-right');
    });
    document.querySelectorAll('.solution-feature-reverse .solution-feature-visual').forEach(function(el) {
      el.classList.remove('slide-in-right');
      el.classList.add('slide-in-left');
    });

    // Scale in for CTA and bilingual sections
    document.querySelectorAll('.bilingual-content, .cta-content').forEach(function(el) {
      el.classList.add('scale-in');
    });

    // Create observer with enhanced options
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // Add small delay for smoother experience
            setTimeout(function() {
              entry.target.classList.add('visible');
            }, 50);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    // Observe all animated elements
    var animatedSelectors = '.fade-in, .slide-in-left, .slide-in-right, .scale-in';
    document.querySelectorAll(animatedSelectors).forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- Language Toggle ----
  function applyTranslations(lang) {
    var t = translations[lang];
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Nav
    var navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks.length >= 4) {
      navLinks[0].textContent = t.navLink1;
      navLinks[1].textContent = t.navLink2;
      navLinks[2].textContent = t.navLink3;
      navLinks[3].textContent = t.navLink4;
    }
    var navCtaBtn = document.querySelector('.nav-actions .btn');
    if (navCtaBtn) navCtaBtn.textContent = t.navCta;
    
    // Mobile nav
    var mobileLinks = document.querySelectorAll('.mobile-menu-links a');
    if (mobileLinks.length >= 4) {
      mobileLinks[0].textContent = t.navLink1;
      mobileLinks[1].textContent = t.navLink2;
      mobileLinks[2].textContent = t.navLink3;
      mobileLinks[3].textContent = t.navLink4;
    }
    var mobileCta = document.querySelector('.mobile-menu-cta');
    if (mobileCta) mobileCta.textContent = t.heroCta1;
    
    // Hero
    var heroSocialProof = document.querySelector('.hero-social-proof-text');
    var heroLabel = document.querySelector('.hero-label');
    var heroTitle = document.querySelector('.hero-title');
    var heroSubtitle = document.querySelector('.hero-subtitle');
    var heroCtaBtn = document.querySelector('.hero-cta');
    var heroStats = document.querySelectorAll('.hero-stat');

    if (heroSocialProof) heroSocialProof.textContent = t.heroSocialProof;
    if (heroLabel) heroLabel.textContent = t.heroLabel;
    if (heroTitle) heroTitle.innerHTML = t.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (heroCtaBtn) heroCtaBtn.textContent = t.heroCta1;
    if (heroStats.length >= 3) {
      heroStats[0].querySelector('.hero-stat-value').textContent = t.heroStat1Value;
      heroStats[0].querySelector('.hero-stat-label').textContent = t.heroStat1Label;
      heroStats[1].querySelector('.hero-stat-value').textContent = t.heroStat2Value;
      heroStats[1].querySelector('.hero-stat-label').textContent = t.heroStat2Label;
      heroStats[2].querySelector('.hero-stat-value').textContent = t.heroStat3Value;
      heroStats[2].querySelector('.hero-stat-label').textContent = t.heroStat3Label;
    }
    
    // Hero partners
    var heroPartnersLabel = document.querySelector('.hero-partners-label');
    var heroPartnersTagline = document.querySelector('.hero-partners-tagline');
    if (heroPartnersLabel) heroPartnersLabel.textContent = t.heroPartnersLabel;
    if (heroPartnersTagline) heroPartnersTagline.textContent = t.heroPartnersTagline;
    
    // Problem section
    var problemSection = document.getElementById('problem');
    if (problemSection) {
      var pLabel = problemSection.querySelector('.section-label');
      var pTitle = problemSection.querySelector('.section-title');
      var pSubtitle = problemSection.querySelector('.section-subtitle');
      var pCards = problemSection.querySelectorAll('.problem-card');
      
      if (pLabel) pLabel.textContent = t.problemLabel;
      if (pTitle) pTitle.textContent = t.problemTitle;
      if (pSubtitle) pSubtitle.textContent = t.problemSubtitle;
      
      if (pCards.length >= 3) {
        pCards[0].querySelector('h3').textContent = t.problem1Title;
        pCards[0].querySelector('p').textContent = t.problem1Text;
        pCards[1].querySelector('h3').textContent = t.problem2Title;
        pCards[1].querySelector('p').textContent = t.problem2Text;
        pCards[2].querySelector('h3').textContent = t.problem3Title;
        pCards[2].querySelector('p').textContent = t.problem3Text;
      }
    }
    
    // Solutions section
    var solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      var sLabel = solutionsSection.querySelector('.section-label');
      var sTitle = solutionsSection.querySelector('.section-title');
      
      if (sLabel) sLabel.textContent = t.solutionsLabel;
      if (sTitle) sTitle.textContent = t.solutionsTitle;
      
      var features = solutionsSection.querySelectorAll('.solution-feature');
      
      // Solution 1
      if (features[0]) {
        features[0].querySelector('.solution-badge').textContent = t.solution1Badge;
        features[0].querySelector('h3').textContent = t.solution1Title;
        features[0].querySelector('.solution-feature-content > p').textContent = t.solution1Text;
        var list1 = features[0].querySelectorAll('.feature-list li');
        if (list1.length >= 4) {
          list1[0].textContent = t.solution1Feature1;
          list1[1].textContent = t.solution1Feature2;
          list1[2].textContent = t.solution1Feature3;
          list1[3].textContent = t.solution1Feature4;
        }
        // Mock UI
        var mock1 = features[0].querySelector('.mock-content');
        if (mock1) {
          var mockLabel = mock1.querySelector('.mock-row-sm span');
          var mockRows = mock1.querySelectorAll('.mock-row');
          var mockBtn = mock1.querySelector('.mock-btn');
          if (mockLabel) mockLabel.textContent = t.mockQuoteLabel;
          if (mockRows.length >= 2) {
            mockRows[0].querySelector('.mock-label').textContent = t.mockQuoteItem1;
            mockRows[1].querySelector('.mock-label').textContent = t.mockQuoteItem2;
          }
          if (mockBtn) mockBtn.textContent = t.mockQuoteBtn;
        }
      }
      
      // Solution 2
      if (features[1]) {
        features[1].querySelector('.solution-badge').innerHTML = t.solution2Badge;
        features[1].querySelector('h3').textContent = t.solution2Title;
        var beforeLabel = features[1].querySelector('.before-label');
        var afterLabel = features[1].querySelector('.after-label');
        var beforeItems = features[1].querySelectorAll('.before-col li');
        var afterItems = features[1].querySelectorAll('.after-col li');
        if (beforeLabel) beforeLabel.textContent = t.before;
        if (afterLabel) afterLabel.textContent = t.now;
        if (beforeItems.length >= 2) {
          beforeItems[0].textContent = t.solution2Feature1;
          beforeItems[1].textContent = t.solution2Feature2;
        }
        if (afterItems.length >= 2) {
          afterItems[0].textContent = t.solution2Feature3;
          afterItems[1].textContent = t.solution2Feature4;
        }
      }
      
      // Solution 3
      if (features[2]) {
        features[2].querySelector('.solution-badge').textContent = t.solution3Badge;
        features[2].querySelector('h3').textContent = t.solution3Title;
        features[2].querySelector('.solution-feature-content > p').textContent = t.solution3Text;
        var list3 = features[2].querySelectorAll('.feature-list li');
        if (list3.length >= 4) {
          list3[0].textContent = t.solution3Feature1;
          list3[1].textContent = t.solution3Feature2;
          list3[2].textContent = t.solution3Feature3;
          list3[3].textContent = t.solution3Feature4;
        }
        // Mock UI
        var mock3 = features[2].querySelector('.mock-content');
        if (mock3) {
          var mockLabels3 = mock3.querySelectorAll('.mock-row-sm span');
          var mockRows3 = mock3.querySelectorAll('.mock-row');
          if (mockLabels3.length >= 2) {
            mockLabels3[0].textContent = t.mockReportLabel;
            mockLabels3[1].textContent = t.mockReportProject;
          }
          if (mockRows3.length >= 3) {
            mockRows3[0].querySelector('.mock-label').textContent = t.mockReportIncome;
            mockRows3[1].querySelector('.mock-label').textContent = t.mockReportExpenses;
            mockRows3[2].querySelector('.mock-label').textContent = t.mockReportProjectName;
            mockRows3[2].querySelector('.mock-value').textContent = t.mockReportMargin;
          }
        }
      }
    }
    
    // How it works
    var howSection = document.getElementById('how-it-works');
    if (howSection) {
      var hLabel = howSection.querySelector('.section-label');
      var hTitle = howSection.querySelector('.section-title');
      var hSubtitle = howSection.querySelector('.section-subtitle');
      var steps = howSection.querySelectorAll('.step-card');
      
      if (hLabel) hLabel.textContent = t.howLabel;
      if (hTitle) hTitle.textContent = t.howTitle;
      if (hSubtitle) hSubtitle.textContent = t.howSubtitle;
      
      if (steps.length >= 3) {
        steps[0].querySelector('h3').textContent = t.step1Title;
        steps[0].querySelector('p').textContent = t.step1Text;
        steps[1].querySelector('h3').textContent = t.step2Title;
        steps[1].querySelector('p').textContent = t.step2Text;
        steps[2].querySelector('h3').textContent = t.step3Title;
        steps[2].querySelector('p').textContent = t.step3Text;
      }
    }
    
    // Results
    var resultsSection = document.getElementById('market');
    if (resultsSection) {
      var rLabel = resultsSection.querySelector('.section-label');
      var rTitle = resultsSection.querySelector('.section-title');
      var rCards = resultsSection.querySelectorAll('.market-stat-card');
      
      if (rLabel) rLabel.textContent = t.resultsLabel;
      if (rTitle) rTitle.textContent = t.resultsTitle;
      
      if (rCards.length >= 3) {
        rCards[0].querySelector('.market-stat-number').textContent = t.result1Value;
        rCards[0].querySelector('.market-stat-description').textContent = t.result1Text;
        rCards[1].querySelector('.market-stat-number').textContent = t.result2Value;
        rCards[1].querySelector('.market-stat-description').textContent = t.result2Text;
        rCards[2].querySelector('.market-stat-number').textContent = t.result3Value;
        rCards[2].querySelector('.market-stat-description').textContent = t.result3Text;
      }
    }
    
    // AI Chat
    var aiSection = document.getElementById('ai-chat');
    if (aiSection) {
      var aiLabel = aiSection.querySelector('.section-label');
      var aiTitle = aiSection.querySelector('.section-title');
      var aiText = aiSection.querySelector('.ai-feature-text');
      var aiPlatforms = aiSection.querySelectorAll('.ai-platform');
      var aiUserMsg = aiSection.querySelector('.ai-message-user p');
      var aiBotIntro = aiSection.querySelector('.ai-response > p:first-child');
      var aiBotInsight = aiSection.querySelector('.ai-insight');
      
      if (aiLabel) aiLabel.textContent = t.aiLabel;
      if (aiTitle) aiTitle.textContent = t.aiTitle;
      if (aiText) aiText.textContent = t.aiText;
      if (aiPlatforms.length >= 2) {
        aiPlatforms[0].lastChild.textContent = ' ' + t.aiMobile;
        aiPlatforms[1].lastChild.textContent = ' ' + t.aiWeb;
      }
      if (aiUserMsg) aiUserMsg.textContent = t.aiUserMsg;
      if (aiBotIntro) aiBotIntro.innerHTML = t.aiBotIntro;

      // Update AI data list items
      var aiDataList = aiSection.querySelectorAll('.ai-data-list li');
      if (aiDataList.length >= 3) {
        aiDataList[0].innerHTML = t.aiData1;
        aiDataList[1].innerHTML = t.aiData2;
        aiDataList[2].innerHTML = t.aiData3;
      }

      if (aiBotInsight) aiBotInsight.innerHTML = t.aiBotInsight;
    }
    
    // Bilingual
    var bilingualSection = document.getElementById('bilingual');
    if (bilingualSection) {
      var bLabel = bilingualSection.querySelector('.section-label');
      var bTitle = bilingualSection.querySelector('.section-title');
      var bText = bilingualSection.querySelector('.bilingual-body');
      
      if (bLabel) bLabel.textContent = t.bilingualLabel;
      if (bTitle) bTitle.textContent = t.bilingualTitle;
      if (bText) bText.textContent = t.bilingualText;
    }
    
    // About
    var aboutSection = document.getElementById('about');
    if (aboutSection) {
      var aLabel = aboutSection.querySelector('.section-label');
      var aTitle = aboutSection.querySelector('.section-title');
      var aSubtitle = aboutSection.querySelector('.section-subtitle');
      var aCards = aboutSection.querySelectorAll('.value-card');
      
      if (aLabel) aLabel.textContent = t.aboutLabel;
      if (aTitle) aTitle.textContent = t.aboutTitle;
      if (aSubtitle) aSubtitle.textContent = t.aboutSubtitle;
      
      if (aCards.length >= 3) {
        aCards[0].querySelector('h3').textContent = t.about1Title;
        aCards[0].querySelector('p').textContent = t.about1Text;
        aCards[1].querySelector('h3').textContent = t.about2Title;
        aCards[1].querySelector('p').textContent = t.about2Text;
        aCards[2].querySelector('h3').textContent = t.about3Title;
        aCards[2].querySelector('p').textContent = t.about3Text;
      }
    }
    
    // CTA
    var ctaSection = document.getElementById('waitlist');
    if (ctaSection) {
      var cTradesLabel = ctaSection.querySelector('.cta-trades-label');
      var cTitle = ctaSection.querySelector('.cta-title');
      var cSubtitle = ctaSection.querySelector('.cta-subtitle');
      if (cTradesLabel) cTradesLabel.textContent = t.ctaTradesLabel;
      var cInputs = ctaSection.querySelectorAll('.cta-input');
      var cSelect = ctaSection.querySelector('.cta-select');
      var cBtn = ctaSection.querySelector('.btn');
      var cDisclaimer = ctaSection.querySelector('.cta-disclaimer');
      
      if (cTitle) cTitle.textContent = t.ctaTitle;
      if (cSubtitle) cSubtitle.textContent = t.ctaSubtitle;
      if (cInputs.length >= 3) {
        cInputs[0].placeholder = t.ctaName;
        cInputs[1].placeholder = t.ctaEmail;
        cInputs[2].placeholder = t.ctaCompany;
      }
      if (cSelect) {
        var options = cSelect.querySelectorAll('option');
        if (options.length >= 5) {
          options[0].textContent = t.ctaType;
          options[1].textContent = t.ctaTypeGeneral;
          options[2].textContent = t.ctaTypeSub;
          options[3].textContent = t.ctaTypeSpecialty;
          options[4].textContent = t.ctaTypeOther;
        }
      }
      if (cBtn) cBtn.textContent = t.heroCta1;
      if (cDisclaimer) cDisclaimer.textContent = t.ctaDisclaimer;
    }
    
    // Mission
    var missionTitle = document.querySelector('.mission-title');
    if (missionTitle) missionTitle.textContent = t.missionTitle;
    
    // Footer
    var footer = document.querySelector('.footer');
    if (footer) {
      var fTagline = footer.querySelector('.footer-tagline');
      var fCols = footer.querySelectorAll('.footer-col');
      var fCopy = footer.querySelector('.footer-bottom p');
      
      if (fTagline) fTagline.textContent = t.footerTagline;
      if (fCopy) fCopy.textContent = t.footerCopy;
      
      if (fCols.length >= 3) {
        fCols[0].querySelector('h4').textContent = t.footerProduct;
        var fLinks0 = fCols[0].querySelectorAll('a');
        if (fLinks0.length >= 3) {
          fLinks0[0].textContent = t.footerProd1;
          fLinks0[1].textContent = t.footerProd2;
          fLinks0[2].textContent = t.footerProd3;
        }
        
        fCols[1].querySelector('h4').textContent = t.footerCompany;
        var fLinks1 = fCols[1].querySelectorAll('a');
        if (fLinks1.length >= 3) {
          fLinks1[0].textContent = t.footerComp1;
          fLinks1[1].textContent = t.footerComp2;
          fLinks1[2].textContent = t.footerComp3;
        }
        
        fCols[2].querySelector('h4').textContent = t.footerLegal;
        var fLinks2 = fCols[2].querySelectorAll('a');
        if (fLinks2.length >= 2) {
          fLinks2[0].textContent = t.footerLegal1;
          fLinks2[1].textContent = t.footerLegal2;
        }
      }
    }
  }

  function initLanguageToggle() {
    var langSwitch = document.getElementById('lang-toggle');
    var langOptions = document.querySelectorAll('.lang-option');

    if (langSwitch && langOptions.length === 2) {
      // Set initial state (English active)
      langSwitch.classList.remove('active');
      langOptions[0].classList.add('lang-active');
      langOptions[1].classList.remove('lang-active');

      langSwitch.addEventListener('click', function () {
        // Toggle language
        currentLang = currentLang === 'es' ? 'en' : 'es';
        
        // Update toggle UI
        langSwitch.classList.toggle('active');
        langOptions[0].classList.toggle('lang-active');
        langOptions[1].classList.toggle('lang-active');
        
        // Apply translations
        applyTranslations(currentLang);
      });
      
      // Also allow clicking on language labels
      langOptions.forEach(function(option) {
        option.style.cursor = 'pointer';
        option.addEventListener('click', function() {
          var clickedLang = this.getAttribute('data-lang');
          if (clickedLang && clickedLang !== currentLang) {
            currentLang = clickedLang;
            
            // Update toggle UI
            if (currentLang === 'es') {
              langSwitch.classList.add('active');
              langOptions[0].classList.remove('lang-active');
              langOptions[1].classList.add('lang-active');
            } else {
              langSwitch.classList.remove('active');
              langOptions[0].classList.add('lang-active');
              langOptions[1].classList.remove('lang-active');
            }
            
            applyTranslations(currentLang);
          }
        });
      });
    }
  }

  // ---- Waitlist form ----
  function initWaitlistForm() {
    var form = document.getElementById('waitlist-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = form.querySelector('.btn');
      var originalText = btn.textContent;
      
      // Collect form data
      var inputs = form.querySelectorAll('.cta-input');
      var select = form.querySelector('.cta-select');
      
      var formData = {
        access_key: '7d8e3428-46b9-497c-878a-4c51b2e6b2da',
        name: inputs[0] ? inputs[0].value : '',
        email: inputs[1] ? inputs[1].value : '',
        company: inputs[2] ? inputs[2].value : '',
        work_type: select ? select.options[select.selectedIndex].text : '',
        subject: 'Nueva solicitud de acceso anticipado - Banrendi',
        from_name: 'Banrendi Waitlist'
      };

      // Show loading state
      btn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
      btn.disabled = true;

      // Send to Web3Forms
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Success
        btn.textContent = currentLang === 'es' ? '¡Gracias!' : 'Thank you!';
        btn.style.background = '#0bb634';
        
        setTimeout(function () {
          form.reset();
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      })
      .catch(function(error) {
        // Error - still show success to user but log error
        console.error('Form submission error:', error);
        btn.textContent = currentLang === 'es' ? '¡Gracias!' : 'Thank you!';
        btn.style.background = '#0bb634';
        
        setTimeout(function () {
          form.reset();
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      });
    });
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function () {
    initHeroAnimation();
    initNavScroll();
    initParallax();
    initScrollAnimations();
    initLanguageToggle();
    initWaitlistForm();
    // Apply initial language translations
    applyTranslations(currentLang);
  });
})();
