/* ==========================================================================
   Banrendi | Main JavaScript
   ========================================================================== */

(function () {
  'use strict';

  // ---- Translations ----
  var translations = {
    es: {
      // Nav
      navLink1: 'Funciones',
      navLink2: 'Cómo Funciona',
      navLink3: 'Por Qué Nosotros',
      navLink4: 'Empezar',
      navCta: 'Acceso Anticipado',

      // Hero
      heroSocialProof: 'El asistente financiero hecho para contratistas',
      heroLabel: 'Plataforma Financiera Segura',
      heroTitle: 'Tus finanzas, en piloto automático.',
      heroSubtitle: 'Impulsado por Rendi AI — sabe lo que ganas, en qué gastas y cuánto ganas por trabajo.',
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
      solution1Feature2: '✅ Gastos desglosados por categoría',
      solution1Feature3: '✅ Pérdidas y Ganancias, siempre actualizado',
      solution1Feature4: '✅ P&L por trabajo — ve cuáles trabajos son rentables',

      before: 'Antes',
      now: 'Ahora',

      solution2Badge: 'Tus Libros, Reinventados',
      solution2Title: 'Tu contador tarda días.\nBanrendi tarda segundos.',
      solution2Text: '',
      solution2Feature1: 'Llama a tu contador, espera 3–5 días',
      solution2Feature2: 'Descubres que perdiste dinero — semanas después',
      solution2Feature3: 'Pregúntale a Banrendi, obtén respuesta al instante',
      solution2Feature4: 'Ve tu ganancia real, actualizada cada día',
      solution2Feature5: 'Tiempo de impuestos? Ya estás listo',
      solution2Feature6: 'Corres cada abril para juntar todo',

      solution3Badge: 'Pérdidas y Ganancias',
      solution3Title: 'El reporte que maneja tu negocio — y lo demuestra.',
      solution3Text: 'Tu P&L es lo que piden los prestamistas y el IRS. Banrendi lo genera automáticamente — para que siempre estés listo.',
      solution3Feature1: '✅ P&L listo para impuestos, siempre actualizado',
      solution3Feature2: '✅ Comparte con tu banco o prestamista con un clic',
      solution3Feature3: '',
      solution3Feature4: '',
      
      // How it works
      howLabel: 'Cómo Funciona',
      howTitle: 'Conecta una vez. Rendi hace el resto.',
      howSubtitle: 'Vincula tu banco en menos de 2 minutos — Rendi AI registra ingresos, categoriza gastos y mantiene tus libros limpios automáticamente.',
      howSourcesLabel: 'Tus cuentas',
      howFeedLabel: 'Rendi en acción',
      howFeed: [
        { title: 'Ingreso registrado', sub: '$3,200 · Henderson Roofing' },
        { title: 'Gasto categorizado', sub: 'Home Depot → Materiales' },
        { title: 'P&L actualizado', sub: '+$4,200 de ganancia este mes' },
        { title: 'Ganancia por trabajo', sub: 'Cubierta Cedar: $1,800 neto' },
        { title: 'Estimado fiscal', sub: 'Aparta $847 para Q2' }
      ],
      
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
      aiTitle: 'Conoce a Rendi — tu IA que conoce tu negocio por dentro y por fuera',
      aiText: 'Pregúntale a Rendi cualquier cosa sobre tus finanzas y obtén una respuesta clara en segundos. Te muestra la ganancia por trabajo, los gastos por categoría y aprende cómo categorizar tus transacciones a tu manera.',
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
      footerProd1: 'Funciones',
      footerProd2: 'Cómo Funciona',
      footerProd3: 'Rendi IA',
      footerCompany: 'Empresa',
      footerComp1: 'Por Qué Nosotros',
      footerComp2: 'Resultados',
      footerComp3: 'Empezar',
      footerLegal: 'Legal',
      footerLegal1: 'Política de Privacidad',
      footerLegal2: 'Términos de Servicio',
      footerCopy: '© 2026 Banrendi. Todos los derechos reservados.',
      
      // FAQ
      faqLabel: 'Preguntas Frecuentes',
      faqTitle: 'Todo lo que necesitas saber',
      faqItems: [
        { q: '¿Están seguros mis datos financieros?', a: 'Tus datos están protegidos con encriptación de 256 bits — el mismo estándar que usan los bancos principales de EE.UU. Conectamos tus cuentas a través de Plaid, la red de datos financieros más confiable del país, usada por Chase, Wells Fargo y miles de apps. Nunca vemos ni guardamos tu contraseña bancaria.' },
        { q: '¿Banrendi guarda mis credenciales bancarias?', a: 'Nunca. Tu usuario y contraseña del banco van directamente a Plaid — no a nosotros. Plaid es una empresa regulada y certificada SOC 2 que maneja millones de conexiones bancarias seguras en EE.UU. Solo recibimos acceso de solo lectura a tus transacciones.' },
        { q: '¿Mi pareja también puede usar la app?', a: 'Sí. Muchos contratistas usan Banrendi con su pareja — quien maneje las finanzas del hogar puede entrar y ver exactamente lo que entra y lo que sale. Sin hojas de cálculo, sin esperar reportes. Solo una visión clara del negocio, en cualquier momento.' },
        { q: '¿Qué hace exactamente Rendi AI?', a: 'Rendi es tu asistente financiero con IA integrado. Pregúntale lo que quieras — "¿Cuánto gané este mes?", "¿Cuál fue mi ganancia en el trabajo Henderson?", "¿En qué estoy gastando más?" — y obtén una respuesta real en segundos. También puedes decirle cómo categorizar una transacción y lo recuerda para el futuro.' },
        { q: '¿Banrendi es realmente gratis?', a: 'Sí — gratis para descargar y usar. El plan premium desbloquea funciones avanzadas como P&L por trabajo, reglas de categorización con IA y reportes detallados, desde $37.99/mes. Sin cargos ocultos, sin contratos. Cancela cuando quieras.' },
        { q: '¿Necesito saber de tecnología para usarlo?', a: 'Para nada. Si puedes enviar un mensaje de texto, puedes usar Banrendi. La mayoría de los contratistas están funcionando en menos de 5 minutos. Conecta tu banco y Rendi empieza a organizar tus finanzas automáticamente desde el primer día.' }
      ],

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
      navLink1: 'Features',
      navLink2: 'How It Works',
      navLink3: 'Why Us',
      navLink4: 'Get Started',
      navCta: 'Early Access',

      // Hero
      heroSocialProof: 'The financial assistant built for contractors',
      heroLabel: 'Secure Finance Platform',
      heroTitle: 'Your finances, on autopilot.',
      heroSubtitle: 'Powered by Rendi AI — know what you earn, where you spend, and how much you make per job.',
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
      solution1Feature2: '✅ Spending breakdown by category',
      solution1Feature3: '✅ Profit & Loss, always up to date',
      solution1Feature4: '✅ P&L per job — see which jobs actually make money',
      
      before: 'Before',
      now: 'Now',

      solution2Badge: 'Your Books, Reinvented',
      solution2Title: 'Your bookkeeper takes days.\nBanrendi takes seconds.',
      solution2Text: '',
      solution2Feature1: 'Call your bookkeeper, wait 3–5 days',
      solution2Feature2: 'Find out you lost money — weeks too late',
      solution2Feature3: 'Ask Banrendi anything, get answers instantly',
      solution2Feature4: 'See your real profit, updated daily',
      solution2Feature5: 'Tax time? You\'re already ready',
      solution2Feature6: 'Scramble every April to pull it all together',
      
      solution3Badge: 'Profit & Loss',
      solution3Title: 'The one report that runs your business — and proves it.',
      solution3Text: 'Your P&L is what lenders and the IRS ask for. Banrendi generates it automatically — so you\'re always ready.',
      solution3Feature1: '✅ Tax-ready P&L, always current',
      solution3Feature2: '✅ Share with your bank or lender in one click',
      solution3Feature3: '',
      solution3Feature4: '',
      
      // How it works
      howLabel: 'How It Works',
      howTitle: 'Connect once. Rendi handles everything.',
      howSubtitle: 'Link your bank in under 2 minutes — Rendi AI tracks income, categorizes spending, and keeps your books clean automatically.',
      howSourcesLabel: 'Your accounts',
      howFeedLabel: 'Rendi in action',
      howFeed: [
        { title: 'Income tracked', sub: '$3,200 · Henderson Roofing' },
        { title: 'Expense categorized', sub: 'Home Depot → Materials' },
        { title: 'P&L updated', sub: '+$4,200 profit this month' },
        { title: 'Job profit ready', sub: 'Cedar Deck: $1,800 net' },
        { title: 'Tax estimate ready', sub: 'Set aside $847 for Q2' }
      ],
      
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
      aiTitle: 'Meet Rendi — your AI that knows your business inside out',
      aiText: 'Ask Rendi anything about your finances and get a plain-English answer in seconds. It shows you profit per job, tracks spending by category, and learns how to categorize your transactions the way you want — so your books stay clean without the extra work.',
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
      footerProd1: 'Features',
      footerProd2: 'How It Works',
      footerProd3: 'Rendi AI',
      footerCompany: 'Company',
      footerComp1: 'Why Us',
      footerComp2: 'Results',
      footerComp3: 'Get Started',
      footerLegal: 'Legal',
      footerLegal1: 'Privacy Policy',
      footerLegal2: 'Terms of Service',
      footerCopy: '© 2026 Banrendi. All rights reserved.',
      
      // FAQ
      faqLabel: 'Got Questions',
      faqTitle: 'Everything you need to know',
      faqItems: [
        { q: 'Is my financial data safe?', a: 'Your data is protected with 256-bit bank-level encryption — the same standard used by major US banks. We connect your accounts through Plaid, the most trusted financial data network in the US, used by Chase, Wells Fargo, and thousands of apps. We never see or store your banking password.' },
        { q: 'Does Banrendi store my bank login credentials?', a: 'Never. Your banking username and password go directly to Plaid — not to us. Plaid is a regulated, SOC 2 certified company that handles millions of secure bank connections across the US. We only receive read-only access to your transaction data.' },
        { q: 'Can my partner or spouse also use the app?', a: 'Yes. Many contractors use Banrendi with their partner — whoever manages the finances can log in and see exactly what\'s coming in and going out. No spreadsheets, no waiting for reports. Just a clear picture of the business, anytime.' },
        { q: 'What exactly does Rendi AI do?', a: 'Rendi is your built-in AI financial assistant. Ask it anything — "How much did I make this month?", "What was my profit on the Henderson job?", "Where am I spending the most?" — and get a real answer in seconds. You can also tell Rendi how to categorize a transaction and it remembers for the future.' },
        { q: 'Is Banrendi really free to download?', a: 'Yes — free to download and use. The premium plan unlocks advanced features like per-job P&L, AI categorization rules, and detailed reports, starting at $37.99/month. No hidden fees, no contracts. Cancel anytime.' },
        { q: 'Do I need to be tech-savvy to use it?', a: 'Not at all. If you can send a text message, you can use Banrendi. Most contractors are up and running in under 5 minutes. Connect your bank and Rendi starts organizing your finances automatically from day one.' }
      ],

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
        if (beforeItems.length >= 3) {
          beforeItems[0].textContent = t.solution2Feature1;
          beforeItems[1].textContent = t.solution2Feature2;
          beforeItems[2].textContent = t.solution2Feature6;
        }
        if (afterItems.length >= 3) {
          afterItems[0].textContent = t.solution2Feature3;
          afterItems[1].textContent = t.solution2Feature4;
          afterItems[2].textContent = t.solution2Feature5;
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
    
    // How It Works
    var howSection = document.getElementById('market');
    if (howSection && t.howLabel) {
      var howEyebrow = howSection.querySelector('.how-eyebrow');
      var howHeading = howSection.querySelector('.how-heading');
      var howSubEl = howSection.querySelector('.how-sub');
      var howSrcLabel = howSection.querySelector('.how-sources-label');
      var howFeedLabelEl = howSection.querySelector('.how-feed-label');
      if (howEyebrow) howEyebrow.textContent = t.howLabel;
      if (howHeading) howHeading.textContent = t.howTitle;
      if (howSubEl) howSubEl.textContent = t.howSubtitle;
      if (howSrcLabel && t.howSourcesLabel) howSrcLabel.textContent = t.howSourcesLabel;
      if (howFeedLabelEl && t.howFeedLabel) howFeedLabelEl.textContent = t.howFeedLabel;
      if (t.howFeed) {
        var howFeedItems = howSection.querySelectorAll('.how-feed-item');
        howFeedItems.forEach(function(item, i) {
          if (t.howFeed[i]) {
            var titleEl = item.querySelector('.how-feed-title');
            var subEl = item.querySelector('.how-feed-sub');
            if (titleEl) titleEl.textContent = t.howFeed[i].title;
            if (subEl) subEl.textContent = t.howFeed[i].sub;
          }
        });
      }
    }

    // FAQ
    var faqSection = document.getElementById('faq');
    if (faqSection && t.faqLabel) {
      var faqEyebrow = faqSection.querySelector('.faq-eyebrow');
      var faqHeading = faqSection.querySelector('.faq-heading');
      var faqItems = faqSection.querySelectorAll('.faq-item');
      if (faqEyebrow) faqEyebrow.textContent = t.faqLabel;
      if (faqHeading) faqHeading.textContent = t.faqTitle;
      if (t.faqItems) {
        faqItems.forEach(function(item, i) {
          if (t.faqItems[i]) {
            var q = item.querySelector('.faq-q');
            var a = item.querySelector('.faq-a');
            if (q) q.textContent = t.faqItems[i].q;
            if (a) a.textContent = t.faqItems[i].a;
          }
        });
      }
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

  // ---- Contractor Carousel ----
  function initContractorCarousel() {
    var carousel = document.querySelector('.contractor-carousel');
    if (!carousel) return;
    var slides = carousel.querySelectorAll('.carousel-slide');
    var dots = carousel.querySelectorAll('.carousel-dot');
    var current = 0;
    var interval;

    function goTo(index) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }

    function next() { goTo(current + 1); }

    function start() { interval = setInterval(next, 4000); }
    function stop() { clearInterval(interval); }

    dots.forEach(function(dot, i) {
      dot.addEventListener('click', function() { stop(); goTo(i); start(); });
    });

    var prevBtn = carousel.querySelector('.carousel-arrow-prev');
    var nextBtn = carousel.querySelector('.carousel-arrow-next');
    if (prevBtn) prevBtn.addEventListener('click', function() { stop(); goTo(current - 1); start(); });
    if (nextBtn) nextBtn.addEventListener('click', function() { stop(); goTo(current + 1); start(); });

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);

    start();
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function () {
    initHeroAnimation();
    initNavScroll();
    initContractorCarousel();
    initParallax();
    initScrollAnimations();
    initLanguageToggle();
    initWaitlistForm();
    // Apply initial language translations
    applyTranslations(currentLang);
  });
})();
