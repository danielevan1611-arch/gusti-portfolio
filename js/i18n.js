/* Dua bahasa: teks Indonesia ada di HTML, teks Inggris di sini.
   Bahasa dipilih lewat ?lang=en / ?lang=id (bisa dibagikan sebagai link) dan diingat di localStorage.
   Skrip ini jalan sinkron di akhir <body>, sebelum system.js memasang moments, jadi moment memakai teks yang benar. */
(function () {
  var EN = {
    skip: 'Skip to content',
    navLabel: 'Main',
    navExp: 'Experience',
    navSkill: 'Skills',
    navCert: 'Certificates',
    navContact: 'Contact',
    langShort: 'ID',
    langLabel: 'Baca dalam bahasa Indonesia',
    mainAction: 'Send an email',
    heroAlt: 'Gusti Apta Salsabila smiling in a teal kebaya with a UMM graduation medal',
    h1: 'Psychology graduate for HR teams',
    pill: 'Open to HR and recruitment roles',
    liveStatus: 'Status', liveStatusV: 'Open to HR and recruitment roles',
    liveCity: 'Based in', liveLang: 'Languages', liveLangV: 'Indonesian, English C1',
    liveEmail: 'Email', liveCv: 'CV',
    saveContact: 'Save to Contacts',
    dockTitle: 'Apps I use',
    tipExcel: 'Formulas, IF, VLOOKUP', tipGw: 'Google Workspace', tipJasp: 'Statistical analysis', tipJamovi: 'Statistical analysis',
    tipOffice: 'Microsoft Office suite', tipCanva: 'Graphic design', tipCapcut: 'Video editing',
    sk2a: 'Statistical analysis with JASP and Jamovi',
    hf1: 'GPA',
    hf2: 'Internship',
    hf2v: 'East Java Police',
    hf3: 'English',
    heroLead: 'I am Gusti Apta Salsabila, a psychology graduate from Universitas Muhammadiyah Malang with a 3.83 GPA. During my internship at the East Java Regional Police psychology unit, I verified 600+ police applicant files.',
    heroSecond: 'See my experience',
    profileLabel: 'Profile',
    statement: 'For four months at the East Java Regional Police I checked selection files, scored Kraepelin tests and recorded psychological interviews. At the student union I handled a <strong>Rp78.5 million</strong> budget through to the final report.',
    fig1: 'police applicant files verified',
    fig2: 'Kraepelin test takers scored',
    fig3: 'student union budget managed',
    fig4: 'English, TAEP score 410',
    million: 'million',
    expH: 'Work experience',
    exp1D: 'Mar – Jul 2025', exp2D: 'Jun 2026', exp3D: 'Oct 2023 – Jul 2024',
    exp1a: 'Verified 600+ police applicant files',
    exp1b: 'Scored the Kraepelin test for 50+ candidates',
    exp1c: 'Documented psychological interviews for the Akpol and Bintara CAT tests at schools in Surabaya',
    exp1d: 'Assisted detainee and premarital counseling, and mental health education sessions',
    exp2a: 'Psychological test administration and assessment report writing',
    exp2b: 'Graded very good: A for attitude and knowledge',
    exp3a: 'Rp78.5 million budget, Rp68.7 million spent, Rp9.95 million surplus',
    exp3b: 'Tracked funds for 12 programmes from 24 funding sources',
    exp3c: 'Wrote the end-of-term financial report with itemised receipts',
    docLetter: 'View letter', docCert: 'View certificate',
    exp1H: 'Intern, Psychology Unit, HR Bureau',
    exp1P: 'March to July 2025. Verified 600+ police applicant files, scored the Kraepelin test for 50+ candidates and documented psychological interviews for the Akpol and Bintara CAT tests.',
    exp1Alt: 'Internship letter from the East Java Regional Police HR bureau',
    exp2H: 'Assistant psychologist, on-the-job training',
    exp2P: 'June 2026, graded very good. Practised psychological test administration and assessment report writing, with an A for attitude and knowledge.',
    exp2Alt: 'On Job Training Assistant Psychologist Season 5 certificate from Rumah Konsul',
    exp3H: 'Treasurer',
    exp3P: 'October 2023 to July 2024. Managed a Rp78.5 million budget across 12 programmes and 24 funding sources, closing the term with a Rp9.95 million surplus and a full financial report.',
    exp3Alt: 'Treasurer certificate, Faculty of Psychology student union, 2023/2024',
    orgH: 'Faculty event committees. <span class="muted">Treasurer three times, logistics once.</span>',
    org1Alt: 'Treasurer certificate for Psychoforia 4.0',
    org1H: 'Treasurer, Psychoforia 4.0',
    org1P: '13 May 2023. Drafted the budget proposal with the other divisions and recorded event spending.',
    org2Alt: 'Second treasurer certificate for PESMABA',
    org2H: 'Second treasurer, PESMABA',
    org2P: '12 to 15 September 2023. Helped the first treasurer run the finances and operations of the new student orientation.',
    org3Alt: 'Logistics committee certificate for Student Day',
    org3H: 'Logistics, Student Day',
    org3P: '2023/2024. Made sure every division had the equipment it needed for the event.',
    org4Alt: 'Treasurer certificate for Bina Desa 2024',
    org4H: 'Treasurer, Bina Desa 2024',
    org4P: 'May 2024 in Ngabab village, Pujon, Batu. Managed the event finances and coordinated with the other divisions.',
    skillH: 'Education and skills',
    sk1H: 'HR and psychological assessment',
    sk1a: 'Recruitment and selection process',
    sk1b: 'Psychological test administration and scoring',
    sk1c: 'Psychological interview documentation',
    sk1d: 'Behavioural observation and assessment report drafts',
    sk1e: 'Assessment report drafts',
    sk2H: 'Data analysis',
    sk2c: 'Microsoft Excel: formulas, IF, VLOOKUP',
    sk3H: 'Administration',
    sk3a: 'Data entry and document management',
    sk3b: 'Budgeting and financial reports',
    sk4H: 'Languages',
    sk4a: 'Indonesian, native',
    sk4b: 'English C1, TAEP score 410',
    sk4c: 'Listening 26, grammar 35, reading 36',
    sk4d: 'Problem solving and attention to detail',
    sk4e: 'Indonesian (native), English C1',
    certH: 'Certificates and documents',
    eduLabel: 'Education',
    eduH: 'BSc in Psychology, Universitas Muhammadiyah Malang',
    eduP: 'September 2022 to May 2026, GPA 3.83 out of 4.00.',
    thesisLabel: 'Thesis',
    thesisP: 'Developing a psychological measure of school safety.',
    courseLabel: 'Related courses',
    courseP: 'Intelligence, personality, aptitude and interest assessment, psychological counseling and training design.',
    c1H: 'Certificate of English Proficiency (TAEP)',
    c1P: 'UMM Language Center, score 410 (C1), September 2026',
    c2H: 'Human Resources Fast Track, Batch 23',
    c2P: 'Talentiv Academy, 18 hours, September 2026',
    c3H: 'Microsoft Excel training',
    c3P: 'Radhiant Academy, 3 hours, October 2026',
    c4H: 'On Job Training Assistant Psychologist',
    c4P: 'Rumah Konsul, Season 5, June 2026',
    c5H: 'Internship letter',
    c5P: 'East Java Regional Police HR bureau, March to July 2025',
    c6H: 'Treasurer, Faculty of Psychology student union',
    c6P: 'Universitas Muhammadiyah Malang, 2023/2024',
    view: 'View',
    viewCert: 'View certificate',
    c1Alt: 'Certificate of English Proficiency TAEP, score 410',
    c2Alt: 'Human Resources Fast Track Batch 23 certificate from Talentiv Academy',
    c3Alt: 'Microsoft Excel training certificate from Radhiant Academy',
    c4Alt: 'Assessment report for the On Job Training Assistant Psychologist',
    c5Alt: 'Internship letter from the East Java Regional Police',
    closeH: 'Open to HR and recruitment roles',
    closeP: 'Based in Jakarta. Email, WhatsApp, LinkedIn and my CV are below.',
    cvLabel: 'CV (PDF)',
    cvAction: 'Download CV',
    footNav: 'Pages',
    prev: 'Previous page',
    next: 'Next page',
    close: 'Close'
  };

  var lang = 'id';
  try {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'id') localStorage.setItem('lang', q);
    lang = q || localStorage.getItem('lang') || 'id';
  } catch (e) { /* tanpa localStorage: ikuti ?lang saja */
    lang = /[?&]lang=en/.test(location.search) ? 'en' : 'id';
  }

  window.PAGE_LANG = lang;
  if (lang !== 'en') return;

  var doc = document.documentElement;
  doc.lang = 'en';
  document.title = 'Gusti Apta Salsabila: psychology graduate for HR, recruitment and assessment';
  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = 'Portfolio of a UMM psychology graduate (GPA 3.83) with an internship at the East Java Regional Police psychology unit, assistant psychologist training and student union budget work.';

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var v = EN[el.getAttribute('data-i18n')];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    var v = EN[el.getAttribute('data-i18n-alt')];
    if (v != null) el.alt = v;
  });
  document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
    var v = EN[el.getAttribute('data-i18n-label')];
    if (v != null) el.setAttribute('aria-label', v);
  });
  document.querySelectorAll('[data-lang-switch]').forEach(function (a) {
    a.href = '?lang=id';
    a.hreflang = 'id';
  });
  window.PAGE_EN = EN;
})();
