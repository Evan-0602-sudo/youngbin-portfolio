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

const statusClasses = { Observation: 'observation', Hypothesis: 'hypothesis', 'Analysis in Progress': 'progress', 'Data to be Added': 'pending', 'Verified Result': 'verified', 'Case Study Complete': 'verified', 'Project Preparing': 'pending' };
const statusLabels = { Observation: '개인 관찰', Hypothesis: '미검증 가설', 'Analysis in Progress': '분석 진행 중', 'Data to be Added': '자료 준비 중', 'Verified Result': '검증 완료', 'Case Study Complete': '사례 분석 완료', 'Project Preparing': '프로젝트 준비 중' };
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

const visibleCaseStudies = data.caseStudies.filter((study) => study.visible !== false);
document.querySelector('#case-studies').innerHTML = `<div class="case-card-grid">${visibleCaseStudies.map((study, index) => `<article class="case-card"><div class="case-folder" aria-hidden="true"></div><div class="case-card-top"><span>0${index + 1}</span>${badge(study.status)}</div><p class="case-game">${escapeHTML(study.game)}</p><h3>${escapeHTML(study.title)}</h3><p>${escapeHTML(study.summary)}</p><button type="button" class="case-open" data-open-case="${escapeHTML(study.id)}">프로젝트 자세히 보기 <span aria-hidden="true">→</span></button></article>`).join('')}</div>`;
const dialog = document.createElement('dialog');
dialog.className = 'case-dialog';
dialog.setAttribute('aria-labelledby', 'case-dialog-title');
document.body.appendChild(dialog);

function openCase(id) {
  const study = data.caseStudies.find((item) => item.id === id);
  if (!study) return;
  const index = visibleCaseStudies.indexOf(study);
  const meta = study.meta?.length ? `<dl class="case-meta">${study.meta.map((item) => `<div><dt>${escapeHTML(item.label)}</dt><dd>${escapeHTML(item.value)}</dd></div>`).join('')}</dl>` : '';
  const milestones = study.milestones?.length ? `<section class="structured-section"><div class="structured-heading"><span class="eyebrow">PROGRESSION</span><h3>성장과 도전 타임라인</h3><p>확인 가능한 생성일과 업적 날짜를 기준으로 정리했습니다.</p></div><ol class="milestone-list">${study.milestones.map((item) => `<li><time>${escapeHTML(item.date)}</time><div><h4>${escapeHTML(item.title)}</h4><p>${escapeHTML(item.text)}</p></div></li>`).join('')}</ol></section>` : '';
  const playerJourney = study.playerJourney?.length ? `<section class="structured-section"><div class="structured-heading"><span class="eyebrow">USER JOURNEY</span><h3>260 이후 실제 행동 흐름</h3><p>본인 인터뷰를 바탕으로 선택이 발생한 지점을 정리했습니다.</p></div><div class="journey-flow">${study.playerJourney.map((item, i) => `<article><span>${String(i + 1).padStart(2, '0')} · ${escapeHTML(item.stage)}</span><h4>${escapeHTML(item.title)}</h4><p>${escapeHTML(item.text)}</p></article>`).join('')}</div></section>` : '';
  const actualRoutine = study.actualRoutine?.length ? `<section class="structured-section compact-section"><div class="structured-heading"><span class="eyebrow">ACTUAL ROUTINE</span><h3>실제 플레이 우선순위</h3></div><div class="routine-grid">${study.actualRoutine.map((item) => `<article><span>${escapeHTML(item.label)}</span><h4>${escapeHTML(item.title)}</h4><p>${escapeHTML(item.text)}</p></article>`).join('')}</div></section>` : '';
  const quantifiedNotes = study.quantifiedNotes?.length ? `<section class="structured-section compact-section"><div class="structured-heading"><span class="eyebrow">PLAYER DATA</span><h3>개인 플레이 수치와 의사결정</h3><p>공식 평균이 아닌 본인 플레이 기록과 회상 범위입니다.</p></div><div class="player-data-table" role="table" aria-label="개인 플레이 수치"><div class="player-data-head" role="row"><span>항목</span><span>확인 수치</span><span>조건</span><span>행동에 미친 영향</span></div>${study.quantifiedNotes.map((item) => `<article role="row"><strong>${escapeHTML(item.topic)}</strong><b>${escapeHTML(item.value)}</b><span>${escapeHTML(item.detail)}</span><p>${escapeHTML(item.meaning)}</p></article>`).join('')}</div></section>` : '';
  const decisionSummary = study.decisionSummary?.length ? `<section class="structured-section"><div class="structured-heading"><span class="eyebrow">BM RECORD</span><h3>유료 상품 이용 기록</h3><p>결제 사실과 구매 동기 해석을 분리했습니다.</p></div><div class="decision-grid">${study.decisionSummary.map((item) => `<article><span>${escapeHTML(item.label)}</span><strong>${escapeHTML(item.value)}</strong><p>${escapeHTML(item.detail)}</p></article>`).join('')}</div></section>` : '';
  const bmInsights = study.bmInsights?.length ? `<section class="structured-section compact-section"><div class="structured-heading"><span class="eyebrow">PURCHASE DECISION</span><h3>패스별 구매 판단</h3><p>구매 내역으로 확인된 사실과 구매자의 자기 보고를 구분했습니다.</p></div><div class="bm-list">${study.bmInsights.map((item) => `<article><h4>${escapeHTML(item.product)}</h4><dl><div><dt>구매 이유</dt><dd>${escapeHTML(item.reason)}</dd></div><div><dt>플레이 변화</dt><dd>${escapeHTML(item.change)}</dd></div></dl><small>${escapeHTML(item.level)}</small></article>`).join('')}</div></section>` : '';
  const takeaways = study.takeaways?.length ? `<section class="structured-section"><div class="structured-heading"><span class="eyebrow">KEY FINDINGS</span><h3>현재 자료에서 도출한 결론</h3><p>증거가 닿는 범위 안에서만 정리했습니다.</p></div><div class="takeaway-list">${study.takeaways.map((item, i) => `<article><span>0${i + 1}</span><div><h4>${escapeHTML(item.title)}</h4><p>${escapeHTML(item.text)}</p><small>근거 · ${escapeHTML(item.basis)}</small></div></article>`).join('')}</div></section>` : '';
  const competencies = study.competencies?.length ? `<section class="structured-section"><div class="structured-heading"><span class="eyebrow">ROLE FIT</span><h3>이 프로젝트로 보여주는 업무 방식</h3></div><div class="competency-grid">${study.competencies.map((item) => `<article><h4>${escapeHTML(item.title)}</h4><p>${escapeHTML(item.text)}</p></article>`).join('')}</div></section>` : '';
  const problems = study.problems?.length ? `<section class="structured-section"><div class="structured-heading"><span class="eyebrow">PRIORITY</span><h3>문제 후보와 우선순위</h3><p>개인 경험과 공식 구조에서 확인한 근거를 기준으로 선정했습니다.</p></div><div class="problem-grid">${study.problems.map((item) => `<article class="problem-card"><span class="problem-rank">${escapeHTML(item.rank)}</span><h4>${escapeHTML(item.title)}</h4><dl><div><dt>근거</dt><dd>${escapeHTML(item.evidence)}</dd></div><div><dt>유저 영향</dt><dd>${escapeHTML(item.impact)}</dd></div><div><dt>근거 수준</dt><dd>${escapeHTML(item.confidence)}</dd></div></dl></article>`).join('')}</div></section>` : '';
  const proposals = study.proposals?.length ? `<section class="structured-section"><div class="structured-heading"><span class="eyebrow">PROPOSAL</span><h3>개선안과 측정 계획</h3><p>효과를 단정하지 않고 확인할 지표와 부작용을 함께 제시합니다.</p></div><div class="proposal-list">${study.proposals.map((item, i) => `<article class="proposal-card"><div class="proposal-title"><span>0${i + 1}</span><div><small>${escapeHTML(item.forProblem)}</small><h4>${escapeHTML(item.title)}</h4></div></div><p>${escapeHTML(item.idea)}</p><dl><div><dt>확인 지표</dt><dd>${escapeHTML(item.metrics)}</dd></div><div><dt>고려사항</dt><dd>${escapeHTML(item.risk)}</dd></div></dl></article>`).join('')}</div></section>` : '';
  const prototype = study.prototype ? `<section class="structured-section"><div class="structured-heading"><span class="eyebrow">SERVICE CONCEPT</span><h3>대표 개선안 화면 구조</h3><p>실제 행동에서 확인한 선택 충돌을 바탕으로 만든 개념 시안입니다.</p></div><article class="service-concept"><header><span>GROWTH GUIDE · Lv.260</span><h4>${escapeHTML(study.prototype.title)}</h4><p>${escapeHTML(study.prototype.description)}</p></header><div class="concept-goal">${escapeHTML(study.prototype.goal)}</div><div class="activity-list">${study.prototype.activities.map((item) => `<article><div><strong>${escapeHTML(item.name)}</strong><span>${escapeHTML(item.time)}</span></div><p>${escapeHTML(item.reward)}</p><small>${escapeHTML(item.state)}</small><b>${escapeHTML(item.priority)}</b></article>`).join('')}</div><footer>${study.prototype.controls.map((item) => `<span>${escapeHTML(item)}</span>`).join('')}</footer><p class="concept-note">검증 계획 · ${escapeHTML(study.prototype.timing)}</p></article></section>` : '';
  const evidenceImages = study.evidenceImages?.length ? `<div class="evidence-gallery">${study.evidenceImages.map((item) => `<figure><img src="${escapeHTML(assetURL(item.src))}" alt="${escapeHTML(item.alt)}" loading="lazy"><figcaption>${escapeHTML(item.caption)}</figcaption></figure>`).join('')}</div>` : '';
  dialog.innerHTML = `<div class="dialog-shell"><button class="dialog-close" type="button" aria-label="프로젝트 상세 닫기">×</button><div class="case-top"><p class="eyebrow">PROJECT 0${Math.max(index, 0) + 1} · ${escapeHTML(study.game)}</p>${badge(study.status)}</div><h2 id="case-dialog-title">${escapeHTML(study.title)}</h2><p class="case-summary">${escapeHTML(study.summary)}</p>${meta}<blockquote>${escapeHTML(study.question)}</blockquote><div class="case-highlights"><div>${badge('Observation')}<p>${escapeHTML(study.observation)}</p></div><div>${badge(study.status === 'Project Preparing' ? 'Data to be Added' : 'Hypothesis')}<p>${escapeHTML(study.hypothesis)}</p></div></div>${study.loop ? `<div class="loop" aria-label="검토 중인 플레이 흐름">${study.loop.map(escapeHTML).join(' <span aria-hidden="true">→</span> ')}</div>` : ''}${milestones}${playerJourney}${actualRoutine}${quantifiedNotes}${decisionSummary}${bmInsights}${takeaways}${problems}${proposals}${prototype}${competencies}<section class="structured-section"><div class="structured-heading"><span class="eyebrow">PROCESS</span><h3>분석 과정</h3></div><div class="case-steps">${study.steps.map((step, i) => `<section class="case-step"><div class="step-heading"><h3><span>${String(i + 1).padStart(2, '0')}</span> ${escapeHTML(stepLabels[step.label] || step.label)}</h3>${badge(step.status)}</div><p>${escapeHTML(step.text)}</p></section>`).join('')}</div></section><div class="evidence"><h3>근거 자료와 산출물</h3><p>직접 플레이 근거와 확인된 공식 자료를 우선 연결합니다.</p>${evidenceImages}<div class="artifact-grid">${artifactLinks(study.artifacts)}</div></div></div>`;
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
