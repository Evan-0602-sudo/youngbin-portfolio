const data = window.PORTFOLIO;
const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const tags = (items) => items.map((item) => `<span class="tag">${escapeHTML(item)}</span>`).join('');

document.querySelector('#core-games').innerHTML = data.coreGames.map((game, index) => `<article class="core-card"><div class="card-top"><span class="eyebrow">${escapeHTML(game.genre)}</span><span class="card-index">0${index + 1}</span></div><h4>${escapeHTML(game.name)}</h4><div class="metric">${escapeHTML(game.metric)}<span>${escapeHTML(game.unit)}</span></div><p class="period">${escapeHTML(game.period)}</p><p class="game-detail">${escapeHTML(game.detail)}</p><p class="game-description">${escapeHTML(game.description)}</p><div class="tags">${tags(game.tags)}</div></article>`).join('');

function renderGames(selector, games) {
  document.querySelector(selector).innerHTML = games.map((game) => `<article class="game-row${game.description ? ' has-description' : ''}"><div><h4>${escapeHTML(game.name)}</h4><p>${escapeHTML(game.genre)}${game.note ? ` <span class="playing">· ${escapeHTML(game.note)}</span>` : ''}</p></div><span class="duration">${escapeHTML(game.duration)}</span>${game.description ? `<p class="experience-note">${escapeHTML(game.description)}</p>` : ''}${game.caseStudy ? `<button class="case-crosslink" type="button" data-open-case="${escapeHTML(game.caseStudy)}">관련 분석 프로젝트 보기 ↗</button>` : ''}</article>`).join('');
}

function renderExperienceGroup(featuredSelector, listSelector, games) {
  document.querySelector(featuredSelector).innerHTML = games.filter((game) => game.featured).map((game) => `<article class="experienced-card"><p>${escapeHTML(game.genre)}</p><h4>${escapeHTML(game.name)}</h4><span class="experience-duration">${escapeHTML(game.duration)}</span>${game.note ? `<p class="playing">${escapeHTML(game.note)}</p>` : ''}${game.description ? `<p class="experience-note">${escapeHTML(game.description)}</p>` : ''}</article>`).join('');
  renderGames(listSelector, games.filter((game) => !game.featured));
}

renderExperienceGroup('#experienced-featured', '#pc-games', data.experiencedGames);
renderExperienceGroup('#mobile-featured', '#mobile-games', data.mobileGames);
document.querySelector('#past-mobile-games').innerHTML = tags(data.pastMobileGames);
document.querySelector('#interest-tags').innerHTML = tags(data.interests);

const statusClasses = { Observation: 'observation', Hypothesis: 'hypothesis', 'Analysis in Progress': 'progress', 'Data to be Added': 'pending', 'Verified Result': 'verified', 'Project Preparing': 'pending' };
const statusLabels = { Observation: '개인 관찰', Hypothesis: '미검증 가설', 'Analysis in Progress': '분석 진행 중', 'Data to be Added': '자료 준비 중', 'Verified Result': '검증 완료', 'Project Preparing': '프로젝트 준비 중' };
const stepLabels = { 'Personal Experience': '직접 경험', Observation: '관찰', Question: '핵심 질문', Hypothesis: '가설', 'Data to Verify': '검증할 자료', Analysis: '분석', Insight: '인사이트', Proposal: '개선 제안', 'Expected Effect': '기대 효과', 'Risk / Trade-off': '위험 및 고려사항', Limitation: '분석 한계', 'What I Learned': '배운 점' };
const artifactLabels = { 'Analysis Document': '분석 문서', 'Excel / Google Sheets': '데이터 시트', PPT: '발표 자료', Notion: 'Notion 정리', Screenshot: '화면 자료', 'Research Sources': '조사 출처' };
const badge = (status) => `<span class="status ${statusClasses[status] || 'pending'}">${escapeHTML(statusLabels[status] || status)}</span>`;
const assetURL = (url) => typeof url === 'string' && (/^https:\/\//i.test(url) || /^(?:\.\/)?assets\/[a-zA-Z0-9_./% -]+$/.test(url)) ? url : '';
function artifactLinks(items) {
  return items.map((item) => {
    const url = assetURL(item.url);
    const label = artifactLabels[item.label] || item.label;
    return url ? `<a class="artifact" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>` : `<span class="artifact unavailable">${escapeHTML(label)}<small>준비 중</small></span>`;
  }).join('');
}

document.querySelector('#case-studies').innerHTML = `<div class="case-card-grid">${data.caseStudies.map((study, index) => `<article class="case-card"><div class="case-folder" aria-hidden="true"></div><div class="case-card-top"><span>0${index + 1}</span>${badge(study.status)}</div><p class="case-game">${escapeHTML(study.game)}</p><h3>${escapeHTML(study.title)}</h3><p>${escapeHTML(study.summary)}</p><button type="button" class="case-open" data-open-case="${escapeHTML(study.id)}">프로젝트 자세히 보기 <span aria-hidden="true">→</span></button></article>`).join('')}</div>`;
const dialog = document.createElement('dialog');
dialog.className = 'case-dialog';
dialog.setAttribute('aria-labelledby', 'case-dialog-title');
document.body.appendChild(dialog);

function openCase(id) {
  const study = data.caseStudies.find((item) => item.id === id);
  if (!study) return;
  const index = data.caseStudies.indexOf(study);
  dialog.innerHTML = `<div class="dialog-shell"><button class="dialog-close" type="button" aria-label="프로젝트 상세 닫기">×</button><div class="case-top"><p class="eyebrow">PROJECT 0${index + 1} · ${escapeHTML(study.game)}</p>${badge(study.status)}</div><h2 id="case-dialog-title">${escapeHTML(study.title)}</h2><p class="case-summary">${escapeHTML(study.summary)}</p><blockquote>${escapeHTML(study.question)}</blockquote><div class="case-highlights"><div>${badge('Observation')}<p>${escapeHTML(study.observation)}</p></div><div>${badge(study.status === 'Project Preparing' ? 'Data to be Added' : 'Hypothesis')}<p>${escapeHTML(study.hypothesis)}</p></div></div>${study.loop ? `<div class="loop" aria-label="검토 중인 플레이 흐름">${study.loop.map(escapeHTML).join(' <span aria-hidden="true">→</span> ')}</div>` : ''}<div class="case-steps">${study.steps.map((step, i) => `<section class="case-step"><div class="step-heading"><h3><span>${String(i + 1).padStart(2, '0')}</span> ${escapeHTML(stepLabels[step.label] || step.label)}</h3>${badge(step.status)}</div><p>${escapeHTML(step.text)}</p></section>`).join('')}</div><div class="evidence"><h3>근거 자료와 산출물</h3><p>완성된 자료부터 이곳에 연결합니다.</p><div class="artifact-grid">${artifactLinks(study.artifacts)}</div></div></div>`;
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-open-case]');
  if (trigger) openCase(trigger.dataset.openCase);
  if (event.target === dialog) dialog.close();
});

function renderProcess(selector, steps) {
  document.querySelector(selector).innerHTML = steps.map((step, i) => `<article class="process-step"><span class="eyebrow">${String(i + 1).padStart(2, '0')}</span><h3>${escapeHTML(step.title)}</h3><p>${escapeHTML(step.text)}</p></article>`).join('');
}
renderProcess('#service-process', data.serviceSteps);
renderProcess('#ai-process', data.aiSteps);
document.querySelector('#data-topics').innerHTML = tags(data.dataAnalysis.topics);
document.querySelector('#data-evidence').innerHTML = data.dataAnalysis.images.length || data.dataAnalysis.documents.length ? data.dataAnalysis.images.map((item) => assetURL(item.src) ? `<figure><img src="${escapeHTML(assetURL(item.src))}" alt="${escapeHTML(item.alt)}" loading="lazy"><figcaption>${escapeHTML(item.caption || '')}</figcaption></figure>` : '').join('') + artifactLinks(data.dataAnalysis.documents) : '<div class="evidence-placeholder">데이터 시트 · 그래프 · 분석 문서<br><span>실제 자료를 수집한 후 공개합니다.</span></div>';
document.querySelector('#skills-grid').innerHTML = data.skills.map((skill, index) => `<article class="skill-card"><span class="skill-number">0${index + 1}</span><h3>${escapeHTML(skill.title)}</h3><p>${escapeHTML(skill.subtitle)}</p><div class="tags">${tags(skill.items)}</div></article>`).join('');

document.querySelector('#contact-links').innerHTML = data.contacts.map((contact) => {
  const safeURL = /^(https:\/\/|mailto:|tel:)/i.test(contact.url) ? contact.url : '';
  const content = `<span class="contact-label">${escapeHTML(contact.label)}</span><span>${escapeHTML(contact.text)} <span aria-hidden="true">↗</span></span>`;
  return safeURL ? `<a href="${escapeHTML(safeURL)}"${safeURL.startsWith('https:') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${content}</a>` : `<span class="contact-placeholder">${content}</span>`;
}).join('');
document.querySelector('#year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
nav.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.addEventListener('click', (event) => { if (!event.target.closest('.nav-shell')) closeMenu(); });
window.matchMedia('(max-width: 900px)').addEventListener('change', closeMenu);

if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = [...nav.querySelectorAll('a')];
  const activeObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) navLinks.forEach((link) => { const active = link.hash === `#${entry.target.id}`; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); }), { rootMargin: '-18% 0px -65% 0px', threshold: 0 });
  sections.forEach((section) => activeObserver.observe(section));
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); reveal.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.section-heading, .core-card, .case-card, .skill-card').forEach((el) => { el.classList.add('reveal'); reveal.observe(el); });
  }
}
