/* ---------- AMBIENT ---------- */
for (let i = 0; i < 120; i++) {
  const c = document.createElement("div");
  c.className = "confetti";
  c.style.left = Math.random() * 100 + "vw";
  c.style.animationDuration = 3 + Math.random() * 4 + "s";
  c.style.background = `hsl(${40 + Math.random()*20},100%,60%)`;
  document.body.appendChild(c);
}

for (let i = 0; i < 25; i++) {
  const b = document.createElement("div");
  b.className = "bubble";
  b.style.left = Math.random() * 100 + "vw";
  const size = 20 + Math.random() * 40;
  b.style.width = b.style.height = size + "px";
  b.style.animationDuration = 10 + Math.random() * 10 + "s";
  document.body.appendChild(b);
}

/* ---------- FLOW ---------- */
function nextCard(n) {
  document.getElementById(`card${n}`).classList.add("hidden");
  document.getElementById(`card${n+1}`).classList.remove("hidden");
}

/* ---------- SEQUENCE ---------- */
function startSequence() {
  document.getElementById("card3").classList.add("hidden");
  document.getElementById("celebration").classList.remove("hidden");

  const gift = document.getElementById("gift-box");
  setTimeout(() => {
    gift.remove();
    explodeAndMorph();
  }, 1500);
}

function explodeAndMorph() {
  const stage = document.getElementById("stage");
  const pieces = [];

  for (let i = 0; i < 180; i++) {
    const p = document.createElement("div");
    p.className = "piece";
    p.style.width = p.style.height = 8 + Math.random()*6 + "px";
    p.style.background = `hsl(${Math.random()*360},80%,65%)`;
    p.style.left = "150px";
    p.style.top = "140px";
    p.style.setProperty("--fx", `${Math.random()*500-250}px`);
    p.style.setProperty("--fy", `${Math.random()*500-250}px`);
    stage.appendChild(p);
    pieces.push(p);
  }

  setTimeout(() => {
    pieces.forEach(p => p.remove());
    buildCake(stage);
  }, 4200);
}

function buildCake(stage) {
  ["layer1","layer2","layer3"].forEach(cls => {
    const layer = document.createElement("div");
    layer.className = `cake-layer ${cls}`;
    stage.appendChild(layer);
  });

  const candle = document.createElement("div");
  candle.className = "candle";
  candle.innerHTML = `<div class="flame"></div>`;
  stage.appendChild(candle);

  setTimeout(() => {
    document.getElementById("banner").classList.remove("hidden");
    fireworks();
  }, 1500);
}

/* ---------- FIREWORKS ---------- */
function fireworks() {
  for (let f = 0; f < 8; f++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 0.4;

    for (let i = 0; i < 35; i++) {
      const fw = document.createElement("div");
      fw.className = "firework";
      fw.style.left = x + "px";
      fw.style.top = y + "px";
      fw.style.background = `hsl(${40 + Math.random()*20},100%,55%)`;
      fw.style.setProperty("--dx", `${Math.random()*260-130}px`);
      fw.style.setProperty("--dy", `${Math.random()*260-130}px`);
      document.body.appendChild(fw);
      setTimeout(() => fw.remove(), 1600);
    }
  }
}
