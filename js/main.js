/* ==========================================================================
   Banrendi — Main JavaScript
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
      heroLabel: 'Plataforma Financiera Segura',
      heroTitle: 'Cotiza, cobra, y controla tu dinero <strong>todo en un solo lugar</strong>',
      heroSubtitle: 'Envía cotizaciones, convierte a facturas, recibe pagos, y ve todas tus finanzas conectadas. Entre más la usas, más rápido calificas para tu tarjeta de gasto.',
      heroCta1: 'Descargar App',
      heroCta2: 'Ver Cómo Funciona',
      heroStat1Value: '256-bit',
      heroStat1Label: 'Encriptación de nivel bancario',
      heroStat2Value: 'Stripe',
      heroStat2Label: 'Pagos seguros y rápidos',
      heroStat3Value: 'Plaid',
      heroStat3Label: 'Conecta todas tus cuentas',
      
      // Problem
      problemLabel: 'Te Entendemos',
      problemTitle: 'No empezaste tu negocio para hacer papeleo',
      problemSubtitle: 'Eres bueno en lo que haces. Pero crear cotizaciones a mano, perseguir pagos, y no saber cuánto dinero tienes—eso te frena.',
      problem1Title: 'Cotizaciones a mano toman mucho tiempo',
      problem1Text: 'Haces cotizaciones en Word o en papel. Cuando hay cambios, tienes que rehacer todo. Y luego convertir a factura es otro dolor de cabeza.',
      problem2Title: 'Cobrar es un trabajo de tiempo completo',
      problem2Text: 'Perseguir cheques, mandar recordatorios, esperar semanas para que te paguen—pasas demasiado tiempo cobrando y no suficiente tiempo construyendo.',
      problem3Title: 'No sabes cuánto dinero tienes',
      problem3Text: 'Tu dinero está en varios bancos y apps. No tienes idea de tu flujo real, ni cuáles proyectos te dejan más ganancia. Adivinando no funciona.',
      
      // Solutions
      solutionsLabel: 'Cómo Te Ayudamos',
      solutionsTitle: 'Una app para cotizaciones, pagos, reportes y capital',
      
      solution1Badge: 'Cotizaciones y Pagos',
      solution1Title: 'De cotización a pago, sin fricción',
      solution1Text: 'Crea cotizaciones profesionales, actualiza change orders fácilmente, y convierte todo a factura con un clic. Tus clientes pagan en línea con Stripe—seguro y rápido.',
      solution1Feature1: 'Envía cotizaciones profesionales en minutos',
      solution1Feature2: 'Actualiza change orders sin rehacer todo',
      solution1Feature3: 'Convierte cotizaciones a facturas con un clic',
      solution1Feature4: 'Recibe pagos seguros vía Stripe',
      
      solution2Badge: 'Tarjeta de Gasto',
      solution2Title: 'Gana acceso a capital mientras usas la app',
      solution2Text: 'Entre más usas Banrendi para cotizar y cobrar, más rápido calificas para una tarjeta de gasto al 0% de interés. Basada en tu flujo de efectivo real—no en tu puntaje de crédito.',
      solution2Feature1: 'Tarjeta de gasto al 0% de interés',
      solution2Feature2: 'Límite basado en tus ingresos, no tu FICO',
      solution2Feature3: 'Califica más rápido mientras usas la app',
      solution2Feature4: 'Ayuda con materiales y flujo de efectivo',
      
      solution3Badge: 'Reportes',
      solution3Title: 'Todas tus finanzas en un solo lugar',
      solution3Text: 'Conecta tus cuentas bancarias, Stripe, Venmo y más con Plaid. Ve todos tus ingresos y gastos en tiempo real. Asigna transacciones a proyectos para saber cuáles son más rentables.',
      solution3Feature1: 'Conecta todos tus bancos y apps de pago',
      solution3Feature2: 'Flujo de efectivo y P&L en tiempo real',
      solution3Feature3: 'Asigna gastos a proyectos para ver rentabilidad',
      solution3Feature4: 'Pregúntale a la IA sobre tu dinero',
      
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
      
      // Bilingual
      bilingualLabel: '100% en Español',
      bilingualTitle: 'Cotizaciones, facturas y reportes—en tu idioma',
      bilingualText: 'Toda la app funciona en español. Tus cotizaciones salen profesionales. Tus clientes reciben facturas claras. Y tú entiendes cada número en tus reportes.',
      
      // About
      aboutLabel: 'Por Qué Banrendi',
      aboutTitle: 'Creamos esto porque hemos estado en tus zapatos',
      aboutSubtitle: 'Nuestro equipo incluye contratistas, gerentes de construcción, y personas que crecieron en negocios familiares. Sabemos lo que es hacer cotizaciones a mano y esperar semanas para cobrar.',
      about1Title: 'Seguridad de nivel bancario',
      about1Text: 'Usamos encriptación de 256 bits—el mismo nivel de seguridad que usan los bancos. Plaid conecta tus cuentas de forma segura. Tu información está protegida.',
      about2Title: 'Simple y rápido',
      about2Text: 'Estás ocupado. Nuestra app está hecha para ser rápida, simple, y fácil de usar—aunque no seas persona de tecnología. Si sabes enviar textos, puedes usar Banrendi.',
      about3Title: 'No somos un banco',
      about3Text: 'Somos una plataforma financiera que te ayuda a cotizar, cobrar, y ver tu dinero. Sin sucursales, sin filas, sin papeleo—solo herramientas que funcionan.',
      
      // CTA
      ctaTitle: '¿Listo para hacerte la vida más fácil?',
      ctaSubtitle: 'Únete a la lista de espera y sé uno de los primeros en probar Banrendi. Pronto abriremos para nuevos contratistas.',
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
      footerTagline: 'Cotizaciones, pagos, reportes y capital para contratistas. 100% en español.',
      footerProduct: 'Producto',
      footerProd1: 'Cotizaciones y Pagos',
      footerProd2: 'Reportes Financieros',
      footerProd3: 'Tarjeta de Gasto',
      footerCompany: 'Empresa',
      footerComp1: 'Por Qué Nosotros',
      footerComp2: 'Resultados',
      footerComp3: 'Empezar',
      footerLegal: 'Legal',
      footerLegal1: 'Política de Privacidad',
      footerLegal2: 'Términos de Servicio',
      footerCopy: '© 2026 Banrendi. Todos los derechos reservados.',
      
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
      heroLabel: 'Secure Finance Platform',
      heroTitle: 'Quote, get paid, and track your money—all in one place',
      heroSubtitle: 'Send quotes, convert to invoices, receive payments, and see all your finances connected. The more you use it, the faster you qualify for your spend card.',
      heroCta1: 'Download App',
      heroCta2: 'See How It Works',
      heroStat1Value: '256-bit',
      heroStat1Label: 'Bank-level encryption',
      heroStat2Value: 'Stripe',
      heroStat2Label: 'Fast, secure payments',
      heroStat3Value: 'Plaid',
      heroStat3Label: 'Connect all your accounts',
      
      // Problem
      problemLabel: 'We Get It',
      problemTitle: "You didn't start your business to do paperwork",
      problemSubtitle: "You're great at what you do. But creating quotes by hand, chasing payments, and not knowing how much money you have—that's holding you back.",
      problem1Title: 'Manual quotes take forever',
      problem1Text: "You make quotes in Word or on paper. When there are changes, you have to redo everything. And converting to invoice is another headache.",
      problem2Title: 'Getting paid is a full-time job',
      problem2Text: "Chasing checks, sending reminders, waiting weeks to get paid—you spend too much time collecting and not enough time building.",
      problem3Title: "You don't know how much money you have",
      problem3Text: "Your money is in multiple banks and apps. You have no idea of your real cash flow, or which projects are most profitable. Guessing doesn't work.",
      
      // Solutions
      solutionsLabel: 'How We Help',
      solutionsTitle: 'One app for quotes, payments, reports and capital',
      
      solution1Badge: 'Quotes & Payments',
      solution1Title: 'From quote to payment, no friction',
      solution1Text: 'Create professional quotes, update change orders easily, and convert everything to invoice with one click. Your clients pay online with Stripe—secure and fast.',
      solution1Feature1: 'Send professional quotes in minutes',
      solution1Feature2: 'Update change orders without redoing everything',
      solution1Feature3: 'Convert quotes to invoices with one click',
      solution1Feature4: 'Receive secure payments via Stripe',
      
      solution2Badge: 'Spend Card',
      solution2Title: 'Earn access to capital while using the app',
      solution2Text: 'The more you use Banrendi to quote and collect, the faster you qualify for a 0% interest spend card. Based on your real cash flow—not your credit score.',
      solution2Feature1: '0% interest spend card',
      solution2Feature2: 'Limit based on your income, not your FICO',
      solution2Feature3: 'Qualify faster as you use the app',
      solution2Feature4: 'Help with materials and cash flow',
      
      solution3Badge: 'Reports',
      solution3Title: 'All your finances in one place',
      solution3Text: 'Connect your bank accounts, Stripe, Venmo and more with Plaid. See all your income and expenses in real time. Assign transactions to projects to see which are most profitable.',
      solution3Feature1: 'Connect all your banks and payment apps',
      solution3Feature2: 'Cash flow and P&L in real time',
      solution3Feature3: 'Assign expenses to projects for profitability',
      solution3Feature4: 'Ask AI about your money',
      
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
      
      // Bilingual
      bilingualLabel: '100% Bilingual',
      bilingualTitle: 'Quotes, invoices and reports—in your language',
      bilingualText: 'The entire app works in English and Spanish. Your quotes look professional. Your clients receive clear invoices. And you understand every number in your reports.',
      
      // About
      aboutLabel: 'Why Banrendi',
      aboutTitle: "We built this because we've been in your shoes",
      aboutSubtitle: 'Our team includes contractors, construction managers, and people who grew up in family businesses. We know what it\'s like to make quotes by hand and wait weeks to get paid.',
      about1Title: 'Bank-level security',
      about1Text: 'We use 256-bit encryption—the same level of security that banks use. Plaid connects your accounts securely. Your information is protected.',
      about2Title: 'Simple and fast',
      about2Text: "You're busy. Our app is built to be fast, simple, and easy to use—even if you're not a tech person. If you can text, you can use Banrendi.",
      about3Title: "We're not a bank",
      about3Text: "We're a finance platform that helps you quote, collect, and see your money. No branches, no lines, no paperwork—just tools that work.",
      
      // CTA
      ctaTitle: 'Ready to make your life easier?',
      ctaSubtitle: 'Join the waitlist and be one of the first to try Banrendi. We\'re opening up to new contractors soon.',
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
      footerTagline: 'Quotes, payments, reports and capital for contractors. 100% bilingual.',
      footerProduct: 'Product',
      footerProd1: 'Quotes & Payments',
      footerProd2: 'Financial Reports',
      footerProd3: 'Spend Card',
      footerCompany: 'Company',
      footerComp1: 'Why Us',
      footerComp2: 'Results',
      footerComp3: 'Get Started',
      footerLegal: 'Legal',
      footerLegal1: 'Privacy Policy',
      footerLegal2: 'Terms of Service',
      footerCopy: '© 2026 Banrendi. All rights reserved.',
      
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

  var currentLang = 'es'; // Start in Spanish

  // ---- Navigation scroll behavior ----
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  function handleNavScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

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

  // ---- Scroll-triggered fade-in animations ----
  function initScrollAnimations() {
    var selectors = [
      '.problem-card',
      '.solution-feature-content',
      '.solution-feature-visual',
      '.step-card',
      '.market-stat-card',
      '.bilingual-content',
      '.value-card',
      '.cta-content',
      '.section-header'
    ];

    selectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el, index) {
        el.classList.add('fade-in');
        if (index < 4) {
          el.classList.add('fade-in-delay-' + (index + 1));
        }
      });
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    document.querySelectorAll('.fade-in').forEach(function (el) {
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
    var mobileLinks = document.querySelectorAll('.mobile-menu-links a:not(.btn)');
    if (mobileLinks.length >= 3) {
      mobileLinks[0].textContent = t.navLink1;
      mobileLinks[1].textContent = t.navLink2;
      mobileLinks[2].textContent = t.navLink3;
    }
    var mobileCta = document.querySelector('.mobile-menu-links .btn');
    if (mobileCta) mobileCta.textContent = t.navCta;
    
    // Hero
    var heroLabel = document.querySelector('.hero-label');
    var heroTitle = document.querySelector('.hero-title');
    var heroSubtitle = document.querySelector('.hero-subtitle');
    var heroCtaBtns = document.querySelectorAll('.hero-actions .btn');
    var heroStats = document.querySelectorAll('.hero-stat');
    
    if (heroLabel) heroLabel.textContent = t.heroLabel;
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (heroCtaBtns.length >= 2) {
      heroCtaBtns[0].textContent = t.heroCta1;
      heroCtaBtns[1].textContent = t.heroCta2;
    }
    if (heroStats.length >= 3) {
      heroStats[0].querySelector('.hero-stat-value').textContent = t.heroStat1Value;
      heroStats[0].querySelector('.hero-stat-label').textContent = t.heroStat1Label;
      heroStats[1].querySelector('.hero-stat-value').textContent = t.heroStat2Value;
      heroStats[1].querySelector('.hero-stat-label').textContent = t.heroStat2Label;
      heroStats[2].querySelector('.hero-stat-value').textContent = t.heroStat3Value;
      heroStats[2].querySelector('.hero-stat-label').textContent = t.heroStat3Label;
    }
    
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
        features[1].querySelector('.solution-badge').textContent = t.solution2Badge;
        features[1].querySelector('h3').textContent = t.solution2Title;
        features[1].querySelector('.solution-feature-content > p').textContent = t.solution2Text;
        var list2 = features[1].querySelectorAll('.feature-list li');
        if (list2.length >= 4) {
          list2[0].textContent = t.solution2Feature1;
          list2[1].textContent = t.solution2Feature2;
          list2[2].textContent = t.solution2Feature3;
          list2[3].textContent = t.solution2Feature4;
        }
        // Mock UI
        var mock2 = features[1].querySelector('.mock-content');
        if (mock2) {
          var mockLabel2 = mock2.querySelector('.mock-row-sm span');
          var mockRows2 = mock2.querySelectorAll('.mock-row');
          var mockBtn2 = mock2.querySelector('.mock-btn');
          if (mockLabel2) mockLabel2.textContent = t.mockCardLabel;
          if (mockRows2.length >= 2) {
            mockRows2[0].querySelector('.mock-label').textContent = t.mockCardAvailable;
            mockRows2[1].querySelector('.mock-label').textContent = t.mockCardInterest;
          }
          if (mockBtn2) mockBtn2.textContent = t.mockCardBtn;
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
      var cTitle = ctaSection.querySelector('.cta-title');
      var cSubtitle = ctaSection.querySelector('.cta-subtitle');
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
      if (cBtn) cBtn.textContent = t.ctaButton;
      if (cDisclaimer) cDisclaimer.textContent = t.ctaDisclaimer;
    }
    
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
      // Set initial state (Spanish active)
      langSwitch.classList.add('active');
      langOptions[0].classList.remove('lang-active');
      langOptions[1].classList.add('lang-active');

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
    initScrollAnimations();
    initLanguageToggle();
    initWaitlistForm();
  });
})();
