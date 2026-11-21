// The English copy lives in index.html so the page is readable before scripts load.
const chinese = {
  "page.title": "万智翔 | 气候与行星科学",
  "page.description": "万智翔的学术主页，介绍地球与火星气候模拟、行星大气和系外行星透射光谱研究，以及学术背景和联系方式。",
  "nav.skip": "跳到正文",
  "brand.aria": "万智翔，回到页首",
  "nav.aria": "主导航",
  "nav.mobileAria": "手机导航",
  "language.aria": "选择语言",
  "nav.about": "学术背景",
  "nav.research": "研究方向",
  "nav.projects": "科研项目",
  "nav.contact": "联系",
  "hero.eyebrow": "气候与行星科学",
  "hero.title": "万智翔",
  "hero.nameAlt": "Zhixiang Wan · Gary Won",
  "hero.lede": "我用气候模型研究地球和火星的大气，也研究系外行星的透射光谱。",
  "hero.primary": "研究方向",
  "hero.secondary": "学术背景",
  "hero.visualLabel": "地球大气边缘与一弯新月",
  "hero.imageAlt": "蓝色的地球大气边缘上方悬着一弯月牙。",
  "hero.credit": "NASA · 国际空间站第 66 次远征",
  "hero.source": "NASA 原图 ISS066-E-86970",
  "about.university": "北京大学",
  "about.department": "物理学院 · 大气与海洋科学系",
  "about.education": "我于 2022 年开始攻读博士学位。",
  "about.group": "胡永云课题组",
  "about.groupUrl": "https://faculty.pku.edu.cn/yyhu/zh_CN/zdylm/24892/list/index.htm",
  "research.earth.tag": "地球",
  "research.earth.title": "重力与能量收支",
  "research.earth.body": "我比较气候模拟中的温度和大气顶能量收支，研究重力和辐射过程怎样影响地球气候。",
  "research.mars.tag": "火星",
  "research.mars.title": "沙尘与水冰",
  "research.mars.body": "我模拟水汽和沙尘在火星大气中的输运，也研究沙尘和水冰云对辐射传输的影响。",
  "research.model.tag": "气候模型",
  "research.model.title": "火星大气环流",
  "research.model.body": "我梳理火星全球环流模型中的物理过程，并用模拟结果分析大气的变化。",
  "research.jwst.tag": "系外行星",
  "research.jwst.title": "透射光谱",
  "research.jwst.body": "我关注噪声、仪器校准和观测策略，研究这些因素怎样影响从透射光谱反演行星大气性质的结果。",
  "projects.title": "科研项目",
  "projects.earth": "地球气候模型实验与多年模拟结果分析",
  "projects.mars": "火星大气中的沙尘、水冰云和辐射传输",
  "projects.manuscript": "火星全球气候模型说明与论文写作",
  "projects.jwstName": "JWST 透射光谱",
  "projects.jwst": "系外行星透射光谱与观测设计",
  "projects.modeling": "数值模拟",
  "projects.manuscriptType": "论文写作",
  "projects.spectroscopy": "光谱研究",
  "abstract.label": "会议摘要",
  "abstract.venue": "2026 年欧洲地球科学联盟大会",
  "contact.body": "关于研究中的问题或合作想法，欢迎给我写信。",
  "footer.back": "回到页首 ↑",
};

const root = document.documentElement;
const menu = document.getElementById("mobile-menu");
const toggle = document.querySelector(".menu-toggle");
const buttons = document.querySelectorAll("[data-language-button]");
const localeKey = "homepage-language";
const labels = {
  en: { open: "Open menu", close: "Close menu" },
  zh: { open: "打开菜单", close: "收起菜单" },
};

// Capture the fallback once. Toggling either way always uses the original text or attribute.
const fields = Array.from(document.querySelectorAll("[data-i18n], [data-i18n-aria], [data-i18n-attr]"), element => {
  const { i18n, i18nAria, i18nAttr } = element.dataset;
  const [attribute, key] = i18nAttr ? i18nAttr.split(":") : [i18nAria ? "aria-label" : null, i18nAria || i18n];
  const english = attribute ? element.getAttribute(attribute) : element.textContent.trim();
  return { element, attribute, key, english };
});

function setMenu(open) {
  menu.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", labels[root.dataset.language][open ? "close" : "open"]);
}

function setLanguage(language) {
  root.dataset.language = language;
  root.lang = language === "zh" ? "zh-CN" : "en";
  for (const { element, attribute, key, english } of fields) {
    const value = language === "zh" ? chinese[key] : english;
    if (attribute) element.setAttribute(attribute, value);
    else element.textContent = value;
  }
  for (const button of buttons) {
    const selected = button.dataset.languageButton === language;
    button.setAttribute("aria-pressed", String(selected));
    button.classList.toggle("is-active", selected);
  }
  setMenu(!menu.hidden);
}

let language = /^zh(?:-|$)/i.test(navigator.language) ? "zh" : "en";
try {
  const saved = localStorage.getItem(localeKey);
  if (saved === "zh" || saved === "en") language = saved;
} catch { /* The switch also works when browser storage is disabled. */ }
setLanguage(language);

for (const button of buttons) {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageButton);
    try { localStorage.setItem(localeKey, root.dataset.language); } catch { /* Session only. */ }
  });
}
toggle.addEventListener("click", () => setMenu(menu.hidden));
menu.addEventListener("click", event => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !menu.hidden) {
    setMenu(false);
    toggle.focus();
  }
});
window.matchMedia("(max-width: 720px)").addEventListener("change", () => setMenu(false));
document.getElementById("current-year").textContent = new Date().getFullYear();
