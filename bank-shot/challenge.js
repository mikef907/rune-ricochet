const choices = document.querySelector('#choices');
const clip = document.querySelector('video');
const answer = document.querySelector('#answer');
const referral = document.querySelector('#referral');
choices.hidden = false;
choices.addEventListener('click', (event) => {
  const pick = event.target.closest('button');
  if (!pick) return;
  answer.textContent = pick.value === 'left'
    ? 'You called it. The orb banks off the left wall.'
    : 'Watch the left wall. That first bounce sends the orb into the formation.';
  referral.hidden = false;
  clip.currentTime = 0;
  clip.play().catch(() => { answer.textContent += ' Press play to watch.'; });
});

const shareButton = document.querySelector('#share');
const shareStatus = document.querySelector('#share-status');
const shareUrl = document.querySelector('#share-url');
const challengeUrl = document.querySelector('link[rel="canonical"]').href;

shareButton.addEventListener('click', async () => {
  shareStatus.textContent = '';
  shareUrl.hidden = true;
  if (navigator.share) {
    try {
      await navigator.share({title: 'Which wall will the orb hit first?', url: challengeUrl});
      return;
    } catch (error) {
      if (error.name === 'AbortError') return;
    }
  }
  try {
    await navigator.clipboard.writeText(challengeUrl);
    shareStatus.textContent = 'Challenge link copied.';
  } catch {
    shareUrl.value = challengeUrl;
    shareUrl.hidden = false;
    shareUrl.focus();
    shareUrl.select();
    shareStatus.textContent = 'Copy this link to challenge a friend.';
  }
});
