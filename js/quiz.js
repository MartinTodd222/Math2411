(function () {
  const STORAGE_KEY = 'math2411_quiz_mc_v1';
  const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  let filter = 'all';

  const quizEl = document.getElementById('quiz');
  const scoreEl = document.getElementById('score');
  const filterEl = document.getElementById('qfilter');
  const resetBtn = document.getElementById('reset-quiz');

  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

  function matchFilter(q) {
    const s = state[q.id];
    if (filter === 'all') return true;
    if (filter === '1' || filter === '2' || filter === '3') return q.c === +filter;
    if (filter === 'open') return s === undefined;
    if (filter === 'wrong') return s !== undefined && s !== q.a;
    return true;
  }

  function render() {
    const qs = window.QUESTIONS.filter(matchFilter);
    const total = window.QUESTIONS.length;
    const answered = Object.keys(state).length;
    const correct = window.QUESTIONS.reduce((n, q) => n + (state[q.id] === q.a ? 1 : 0), 0);
    scoreEl.textContent = `${correct} / ${answered} correct · ${answered}/${total} answered`;

    if (qs.length === 0) {
      quizEl.innerHTML = '<div class="section"><p style="margin:0;color:var(--muted)">No questions match this filter.</p></div>';
      return;
    }

    quizEl.innerHTML = qs.map((q, idx) => {
      const chosen = state[q.id];
      const answered = chosen !== undefined;
      const correctIdx = q.a;
      const options = q.o.map((opt, i) => {
        let cls = 'opt';
        if (answered) {
          if (i === correctIdx) cls += ' correct';
          else if (i === chosen) cls += ' wrong';
        } else if (chosen === i) {
          cls += ' selected';
        }
        return `<button class="${cls}" data-qid="${q.id}" data-choice="${i}" ${answered ? 'disabled' : ''}>
          <span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span></button>`;
      }).join('');

      const explanation = answered ? `<div class="explanation ${chosen === correctIdx ? 'right' : 'wrong'}">
        <strong>${chosen === correctIdx ? '✓ Correct.' : '✗ Not quite.'}</strong> ${q.e}
      </div>` : '';

      return `<div class="qcard" id="q-${q.id}">
        <div class="qhead">
          <span class="qchip">Ch ${q.c}</span>
          <span class="qnum">Q${idx + 1}</span>
        </div>
        <div class="qtext">${q.q}</div>
        <div class="options">${options}</div>
        ${explanation}
      </div>`;
    }).join('');

    quizEl.querySelectorAll('.opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.qid;
        const choice = +btn.dataset.choice;
        if (state[qid] !== undefined) return;
        state[qid] = choice;
        save();
        render();
      });
    });
  }

  filterEl.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    filter = b.dataset.f;
    filterEl.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
    render();
  });

  resetBtn.addEventListener('click', () => {
    if (confirm('Reset all your quiz answers?')) {
      Object.keys(state).forEach(k => delete state[k]);
      save();
      render();
    }
  });

  render();
})();
