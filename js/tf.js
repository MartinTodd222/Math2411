(function () {
  const STORAGE_KEY = 'math2411_quiz_tf_v1';
  const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  let filter = 'all';

  const quizEl = document.getElementById('tfquiz');
  const scoreEl = document.getElementById('tscore');
  const filterEl = document.getElementById('tfilter');
  const resetBtn = document.getElementById('reset-tf');

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
    const qs = window.TF_QUESTIONS.filter(matchFilter);
    const total = window.TF_QUESTIONS.length;
    const answered = Object.keys(state).length;
    const correct = window.TF_QUESTIONS.reduce((n, q) => n + (state[q.id] === q.a ? 1 : 0), 0);
    scoreEl.textContent = `${correct} / ${answered} correct · ${answered}/${total} answered`;

    if (qs.length === 0) {
      quizEl.innerHTML = '<div class="section"><p style="margin:0;color:var(--muted)">No statements match this filter.</p></div>';
      return;
    }

    quizEl.innerHTML = qs.map((q, idx) => {
      const chosen = state[q.id];
      const answered = chosen !== undefined;
      const correctAns = q.a;
      const makeBtn = (val, label) => {
        let cls = 'opt tfbtn';
        if (answered) {
          if (val === correctAns) cls += ' correct';
          else if (val === chosen) cls += ' wrong';
        }
        return `<button class="${cls}" data-qid="${q.id}" data-choice="${val}" ${answered ? 'disabled' : ''}>${label}</button>`;
      };

      const explanation = answered ? `<div class="explanation ${chosen === correctAns ? 'right' : 'wrong'}">
        <strong>${chosen === correctAns ? '✓ Correct.' : '✗ Not quite.'}</strong> ${q.e}
      </div>` : '';

      return `<div class="qcard" id="q-${q.id}">
        <div class="qhead">
          <span class="qchip">Ch ${q.c}</span>
          <span class="qnum">#${idx + 1}</span>
        </div>
        <div class="qtext">${q.q}</div>
        <div class="options tf-options">${makeBtn('T', 'TRUE')}${makeBtn('F', 'FALSE')}</div>
        ${explanation}
      </div>`;
    }).join('');

    quizEl.querySelectorAll('.opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.qid;
        const choice = btn.dataset.choice;
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
    if (confirm('Reset all your true/false answers?')) {
      Object.keys(state).forEach(k => delete state[k]);
      save();
      render();
    }
  });

  render();
})();
