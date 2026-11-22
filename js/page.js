/* Animasi per section (permintaan pemilik, MASTER.md "Aturan Tambahan") dan viewer sertifikat.
   - Setiap [data-reveal] muncul sekali saat section-nya terlihat (naik 14px, 520ms, jeda 70ms antar item).
   - Angka [data-count] menghitung naik sekali; angka akhirnya sudah tertulis di HTML.
   - Judul .words-rise muncul kata demi kata.
   Semua hanya aktif jika html.rv-js (diset di <head> hanya bila prefers-reduced-motion tidak aktif). */
(function () {
  var html = document.documentElement;
  var lang = window.PAGE_LANG || 'id';
  var animate = html.classList.contains('rv-js') && 'IntersectionObserver' in window;

  /* ---------- reveal sekali jalan ---------- */
  function revealGroup(group) {
    group.querySelectorAll('[data-reveal]').forEach(function (el, i) {
      el.style.setProperty('--rv-d', (i * 70) + 'ms');
      el.classList.add('is-in');
    });
    group.querySelectorAll('[data-count]').forEach(countUp);
  }

  function fmt(n, decimals) {
    return n.toLocaleString(lang === 'en' ? 'en-US' : 'id-ID', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }

  function countUp(el) {
    var end = parseFloat(el.getAttribute('data-count'));
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var t0 = null, dur = 1000;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(end * eased, dec);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function splitWords(h) {
    var words = h.textContent.trim().split(/\s+/);
    h.setAttribute('aria-label', h.textContent.trim());
    h.textContent = '';
    words.forEach(function (w, i) {
      var outer = document.createElement('span');
      outer.className = 'wr';
      outer.setAttribute('aria-hidden', 'true');
      var inner = document.createElement('span');
      inner.className = 'wr__in';
      inner.style.setProperty('--rv-d', (i * 60) + 'ms');
      inner.textContent = w;
      outer.appendChild(inner);
      h.appendChild(outer);
      if (i < words.length - 1) h.appendChild(document.createTextNode(' '));
    });
  }

  // angka EN memakai titik desimal walau tidak dianimasikan
  if (lang === 'en') document.querySelectorAll('[data-count][data-decimals]').forEach(function (el) {
    el.textContent = fmt(parseFloat(el.getAttribute('data-count')), parseInt(el.getAttribute('data-decimals'), 10));
  });

  if (animate) {
    document.querySelectorAll('.words-rise').forEach(splitWords);
    html.classList.add('rv-ready');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        if (e.target.matches('.words-rise')) e.target.classList.add('is-in');
        else revealGroup(e.target);
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('[data-reveal-group], .words-rise').forEach(function (g) { io.observe(g); });
  }

  /* ---------- viewer sertifikat ---------- */
  var T = {
    id: { psychoforia: 'Psychoforia 4.0, Bendahara I', pesmaba: 'PESMABA, Bendahara II', 'student-day': 'Student Day, Divisi Logistik',
          'bina-desa': 'Bina Desa 2024, Bendahara', taep: 'Certificate of English Proficiency (TAEP)', 'hr-fast-track': 'Human Resources Fast Track',
          excel: 'Pelatihan Microsoft Excel', ojt: 'On Job Training Asisten Psikolog', polda: 'Surat keterangan magang Polda Jatim',
          bem: 'Bendahara I BEM Fakultas Psikologi', page: 'Halaman' },
    en: { psychoforia: 'Psychoforia 4.0, Treasurer', pesmaba: 'PESMABA, Second treasurer', 'student-day': 'Student Day, Logistics',
          'bina-desa': 'Bina Desa 2024, Treasurer', taep: 'Certificate of English Proficiency (TAEP)', 'hr-fast-track': 'Human Resources Fast Track',
          excel: 'Microsoft Excel training', ojt: 'On Job Training Assistant Psychologist', polda: 'Police internship letter',
          bem: 'Faculty of Psychology student union treasurer', page: 'Page' }
  }[lang === 'en' ? 'en' : 'id'];

  var D = 'files/sertifikat/';
  var CERTS = {
    psychoforia: ['psychoforia.webp'], pesmaba: ['pesmaba.webp'], 'student-day': ['student-day.webp'], 'bina-desa': ['bina-desa.webp'],
    taep: ['taep-1.webp', 'taep-2.webp'], 'hr-fast-track': ['hr-fast-track.webp'], excel: ['excel-1.webp', 'excel-2.webp'],
    ojt: ['ojt-asisten-psikolog-1.webp', 'ojt-asisten-psikolog-2.webp'], polda: ['magang-polda-jatim.webp'], bem: ['bendahara-bem.webp']
  };

  var dlg = document.getElementById('viewer');
  if (!dlg || typeof dlg.showModal !== 'function') return; // tanpa <dialog>: link membuka gambar biasa
  var img = dlg.querySelector('.viewer__img');
  var title = dlg.querySelector('.viewer__title');
  var count = dlg.querySelector('[data-viewer-count]');
  var prev = dlg.querySelector('[data-viewer-prev]');
  var next = dlg.querySelector('[data-viewer-next]');
  var cur = null, idx = 0, opener = null;

  function show() {
    var pages = CERTS[cur];
    img.src = D + pages[idx];
    img.alt = T[cur] + (pages.length > 1 ? ', ' + T.page.toLowerCase() + ' ' + (idx + 1) : '');
    var multi = pages.length > 1;
    count.textContent = multi ? T.page + ' ' + (idx + 1) + ' / ' + pages.length : '';
    prev.hidden = next.hidden = !multi;
    prev.disabled = idx === 0;
    next.disabled = idx === pages.length - 1;
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-cert]');
    if (!a || !CERTS[a.getAttribute('data-cert')]) return;
    e.preventDefault();
    opener = a;
    cur = a.getAttribute('data-cert');
    idx = 0;
    title.textContent = T[cur];
    show();
    dlg.showModal();
  });
  prev.addEventListener('click', function () { if (idx > 0) { idx--; show(); } });
  next.addEventListener('click', function () { if (idx < CERTS[cur].length - 1) { idx++; show(); } });
  dlg.querySelector('[data-viewer-close]').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); }); // klik di luar gambar menutup
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' && !next.hidden) next.click();
    if (e.key === 'ArrowLeft' && !prev.hidden) prev.click();
  });
  dlg.addEventListener('close', function () { if (opener) opener.focus(); });
})();

/* Live Activity: kapsul island di hero melebar jadi kartu status; Esc atau klik di luar menutup */
(function () {
  var root = document.querySelector('[data-island]');
  if (!root) return;
  var btn = root.querySelector('.hero-pill');
  var card = root.querySelector('.island__card');
  function set(open) {
    btn.setAttribute('aria-expanded', String(open));
    if (open) { card.hidden = false; requestAnimationFrame(function () { root.classList.add('is-open'); }); }
    else {
      root.classList.remove('is-open');
      setTimeout(function () { if (!root.classList.contains('is-open')) card.hidden = true; }, 260);
    }
  }
  btn.addEventListener('click', function () { set(btn.getAttribute('aria-expanded') !== 'true'); });
  document.addEventListener('click', function (e) { if (!root.contains(e.target)) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('is-open')) { set(false); btn.focus(); } });
})();

/* Ikon aplikasi: ketuk menampilkan keterangan (hover/focus sudah lewat CSS) */
(function () {
  var apps = document.querySelectorAll('.app');
  apps.forEach(function (a) {
    a.addEventListener('click', function () {
      var on = !a.classList.contains('is-tip');
      apps.forEach(function (x) { x.classList.remove('is-tip'); });
      if (on) a.classList.add('is-tip');
    });
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.app')) apps.forEach(function (x) { x.classList.remove('is-tip'); }); });
})();

/* nav menebal setelah halaman digulir; ganti halaman viewer memudar */
(function () {
  var html = document.documentElement, on = false;
  function check() { var s = window.scrollY > 24; if (s !== on) { on = s; html.classList.toggle('is-scrolled', s); } }
  window.addEventListener('scroll', check, { passive: true });
  check();
  var img = document.querySelector('.viewer__img');
  if (!img) return;
  document.querySelectorAll('[data-viewer-prev],[data-viewer-next]').forEach(function (b) {
    b.addEventListener('click', function () { img.classList.add('is-swap'); }, true);
  });
  img.addEventListener('load', function () { img.classList.remove('is-swap'); });
})();
