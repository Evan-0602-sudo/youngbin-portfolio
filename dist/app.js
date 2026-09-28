const data = window.PORTFOLIO;
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const tags = (items) => items.map((item) => `<span class="tag">${escapeHTML(item)}</span>`).join('');

document.querySelector('#core-games').innerHTML = data.coreGames.map((game, index) => `<article class="core-card"><div class="card-top"><span class="eyebrow">${escapeHTML(game.genre)}</span><span class="card-index">0${index + 1}</span></div><h4>${escapeHTML(game.name)}</h4><div class="metric">${escapeHTML(game.metric)}<span>${escapeHTML(game.unit)}</span></div><p class="period">${escapeHTML(game.period)}</p><p class="game-detail">${escapeHTML(game.detail)}</p><p class="game-description">${escapeHTML(game.description)}</p><div class="tags">${tags(game.tags)}</div></article>`).join('');

function renderGames(selector, games) {
  document.querySelector(selector).innerHTML = games.map((game) => `<article class="game-row${game.description ? ' has-description' : ''}"><div><h4>${escapeHTML(game.name)}</h4><p>${escapeHTML(game.genre)}${game.note ? ` <span class="playing">· ${escapeHTML(game.note)}</span>` : ''}</p></div><span class="duration">${escapeHTML(game.duration)}</span>${game.description ? `<p class="experience-note">${escapeHTML(game.description)}</p>` : ''}${game.caseStudy ? `<a class="case-crosslink" href="#case-${escapeHTML(game.caseStudy)}">User Retention Case Study ↗</a>` : ''}</article>`).join('');
}
function renderExperienceGroup(featuredSelector, listSelector, games) {
  document.querySelector(featuredSelector).innerHTML = games.filter((game) => game.featured).map((game) => `<article class="experienced-card"><p>${escapeHTML(game.genre)}</p><h4>${escapeHTML(game.name)}</h4><span class="experience-duration">${escapeHTML(game.duration)}</span>${game.note ? `<p class="playing">${escapeHTML(game.note)}</p>` : ''}${game.description ? `<p class="experience-note">${escapeHTML(game.description)}</p>` : ''}${game.caseStudy ? `<a class="case-crosslink" href="#case-${escapeHTML(game.caseStudy)}">User Retention Case Study ↗</a>` : ''}</article>`).join('');
  renderGames(listSelector, games.filter((game) => !game.featured));
}
renderExperienceGroup('#experienced-featured', '#pc-games', data.experiencedGames);
renderExperienceGroup('#mobile-featured', '#mobile-games', data.mobileGames);
document.querySelector('#past-mobile-games').innerHTML = tags(data.pastMobileGames);

const statusClasses = { 'Observation': 'observation', 'Hypothesis': 'hypothesis', 'Analysis in Progress': 'progress', 'Data to be Added': 'pending', 'Verified Result': 'verified', 'Project Preparing': 'pending' };
const badge = (status) => `<span class="status ${statusClasses[status] || 'pending'}">${escapeHTML(status)}</span>`;
// Local relative paths and HTTPS URLs only. Empty URLs render as text, never fake links.
const assetURL = (url) => typeof url === 'string' && (/^https:\/\//i.test(url) || /^(?:\.\/)?assets\/[a-zA-Z0-9_./% -]+$/.test(url)) ? url : '';
function artifactLinks(items) {
  return items.map((item) => {
    const url = assetURL(item.url);
    return url ? `<a class="artifact" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.label)} ↗</a>` : `<span class="artifact unavailable">${escapeHTML(item.label)}<small>Coming Soon</small></span>`;
  }).join('');
}
document.querySelector('#case-studies').innerHTML = data.caseStudies.map((study, index) => `<article class="case-study" id="case-${escapeHTML(study.id)}"><div class="case-top"><p class="eyebrow">CASE 0${index + 1} / ${escapeHTML(study.game)}</p>${badge(study.status)}</div><h3>${escapeHTML(study.title)}</h3><p class="case-summary">${escapeHTML(study.summary)}</p><blockquote>${escapeHTML(study.question)}</blockquote><div class="case-highlights"><div>${badge('Observation')}<p>${escapeHTML(study.observation)}</p></div><div>${badge(study.status === 'Project Preparing' ? 'Data to be Added' : 'Hypothesis')}<p>${escapeHTML(study.hypothesis)}</p></div></div>${study.loop ? `<div class="loop" aria-label="검토 중인 플레이 루프">${study.loop.map(escapeHTML).join(' <span aria-hidden="true">→</span> ')}</div>` : ''}<details class="case-details"><summary>분석 과정 살펴보기 <span aria-hidden="true">+</span></summary><div class="case-steps">${study.steps.map((step, i) => `<section class="case-step"><div class="step-heading"><h4><span>${String(i + 1).padStart(2, '0')}</span> ${escapeHTML(step.label)}</h4>${badge(step.status)}</div><p>${escapeHTML(step.text)}</p></section>`).join('')}</div></details><div class="evidence"><h4>Evidence &amp; Deliverables</h4><p>실제 기록과 분석 자료가 준비되면 연결합니다.</p><div class="artifact-grid">${artifactLinks(study.artifacts)}</div></div></article>`).join('');
document.querySelector('#interest-tags').innerHTML = tags(data.interests);
function renderProcess(selector, steps) {
  document.querySelector(selector).innerHTML = steps.map((step, i) => `<article class="process-step"><span class="eyebrow">${String(i + 1).padStart(2, '0')} ${i < steps.length - 1 ? '→' : ''}</span><h3>${escapeHTML(step.title)}</h3><p>${escapeHTML(step.text)}</p></article>`).join('');
}
renderProcess('#service-process', data.serviceSteps);
renderProcess('#ai-process', data.aiSteps);
document.querySelector('#data-topics').innerHTML = tags(data.dataAnalysis.topics);
document.querySelector('#data-evidence').innerHTML = data.dataAnalysis.images.length || data.dataAnalysis.documents.length ? data.dataAnalysis.images.map((item) => assetURL(item.src) ? `<figure><img src="${escapeHTML(assetURL(item.src))}" alt="${escapeHTML(item.alt)}" loading="lazy"><figcaption>${escapeHTML(item.caption || '')}</figcaption></figure>` : '').join('') + artifactLinks(data.dataAnalysis.documents) : '<div class="evidence-placeholder">Excel / Google Sheets 표 · 그래프 이미지 · 분석 문서<br><span>Coming Soon — 실제 자료를 수집한 후 공개합니다.</span></div>';

document.querySelector('#skills-grid').innerHTML = data.skills.map((skill, index) => `<article class="skill-card"><span class="skill-number">0${index + 1}</span><h3>${escapeHTML(skill.title)}</h3><p>${escapeHTML(skill.subtitle)}</p><div class="tags">${tags(skill.items)}</div></article>`).join('');

document.querySelector('#contact-links').innerHTML = data.contacts.map((contact) => {
  const safeURL = /^(https:\/\/|mailto:)/i.test(contact.url) ? contact.url : '';
  const content = `<span class="contact-label">${escapeHTML(contact.label)}${contact.placeholder ? '<small>임시 링크</small>' : ''}</span><span>${escapeHTML(contact.text)} <span aria-hidden="true">↗</span></span>`;
  return safeURL ? `<a href="${escapeHTML(safeURL)}"${safeURL.startsWith('https:') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${content}</a>` : `<span class="contact-placeholder" aria-label="${escapeHTML(contact.label)} 링크 준비 중">${content}<small>링크 준비 중</small></span>`;
}).join('');
document.querySelector('#year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.addEventListener('click', (event) => { if (!event.target.closest('.nav-shell')) closeMenu(); });
const mobileQuery = window.matchMedia('(max-width: 1100px)');
mobileQuery.addEventListener('change', closeMenu);

if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = [...nav.querySelectorAll('a')];
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) navLinks.forEach((link) => {
      const active = link.hash === `#${entry.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    }); });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  sections.forEach((section) => activeObserver.observe(section));
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); reveal.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('.section-heading, .core-card, .project-card, .skill-card').forEach((el) => { el.classList.add('reveal'); reveal.observe(el); });
  }
}
