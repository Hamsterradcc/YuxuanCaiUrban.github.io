/* The homepage 24x32 guide, adapted without pipe or smoke as requested.
   Drawn as a reusable character layer, never baked into a scene background. */
(function(){
  'use strict';
  const PORTRAIT=[
    '........................',
    '........................',
    '........................',
    '........................',
    '......HHHHHHHHHH........',
    '.....HHHHHHHHHHHH.......',
    '.....HhhHHHHHHHHH.......',
    '.....HHHHHHHHHHHH.......',
    '...HHHHHHHHHHHHHHHHH....',
    '...HHHHHHHHHHHHHHHHH....',
    '......ffffffffff........',
    '......FFFFFFFFFF........',
    '......FFEEFFFEEF........',
    '......FFFFFFFFFF........',
    '......FFFFfFFFFF........',
    '......FFFFFFff..........',
    '.......FFFFFFFF.........',
    '........FFFFFF..........',
    '.....SSSFFFFFFSSS.......',
    '....SSSSSFFFFSSSSS......',
    '...CCSSSSSWWSSSSSCC.....',
    '..CCCCSSSSWWSSSSCCCC....',
    '.CCCCCCSSSWWSSSCCCCCC...',
    '.CCCCCCCSSWWSSCCCCCCC...',
    '.CCCCCCCCSWWSCCCCCCCC...',
    'CCCCCCCCCCWWCCCCCCCCCC..',
    'CCCcCCCCCCWWCCCCCCCcCC..',
    'CCCcCCCCCCWWCCCCCCCcCC..',
    'CCCcCCCCCCWWCCCCCCCcCC..',
    'CCCcCCCCCCWWCCCCCCCcCC..',
    'CCCcCCCCCCWWCCCCCCCcCC..',
    'CCCcCCCCCCWWCCCCCCCcCC..',
  ];
  const INK={H:'#1a1028',h:'#3a2e5c',F:'#d9a889',f:'#b07f66',E:'#1a1028',C:'#2a2236',c:'#3f3560',
             S:'#6a2c4a',W:'#e8e0f0'};

  function draw(canvas, options = {}) {
    if (!canvas) return;
    if (canvas.width !== 24) canvas.width = 24;
    if (canvas.height !== 32) canvas.height = 32;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0,0,24,32);
    for(let y=0;y<32;y++) for(let x=0;x<24;x++) {
      const ch = PORTRAIT[y][x]; if(ch==='.') continue;
      const dx = x;
      ctx.fillStyle = INK[ch];
      ctx.fillRect(dx,y,1,1);
    }
    if (options.blink) {
      ctx.fillStyle=INK.F; ctx.fillRect(8,12,2,1);ctx.fillRect(14,12,2,1);
      ctx.fillStyle=INK.E; ctx.fillRect(8,13,2,1);ctx.fillRect(14,13,2,1);
    }
  }
  window.NightGuide={draw, pixels:PORTRAIT, palette:INK};
})();
