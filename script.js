(function(){
'use strict';

/* =====================================================
   EDIT YOUR DETAILS HERE
   ===================================================== */
var CONFIG = {
  name: 'Abhishek Rana',
  headline: 'I engineer reliable software that scales.',
  sub: 'Software engineer. Open to new opportunities.',
  email: 'rana.abhishek.dev@gmail.com',
  projects: [
    { title:'Streamline',  kind:'Distributed systems', year:'2026', desc:'Event-driven pipeline processing 40M+ events a day with p99 latency under 80 ms.', url:'#' },
    { title:'Shipyard',    kind:'Developer tooling',   year:'2025', desc:'Internal deploy platform that cut release time from 45 minutes to 6 and rollbacks to one click.', url:'#' },
    { title:'Ledgerly',    kind:'Full-stack product',  year:'2025', desc:'Invoicing app in TypeScript and Postgres, used by 12k small businesses.', url:'#' },
    { title:'Open Source', kind:'Library',             year:'2024', desc:'A zero-dependency rate-limiting library with 3k+ GitHub stars and 200k weekly downloads.', url:'#' }
  ],
  internships: [
    { role:'Software Engineering Intern', company:'Infosys Springboard', period:'Dec 2025 – Feb 2026', location:'Remote',
      desc:'Built an AI-powered cover letter generation system using FastAPI and LLMs to extract relevant details from resumes and job descriptions and generate personalized cover letters.',
      tags:['Python','FastAPI','React','SQLite', 'LLM'] },

  ],
  education: [
    { degree:'Master of Computer Applications', school:'Ajay Kumar Garg Engineering College', period:'2024 – 2026',
      desc:'CGPA 8.04 / 10. Final-year project on a real-time chat app, plus active member of the coding club.',
      tags:['Data Structures','Algorithms','DBMS','Operating Systems','Networks'] },
    { degree:'Bachelor of Computer Applications', school:'HR Institute of Science and Technology', period:'2020 – 2023',
      desc:'CGPA 8.04 / 10. Final-year project on a real-time chat app, plus active member of the coding club.',
      tags:['Data Structures','Algorithms','DBMS','Operating Systems','Networks'] }
  ],
  /* handwritten notes – one per section (hero, work, internship, education, skills, contact). Edit freely. */
  notes: {
    hero:       { big:'Calm in a production fire.',        small:'Rolled back, fixed it, wrote the post-mortem.' },
    work:       { big:'Every one of these shipped.',       small:'Click a card for the code.' },
    internship: { big:'Learned to read other people’s code.', small:'Harder than writing your own, honestly.' },
    education:  { big:'Favourite course: Operating Systems.', small:'Built a tiny scheduler just for fun.' },
    skills:     { big:'Always learning something new.',    small:'Current rabbit hole: Kubernetes operators.' },
    contact:    { big:'I reply within a day.',             small:'Coffee chat or code review, both welcome.' }
  },
  mixedLetterFonts: true,   /* false = every letter in one typeface */
  skills: ['TypeScript','Python','Java','React','Spring Boot','PostgreSQL','AWS','Docker','Kubernetes'],
  links: [
    { label:'GitHub', url:'https://github.com/Abhishek0024' },
    { label:'LinkedIn', url:'https://linkedin.com/in/abhishek0024' },
    { label:'Résumé (PDF)', url:'#' }
  ]
};
/* ===================================================== */

var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var $ = function(s, r){ return (r||document).querySelector(s); };
var clamp = function(v,a,b){ return Math.max(a, Math.min(b, v)); };
var rand = function(a,b){ return a + Math.random()*(b-a); };
var esc = function(s){ return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); };

var FONT = '"Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif';
/* a small type specimen: each letter in the circles gets its own typeface */
var LS = [
  {css:'800 {s}px "Archivo", "Helvetica Neue", Arial, sans-serif',            s:1.12},
  {css:'italic 400 {s}px "Instrument Serif", Georgia, serif',                  s:1.42},
  {css:'400 {s}px "DM Serif Display", Georgia, serif',                         s:1.2},
  {css:'700 {s}px "Caveat", "Segoe Script", cursive',                         s:1.5}
];
var theme = {ink:'#14151c', blue:'#2540ff'};
function readTheme(){
  var cs = getComputedStyle(document.documentElement);
  theme.ink = cs.getPropertyValue('--ink').trim() || '#14151c';
  theme.blue = cs.getPropertyValue('--blue').trim() || '#2540ff';
}
readTheme();
try { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', readTheme); } catch(e){}

/* ---------- fill page from CONFIG ---------- */
document.title = CONFIG.name + ' – Software engineer';
$('#h1').textContent = CONFIG.name;
(function(){
  var m = CONFIG.headline.match(/^(\S+)([\s\S]*)$/);
  $('#headline').innerHTML = m
    ? '<button type="button" class="i-btn" id="reel" aria-label="Set the letters free">'+esc(m[1])+'<span class="i-spark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"/></svg></span></button>'+esc(m[2])
    : esc(CONFIG.headline);
})();
$('#sub').textContent = CONFIG.sub;
$('#copy').textContent = '© ' + new Date().getFullYear() + ' ' + CONFIG.name;
var mailEl = $('#mag');
mailEl.textContent = CONFIG.email;
mailEl.href = 'mailto:' + CONFIG.email;
$('#links').innerHTML = CONFIG.links.map(function(l){
  return '<li><a href="'+esc(l.url)+'">'+esc(l.label)+'</a></li>';
}).join('');

function art(i){
  var dots = '';
  var s = [
    '<circle class="a-b" cx="212" cy="64" r="112"/><circle class="a-i" cx="64" cy="138" r="34"/>',
    '<circle class="a-b" cx="150" cy="210" r="160"/><circle class="a-t" cx="150" cy="210" r="112"/><circle class="a-i" cx="150" cy="210" r="62"/>',
    (function(){for(var y=0;y<4;y++)for(var x=0;x<8;x++){dots+='<circle class="'+(((x*3+y)%5===0)?'a-i':'a-b')+'" cx="'+(30+x*34)+'" cy="'+(34+y*38)+'" r="'+(4+((x+y)%4)*3)+'"/>';}return dots;})(),
    '<path class="a-b" d="M0 184 A126 126 0 0 1 126 58 L126 184Z"/><circle class="a-i" cx="220" cy="92" r="52"/>'
  ];
  return '<svg viewBox="0 0 300 184" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'+s[i%4]+'</svg>';
}

function entry(n, title, org){
  return '<article class="intern">' +
    '<div class="intern-meta"><strong>'+esc(n.period)+'</strong><span>'+esc(n.location)+'</span></div>' +
    '<div><h3>'+esc(title)+'</h3><p class="intern-co">'+esc(org)+'</p>' +
    '<p class="intern-desc">'+esc(n.desc)+'</p>' +
    '<ul class="tags">'+n.tags.map(function(t){ return '<li>'+esc(t)+'</li>'; }).join('')+'</ul></div>' +
  '</article>';
}
$('#internList').innerHTML = CONFIG.internships.map(function(n){ return entry(n, n.role, n.company); }).join('');
$('#eduList').innerHTML = CONFIG.education.map(function(n){
  return '<article class="intern edu-item">' +
    '<div class="intern-meta"><strong>'+esc(n.period)+'</strong></div>' +
    '<div class="edu-rail"><span class="edu-mark"></span></div>' +
    '<div class="edu-card"><h3>'+esc(n.degree)+'</h3><p class="intern-co">'+esc(n.school)+'</p>' +
    '<p class="intern-desc">'+esc(n.desc)+'</p>' +
    '<ul class="tags">'+n.tags.map(function(t){ return '<li>'+esc(t)+'</li>'; }).join('')+'</ul></div>' +
  '</article>';
}).join('');


var rail = $('#rail');
CONFIG.projects.forEach(function(p,i){
  var wrap = document.createElement('div');
  wrap.className = 'hang';
  wrap.innerHTML =
    '<div class="swing"><div class="rope"></div>' +
    '<a class="card" href="'+esc(p.url)+'" draggable="false">' +
      '<div class="art">'+art(i)+'</div>' +
      '<div class="card-body"><h3>'+esc(p.title)+'</h3><p>'+esc(p.desc)+'</p>' +
      '<div class="foot"><span>'+esc(p.kind)+'</span><span>'+esc(p.year)+'</span></div></div>' +
    '</a></div>';
  rail.appendChild(wrap);
});

/* ---------- helpers ---------- */
function fit(cv, box){
  var r = box.getBoundingClientRect();
  var dpr = Math.min(2, window.devicePixelRatio || 1);
  var W = Math.max(1, Math.round(r.width)), H = Math.max(1, Math.round(r.height));
  cv.width = Math.round(W*dpr); cv.height = Math.round(H*dpr);
  return {W:W, H:H, dpr:dpr};
}
function localPos(e, cv){
  var r = cv.getBoundingClientRect();
  return {x:e.clientX - r.left, y:e.clientY - r.top};
}

/* =====================================================
   1. HERO – rigid bodies: gravity, collisions, friction
   ===================================================== */
function makeHero(){
  var box = $('#hero'), cv = $('#heroCanvas'), ctx = cv.getContext('2d');
  var glyphOff = {};
  if(document.fonts && document.fonts.ready){ document.fonts.ready.then(function(){ glyphOff = {}; }); }
  var letters = Array.from(CONFIG.name.replace(/\s+/g,''));
  var rowLens = CONFIG.name.split(/\s+/).filter(Boolean).map(function(w){ return Array.from(w).length; });
  var reelBtn = $('#reel') || document.createElement('button'), reel = false, stringA = 0;
  var W=0, H=0, dpr=1, bodies=[], mode='down', held=null, accum=0, accX=0, accY=0;
  var ptr = {x:0,y:0,vx:0,vy:0,on:false,mouse:true};
  var G=2200, E=0.5, STEP=1/120;
  var mod = {visible:true};

  function letterR(){ return clamp(Math.min(W/(letters.length+1)/2*1.25, H*0.12), 24, 60); }

  /* where each letter belongs: the name laid out in a tidy row (or one row per word on narrow screens) */
  function layout(){
    var r = letterR(), n = letters.length, pad = 12, out = [];
    var rows = (n*2*r <= W - pad*2) ? [n] : rowLens;
    rows.forEach(function(m, ri){
      var s = Math.min(2*r*1.04, (W - pad*2)/m);
      var y = H - r - (rows.length-1-ri)*2*r*1.04;
      for(var j=0;j<m;j++) out.push({x: W/2 + (j-(m-1)/2)*s, y: y});
    });
    return out;
  }

  function reelUi(){
    reelBtn.setAttribute('aria-label', reel ? 'Set the letters free' : 'Reel the letters back into my name');
  }

  /* drop=false: the name sits arranged on the ground (and the strings are taut). drop=true: letters rain in from above. */
  function spawnLetters(drop){
    bodies = bodies.filter(function(b){return b.extra;});
    var r = letterR(), n = letters.length, out = [], hs = layout();
    letters.forEach(function(ch,i){
      if(drop){
        var x = r*1.4 + (W-r*2.8)*((i+0.5)/n) + rand(-r*0.25, r*0.25);
        var y = reduce ? H - r : -r - i*r*1.7;
        out.push({x:x,y:y,vx:rand(-40,40),vy:0,r:r,m:r*r,ch:ch,i:i,
          a:reduce?0:rand(-0.8,0.8),av:reduce?0:rand(-2,2),entered:reduce,extra:false});
      } else {
        out.push({x:hs[i].x,y:hs[i].y,vx:0,vy:0,r:r,m:r*r,ch:ch,i:i,a:0,av:0,entered:true,extra:false});
      }
    });
    bodies = out.concat(bodies);
    reel = !drop; reelUi();
  }
  function spawnBall(x,y){
    var ex = bodies.filter(function(b){return b.extra;});
    if(ex.length >= 28){ bodies.splice(bodies.indexOf(ex[0]),1); }
    var r = rand(10,19);
    bodies.push({x:clamp(x,r,W-r),y:clamp(y,r,H-r),vx:rand(-200,200),vy:rand(-300,-60),r:r,m:r*r,ch:'',
      a:0,av:0,entered:true,extra:true});
  }

  function resize(){
    var f = fit(cv, box), first = (W===0);
    W=f.W; H=f.H; dpr=f.dpr;
    if(first){ spawnLetters(false); return; }
    var r = letterR();
    bodies.forEach(function(b){
      if(!b.extra){ b.r=r; b.m=r*r; }
      b.x = clamp(b.x, b.r, W-b.r);
      if(b.entered) b.y = Math.min(b.y, H-b.r);
    });
  }

  function step(dt){
    var gy = 0, drag = 0.05, homes = reel ? layout() : null;
    if(mode==='down') gy = G; else if(mode==='up') gy = -G; else if(mode==='float') drag = 0.25;
    var i, j, b;
    for(i=0;i<bodies.length;i++){
      b = bodies[i];
      var ax=0, ay=gy;
      if(mode==='pull'){
        var tx = ptr.on ? ptr.x : W/2, ty = ptr.on ? ptr.y : H/2;
        var dx = tx-b.x, dy = ty-b.y, d = Math.hypot(dx,dy)||1, k = Math.min(1, d/260);
        ax = dx/d*G*1.2*k; ay = dy/d*G*1.2*k; drag = 1.2;
      }
      if(reel){
        if(b.extra){ b.r *= Math.max(0, 1 - 7*dt); }          /* stray balls pop away */
        else if(homes[b.i]){                                    /* letters are reeled in along their strings */
          drag = 0.05;
          ax = 70*(homes[b.i].x - b.x) - 15*b.vx;
          ay = 70*(homes[b.i].y - b.y) - 15*b.vy;
        }
      }
      if(b===held){
        b.vx = (ptr.x + b.gx - b.x)*20; b.vy = (ptr.y + b.gy - b.y)*20;
      } else { b.vx += ax*dt; b.vy += ay*dt; }
      var sp = Math.hypot(b.vx,b.vy);
      if(sp > 2600){ b.vx *= 2600/sp; b.vy *= 2600/sp; }
      var dm = Math.max(0, 1 - drag*dt); b.vx *= dm; b.vy *= dm;
      b.x += b.vx*dt; b.y += b.vy*dt;
      /* spin: damped, with a restoring torque that rights the letters */
      b.a += b.av*dt;
      b.av *= (1 - Math.min(1, 3*dt));
      if(!b.extra) b.av += -16*Math.sin(b.a)*dt;
      if(b.y >= b.r) b.entered = true;

      /* walls */
      var floor = H-b.r, right = W-b.r;
      if(b.x < b.r){ b.x = b.r; if(b.vx<0) b.vx = -b.vx*E; }
      if(b.x > right){ b.x = right; if(b.vx>0) b.vx = -b.vx*E; }
      if(b.y > floor){
        b.y = floor;
        if(b.vy>0) b.vy = (b.vy<60) ? 0 : -b.vy*E;
        b.vx *= (1 - Math.min(1, 0.8*dt));
        b.av += (b.vx/b.r - b.av)*Math.min(1, 12*dt);   /* rolling */
      }
      if(b.entered && b.y < b.r){
        b.y = b.r;
        if(b.vy<0) b.vy = (b.vy>-60) ? 0 : -b.vy*E;
        b.vx *= (1 - Math.min(1, 0.8*dt));
        b.av += (-b.vx/b.r - b.av)*Math.min(1, 12*dt);
      }
    }
    if(reel){
      bodies = bodies.filter(function(b){ return !(b.extra && b.r < 1.5); });
      if(held && held.extra && held.r < 1.5) held = null;
    }
    /* circle–circle collisions with impulse response */
    for(var it=0; it<3; it++){
      for(i=0;i<bodies.length;i++){
        for(j=i+1;j<bodies.length;j++){
          var a = bodies[i], c = bodies[j];
          if(reel && (!a.extra || !c.extra)) continue;   /* reeled letters glide past each other */
          var dx2 = c.x-a.x, dy2 = c.y-a.y, rr = a.r+c.r, d2 = dx2*dx2+dy2*dy2;
          if(d2 >= rr*rr || d2 === 0) continue;
          var dd = Math.sqrt(d2), nx = dx2/dd, ny = dy2/dd, ov = rr-dd;
          var ia = (a===held)?0:1/a.m, ib = (c===held)?0:1/c.m, sum = (ia+ib)||1;
          a.x -= nx*ov*ia/sum; a.y -= ny*ov*ia/sum;
          c.x += nx*ov*ib/sum; c.y += ny*ov*ib/sum;
          var rvx = c.vx-a.vx, rvy = c.vy-a.vy, vn = rvx*nx + rvy*ny;
          if(vn < 0){
            var e = (-vn < 80) ? 0.05 : E;
            var jj = -(1+e)*vn/sum;
            a.vx -= jj*nx*ia; a.vy -= jj*ny*ia;
            c.vx += jj*nx*ib; c.vy += jj*ny*ib;
            if(it===0){
              var sp2 = (rvx*-ny + rvy*nx)*0.3;
              a.av += sp2/a.r*0.3; c.av += sp2/c.r*0.3;
            }
          }
        }
      }
    }
  }

  mod.update = function(dt){
    stringA += ((reel ? 1 : 0) - stringA)*Math.min(1, 9*dt);   /* strings fade in while reeling */
    var vx = accX/dt, vy = accY/dt; accX = accY = 0;
    ptr.vx = vx; ptr.vy = vy;
    if(ptr.on && ptr.mouse && !held && (vx||vy)){
      bodies.forEach(function(b){
        var d = Math.hypot(b.x-ptr.x, b.y-ptr.y);
        if(d < b.r+20){
          var f = 1 - Math.max(0, d-b.r)/20;
          b.vx += vx*0.2*f; b.vy += vy*0.2*f;
        }
      });
    }
    accum += dt; var n = 0;
    while(accum >= STEP && n < 6){ step(STEP); accum -= STEP; n++; }
    if(n === 6) accum = 0;
  };

  mod.draw = function(){
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,W,H);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    /* strings: each letter is tied to the ground, right below its place in the name */
    var homes = layout(), sagDir = reel ? 0 : (mode==='down' ? 1 : mode==='up' ? -1 : 0);
    ctx.lineWidth = 1.25; ctx.lineCap = 'round'; ctx.strokeStyle = theme.ink; ctx.globalAlpha = 0.22*stringA;
    bodies.forEach(function(b){
      if(b.extra || stringA < 0.01) return;
      var h = homes[b.i]; if(!h) return;
      var d = Math.hypot(b.x - h.x, b.y - H);
      if(d < 2 || Math.hypot(b.x - h.x, b.y - h.y) < 6) return;   /* resting at home: string stays hidden */
      var sag = Math.min(26, d*0.07)*sagDir;
      ctx.beginPath(); ctx.moveTo(h.x, H);
      ctx.quadraticCurveTo((h.x + b.x)/2, (H + b.y)/2 + sag, b.x, b.y);
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
    bodies.forEach(function(b){
      ctx.save();
      ctx.translate(b.x,b.y); ctx.rotate(b.a);
      ctx.beginPath(); ctx.arc(0,0,b.r,0,Math.PI*2);
      ctx.fillStyle = b.extra ? theme.ink : theme.blue; ctx.fill();
      if(b.ch){
        var st = CONFIG.mixedLetterFonts ? LS[(b.i||0) % LS.length] : LS[0];
        var fs = Math.round(b.r*st.s);
        ctx.fillStyle = '#ffffff';
        ctx.font = st.css.replace('{s}', fs);
        ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'center';
        var key = b.ch + '|' + fs + '|' + (b.i||0), off = glyphOff[key];
        if(!off){
          var m = ctx.measureText(b.ch);
          off = {x:(m.actualBoundingBoxLeft - m.actualBoundingBoxRight)/2,
                 y:(m.actualBoundingBoxAscent - m.actualBoundingBoxDescent)/2};
          glyphOff[key] = off;
        }
        ctx.fillText(b.ch, off.x, off.y);
      }
      ctx.restore();
    });
  };

  function hit(x,y){
    for(var i=bodies.length-1;i>=0;i--){
      var b = bodies[i];
      if(Math.hypot(b.x-x, b.y-y) <= b.r) return b;
    }
    return null;
  }
  function setPtr(e){
    var p = localPos(e, cv);
    accX += p.x - ptr.x; accY += p.y - ptr.y;
    ptr.x = p.x; ptr.y = p.y; ptr.mouse = (e.pointerType === 'mouse');
  }

  cv.addEventListener('pointerdown', function(e){
    var p = localPos(e, cv); ptr.x = p.x; ptr.y = p.y; ptr.on = true; ptr.mouse = (e.pointerType === 'mouse');
    var b = hit(p.x,p.y);
    if(b){
      held = b; b.gx = b.x - p.x; b.gy = b.y - p.y;
      try{ cv.setPointerCapture(e.pointerId); }catch(err){}
      cv.style.cursor = 'grabbing';
    } else if(!reel){ spawnBall(p.x,p.y); }
  });
  cv.addEventListener('pointermove', function(e){
    setPtr(e); ptr.on = true;
    if(!held) cv.style.cursor = hit(ptr.x,ptr.y) ? 'grab' : 'default';
  });
  function release(e){
    held = null; cv.style.cursor = 'default';
    if(e.pointerType !== 'mouse') ptr.on = false;
  }
  cv.addEventListener('pointerup', release);
  cv.addEventListener('pointercancel', release);
  cv.addEventListener('pointerleave', function(){ if(!held) ptr.on = false; });
  /* on touch screens, only block page scrolling when a finger lands on a body */
  cv.addEventListener('touchstart', function(e){
    var t = e.touches[0], p = localPos(t, cv);
    if(hit(p.x,p.y)) e.preventDefault();
  }, {passive:false});

  var seg = $('#seg');
  seg.addEventListener('click', function(e){
    var btn = e.target.closest('button'); if(!btn) return;
    setMode(btn.getAttribute('data-mode'));
  });
  function setReel(on){
    if(on === reel) return; reel = on;
    reelUi();
    if(on){
      if(reduce){
        bodies = bodies.filter(function(b){ return !b.extra; });
        var hs = layout();
        bodies.forEach(function(b){ var h = hs[b.i]; if(h){ b.x = h.x; b.y = h.y; b.vx = b.vy = 0; b.a = b.av = 0; } });
      }
    } else {
      bodies.forEach(function(b){ if(!b.extra){ b.vx += rand(-700,700); b.vy += rand(-1500,-600); b.av += rand(-6,6); } });
    }
  }
  reelBtn.addEventListener('click', function(){ setReel(!reel); });

  function setMode(m){
    setReel(false);
    mode = m;
    seg.querySelectorAll('button').forEach(function(b){
      b.setAttribute('aria-pressed', b.getAttribute('data-mode')===m ? 'true' : 'false');
    });
    if(m === 'float'){
      bodies.forEach(function(b){ b.vx += rand(-260,260); b.vy += rand(-260,260); });
    }
  }
  $('#again').addEventListener('click', function(){ setMode('down'); spawnLetters(true); });

  mod.box = box; mod.resize = resize;
  resize();
  return mod;
}

/* =====================================================
   2. WORK – pendulums hanging from a beam
   ===================================================== */
function makePendulums(){
  var K = 9, C = 0.5, MAXTH = 1.35;
  var list = Array.prototype.map.call(document.querySelectorAll('.hang'), function(el, i){
    var p = {el:el, swing:el.querySelector('.swing'), card:el.querySelector('.card'),
      th:0, w:0, drag:false, moved:0, sx:0, sy:0, was:false, last:0, started:false, idx:i};

    p.card.addEventListener('dragstart', function(e){ e.preventDefault(); });
    p.card.addEventListener('click', function(e){ if(p.was){ e.preventDefault(); p.was = false; } });
    p.card.addEventListener('pointerdown', function(e){
      p.drag = true; p.moved = 0; p.sx = e.clientX; p.sy = e.clientY; p.was = false;
      try{ p.card.setPointerCapture(e.pointerId); }catch(err){}
    });
    p.card.addEventListener('pointermove', function(e){
      if(p.drag){
        var r = p.el.getBoundingClientRect();
        var px = r.left + r.width/2, py = r.top;
        var target = clamp(Math.atan2(e.clientX - px, Math.max(40, e.clientY - py)), -MAXTH, MAXTH);
        p.th += (target - p.th)*0.45;
        p.moved = Math.max(p.moved, Math.hypot(e.clientX-p.sx, e.clientY-p.sy));
      } else if(e.pointerType === 'mouse'){
        p.w = clamp(p.w + e.movementX*0.0035, -4, 4);
      }
    });
    function up(){
      if(!p.drag) return;
      p.drag = false; p.was = p.moved > 6;
      setTimeout(function(){ p.was = false; }, 60);
    }
    p.card.addEventListener('pointerup', up);
    p.card.addEventListener('pointercancel', up);
    return p;
  });

  var mod = {visible:true, box:$('#rail')};
  var prevTh = list.map(function(){return 0;});

  /* a gentle sway when the cards first come into view */
  if(!reduce){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          var p = list.filter(function(q){return q.el===en.target;})[0];
          if(p && !p.started){
            p.started = true;
            setTimeout(function(){ p.w += (p.idx%2 ? 1 : -1)*(0.9 + Math.random()*0.35); }, p.idx*140);
          }
        }
      });
    }, {threshold:0.35});
    list.forEach(function(p){ io.observe(p.el); });
  }

  mod.update = function(dt){
    list.forEach(function(p, i){
      if(p.drag){
        var nw = (p.th - prevTh[i])/Math.max(dt,0.001);
        p.w = clamp(p.w*0.6 + nw*0.4, -12, 12);
      } else {
        p.w += (-K*Math.sin(p.th) - C*p.w)*dt;
        p.th += p.w*dt;
        p.th = clamp(p.th, -2.4, 2.4);
        if(Math.abs(p.th) < 0.0005 && Math.abs(p.w) < 0.001){ p.th = 0; p.w = 0; }
      }
      prevTh[i] = p.th;
    });
  };
  mod.draw = function(){
    list.forEach(function(p){
      if(Math.abs(p.th - p.last) > 0.00005 || (p.th === 0 && p.last !== 0)){
        p.swing.style.transform = 'rotate(' + p.th.toFixed(5) + 'rad)';
        p.last = p.th;
      }
    });
  };
  return mod;
}

/* =====================================================
   3. ORBIT – inverse-square gravity
   ===================================================== */
function makeOrbit(){
  var box = $('#skills'), cv = $('#orbitCanvas'), ctx = cv.getContext('2d');
  var W=0,H=0,dpr=1,cx=0,cy=0,GM=1,sunR=40,Rmax=200,planets=[];
  var ptr = {x:0,y:0,on:false,down:false};
  var mod = {visible:true, box:box};
  var tick = 0;
  var PAL = [
    {bg:'#ffffff', fg:'#2540ff'},
    {bg:'#d9deff', fg:'#14151c'},
    {bg:'#14151c', fg:'#ffffff'}
  ];

  function circ(p){
    var ang = Math.random()*Math.PI*2;
    var v = Math.sqrt(GM/p.a) * (1 - 0.14*Math.random());
    p.x = cx + Math.cos(ang)*p.a; p.y = cy + Math.sin(ang)*p.a;
    p.vx = -Math.sin(ang)*v; p.vy = Math.cos(ang)*v;
    p.trail = [];
  }
  function init(){
    var f = fit(cv, box); W=f.W; H=f.H; dpr=f.dpr;
    cx = W >= 900 ? W*0.67 : W*0.5; cy = H*0.57;
    var m = Math.min(W, H*0.9);
    sunR = clamp(m*0.075, 26, 54);
    Rmax = Math.min(Math.min(cx, W-cx), (H-cy)*1.0, cy*0.95) - 20;
    Rmax = Math.max(Rmax, sunR*3.2);
    var Rmin = sunR*2.4;
    GM = Math.pow(2*Math.PI/9, 2) * Math.pow(Rmax*0.6, 3);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.font = '600 13.5px ' + FONT;
    var n = CONFIG.skills.length;
    planets = CONFIG.skills.map(function(name,i){
      var w = ctx.measureText(name).width;
      var p = {name:name, r:Math.max(19, w/2+9), a:Rmin + (Rmax-Rmin)*(n>1 ? i/(n-1) : 0.5), col:PAL[i%PAL.length]};
      circ(p);
      return p;
    });
    if(reduce) draw();
  }

  function accel(p, out){
    var dx = cx - p.x, dy = cy - p.y;
    var s2 = sunR*0.6; s2 *= s2;
    var d2 = dx*dx + dy*dy + s2, inv = GM/(d2*Math.sqrt(d2));
    var ax = dx*inv, ay = dy*inv;
    if(ptr.on){
      var qx = ptr.x - p.x, qy = ptr.y - p.y;
      var q2 = qx*qx + qy*qy + 900, gm = GM*(ptr.down ? 1.6 : 0.35);
      var qi = gm/(q2*Math.sqrt(q2));
      ax += qx*qi; ay += qy*qi;
    }
    out[0] = ax; out[1] = ay;
  }

  var tmp = [0,0];
  mod.update = function(dt){
    if(reduce) return;
    var sub = Math.max(1, Math.ceil(dt*240)), h = dt/sub;
    for(var s=0; s<sub; s++){
      planets.forEach(function(p){
        accel(p, tmp);
        p.vx += tmp[0]*h; p.vy += tmp[1]*h;
        p.x += p.vx*h;    p.y += p.vy*h;
      });
    }
    tick++;
    planets.forEach(function(p){
      var d = Math.hypot(p.x-cx, p.y-cy);
      if(d < sunR*0.9 || d > Rmax*1.8 || !isFinite(d)) circ(p);
      else if(tick % 2 === 0){ p.trail.push(p.x, p.y); if(p.trail.length > 150) p.trail.splice(0,2); }
    });
  };

  function draw(){
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,W,H);
    /* gravity-well rings */
    ctx.lineWidth = 1;
    for(var k=1;k<=4;k++){
      ctx.beginPath(); ctx.arc(cx,cy,sunR + (Rmax-sunR)*k/4,0,Math.PI*2);
      ctx.strokeStyle = '#ffffff'; ctx.globalAlpha = 0.16; ctx.stroke();
    }
    ctx.globalAlpha = 1;
    /* trails */
    ctx.lineCap = 'round';
    planets.forEach(function(p){
      var t = p.trail, n = t.length/2;
      ctx.strokeStyle = p.col.bg; ctx.lineWidth = 2.5;
      for(var i=1;i<n;i++){
        ctx.globalAlpha = (i/n)*0.6;
        ctx.beginPath(); ctx.moveTo(t[(i-1)*2], t[(i-1)*2+1]); ctx.lineTo(t[i*2], t[i*2+1]); ctx.stroke();
      }
    });
    ctx.globalAlpha = 1;
    /* sun */
    ctx.beginPath(); ctx.arc(cx,cy,sunR,0,Math.PI*2); ctx.fillStyle = '#14151c'; ctx.fill();
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff'; ctx.font = '700 ' + Math.round(sunR*0.6) + 'px ' + FONT;
    ctx.fillText('Me', cx, cy + sunR*0.04);
    /* planets */
    ctx.font = '600 13.5px ' + FONT;
    planets.forEach(function(p){
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = p.col.bg; ctx.fill();
      ctx.fillStyle = p.col.fg; ctx.fillText(p.name, p.x, p.y + 0.5);
    });
    /* cursor mass */
    if(ptr.on){
      ctx.beginPath(); ctx.arc(ptr.x,ptr.y, ptr.down ? 16 : 9, 0, Math.PI*2);
      ctx.lineWidth = 2; ctx.strokeStyle = '#ffffff'; ctx.globalAlpha = 0.85; ctx.stroke(); ctx.globalAlpha = 1;
    }
  }
  mod.draw = draw;

  cv.addEventListener('pointermove', function(e){
    var p = localPos(e, cv); ptr.x = p.x; ptr.y = p.y;
    if(e.pointerType === 'mouse') ptr.on = true;
  });
  cv.addEventListener('pointerdown', function(e){
    var p = localPos(e, cv); ptr.x = p.x; ptr.y = p.y; ptr.on = true; ptr.down = true;
    try{ cv.setPointerCapture(e.pointerId); }catch(err){}
  });
  function up(e){ ptr.down = false; if(e.pointerType !== 'mouse') ptr.on = false; }
  cv.addEventListener('pointerup', up);
  cv.addEventListener('pointercancel', up);
  cv.addEventListener('pointerleave', function(){ if(!ptr.down) ptr.on = false; });

  mod.resize = init;
  init();
  return mod;
}

/* =====================================================
   5. EDUCATION – one knob on an elastic line
   ===================================================== */
function makeTimeline(){
  var list = $('#eduList');
  var items = Array.prototype.slice.call(list.querySelectorAll('.edu-item'));
  if(!items.length) return {visible:false, update:function(){}, draw:function(){}};
  var marks = items.map(function(el){ return el.querySelector('.edu-mark'); });
  var rail = items[0].querySelector('.edu-rail');
  list.insertAdjacentHTML('afterbegin',
    '<svg class="edu-svg" aria-hidden="true"><path class="edu-base"/><path class="edu-fill"/>' +
    '<g class="edu-knob"><circle class="edu-halo" r="13"/><circle class="edu-core" r="7"/></g></svg>');
  var svg = $('.edu-svg', list), base = $('.edu-base', svg), fill = $('.edu-fill', svg), knob = $('.edu-knob', svg);
  var touch = window.matchMedia('(hover: none)').matches;
  var gp = {x:0, y:0, has:false};
  window.addEventListener('pointermove', function(e){
    if(e.pointerType === 'touch') return;
    gp.x = e.clientX; gp.y = e.clientY; gp.has = true;
  }, {passive:true});
  var s = {y:null, vy:0, x:0, vx:0};
  var g = {X:0, y0:0, y1:0, h:0};
  var cur = -2, live = null, lastH = -1;
  var SIG = 80, STEP = 6, BEND = 18;
  var mod = {visible:true, box:list};

  function setActive(i){
    if(i === cur) return; cur = i;
    items.forEach(function(el,k){ el.classList.toggle('active', k === i); });
  }

  mod.update = function(dt){
    var lr = list.getBoundingClientRect();
    var rr = rail.getBoundingClientRect();
    g.X = rr.left - lr.left + rr.width/2;
    g.y0 = marks[0].getBoundingClientRect().top - lr.top;
    g.y1 = marks[marks.length-1].getBoundingClientRect().top - lr.top;
    g.h = lr.height;

    var px = touch ? lr.left + g.X : gp.x;
    var py = touch ? window.innerHeight*0.5 : gp.y;
    var inside = (touch || gp.has) && px >= lr.left && px <= lr.right && py >= lr.top && py <= lr.bottom;

    var ty = inside ? clamp(py - lr.top, g.y0, g.y1) : g.y0;
    var tx = (inside && !touch) ? clamp((px - (lr.left + g.X))*0.25, -BEND, BEND) : 0;
    if(s.y === null) s.y = ty;
    if(reduce){ s.y = ty; s.x = 0; }
    else {
      s.vy += (220*(ty - s.y) - 26*s.vy)*dt; s.y += s.vy*dt;
      s.vx += (150*(tx - s.x) - 9*s.vx)*dt;  s.x += s.vx*dt;
    }

    var act = -1;
    if(inside){
      for(var k=0;k<items.length;k++){
        var ir = items[k].getBoundingClientRect();
        if(py >= ir.top && py <= ir.bottom){ act = k; break; }
      }
    }
    setActive(act);
    if(live !== inside){ live = inside; svg.classList.toggle('live', inside); }
  };

  mod.draw = function(){
    if(g.h !== lastH){ svg.setAttribute('height', g.h); lastH = g.h; }
    var X = g.X, y0 = g.y0, y1 = g.y1, ky = clamp(s.y, y0, y1);
    var d = 'M' + X.toFixed(1) + ',' + y0.toFixed(1);
    var f = d;
    for(var y = y0 + STEP; y < y1; y += STEP){
      var off = s.x * Math.exp(-Math.pow((y - s.y)/SIG, 2));
      var seg = 'L' + (X + off).toFixed(1) + ',' + y.toFixed(1);
      d += seg;
      if(y < ky) f += seg;
    }
    d += 'L' + X.toFixed(1) + ',' + y1.toFixed(1);
    f += 'L' + (X + s.x).toFixed(1) + ',' + ky.toFixed(1);
    base.setAttribute('d', d);
    fill.setAttribute('d', f);
    knob.setAttribute('transform', 'translate(' + (X + s.x).toFixed(1) + ',' + ky.toFixed(1) + ')');
  };
  return mod;
}

/* =====================================================
   4. CONTACT – magnetic button on a damped spring
   ===================================================== */
function makeMagnet(){
  var wrap = $('#magWrap'), btn = $('#mag');
  var gp = {x:-9999,y:-9999};
  var s = {x:0,y:0,vx:0,vy:0};
  var mod = {visible:true, box:wrap};
  window.addEventListener('pointermove', function(e){ gp.x = e.clientX; gp.y = e.clientY; }, {passive:true});
  var K = 170, C = 11;
  mod.update = function(dt){
    var r = wrap.getBoundingClientRect();
    var cx = r.left + r.width/2, cy = r.top + r.height/2;
    var tx = 0, ty = 0;
    if(!reduce && gp.x > r.left && gp.x < r.right && gp.y > r.top && gp.y < r.bottom){
      tx = clamp((gp.x-cx)*0.4, -42, 42); ty = clamp((gp.y-cy)*0.4, -30, 30);
    }
    s.vx += (K*(tx-s.x) - C*s.vx)*dt; s.vy += (K*(ty-s.y) - C*s.vy)*dt;
    s.x += s.vx*dt; s.y += s.vy*dt;
    if(Math.abs(s.x)<0.01 && Math.abs(s.vx)<0.01 && tx===0){ s.x=0; s.vx=0; }
    if(Math.abs(s.y)<0.01 && Math.abs(s.vy)<0.01 && ty===0){ s.y=0; s.vy=0; }
  };
  mod.draw = function(){
    btn.style.transform = 'translate(' + s.x.toFixed(2) + 'px,' + s.y.toFixed(2) + 'px)';
  };

  var state = $('#copyState');
  $('#copyBtn').addEventListener('click', function(){
    function done(ok){ state.textContent = ok ? 'Copied.' : 'Could not copy. Select the address above instead.'; }
    try{
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(CONFIG.email).then(function(){done(true);}, function(){done(false);});
      } else { done(false); }
    }catch(err){ done(false); }
  });
  return mod;
}

/* =====================================================
   MENU – circular reveal overlay (links + gravity)
   ===================================================== */
function initMenu(){
  var burger = $('#burger'), menu = $('#menu'), closeBtn = $('#closeBtn');
  var isOpen = false;
  function focusables(){ return Array.prototype.slice.call(menu.querySelectorAll('a[href],button')); }
  function open(){
    if(isOpen) return; isOpen = true;
    var r = burger.getBoundingClientRect();
    menu.style.setProperty('--cx', (r.left + r.width/2) + 'px');
    menu.style.setProperty('--cy', (r.top + r.height/2) + 'px');
    menu.removeAttribute('inert');
    menu.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
    setTimeout(function(){ var f = focusables()[1] || closeBtn; f.focus({preventScroll:true}); }, 80);
  }
  function close(noFocus){
    if(!isOpen) return; isOpen = false;
    menu.classList.remove('open');
    menu.setAttribute('inert', '');
    burger.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    if(!noFocus) burger.focus({preventScroll:true});
  }
  burger.addEventListener('click', open);
  closeBtn.addEventListener('click', function(){ close(); });
  menu.addEventListener('click', function(e){
    if(e.target.closest('.menu-nav a')){ close(true); }
    else if(e.target.closest('#seg button') || e.target.closest('#again')){ setTimeout(function(){ close(); }, 260); }
  });
  document.addEventListener('keydown', function(e){
    if(!isOpen) return;
    if(e.key === 'Escape'){ close(); return; }
    if(e.key === 'Tab'){
      var f = focusables(), first = f[0], last = f[f.length-1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  });
}
initMenu();

/* ---------- handwritten notes: one per section ---------- */
(function(){
  var sq = '<svg viewBox="0 0 120 10" aria-hidden="true"><path pathLength="1" d="M2 6 C 14 0, 22 11, 34 6 S 54 0, 66 6 S 86 11, 98 6 S 114 3, 118 5"/></svg>';
  function mk(cls, n){ return '<div class="note '+cls+'" style="--n:0" aria-hidden="true"><b>'+esc(n.big)+'</b>'+sq+'<span>'+esc(n.small)+'</span></div>'; }
  var N = CONFIG.notes || {};
  if(N.hero) $('#notes').innerHTML = mk('nh', N.hero);
  var targets = [
    ['work','nw','#work .sec-head','afterbegin'],
    ['internship','ni','#internship .sec-head','afterbegin'],
    ['education','ne','#education .sec-head','afterbegin'],
    ['skills','ns','#skills','afterbegin'],
    ['contact','nc','#contact .wrap','beforeend']
  ];
  var els = [];
  targets.forEach(function(t){
    var host = $(t[2]); if(!N[t[0]] || !host) return;
    host.insertAdjacentHTML(t[3], mk(t[1] + ' rev', N[t[0]]));
    els.push(host.querySelector('.note.rev'));
  });
  if(reduce || !('IntersectionObserver' in window)){ els.forEach(function(e){ e.classList.add('show'); }); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('show'); io.unobserve(en.target); } });
  }, {threshold:0.6});
  els.forEach(function(e){ io.observe(e); });
})();

/* ---------- arrow that points at the “I” ---------- */
function initPsst(){
  var hero = $('#hero'), btn = $('#reel'), el = $('#psst');
  if(!btn || !el){ if(el) el.style.display = 'none'; return; }
  var svg = el.querySelector('.psst-a'), ap = el.querySelector('.ap'), ah = el.querySelector('.ah');
  function place(){
    var hr = hero.getBoundingClientRect(), br = btn.getBoundingClientRect();
    var fs = parseFloat(getComputedStyle(btn).fontSize) || 48;
    var wide = hr.width >= 900;
    var tx = br.left - hr.left + fs*0.2 - (wide ? 22 : 10);      /* arrow tip: just left of the "I" */
    var ty = br.top - hr.top + br.height*0.55;
    var dy = wide ? 46 : 58;
    /* desktop: park the note out in the empty space on the left and let a longer arrow swoop across to the "I" */
    var sx = wide ? clamp(tx - 300, 24, tx - 120) : Math.max(6, tx - 70);
    var dx = Math.max(40, tx - sx), sy = ty - dy;
    /* arrow: a loose curve from the note to the "I", with an arrowhead angled to match the end of the curve */
    var c2x = dx*0.35, c2y = dy + 10, vx = dx - c2x, vy = dy - c2y, L = Math.hypot(vx, vy) || 1, ux = vx/L, uy = vy/L;
    function wing(a){ var bx = -ux*15, by = -uy*15, c = Math.cos(a), s = Math.sin(a);
      return (dx + bx*c - by*s).toFixed(1) + ' ' + (dy + bx*s + by*c).toFixed(1); }
    ap.setAttribute('d', 'M8 4 C 6 ' + (dy*0.85).toFixed(1) + ', ' + c2x.toFixed(1) + ' ' + c2y.toFixed(1) + ', ' + dx.toFixed(1) + ' ' + dy.toFixed(1));
    ah.setAttribute('d', 'M' + wing(0.52) + ' L' + dx.toFixed(1) + ' ' + dy.toFixed(1) + ' L' + wing(-0.52));
    svg.setAttribute('viewBox', '0 0 ' + Math.ceil(dx + 12) + ' ' + (dy + 22));
    svg.style.width = Math.ceil(dx + 12) + 'px'; svg.style.height = (dy + 22) + 'px';
    el.style.left = sx + 'px'; el.style.top = sy + 'px';
    el.style.setProperty('--tx', '0px');
    el.classList.add('on');
  }
  place();
  var t; window.addEventListener('resize', function(){ clearTimeout(t); t = setTimeout(place, 150); });
  setTimeout(place, 400);
  btn.addEventListener('click', function(){ el.classList.add('gone'); });
  return place;
}

/* =====================================================
   main loop – one rAF, modules pause when off-screen
   ===================================================== */
var fontReady = Promise.race([
  (document.fonts && document.fonts.load ? Promise.all([
    document.fonts.load('800 40px "Archivo"'), document.fonts.load('600 14px "Archivo"'),
    document.fonts.load('italic 400 40px "Instrument Serif"'), document.fonts.load('400 40px "DM Serif Display"'),
    document.fonts.load('700 40px "Caveat"')
  ]) : Promise.resolve()).catch(function(){}),
  new Promise(function(r){ setTimeout(r, 1500); })
]);

var placePsst;
fontReady.then(function(){
  placePsst = initPsst();
  var mods = [makeHero(), makePendulums(), makeOrbit(), makeMagnet(), makeTimeline()];

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      mods.forEach(function(m){ if(m.box === en.target) m.visible = en.isIntersecting; });
    });
  }, {rootMargin:'120px'});
  mods.forEach(function(m){ m.visible = false; if(m.box) io.observe(m.box); });

  var rt;
  window.addEventListener('resize', function(){
    clearTimeout(rt);
    rt = setTimeout(function(){ mods.forEach(function(m){ if(m.resize) m.resize(); }); }, 120);
  });

  var last = performance.now();
  function frame(now){
    var dt = Math.min(0.05, Math.max(0.001, (now-last)/1000)); last = now;
    for(var i=0;i<mods.length;i++){
      var m = mods[i];
      if(!m.visible) continue;
      m.update(dt); m.draw();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
});

})();

