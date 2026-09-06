(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', '메뉴 열기'); }
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; nav.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기'); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
  matchMedia('(min-width:851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  const params = new URLSearchParams(location.search);
  const productSearch = document.querySelector('#product-search');
  if (productSearch) {
    const buttons = [...document.querySelectorAll('[data-filter]')];
    let category = buttons.some(b => b.dataset.filter === params.get('category')) ? params.get('category') : '전체제품';
    const filter = () => {
      const query = productSearch.value.trim().toLocaleLowerCase(); let count = 0;
      document.querySelectorAll('.product-card').forEach(card => { const show = (category === '전체제품' || category === card.dataset.category) && card.dataset.search.toLocaleLowerCase().includes(query); card.hidden = !show; if (show) count++; });
      buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === category)));
      document.querySelector('#product-count').textContent = `${category} · ${count}개 제품`;
      document.querySelector('#product-empty').hidden = count !== 0;
    };
    buttons.forEach(b => b.addEventListener('click', () => { category = b.dataset.filter; filter(); }));
    productSearch.addEventListener('input', filter); filter();
  }
  const blogForm = document.querySelector('#blog-search');
  if (blogForm) {
    let category = '전체글'; const input = document.querySelector('#blog-query');
    const filter = () => { let count = 0; const query = input.value.trim().toLocaleLowerCase();
      document.querySelectorAll('.blog-grid .post-card').forEach(card => { const show = (category === '전체글' || card.dataset.category === category) && card.dataset.search.toLocaleLowerCase().includes(query); card.hidden = !show; if (show) count++; });
      document.querySelectorAll('[data-blog-filter]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.blogFilter === category)));
      document.querySelector('#blog-count').textContent = `${category} · ${count}개 글`; document.querySelector('#blog-empty').hidden = count !== 0;
    };
    blogForm.addEventListener('submit', event => { event.preventDefault(); filter(); }); input.addEventListener('input', filter);
    document.querySelectorAll('[data-blog-filter]').forEach(b => b.addEventListener('click', () => { category = b.dataset.blogFilter; filter(); }));
  }
  const form = document.querySelector('#inquiry-form');
  if (form) {
    form.querySelector('#inquiry-fields').disabled = false;
    // No network requests, localStorage, or simulated success. Replace with Cafe24's native board form.
    form.setAttribute('action', 'contact.html');
    form.querySelectorAll('input,textarea').forEach(field => field.addEventListener('input', () => { field.setCustomValidity(''); document.querySelector('#form-status').textContent = ''; }));
    const requested = params.get('product');
    if ([...form.elements.product.options].some(option => option.value === requested)) form.elements.product.value = requested;
    form.addEventListener('submit', event => {
      event.preventDefault();
      ['customer', 'place', 'content'].forEach(name => { const field = form.elements[name]; field.setCustomValidity(field.value.trim() ? '' : '공백을 제외한 내용을 입력해 주세요.'); });
      const digits = form.elements.phone.value.replace(/\D/g, '');
      form.elements.phone.setCustomValidity(digits.length >= 8 && digits.length <= 15 ? '' : '연락 가능한 전화번호를 입력해 주세요.');
      if (!form.reportValidity()) return;
      const status = document.querySelector('#form-status');
      status.textContent = '필수 입력 항목을 확인했습니다. 문의는 전송되지 않았습니다. 실제 상담은 02-856-3853 또는 스마트스토어를 이용해 주세요.'; status.focus();
    });
    // A script-free browser must not serialize private form values into a URL.
  }
})();
