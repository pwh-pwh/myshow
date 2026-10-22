# coderpwh ✳ 数字手写技术手账 (Developer Handwritten Notebook)

> **“把好奇心写进代码里。”** — `Building things, breaking things, learning things.`

这是为 **coderpwh** ([@pwh-pwh](https://github.com/pwh-pwh)) 定制开发的个人技术手账网站。
整体采用 **70% 手账与编辑设计 + 30% 极简技术作品集** 的视觉理念，通过温暖米白纸张纹理、手绘 SVG 工程架构草图、和纸胶带便签、页边手写批注与经过验证的 GitHub 开源项目记录，呈现一本属于开发者的私人技术笔记本。

---

## ✨ 核心特性

- **手账视觉系统**：暖白纸张色 (`#F7F4EC`) + 深墨色正文 (`#282923`) + 低饱和橄榄绿/砖红/牛皮纸棕/明黄便签点缀，内置 **方格 (Grid) / 点阵 (Dotted) / 横线 (Ruled) / 纯纸 (Plain)** 四种实时可切换纸张底纹。
- **真实 GitHub 数据驱动**：基于 `https://github.com/pwh-pwh` 公开仓库的 README 与源码核实整理了 10 组代表性项目（涵盖 `aiwechat-vercel`、`local-ocr`、`coin-mcp-server`、`cal-mcp`、`ai-gui`、`DenoProxy`、`memkit`、`enlearn`、`douyinVd`、`FakePers`、`fuck_shake`、`walrus_rs`、`walrus_store`），并为每张项目卡片绘制了专属 **手绘 SVG 架构草图**。
- **配置与视图完全分离**：所有个人信息、技术贴纸、项目列表、随手记便签、Now 探索方向与社交链接均集中在 `src/config/siteConfig.ts`，无需修改组件代码即可日常更新。
- **克制自然的交互**：手绘笔迹下划线、便签微倾抬升、随手记完整手稿展开弹窗、本地浏览器桌面贴便签互动，并严格遵循 `prefers-reduced-motion` 与键盘无障碍规范。

---

## 🚀 本地启动与生产构建

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发服务器 (默认 http://localhost:5173)
npm run dev

# 3. 运行 TypeScript 类型检查并生成生产环境静态产物 (输出至 dist/)
npm run build

# 4. 本地预览生产环境构建结果
npm run preview
```

---

## 🛠️ 如何修改与更新内容

只需编辑 **`src/config/siteConfig.ts`**：

1. **替换头像 (`hero.profileCard.customAvatarUrl`)**：
   默认使用原创钢笔速写风手绘开发者 SVG 插画。若你有个人专属插画或头像，将图片放入 `public/avatar.png`，并在 `siteConfig.ts` 中将 `customAvatarUrl` 改为 `'/avatar.png'` 即可。
2. **开启邮箱 / 独立博客 / 社交账号 (`contact.socials`)**：
   默认除 GitHub (`github.com/pwh-pwh`) 外的其他联系方式均为 `enabled: false` 自动隐藏。填入真实地址并将 `enabled` 设为 `true` 即可在底部自动展示。
3. **新增或修改项目 (`projects.items`) / 随手记 (`notes.items`) / 最近折腾 (`now.items`)**：
   直接在数组中添加或编辑对象即可。

---

## 📦 部署方式

本项目构建产物为纯静态资源（`dist/` 目录），可零成本部署至任意静态托管平台：

- **GitHub Pages**：推送到仓库后，使用 GitHub Actions 构建 `npm run build` 并发布 `dist` 目录（可作为 `pwh-pwh.github.io` 主页仓库直接部署）。
- **Vercel / Cloudflare Pages / Netlify**：导入仓库，Build Command 填写 `npm run build`，Output Directory 填写 `dist` 即可一键上线。
