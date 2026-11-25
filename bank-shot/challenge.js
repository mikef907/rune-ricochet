const choices = document.querySelector('#choices');
const clip = document.querySelector('video');
const answer = document.querySelector('#answer');
choices.hidden = false;
choices.addEventListener('click', (event) => {
  const pick = event.target.closest('button');
  if (!pick) return;
  answer.textContent = pick.value === 'left'
    ? 'You called it. The orb banks off the left wall.'
    : 'Watch the left wall. That first bounce sends the orb into the formation.';
  clip.currentTime = 0;
  clip.play().catch(() => { answer.textContent += ' Press play to watch.'; });
});
