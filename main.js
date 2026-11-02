const $ = (s, el = document) => el.querySelector(s);
const esc = (s = "") => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const real = PROJECTS.filter((p) => !p.placeholder);
const pad = (n) => String(n).padStart(2, "0");

/* Sudo, the brand mascot, drawn in SVG so it can blink and wave. */
function sudo({ wave = true, sign = "" } = {}) {
  const s = "var(--fg)"; // limbs follow the theme; face and outline stay ink
  return `<svg class="sudo" viewBox="0 0 220 240" aria-hidden="true" fill="none" stroke="${s}" stroke-width="7" stroke-linecap="round">
    <path d="M44 120 C26 140 22 170 26 190" /><circle cx="26" cy="194" r="9" fill="${s}" />
    <g class="${wave ? "wave" : ""}"><path d="M176 112 C196 96 204 70 200 50" /><circle cx="200" cy="44" r="9" fill="${s}" /></g>
    <path d="M86 196 V226 M134 196 V226" /><path d="M72 230 h20 M128 230 h20" stroke-width="11" />
    <rect x="40" y="56" width="140" height="142" rx="18" fill="#2454FF" stroke="#111" />
    <g class="eyes" fill="#111" stroke="none"><ellipse cx="90" cy="116" rx="8" ry="13" /><ellipse cx="130" cy="116" rx="8" ry="13" /></g>
    <path d="M96 146 q14 12 28 0" stroke="#111" stroke-width="6" />
    ${sign ? `<rect x="58" y="6" width="104" height="40" rx="8" fill="var(--card)" /><text x="110" y="33" text-anchor="middle" font-family="Space Grotesk, Arial" font-weight="700" font-size="17" fill="var(--fg)" stroke="none">${esc(sign)}</text>` : ""}
  </svg>`;
}

function chrome(active) {
  const links = [["index.html#work", "Work"], ["index.html#experience", "Experience"], ["index.html#insights", "Insights"], ["index.html#about", "About"], ["index.html#skills", "Skills"], ["projects.html", "All projects"], ["index.html#contact", "Contact"]];
  const nav = document.createElement("header");
  nav.className = "nav";
  nav.innerHTML = `<div class="wrap">
    <a class="logo" href="index.html">${esc(SITE.name.split(" ")[0].toLowerCase())}<i></i></a>
    <ul id="menu">${links.map(([h, t]) => `<li><a href="${h}" class="${t === active ? "active" : ""}">${t}</a></li>`).join("")}</ul>
    <div class="nav-r">
      <button class="icon-btn" id="theme" aria-label="Toggle theme">◐</button>
      <button class="icon-btn menu-btn" id="menuBtn" aria-label="Menu">☰</button>
    </div></div>`;
  document.body.prepend(nav);
  $("#menuBtn").onclick = () => $("#menu").classList.toggle("open");
  $("#menu").onclick = (e) => e.target.tagName === "A" && $("#menu").classList.remove("open");
  $("#theme").onclick = () => {
    const dark = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim() !== "#f8f7f3";
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  };

  const socials = Object.entries(SITE.socials).filter(([, u]) => u);
  const foot = document.createElement("footer");
  foot.innerHTML = `<div class="wrap">
    <div><b class="logo" style="margin-bottom:8px">${esc(SITE.name)}<i></i></b>Code. Create. Grow. · ${esc(SITE.location)}</div>
    <nav>${links.slice(0, 6).map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}${socials.map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${k}</a>`).join("")}</nav>
    <div>© ${new Date().getFullYear()} ${esc(SITE.name)}</div></div>`;
  document.body.append(foot);
}
try { const t = localStorage.getItem("theme"); if (t) document.documentElement.dataset.theme = t; } catch {}

function card(p, i, total) {
  const thumb = p.cover ? `<img src="${p.cover}" alt="" loading="lazy">` : `<div class="draft">${sudo({ wave: false }).replace("<svg", '<svg style="width:90px"')}</div>`;
  return `<a class="card reveal" href="project.html?id=${p.id}">
    <div class="thumb">${thumb}</div>
    <div class="body">
      <div class="meta"><span class="num">${pad(i + 1)} / ${pad(total)}</span><span class="tag ${p.category === "Development" ? "dev" : ""}">${p.category}${p.placeholder ? " · Draft" : ""}</span></div>
      <h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><span class="more">Learn more</span>
    </div></a>`;
}

function reveal() {
  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
}

/* lightbox for image groups */
let lbList = [], lbIdx = 0;
function lightbox(list, i) {
  lbList = list; lbIdx = i;
  let lb = $(".lb");
  if (!lb) {
    lb = document.createElement("div");
    lb.className = "lb";
    lb.innerHTML = `<img alt=""><button class="icon-btn" data-a="x" aria-label="Close">✕</button><button class="icon-btn lb-nav prev" data-a="-1" aria-label="Previous">←</button><button class="icon-btn lb-nav" data-a="1" aria-label="Next">→</button>`;
    document.body.append(lb);
    lb.onclick = (e) => {
      const a = e.target.dataset.a;
      if (a === "x" || e.target === lb) return lb.classList.remove("open");
      if (a) show(lbIdx + +a);
    };
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") lb.classList.remove("open");
      if (e.key === "ArrowRight") show(lbIdx + 1);
      if (e.key === "ArrowLeft") show(lbIdx - 1);
    });
  }
  const show = (n) => { lbIdx = (n + lbList.length) % lbList.length; $("img", lb).src = lbList[lbIdx]; };
  window.__lbShow = show;
  show(i);
  lb.classList.add("open");
}

/* ---------------- pages ---------------- */
function home() {
  chrome();
  const r = SITE.roles;
  $("#hero").innerHTML = `<div class="wrap hero-grid">
    <div><p class="eyebrow">Hi, I'm ${esc(SITE.name)}</p>
      <h1><span>${esc(r[0])}</span><span>${esc(r[1])}</span><span>${esc(r[2])}</span></h1>
      <p>${esc(SITE.tagline)}</p>
      <div class="cta"><a class="btn primary" href="#work">See my work</a><a class="btn" href="#contact">Get in touch</a></div>
    </div>
    <div class="hero-art"><div class="grid-bg"></div>${sudo({ sign: "hi!" })}
      <span class="chip" style="top:14%;left:0">Code<b>.</b></span>
      <span class="chip" style="top:46%;right:0;animation-delay:.6s">Create<b>.</b></span>
      <span class="chip" style="bottom:12%;left:8%;animation-delay:1.2s">Grow<b>.</b></span>
    </div></div>
    <div class="wrap scroll-cue">Scroll down</div>`;

  const words = ["HTML", "CSS", "React", "Node.js", "Shopify", "Amazon Seller Central", "Amazon PPC", "Social media"];
  $("#marquee").innerHTML = `<div>${[...words, ...words].map((w) => `<span>${w}</span>`).join("")}</div>`;

  const featured = real.slice(0, 4);
  $("#featured").innerHTML = featured.map((p, i) => card(p, i, featured.length)).join("");

  // experience tabs
  const tabs = $("#expTabs"), panel = $("#expPanel");
  tabs.innerHTML = EXPERIENCE.map((e, i) => `<button class="${i ? "" : "on"}" data-i="${i}">${pad(i + 1)} · ${esc(e.org)}<small>${esc(e.dates)}</small></button>`).join("");
  const showExp = (i) => {
    const e = EXPERIENCE[i];
    panel.innerHTML = `<h3>${esc(e.role)} <span class="dot">@</span> ${esc(e.org)}</h3><p class="dates">${esc(e.dates)}${e.placeholder ? " · Draft" : ""}</p>
      <ul>${e.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul><div class="tags">${e.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
    tabs.querySelectorAll("button").forEach((b) => b.classList.toggle("on", +b.dataset.i === i));
  };
  tabs.onclick = (e) => { const b = e.target.closest("button"); if (b) showExp(+b.dataset.i); };
  showExp(0);

  // insights: carousel posts
  const covers = CAROUSELS.map(([f]) => `assets/carousels/${f}-slide-01.jpg`);
  $("#posts").innerHTML = CAROUSELS.slice(0, 8).map(([f, t], i) => `<button class="post reveal" data-i="${i}"><img src="${covers[i]}" alt="" loading="lazy"><div>${esc(t)}<small>Carousel · ${pad(i)}</small></div></button>`).join("");
  $("#posts").onclick = (e) => { const b = e.target.closest(".post"); if (b) lightbox(covers, +b.dataset.i); };

  // about
  const a = SITE.about;
  $("#aboutText").innerHTML = `<p class="eyebrow">About me</p><h2>${esc(a.headline)}</h2>${a.bio.map((p) => `<p>${esc(p)}</p>`).join("")}
    <div class="traits">${a.traits.map((t) => `<div class="trait"><b>${esc(t.title)}</b><span>${esc(t.text)}</span></div>`).join("")}</div>
    <div class="cta" style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn primary" href="#contact">Contact me</a>${SITE.socials.github ? `<a class="btn" href="${esc(SITE.socials.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}${SITE.socials.linkedin ? `<a class="btn" href="${esc(SITE.socials.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>` : ""}</div>`;

  // skills
  $("#skills-grid").innerHTML = Object.entries(SKILLS).map(([k, v]) => `<div class="skill reveal"><h3>${esc(k)} <small>${v.length}</small></h3><ul>${v.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`).join("");

  // contact (mailto, no backend needed)
  $("#contactInfo").innerHTML = `<div class="line"><span>Email</span><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></div><div class="line"><span>Based in</span>${esc(SITE.location)}</div>`;
  $("#contactForm").onsubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get("message")}\n\n${f.get("name")} (${f.get("email")})`;
    location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(f.get("subject") || "Hello")}&body=${encodeURIComponent(body)}`;
  };
  reveal();
}

function projectsPage() {
  chrome("All projects");
  const grid = $("#all"), filters = $("#filters");
  const cats = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  filters.innerHTML = cats.map((c, i) => `<button class="${i ? "" : "on"}">${c}</button>`).join("");
  const render = (c) => {
    const list = PROJECTS.filter((p) => c === "All" || p.category === c);
    grid.innerHTML = list.map((p, i) => card(p, i, list.length)).join("");
    reveal();
  };
  filters.onclick = (e) => {
    if (e.target.tagName !== "BUTTON") return;
    filters.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b === e.target));
    render(e.target.textContent);
  };
  render("All");
}

function projectPage() {
  chrome("All projects");
  const id = new URLSearchParams(location.search).get("id");
  const i = Math.max(0, PROJECTS.findIndex((p) => p.id === id));
  const p = PROJECTS[i];
  document.title = `${p.title} · ${SITE.name}`;

  let gallery = p.gallery;
  if (gallery === "CAROUSELS") gallery = CAROUSELS.map(([f, t]) => ({ type: "img", src: `assets/carousels/${f}-slide-01.jpg`, caption: t }));
  const imgs = gallery.filter((g) => g.type === "img").map((g) => g.src);

  const block = (title, html) => (html ? `<div class="p-block reveal p-body" style="padding:0"><h2>${title}</h2><div>${html}</div></div>` : "");
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length], next = PROJECTS[(i + 1) % PROJECTS.length];

  $("#project").innerHTML = `<div class="wrap">
    <section class="p-hero"><a class="back" href="projects.html">← All projects</a>
      <p class="eyebrow">${esc(p.category)} · ${pad(i + 1)} / ${pad(PROJECTS.length)}</p>
      <h1>${esc(p.title)}<span class="dot">.</span></h1><p class="lead">${esc(p.summary)}</p>
      ${p.link ? `<a class="btn primary" style="margin-top:24px" href="${esc(p.link)}" target="_blank" rel="noopener">Visit live site ↗</a>` : ""}
      <div class="p-meta"><div><b>Role</b>${esc(p.role)}</div>${p.year ? `<div><b>Year</b>${esc(p.year)}</div>` : ""}<div><b>Tools</b>${p.tools.map(esc).join(", ")}</div><div><b>Type</b>${esc(p.category)}</div></div>
      ${p.cover ? `<div class="p-cover reveal"><img src="${p.cover}" alt=""></div>` : ""}
    </section>
    ${p.placeholder ? `<div class="notice">This is a draft slot. Add the project's details to <code>data.js</code> (copy a marketing entry as a template) and set <code>placeholder: false</code>.</div>` : `
    <div style="padding-top:40px">
      ${block("Overview", `<p>${esc(p.overview)}</p>`)}
      ${block("The challenge", p.challenge && `<p>${esc(p.challenge)}</p>`)}
      ${block("What I did", p.approach.length && `<ol>${p.approach.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>`)}
      ${block("Deliverables", p.deliverables.length && `<div class="tags">${p.deliverables.map((x) => `<span>${esc(x)}</span>`).join("")}</div>`)}
      ${block("Outcome", p.outcome && `<p>${esc(p.outcome)}</p>`)}
    </div>
    <h2 style="font-size:clamp(30px,5vw,48px);margin:30px 0 30px">Gallery<span class="dot">.</span></h2>
    <div class="gallery">${gallery.map((g) => `<figure class="reveal">${g.type === "video"
      ? `<video src="${g.src}" poster="${g.poster || ""}" controls playsinline preload="none"></video>`
      : `<img src="${g.src}" alt="${esc(g.caption)}" loading="lazy" data-i="${imgs.indexOf(g.src)}">`}<figcaption>${esc(g.caption)}</figcaption></figure>`).join("")}</div>`}
    <div class="p-next"><a href="project.html?id=${prev.id}"><small>← Previous</small><b>${esc(prev.title)}</b></a><a href="project.html?id=${next.id}"><small>Next →</small><b>${esc(next.title)}</b></a></div>
  </div>`;
  $(".gallery")?.addEventListener("click", (e) => { if (e.target.tagName === "IMG") lightbox(imgs, +e.target.dataset.i); });
  scrollTo(0, 0);
  reveal();
}
