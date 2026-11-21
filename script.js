// The English copy lives in index.html so the page is readable before scripts load.
const chinese = {
  "page.title": "万智翔 | 气候与行星科学",
  "page.description": "万智翔的学术主页，介绍地球与火星气候模拟、行星大气和系外行星透射光谱研究，以及学术背景和联系方式。",
  "nav.skip": "跳到正文",
  "brand.aria": "万智翔，回到页首",
  "nav.aria": "主导航",
  "nav.mobileAria": "手机导航",
  "language.aria": "选择语言",
  "nav.about": "关于我",
  "nav.research": "研究方向",
  "nav.publications": "成果",
  "nav.contact": "联系",
  "profile.aria": "个人信息",
  "profile.role": "博士研究生",
  "links.email": "电子邮件",
  "links.group": "课题组主页",
  "hero.eyebrow": "气候与行星科学",
  "hero.title": "万智翔",
  "hero.nameAlt": "Zhixiang Wan · Gary Won",
  "hero.primary": "研究方向",
  "hero.email": "联系我",
  "hero.imageAlt": "蓝色的地球大气边缘上方悬着一弯月牙。",
  "hero.credit": "NASA 原图 ISS066-E-86970",
  "about.title": "关于我",
  "about.p1": "我是北京大学物理学院大气与海洋科学系的博士研究生，2022 年开始读博，是胡永云课题组成员。",
  "about.p2": "我用气候模型研究地球和火星的大气。地球方面，我关注重力和辐射过程怎样影响温度和大气顶能量收支；火星方面，我模拟沙尘和水汽的输运，研究沙尘和水冰云怎样改变辐射在大气中的传输。我也研究系外行星的透射光谱，关注噪声、仪器校准和观测策略怎样限制我们对行星大气的认识。",
  "about.university": "北京大学",
  "about.department": "物理学院 · 大气与海洋科学系",
  "about.groupUrl": "https://faculty.pku.edu.cn/yyhu/zh_CN/zdylm/24892/list/index.htm",
  "education.title": "教育经历",
  "education.phd": "博士研究生 · 大气与海洋科学",
  "education.phdYears": "2022 年至今",
  "interests.title": "研究兴趣",
  "interests.earth": "地球气候模拟",
  "interests.mars": "火星大气",
  "interests.planetary": "行星大气",
  "interests.radiation": "辐射传输",
  "interests.clouds": "云与沙尘",
  "interests.exoplanets": "系外行星光谱",
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
  "pubs.title": "论文与报告",
  "abstract.label": "会议摘要",
  "abstract.venue": "2026 年欧洲地球科学联盟大会（EGU），会议摘要",
  "contact.body": "关于研究中的问题或合作想法，欢迎给我写信。",
  "footer.back": "回到页首 ↑",
};

const root = document.documentElement;
const menu = document.getElementById("mobile-menu");
const toggle = document.querySelector(".menu-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const buttons = document.querySelectorAll("[data-language-button]");
const localeKey = "homepage-language";
const themeKey = "homepage-theme";
const labels = {
  en: { open: "Open menu", close: "Close menu", dark: "Switch to dark mode", light: "Switch to light mode" },
  zh: { open: "打开菜单", close: "收起菜单", dark: "切换到深色模式", light: "切换到浅色模式" },
};

// Capture the English fallback once. An element may carry text, aria-label and one other attribute.
const fields = [];
for (const element of document.querySelectorAll("[data-i18n], [data-i18n-aria], [data-i18n-attr]")) {
  const { i18n, i18nAria, i18nAttr } = element.dataset;
  if (i18n) fields.push({ element, attribute: null, key: i18n, english: element.textContent.trim() });
  if (i18nAria) fields.push({ element, attribute: "aria-label", key: i18nAria, english: element.getAttribute("aria-label") });
  if (i18nAttr) {
    const [attribute, key] = i18nAttr.split(":");
    fields.push({ element, attribute, key, english: element.getAttribute(attribute) });
  }
}

function text(name) {
  return labels[root.dataset.language === "zh" ? "zh" : "en"][name];
}

function setMenu(open) {
  menu.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", text(open ? "close" : "open"));
}

function setTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", text(theme === "dark" ? "light" : "dark"));
  themeColor.setAttribute("content", theme === "dark" ? "#0f1719" : "#f5f3ee");
}

function setLanguage(language) {
  root.dataset.language = language;
  root.lang = language === "zh" ? "zh-CN" : "en";
  for (const { element, attribute, key, english } of fields) {
    const value = language === "zh" && key in chinese ? chinese[key] : english;
    if (attribute) element.setAttribute(attribute, value);
    else element.textContent = value;
  }
  for (const button of buttons) {
    const selected = button.dataset.languageButton === language;
    button.setAttribute("aria-pressed", String(selected));
    button.classList.toggle("is-active", selected);
  }
  setMenu(!menu.hidden);
  setTheme(root.dataset.theme);
}

let language = /^zh(?:-|$)/i.test(navigator.language) ? "zh" : "en";
try {
  const saved = localStorage.getItem(localeKey);
  if (saved === "zh" || saved === "en") language = saved;
} catch { /* The switch also works when browser storage is disabled. */ }
if (root.dataset.theme !== "dark") root.dataset.theme = "light";
setLanguage(language);

for (const button of buttons) {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageButton);
    try { localStorage.setItem(localeKey, root.dataset.language); } catch { /* Session only. */ }
  });
}

themeToggle.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  try { localStorage.setItem(themeKey, root.dataset.theme); } catch { /* Session only. */ }
});

// Follow the system setting until the visitor picks a theme.
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkQuery.addEventListener("change", event => {
  let saved = null;
  try { saved = localStorage.getItem(themeKey); } catch { /* No storage. */ }
  if (!saved) setTheme(event.matches ? "dark" : "light");
});

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
window.matchMedia("(max-width: 760px)").addEventListener("change", () => setMenu(false));

// Highlight the nav link for the section in view.
const navLinks = document.querySelectorAll(".desktop-nav a");
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    for (const link of navLinks) link.classList.toggle("is-current", link.hash === `#${entry.target.id}`);
  }
}, { rootMargin: "-40% 0px -55% 0px" });
for (const link of navLinks) {
  const target = document.querySelector(link.hash);
  if (target) observer.observe(target);
}

document.getElementById("current-year").textContent = new Date().getFullYear();
