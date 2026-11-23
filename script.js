// The English copy lives in index.html so the page is readable before scripts load.
const chinese = {
  "page.title": "万智翔 | 气候与行星科学",
  "page.description": "万智翔，北京大学博士研究生。研究早期地球气候、火星大气，以及如何用模拟凌星光谱反演系外行星大气成分。",
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
  "hero.cv": "下载中文简历（PDF）",
  "hero.cvUrl": "assets/Zhixiang_Wan_CV_zh.pdf",
  "hero.cvLanguage": "zh-CN",
  "hero.email": "联系我",
  "hero.imageAlt": "蓝色的地球大气边缘上方悬着一弯月牙。",
  "hero.credit": "NASA 原图 ISS066-E-86970",
  "about.title": "关于我",
  "about.p1": "我在北京大学物理学院大气与海洋科学系胡永云课题组读博。2022 年，我在本系取得理学学士学位，也通过国家发展研究院的经济学双学位项目取得了经济学学士学位。",
  "about.p2": "我用气候模式研究火星大气中的沙尘与水冰云，也研究早期地球自转较快时，重力随纬度的变化如何影响气候。我还用模拟的 JWST 凌星光谱，研究怎样从光谱中分辨系外行星大气的温度和成分差异。",
  "about.university": "北京大学",
  "about.department": "物理学院 · 大气与海洋科学系",
  "about.groupUrl": "https://faculty.pku.edu.cn/yyhu/zh_CN/zdylm/24892/list/index.htm",
  "education.title": "教育经历",
  "education.phd": "大气与海洋科学博士研究生",
  "education.bsc": "大气科学理学学士",
  "education.school": "北京大学物理学院",
  "education.phdYears": "2022 年至今",
  "education.economics": "经济学学士（经济学双学位项目）",
  "education.economicsSchool": "北京大学国家发展研究院",
  "education.economicsDates": "2019 年 9 月至 2022 年 6 月",
  "interests.title": "研究兴趣",
  "interests.earth": "早期地球气候",
  "interests.mars": "火星大气",
  "interests.planetary": "行星大气",
  "interests.radiation": "辐射传输",
  "interests.clouds": "云与沙尘",
  "interests.exoplanets": "系外行星透射光谱",
  "research.earth.tag": "地球",
  "research.earth.title": "重力与早期地球气候",
  "research.earth.body": "我比较自转周期为 12 小时和 24 小时的模拟，分析地表温度和大气顶辐射通量。实验中，辐射传输和云微物理计算分别考虑重力随纬度的变化，动力框架中的重力保持固定。",
  "research.mars.tag": "火星",
  "research.mars.title": "沙尘与水冰",
  "research.mars.body": "我修改了 PKU-Mars 模式中的起尘和沙尘沉降方案，并用单柱实验检验水冰云的形成过程。",
  "research.model.tag": "气候模型",
  "research.model.title": "检验 PKU-Mars 模拟结果",
  "research.model.body": "我比较有无沙尘辐射效应的两组模拟，用海盗一号和二号着陆器实测的地面气压，以及火星气候数据库（v6.1）的沙尘廓线，检验模拟结果。",
  "research.jwst.tag": "系外行星",
  "research.jwst.title": "用模拟凌星光谱反演大气成分",
  "research.jwst.body": "我用模拟 JWST 光谱中的一氧化碳和水吸收带设计了一项反演测试。如果行星晨昏两侧的温度不同，会不会被误判为成分差异？哪种后续观测可以区分这两种解释？",
  "pubs.title": "研究论文与会议摘要",
  "qin.label": "已投稿",
  "qin.title": "从铁氧化物的海拔分布推断早期火星曾有中等密度的大气",
  "qin.status": "截至 2026 年 11 月 23 日，《Science Advances》的投稿记录显示稿件处于编辑初筛阶段，《Nature Astronomy》已确认收稿。",
  "qin.source": "邓正宾的论文目录",
  "manuscript.label": "研究论文",
  "manuscript.status": "稿件撰写中。",
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

// Capture the English values before applying the first translation.
const fields = [];
for (const element of document.querySelectorAll("[data-i18n], [data-i18n-aria], [data-i18n-attr]")) {
  const { i18n, i18nAria, i18nAttr } = element.dataset;
  if (i18n) fields.push({ element, attribute: null, key: i18n, english: element.textContent.trim() });
  if (i18nAria) fields.push({ element, attribute: "aria-label", key: i18nAria, english: element.getAttribute("aria-label") });
  if (i18nAttr) {
    for (const binding of i18nAttr.trim().split(/\s+/)) {
      const [attribute, key] = binding.split(":");
      fields.push({ element, attribute, key, english: element.getAttribute(attribute) });
    }
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
