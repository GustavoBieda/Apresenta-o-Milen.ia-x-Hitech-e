/* Milen.ia x Hitech | IA Day 2026 — Deck engine
   - Keyboard nav (arrows / space / home / end / number)
   - Progress bar
   - Overview (grid of slides) with ESC / 'o'
   - Help modal with '?'
   - Per-slide interactions (polls, flip cards, tool switcher, prompt typing)
*/

(() => {
    const deck = document.querySelector('.deck');
    if (!deck) return;
    const slides = Array.from(deck.querySelectorAll('.slide'));
    const total = slides.length;

    const counter = document.getElementById('counter');
    const progressFill = document.getElementById('progress-fill');
    const overview = document.getElementById('overview');
    const overviewGrid = document.getElementById('overview-grid');
    const helpModal = document.getElementById('help-modal');

    let idx = 0;

    // ----------------------- URL hash sync -----------------------
    const parseHash = () => {
        const h = parseInt((location.hash || '').replace('#', ''), 10);
        return (isFinite(h) && h >= 0 && h < total) ? h : 0;
    };
    idx = parseHash();

    // ----------------------- Core navigation -----------------------
    const go = (n, { push = true } = {}) => {
        if (n < 0) n = 0;
        if (n >= total) n = total - 1;
        if (n === idx && slides[n].classList.contains('active')) return;

        slides.forEach((s, i) => {
            s.classList.remove('active', 'prev');
            if (i === n) s.classList.add('active');
            else if (i < n) s.classList.add('prev');
        });

        idx = n;
        if (counter) counter.innerHTML = `<b>${String(n).padStart(2,'0')}</b> / ${String(total - 1).padStart(2,'0')}`;
        if (progressFill) progressFill.style.width = `${(n / Math.max(total - 1, 1)) * 100}%`;
        if (push) history.replaceState(null, '', `#${n}`);

        // Scroll internal scroll-y containers to top
        slides[n].querySelectorAll('.scroll-y').forEach(el => el.scrollTop = 0);
    };

    const next = () => go(idx + 1);
    const prev = () => go(idx - 1);

    // ----------------------- Keyboard handling -----------------------
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (helpModal && helpModal.classList.contains('open')) {
            if (e.key === 'Escape' || e.key === '?') helpModal.classList.remove('open');
            return;
        }

        if (overview && overview.classList.contains('open')) {
            if (e.key === 'Escape' || e.key.toLowerCase() === 'o') overview.classList.remove('open');
            return;
        }

        switch (e.key) {
            case 'ArrowRight':
            case 'PageDown':
            case ' ':
                e.preventDefault(); next(); break;
            case 'ArrowLeft':
            case 'PageUp':
            case 'Backspace':
                e.preventDefault(); prev(); break;
            case 'Home': e.preventDefault(); go(0); break;
            case 'End': e.preventDefault(); go(total - 1); break;
            case 'Escape':
            case 'o':
            case 'O':
                if (overview) {
                    buildOverview();
                    overview.classList.toggle('open');
                }
                break;
            case '?':
                if (helpModal) helpModal.classList.toggle('open');
                break;
            case 'f':
            case 'F':
                if (document.fullscreenElement) document.exitFullscreen();
                else document.documentElement.requestFullscreen?.();
                break;
        }
    });

    // Click navigation on sides (only on empty edges)
    document.addEventListener('click', (e) => {
        const target = e.target;
        // only react to chrome buttons
        const btn = target.closest('[data-nav]');
        if (!btn) return;
        const action = btn.getAttribute('data-nav');
        if (action === 'next') next();
        else if (action === 'prev') prev();
        else if (action === 'overview') { buildOverview(); overview.classList.toggle('open'); }
        else if (action === 'help') helpModal.classList.toggle('open');
        else if (action === 'fullscreen') {
            if (document.fullscreenElement) document.exitFullscreen();
            else document.documentElement.requestFullscreen?.();
        }
    });

    // ----------------------- Overview grid -----------------------
    function buildOverview() {
        if (!overviewGrid || overviewGrid.childElementCount === total) return;
        overviewGrid.innerHTML = '';
        slides.forEach((s, i) => {
            const title = s.getAttribute('data-title') || s.querySelector('.slide-title')?.textContent || `Slide ${i}`;
            const bloco = s.getAttribute('data-bloco') || '';
            const isDivider = s.classList.contains('divider');
            const isCover = s.classList.contains('cover');
            const div = document.createElement('div');
            div.className = 'thumb' + (isDivider ? ' is-divider' : '') + (isCover ? ' is-cover' : '');
            div.innerHTML = `
                <div class="n">${String(i).padStart(2, '0')}</div>
                <div class="t">${title}</div>
                ${bloco ? `<div class="b">${bloco}</div>` : ''}
            `;
            div.addEventListener('click', () => {
                go(i);
                overview.classList.remove('open');
            });
            overviewGrid.appendChild(div);
        });
    }

    // ----------------------- Interactions -----------------------

    // Myth-cards flip
    document.querySelectorAll('.myth-card').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('flipped'));
    });

    // Poll buttons
    document.querySelectorAll('[data-poll]').forEach(poll => {
        const result = poll.parentElement.querySelector('.poll-result');
        poll.querySelectorAll('button').forEach(b => {
            b.addEventListener('click', () => {
                poll.querySelectorAll('button').forEach(x => x.classList.remove('selected'));
                b.classList.add('selected');
                if (result) {
                    result.classList.add('visible');
                    const msg = b.getAttribute('data-msg');
                    if (msg) result.textContent = msg;
                }
            });
        });
    });

    // Concentric circles hover highlight (just visual via css hover; no JS needed)

    // Tool switcher (for tools intro)
    document.querySelectorAll('[data-tool-menu]').forEach(menu => {
        const target = menu.getAttribute('data-tool-menu');
        const container = document.querySelector(target);
        if (!container) return;
        menu.querySelectorAll('.item').forEach(item => {
            item.addEventListener('click', () => {
                menu.querySelectorAll('.item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                const id = item.getAttribute('data-tool');
                container.querySelectorAll('[data-tool-panel]').forEach(p => {
                    p.style.display = p.getAttribute('data-tool-panel') === id ? '' : 'none';
                });
            });
        });
    });

    // Prompt typing animation (for slide 20)
    document.querySelectorAll('[data-type-on-active]').forEach(el => {
        const fullText = el.innerHTML;
        el.dataset.full = fullText;
        el.innerHTML = '';
    });

    const runTyping = (slide) => {
        slide.querySelectorAll('[data-type-on-active]').forEach(el => {
            if (el.dataset.typed === '1') return;
            const full = el.dataset.full || '';
            const speed = parseInt(el.dataset.speed || '12', 10);
            const delay = parseInt(el.dataset.delay || '300', 10);
            el.innerHTML = '';
            setTimeout(() => {
                let i = 0;
                const t = setInterval(() => {
                    el.innerHTML = full.slice(0, i);
                    i++;
                    if (i > full.length) { clearInterval(t); el.dataset.typed = '1'; }
                }, speed);
            }, delay);
        });
    };

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(m => {
            if (m.type === 'attributes' && m.attributeName === 'class') {
                const s = m.target;
                if (s.classList && s.classList.contains('active')) {
                    runTyping(s);
                    // Re-trigger fade children animation by forcing reflow
                    s.querySelectorAll('.fade-child').forEach(c => {
                        c.style.animation = 'none';
                        // eslint-disable-next-line no-unused-expressions
                        c.offsetHeight;
                        c.style.animation = '';
                    });
                }
            }
        });
    });
    slides.forEach(s => observer.observe(s, { attributes: true }));

    // Initial
    go(idx, { push: false });

    // Hash change listener (for deep-linking)
    window.addEventListener('hashchange', () => go(parseHash(), { push: false }));

    // ----------------------- Workshop guide clock -----------------------
    (function () {
        const clockEl = document.getElementById('ws-clock');
        const guideSlide = document.getElementById('ws-guide-slide');
        if (!clockEl || !guideSlide) return;

        let startTs = null;
        let rafId   = null;

        function fmt(s) {
            const h = Math.floor(s / 3600);
            const m = Math.floor((s % 3600) / 60);
            const sec = s % 60;
            const mm  = String(m).padStart(2, '0');
            const ss  = String(sec).padStart(2, '0');
            return h > 0 ? String(h).padStart(2, '0') + ':' + mm + ':' + ss
                         : mm + ':' + ss;
        }

        function tick() {
            if (startTs !== null) {
                clockEl.textContent = fmt(Math.floor((Date.now() - startTs) / 1000));
            }
            rafId = requestAnimationFrame(tick);
        }

        // Observa quando o slide ganha / perde .active
        const obs = new MutationObserver(() => {
            if (guideSlide.classList.contains('active')) {
                if (startTs === null) startTs = Date.now();
                if (!rafId) rafId = requestAnimationFrame(tick);
            } else {
                if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
            }
        });
        obs.observe(guideSlide, { attributeFilter: ['class'] });
    })();

    // Touch swipe
    let tStartX = 0, tStartY = 0, tMoved = false;
    deck.addEventListener('touchstart', (e) => {
        tStartX = e.touches[0].clientX;
        tStartY = e.touches[0].clientY;
        tMoved = false;
    }, { passive: true });
    deck.addEventListener('touchmove', () => { tMoved = true; }, { passive: true });
    deck.addEventListener('touchend', (e) => {
        if (!tMoved) return;
        const dx = e.changedTouches[0].clientX - tStartX;
        const dy = e.changedTouches[0].clientY - tStartY;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) next(); else prev();
        }
    }, { passive: true });
})();
