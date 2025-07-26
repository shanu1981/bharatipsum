function restoreParagraph(p) {
  if (p.dataset.original) p.innerHTML = p.dataset.original;
  p.classList.remove('selected');
}

function triColorizeParagraph(p) {
  const text = p.dataset.original || p.innerText;
  if (!p.dataset.original) p.dataset.original = text;
  const words = text.split(/\s+/);
  const chunk = Math.ceil(words.length / 3);
  p.innerHTML =
    `<span class="tri-saffron">${words.slice(0, chunk).join(' ')}</span> ` +
    `<span>${words.slice(chunk, chunk * 2).join(' ')}</span> ` +
    `<span class="tri-green">${words.slice(chunk * 2).join(' ')}</span>`;
  p.classList.add('selected');
}

function highlightSingleParagraph(btn) {
  const container = btn.closest('.section-container');
  const paragraph = container.querySelector('p');

  if (paragraph.classList.contains('selected')) {
    restoreParagraph(paragraph);
  } else {
    triColorizeParagraph(paragraph);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.paint-btn').forEach(btn => {
    btn.addEventListener('click', () => highlightSingleParagraph(btn));
  });

  document.getElementById('genBtn').addEventListener('click', generate);
  document.getElementById('copyBtn').addEventListener('click', copyOutput);
  generate();
});