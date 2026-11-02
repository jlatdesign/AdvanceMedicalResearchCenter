(function () {
  var body = document.body, html = document.documentElement;

  var menu = document.getElementById('menu-t');
  if (menu) {
    var closeMenu = function () {
      body.classList.remove('nav-open');
      menu.setAttribute('aria-expanded', 'false');
    };
    menu.addEventListener('click', function () {
      menu.setAttribute('aria-expanded', String(body.classList.toggle('nav-open')));
    });
    document.querySelectorAll('.links a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && body.classList.contains('nav-open')) { closeMenu(); menu.focus(); }
    });
  }

  var sizes = [.9, 1, 1.15, 1.3], si = 1, hc = false;
  try {
    var v = localStorage.getItem('fs');
    if (v !== null && +v >= 0 && +v < 4) si = +v;
    hc = localStorage.getItem('hc') === '1';
  } catch (e) {}
  function applyA() {
    html.style.fontSize = (sizes[si] * 100) + '%';
    body.classList.toggle('hc', hc);
    document.querySelector('[data-a="hc"]').setAttribute('aria-pressed', String(hc));
    try { localStorage.setItem('fs', si); localStorage.setItem('hc', hc ? '1' : '0'); } catch (e) {}
  }
  document.querySelectorAll('[data-a]').forEach(function (b) {
    b.addEventListener('click', function () {
      var a = b.dataset.a;
      if (a === '+' && si < 3) si++;
      if (a === '-' && si > 0) si--;
      if (a === 'hc') hc = !hc;
      applyA();
    });
  });
  applyA();
  var tg = document.querySelector('.a11y-t');
  tg.addEventListener('click', function () {
    tg.setAttribute('aria-expanded', String(tg.parentNode.classList.toggle('open')));
  });

  var form = document.getElementById('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var role = form.r.options[form.r.selectedIndex].text;
      var msg = form.m.value + '\n\n' + form.n.value + ' · ' + form.e.value;
      location.href = 'mailto:abreuadvance@gmail.com?subject=' + encodeURIComponent(role + ' – ' + form.n.value) +
        '&body=' + encodeURIComponent(msg);
      document.getElementById('form-hint').hidden = false;
    });
  }
  document.getElementById('y').textContent = new Date().getFullYear();
})();
