/* Local coming-soon notice. No AI service or network requests. */
(function () {
  'use strict';
  const root = document.getElementById('research-story');
  if (!root || !window.NightGuide) return;
  const links = root.querySelector('.rs-dialogue-links');
  const guide = root.querySelector('.rs-guide');
  if (!links || !guide) return;

  const chinese = /^zh\b/i.test(navigator.language);
  const ask = chinese ? '问问向导' : 'Ask the guide';
  let opener;
  const dialog = document.createElement('dialog');
  dialog.id = 'research-chat';
  dialog.className = 'rc-dialog';
  dialog.setAttribute('aria-labelledby', 'rc-title');
  dialog.setAttribute('aria-describedby', 'rc-description');
  dialog.innerHTML = '<canvas width="24" height="32" aria-hidden="true"></canvas><span class="rc-eyebrow">NIGHT GUIDE / AFTER HOURS</span><h2 id="rc-title">Coming soon</h2><p class="rc-subtitle" lang="zh">互动问答即将开放</p><p id="rc-description"></p><button type="button" class="rc-close"></button>';
  dialog.querySelector('#rc-description').textContent = chinese
    ? '向导正在准备更多故事。先继续这趟夜巡吧。'
    : 'The guide is preparing more stories. For now, let’s continue our night walk.';
  const close = dialog.querySelector('.rc-close');
  close.textContent = chinese ? '回到故事 →' : 'Back to the story →';
  document.body.appendChild(dialog);
  window.NightGuide.draw(dialog.querySelector('canvas'));

  function open(event) {
    if (dialog.open) return;
    opener = event.currentTarget;
    root.dispatchEvent(new CustomEvent('research-story:pause'));
    dialog.showModal();
    close.focus();
  }
  function entry(className) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', dialog.id);
    button.setAttribute('aria-label', ask);
    button.addEventListener('click', open);
    return button;
  }
  const link = entry('rc-entry');
  link.textContent = ask;
  links.appendChild(link);
  const character = guide.querySelector('canvas');
  if (character) {
    const characterButton = entry('rc-character');
    character.before(characterButton);
    characterButton.appendChild(character);
  }
  const guideLink = entry('rc-entry rc-portrait-entry');
  guideLink.textContent = ask;
  guide.appendChild(guideLink);

  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    if (opener?.isConnected) opener.focus({preventScroll:true});
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
