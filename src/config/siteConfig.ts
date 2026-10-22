/**
 * ============================================================================
 * 📓 coderpwh 数字手写手账 — 全局集中配置文件 (siteConfig.ts)
 * ============================================================================
 * 说明：
 * 本文件将所有可编辑内容（个人信息、主题色与字体、技术栈便签、GitHub 实验项目、
 * 随手记便签、Now 探索清单、社交联系方式）与 UI 组件完全解耦。
 * 后续只需直接修改此文件中的数据，即可更新整站内容。
 */

export type PaperTextureMode = 'grid' | 'dotted' | 'ruled' | 'plain'

export interface ThemeConfig {
  colors: {
    paperBg: string
    paperSheet: string
    paperWarm: string
    paperKraft: string
    paperLine: string
    inkPrimary: string
    inkSecondary: string
    inkMuted: string
    accentOlive: string
    accentBrick: string
    accentKraft: string
    noteYellow: string
    noteBlue: string
    accentBlueInk: string
  }
  fonts: {
    handEn: string
    handZh: string
    bodyZh: string
    serifZh: string
    mono: string
  }
  defaultPaperMode: PaperTextureMode
}

export interface NavItem {
  id: string
  label: string
  zhHint: string
  pageNumber: string
}

export interface TechItem {
  name: string
  note: string
  verifiedRepo?: string
  rotation: number // 轻微旋转角度（度）
  tone: 'yellow' | 'cream' | 'blue' | 'olive' | 'kraft'
}

export interface TechCategory {
  id: string
  title: string
  zhSubtitle: string
  stamp: string
  items: TechItem[]
}

export type ProjectCategoryKey = 'ai-agent' | 'dev-tools' | 'open-source'

export type ArchitectureDiagramType =
  | 'aiwechat-serverless'
  | 'local-ocr-skill'
  | 'mcp-servers'
  | 'ai-gui-desktop'
  | 'deno-proxy-edge'
  | 'memkit-proc'
  | 'enlearn-tui'
  | 'douyin-serverless'
  | 'android-lsposed'
  | 'walrus-rust'

export interface ProjectItem {
  id: string
  indexLabel: string
  name: string
  categoryKey: ProjectCategoryKey
  categoryLabel: string
  summary: string
  highlights: string[]
  techStack: string[]
  status: string
  metrics?: {
    stars?: number
    forks?: number
    updatedAt?: string
    badge?: string
  }
  githubUrl: string
  secondaryRepo?: {
    name: string
    url: string
  }
  diagramType: ArchitectureDiagramType
  diagramCaption: string
  rotation: number
  handTag: string
  marginNote: string
}

export interface DeskNoteItem {
  id: string
  number: string
  date: string
  title: string
  excerpt: string
  fullThoughts: string[]
  codeSketch?: string
  tags: string[]
  paperStyle: 'yellow-sticky' | 'blue-grid' | 'kraft-memo' | 'cream-lined' | 'olive-card'
  pinType: 'tape' | 'pin' | 'clip'
  rotation: number
  doodleHint: string
}

export interface NowDeskItem {
  id: string
  text: string
  detail: string
  tag: string
  status: 'exploring' | 'building' | 'iterating'
}

export interface SocialLinkItem {
  id: string
  label: string
  handle: string
  url: string
  enabled: boolean // 为 false 时自动隐藏，填入真实信息后改为 true 即可显示
  note?: string
}

export interface SiteConfig {
  theme: ThemeConfig
  navigation: {
    brandName: string
    brandSymbol: string
    notebookVolume: string
    items: NavItem[]
  }
  hero: {
    greeting: string
    mainSlogan: string
    subSloganEn: string
    bio: string
    curiousCallout: string
    profileCard: {
      displayName: string
      githubUsername: string
      githubUrl: string
      focus: string
      status: string
      location: string
      verifiedFootprint: string
      /**
       * 自定义头像 URL：默认留空使用原创手绘钢笔速写风 SVG 头像占位。
       * 如需替换为个人真实插画或自定义头像，填入图片路径（如 '/avatar.png'）即可。
       */
      customAvatarUrl: string
      avatarCaption: string
    }
    floatingStickies: Array<{
      label: string
      content: string
      tone: 'yellow' | 'blue' | 'kraft'
      rotation: number
    }>
  }
  about: {
    titleEn: string
    titleZh: string
    notebookDate: string
    paragraphs: string[]
    highlights: string[]
    marginalia: Array<{
      paragraphIndex: number
      note: string
    }>
    keywords: Array<{
      word: 'Explore' | 'Build' | 'Automate'
      zhLabel: string
      description: string
      icon: 'bulb' | 'pencil' | 'bolt'
    }>
  }
  techStack: {
    titleEn: string
    titleZh: string
    subtitle: string
    categories: TechCategory[]
  }
  projects: {
    titleEn: string
    titleZh: string
    subtitle: string
    verificationNote: string
    groups: Array<{
      key: ProjectCategoryKey | 'all'
      code: string
      title: string
      description: string
    }>
    items: ProjectItem[]
  }
  notes: {
    titleEn: string
    titleZh: string
    subtitle: string
    items: DeskNoteItem[]
  }
  now: {
    titleEn: string
    titleZh: string
    subtitle: string
    cornerNote: string
    updatedLabel: string
    items: NowDeskItem[]
    sideDoodleNote: string
  }
  contact: {
    titleEn: string
    titleZh: string
    message: string
    githubDisplay: string
    githubUrl: string
    socials: SocialLinkItem[]
    footerText: string
    colophon: string
  }
}

export const siteConfig: SiteConfig = {
  theme: {
    colors: {
      paperBg: '#F7F4EC',      // 温暖米白主纸张底色
      paperSheet: '#FBF9F3',   // 笔记本内页浅暖白
      paperWarm: '#EFEAD8',    // 旧书页暖米色
      paperKraft: '#E5DBC5',   // 牛皮纸便签色
      paperLine: '#DED7C6',    // 手账本细横线/方格线颜色
      inkPrimary: '#282923',   // 深墨色正文
      inkSecondary: '#4E5044', // 次级钢笔墨灰
      inkMuted: '#7C7D71',     // 铅笔浅灰批注
      accentOlive: '#556B45',  // 低饱和橄榄绿
      accentBrick: '#B8523B',  // 复古砖红批注色
      accentKraft: '#8B6B4A',  // 牛皮纸棕
      noteYellow: '#F8E8A0',   // 明黄色便签
      noteBlue: '#DCEBF5',     // 淡蓝色标记便签
      accentBlueInk: '#396482' // 蓝黑钢笔墨水色
    },
    fonts: {
      handEn: '"Caveat", "Kalam", cursive',
      handZh: '"Long Cang", "Ma Shan Zheng", "Kaiti SC", "STKaiti", cursive',
      bodyZh: '"Noto Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
      serifZh: '"Noto Serif SC", "Songti SC", "STSong", serif',
      mono: '"JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, monospace'
    },
    defaultPaperMode: 'grid'
  },

  navigation: {
    brandName: 'coderpwh',
    brandSymbol: '✳',
    notebookVolume: 'FIELD NOTEBOOK · VOL. 2019–2026',
    items: [
      { id: 'about', label: 'About', zhHint: '关于我', pageNumber: 'P.01' },
      { id: 'tech-stack', label: 'Tech Stack', zhHint: '工具箱', pageNumber: 'P.02' },
      { id: 'projects', label: 'Projects', zhHint: '实验记录', pageNumber: 'P.03' },
      { id: 'notes', label: 'Notes', zhHint: '随手记', pageNumber: 'P.04' },
      { id: 'now', label: 'Now', zhHint: '最近折腾', pageNumber: 'P.05' },
      { id: 'contact', label: 'Contact', zhHint: '保持联系', pageNumber: 'P.06' }
    ]
  },

  hero: {
    greeting: "Hi, I'm coderpwh.",
    mainSlogan: '把好奇心写进代码里。',
    subSloganEn: 'Building things, breaking things, learning things.',
    bio: '一个喜欢折腾技术的开发者，探索 AI Agent、自动化和软件工程，也记录那些把想法变成现实的过程。',
    curiousCallout: 'always curious ↗',
    profileCard: {
      displayName: 'coderpwh',
      githubUsername: '@pwh-pwh',
      githubUrl: 'https://github.com/pwh-pwh',
      focus: 'AI Agent · Engineering · Automation',
      status: 'Currently exploring',
      location: 'Cosmos / Linux & WSL2',
      verifiedFootprint: '198 Public Repos · 1.4k+ ★ on GitHub',
      customAvatarUrl: '', // 留空使用手绘钢笔速写头像占位，可随时替换为真实插画路径
      avatarCaption: 'sketch #01 — replace in siteConfig.ts'
    },
    floatingStickies: [
      {
        label: 'DESK MEMO · 01',
        content: '偏好用 Rust / Kotlin / Go / TS 写小而锋利的工具，能自动化的绝不手动点第二次。',
        tone: 'yellow',
        rotation: -2.2
      },
      {
        label: 'AGENT LAB · 02',
        content: '正在把 MCP 工具服务、浏览器自动化与本地推理拼装成可靠的个人工作流。',
        tone: 'blue',
        rotation: 1.8
      }
    ]
  },

  about: {
    titleEn: 'a little about me...',
    titleZh: '翻开手账的第一页',
    notebookDate: 'LOGGED IN NOTEBOOK · ENTRY #001',
    paragraphs: [
      '我喜欢研究技术是如何运转的，也喜欢把不同的工具组合起来，解决实际问题。',
      '从后端开发、系统集成，到 AI Agent、浏览器自动化和工作流设计，我一直对那些能让事情变得更简单的方法感兴趣。',
      '比起只收藏新技术，我更愿意亲手试一试，写点代码，踩几个坑，再把有用的东西沉淀下来。',
      '这个网站就是我的一个小小的数字角落，用来记录正在探索的方向，以及那些值得分享的实践。'
    ],
    highlights: [
      '把不同的工具组合起来，解决实际问题',
      'AI Agent、浏览器自动化和工作流设计',
      '亲手试一试，写点代码，踩几个坑'
    ],
    marginalia: [
      {
        paragraphIndex: 0,
        note: '← 拆轮子、看源码、把协议接通的那一刻最让人愉快'
      },
      {
        paragraphIndex: 2,
        note: '← GitHub 上 130+ 个非 Fork 仓库，大多是从「先写个 Demo 试试」开始的'
      }
    ],
    keywords: [
      {
        word: 'Explore',
        zhLabel: '保持好奇，拆解原理',
        description: '深入底层机制，从 Linux /proc 内存布局、Android Hook 到新型 Agent 协议，先弄懂它怎么工作。',
        icon: 'bulb'
      },
      {
        word: 'Build',
        zhLabel: '动手造物，快速验证',
        description: '用 Rust、Kotlin、Go 与 TypeScript 把脑海里的点子做成能跑、能装、能发布的工具与服务。',
        icon: 'pencil'
      },
      {
        word: 'Automate',
        zhLabel: '连接工具，消解重复',
        description: '将 LLM、MCP 工具调用、浏览器控制与脚本串联成稳定工作流，把时间还给真正有创造力的事。',
        icon: 'bolt'
      }
    ]
  },

  techStack: {
    titleEn: 'tools I play with',
    titleZh: '散落在桌面的技术便签',
    subtitle: '不给技术打虚构的「熟练度百分比」——每张贴纸都是一段真实写过代码、踩过坑的工程记录。悬停或点击便签可查看实际用途与关联仓库。',
    categories: [
      {
        id: 'languages',
        title: 'Languages',
        zhSubtitle: '主力与日常折腾语言',
        stamp: 'CORE SYNTAX',
        items: [
          {
            name: 'Rust',
            note: '用于编写高性能 CLI、零宽字符文本隐写库 (text_hidden)、Walrus 异步 SDK 与 Iced 桌面端应用，以及本地 OCR 推理封装。',
            verifiedRepo: 'walrus_rs / text_hidden / couplet_gen',
            rotation: -2.1,
            tone: 'yellow'
          },
          {
            name: 'Kotlin',
            note: '用于 Jetpack Compose 跨平台桌面/安卓应用、Ktor 服务端，以及基于 YukiHookAPI 的 LSPosed/Xposed 系统级模块开发。',
            verifiedRepo: 'FakePers / fuck_shake / bili_auto_tool',
            rotation: 1.6,
            tone: 'cream'
          },
          {
            name: 'Go',
            note: '构建高并发 Serverless 服务、Wails 跨平台桌面助手、Android 底层进程内存操作工具 (memkit) 与区块链客户端。',
            verifiedRepo: 'aiwechat-vercel / memkit / ai-gui',
            rotation: -1.4,
            tone: 'blue'
          },
          {
            name: 'Java',
            note: '企业级后端开发、编译原理词法/语法分析器实验、Spring Cloud 微服务及系统集成底座。',
            verifiedRepo: 'grammar_parser / mvc-min',
            rotation: 2.0,
            tone: 'kraft'
          },
          {
            name: 'JavaScript / TypeScript',
            note: '广泛用于 Deno / Bun 边缘服务、FastMCP 工具服务端、Cloudflare Workers 及现代 Web 前端交互构建。',
            verifiedRepo: 'douyinVd / DenoProxy / coin-mcp-server',
            rotation: -1.8,
            tone: 'olive'
          }
        ]
      },
      {
        id: 'ai-agents',
        title: 'AI & Agents',
        zhSubtitle: '智能体、协议与自动化工作流',
        stamp: 'AGENTIC LAB',
        items: [
          {
            name: 'OpenClaw',
            note: '探索开源 Agent 运行时、技能编排与自主工具调用闭环，研究本地环境与多智能体协同范式。',
            rotation: 1.5,
            tone: 'yellow'
          },
          {
            name: 'Agent Skills',
            note: '设计可插拔、带自检机制 (doctor) 的 Agent 专用技能包，例如开箱即用的跨平台本地中文 OCR 技能 (local-ocr)。',
            verifiedRepo: 'local-ocr',
            rotation: -2.0,
            tone: 'blue'
          },
          {
            name: 'LLM Integration',
            note: '将 GPT、DeepSeek、通义千问、Gemini、讯飞星火等模型接入微信公众号 Serverless 后端与轻量桌面客户端。',
            verifiedRepo: 'aiwechat-vercel / ai-gui / couplet_gen',
            rotation: 1.2,
            tone: 'cream'
          },
          {
            name: 'Tool Calling',
            note: '基于 Model Context Protocol (MCP) 与 FastMCP + Zod 构建确定性外部工具（实时行情查询、表达式计算等）。',
            verifiedRepo: 'coin-mcp-server / cal-mcp',
            rotation: -1.6,
            tone: 'olive'
          },
          {
            name: 'Workflow Automation',
            note: '把零散脚本、API 触发器、模型推理与数据导出串联成可复用的端到端自动化流水线。',
            rotation: 2.1,
            tone: 'kraft'
          }
        ]
      },
      {
        id: 'web-automation',
        title: 'Web & Automation',
        zhSubtitle: '前端界面与浏览器控制',
        stamp: 'BROWSER & WEB',
        items: [
          {
            name: 'React / Vue',
            note: '使用 React、Vue 3、Astro 与 Tailwind CSS 构建清爽的 Web 界面与 Wails 桌面端交互前端。',
            verifiedRepo: 'ai-gui / astro-blog',
            rotation: -1.5,
            tone: 'cream'
          },
          {
            name: 'Playwright',
            note: '处理复杂动态网页交互、登录态保持、表单自动流转与端到端页面采集任务。',
            rotation: 1.9,
            tone: 'yellow'
          },
          {
            name: 'CDP',
            note: '通过 Chrome DevTools Protocol 直接接管已打开的真实浏览器会话，实现更低损耗、更稳健的浏览器自动化控制。',
            rotation: -2.2,
            tone: 'blue'
          },
          {
            name: 'REST API',
            note: '设计简洁清晰的 HTTP / Serverless 接口与边缘反向代理服务，兼顾可读性与跨平台部署能力。',
            verifiedRepo: 'DenoProxy / douyinVd',
            rotation: 1.3,
            tone: 'kraft'
          }
        ]
      },
      {
        id: 'infra-data',
        title: 'Infrastructure & Data',
        zhSubtitle: '运行环境与数据存储底座',
        stamp: 'INFRA & DB',
        items: [
          {
            name: 'Linux / WSL2',
            note: '主力日常开发与脚本执行环境，熟悉 Shell 工具链、系统调用及 `/proc` 虚拟文件系统分析。',
            verifiedRepo: 'memkit / local-ocr',
            rotation: 1.7,
            tone: 'olive'
          },
          {
            name: 'Docker',
            note: '容器化打包微服务与无水印解析服务，保证开发机、云服务器与跨平台环境行为一致。',
            verifiedRepo: 'douyinVd / cr8s',
            rotation: -1.4,
            tone: 'blue'
          },
          {
            name: 'MySQL',
            note: '业务系统关系型数据建模、索引调优与日常后端持久化主力数据库。',
            rotation: 2.0,
            tone: 'cream'
          },
          {
            name: 'Oracle',
            note: '企业级核心业务系统集成、复杂报表查询与异构数据对接实践。',
            rotation: -1.9,
            tone: 'kraft'
          },
          {
            name: 'SQL Server',
            note: '企业 ERP / 财务与内部信息系统的数据抽取、存储过程与业务流程集成。',
            rotation: 1.2,
            tone: 'yellow'
          }
        ]
      }
    ]
  },

  projects: {
    titleEn: "things I've built & explored",
    titleZh: '项目实验记录册',
    subtitle: '以下项目全部核实自 github.com/pwh-pwh 公开仓库的 README 与真实源码。每张卡片附带手绘架构草图，记录当时的设计思路与技术选型。',
    verificationNote: 'VERIFIED AGAINST GITHUB API · @pwh-pwh · NO FABRICATED METRICS',
    groups: [
      {
        key: 'all',
        code: 'ALL',
        title: 'All Experiments (10)',
        description: '全部经 GitHub 仓库验证的代表性作品'
      },
      {
        key: 'ai-agent',
        code: 'PROJECT 01',
        title: 'AI & Agent Experiments',
        description: '记录智能体、模型接入、工具调用 (MCP / Skills) 和自动化工作流相关实践。'
      },
      {
        key: 'dev-tools',
        code: 'PROJECT 02',
        title: 'Developer Tools',
        description: '展示用于提升开发效率、解决工程问题或整合技术工具的项目。'
      },
      {
        key: 'open-source',
        code: 'PROJECT 03',
        title: 'Open Source Projects',
        description: '优先展示经过 GitHub 仓库验证、获得社区 Star 与实际使用的真实开源项目。'
      }
    ],
    items: [
      // ==================== Group 01: AI & Agent Experiments ====================
      {
        id: 'aiwechat-vercel',
        indexLabel: 'EXP #01 · AI & AGENT',
        name: 'aiwechat-vercel',
        categoryKey: 'ai-agent',
        categoryLabel: 'Project 01 — AI & Agent Experiments',
        summary: '使用 Vercel Serverless Functions 与 Upstash/Vercel KV (Redis)，零服务器成本将多种大语言模型接入微信公众号后台的开源方案。',
        highlights: [
          '无需购买和维护云服务器，利用 Vercel Functions 处理微信公众平台 `/api/wx` 消息回调',
          '集成 Vercel KV (Redis) 持久化管理用户上下文会话，突破公众平台 5 秒超时限制',
          '内置多模型路由 (`botType`)，支持 OpenAI GPT、通义千问 (Qwen)、讯飞星火 (Spark)、Gemini 等切换'
        ],
        techStack: ['Go', 'Vercel Serverless', 'Redis KV', 'WeChat MP API', 'Multi-LLM'],
        status: 'Active · ★ 802 Stars · 437 Forks',
        metrics: {
          stars: 802,
          forks: 437,
          updatedAt: '2025-09',
          badge: 'Top Starred Repo'
        },
        githubUrl: 'https://github.com/pwh-pwh/aiwechat-vercel',
        diagramType: 'aiwechat-serverless',
        diagramCaption: 'Fig 1.1 — 公众号消息回调经 Vercel Serverless 与 Redis KV 的多模型分发草图',
        rotation: -0.8,
        handTag: 'built with curiosity',
        marginNote: '最初是为了让自己和朋友不用买服务器就能在微信里随时调大模型，没想到收获了 800+ Star。'
      },
      {
        id: 'local-ocr',
        indexLabel: 'EXP #02 · AGENT SKILL',
        name: 'local-ocr',
        categoryKey: 'ai-agent',
        categoryLabel: 'Project 01 — AI & Agent Experiments',
        summary: '面向 AI Agent 设计的本地中文 OCR 技能包。基于 Rust `ocr-rs`（PaddleOCR PP-OCRv6 + MNN），免装 Rust 环境即可供智能体直接调用识图。',
        highlights: [
          '采用「内置预编译二进制 -> GitHub Release 拉取 -> 本地 cargo build」三级回退策略，首次调用自动运行 `doctor` 环境自检',
          '支持 `tiny` / `small` / `medium` 三档位 PP-OCRv6 模型按需下载与本地缓存',
          '同时提供 Linux/macOS (`scripts/ocr`) 与 Windows PowerShell/CMD 入口，支持 `--format json` 输出结构化文本行供 Agent 消费'
        ],
        techStack: ['Agent Skills', 'Rust (ocr-rs)', 'PP-OCRv6', 'MNN', 'Shell / PowerShell'],
        status: 'Active (2026) · Apache-2.0',
        metrics: {
          stars: 2,
          forks: 0,
          updatedAt: '2026-08',
          badge: 'Agent Skill'
        },
        githubUrl: 'https://github.com/pwh-pwh/local-ocr',
        diagramType: 'local-ocr-skill',
        diagramCaption: 'Fig 1.2 — Agent 调用本地 OCR Skill 的自检 (Doctor) 与 MNN 推理流水线',
        rotation: 0.9,
        handTag: 'built with curiosity',
        marginNote: '给 Agent 用的工具必须「装上就能跑」，所以我把 doctor 自检和模型自动拉取全封进了脚本入口。'
      },
      {
        id: 'mcp-servers',
        indexLabel: 'EXP #03 · MCP TOOL CALLING',
        name: 'coin-mcp-server & cal-mcp',
        categoryKey: 'ai-agent',
        categoryLabel: 'Project 01 — AI & Agent Experiments',
        summary: '基于 Model Context Protocol (MCP) 与 FastMCP 构建的标准化大模型外部工具集，解决大模型实时行情盲区与数学计算幻觉。',
        highlights: [
          '`coin-mcp-server`：基于 TypeScript + FastMCP + Zod 封装 Bitget API，向 Agent 提供 `getTokenPrice`、`getCoinInfo`（链网络状态/可转账性）与 `getAnnoucements` 工具',
          '`cal-mcp`：基于 Bun 运行时与 `expr-eval` 构建轻量级 stdio 数学表达式求值 MCP 服务，已收录于 Smithery 与 Glama MCP 目录',
          '通过严格的 Zod Schema 校验入参，让 LLM 工具调用具备确定性输入输出边界'
        ],
        techStack: ['TypeScript', 'Bun', 'FastMCP', 'MCP (stdio)', 'Zod', 'Bitget API'],
        status: 'Verified on Smithery & Glama · ★ 39 Combined',
        metrics: {
          stars: 39,
          forks: 18,
          updatedAt: '2026-03',
          badge: 'MCP Servers'
        },
        githubUrl: 'https://github.com/pwh-pwh/coin-mcp-server',
        secondaryRepo: {
          name: 'cal-mcp',
          url: 'https://github.com/pwh-pwh/cal-mcp'
        },
        diagramType: 'mcp-servers',
        diagramCaption: 'Fig 1.3 — Claude / Agent 客户端通过 stdio 调用 FastMCP 工具的协议交互草图',
        rotation: -0.6,
        handTag: 'built with curiosity',
        marginNote: '别让大模型心算数学题或猜实时价格——写一个 100 行的 MCP Server 往往比调 10 次 Prompt 更管用。'
      },
      {
        id: 'ai-gui',
        indexLabel: 'EXP #04 · AI DESKTOP',
        name: 'ai-gui',
        categoryKey: 'ai-agent',
        categoryLabel: 'Project 01 — AI & Agent Experiments',
        summary: '使用 Wails (Go + WebView) 与 Vue 3 + TypeScript 编写的跨平台轻量桌面 AI 悬浮问答助手，随时呼出、不占屏幕空间。',
        highlights: [
          '支持一键将对话窗口折叠为桌面可拖拽小图标，随用随点，双击标题栏快速收起',
          '首次启动自动生成并打开本地 JSON 配置文件，支持 `/clear` 快捷重置上下文',
          '兼容 OpenAI 协议接口、百度千帆大模型以及讯飞星火、Kimi、通义千问等多模型接入'
        ],
        techStack: ['Go', 'Wails', 'Vue 3', 'TypeScript', 'PrimeVue'],
        status: 'Cross-Platform (Mac/Win/Linux) · ★ 21 Stars',
        metrics: {
          stars: 21,
          forks: 4,
          updatedAt: '2024-10',
          badge: 'Wails Desktop'
        },
        githubUrl: 'https://github.com/pwh-pwh/ai-gui',
        diagramType: 'ai-gui-desktop',
        diagramCaption: 'Fig 1.4 — Wails 桌面悬浮球模式与多模型本地配置架构',
        rotation: 0.7,
        handTag: 'built with curiosity',
        marginNote: '起因很简单：想要一个常驻桌面角落、不吃内存、点开就能问一句的轻量小工具。'
      },

      // ==================== Group 02: Developer Tools ====================
      {
        id: 'denoproxy',
        indexLabel: 'EXP #05 · EDGE DEVTOOL',
        name: 'DenoProxy',
        categoryKey: 'dev-tools',
        categoryLabel: 'Project 02 — Developer Tools',
        summary: '基于 Deno 构建的轻量级 HTTP 动态代理中转服务（GitHub 主页置顶仓库），支持通过 URL 参数即时切换上游目标并转发 `/proxy` 请求。',
        highlights: [
          '通过 `?setUrl=TARGET_URL` 查询参数动态设置或切换当前活动代理目标，无需重启服务或改配置文件',
          '所有以 `/proxy/*` 开头的请求自动透明转发至目标上游站点并返回响应',
          '零外部重型依赖，支持 `deployctl` 一键部署至 Deno Deploy 全球边缘节点'
        ],
        techStack: ['TypeScript', 'Deno', 'Deno Deploy', 'HTTP Reverse Proxy'],
        status: 'Pinned on GitHub · ★ 56 Stars · 47 Forks',
        metrics: {
          stars: 56,
          forks: 47,
          updatedAt: '2025-02',
          badge: 'Pinned Repo'
        },
        githubUrl: 'https://github.com/pwh-pwh/DenoProxy',
        diagramType: 'deno-proxy-edge',
        diagramCaption: 'Fig 2.1 — DenoProxy 动态上游设置 (?setUrl) 与 /proxy 路径转发机制',
        rotation: -0.9,
        handTag: 'built with curiosity',
        marginNote: '联调第三方接口或需要临时边缘中转时，一个文件就能跑起来的 Deno 服务非常趁手。'
      },
      {
        id: 'memkit',
        indexLabel: 'EXP #06 · SYSTEM & MEMORY',
        name: 'memkit',
        categoryKey: 'dev-tools',
        categoryLabel: 'Project 02 — Developer Tools',
        summary: '纯 Go 语言编写的轻量级 Android 进程内存读写与扫描框架，基于 Linux `/proc` 文件系统与系统调用实现高效内存分析。',
        highlights: [
          '纯 Go 实现，无 Cgo 或外部复杂运行时依赖，专为 Android (Linux `/proc/<pid>`) 场景打造',
          '支持 `/proc/<pid>/mem` 与 `process_vm_readv/writev` 双模式读写（带自动回退）及 `/proc/<pid>/maps` 内存段分类解析（heap/stack/java 等）',
          '内置并发 Worker 扫描器（带进度回调）、AOB 字节特征码搜索与 Patch、Pagemap 解析、指针链搜索与模糊扫描'
        ],
        techStack: ['Go', 'Linux /proc', 'Android', 'Syscalls', 'Concurrent Scanning'],
        status: 'Active (2026) · MIT License · ★ 4 Stars',
        metrics: {
          stars: 4,
          forks: 3,
          updatedAt: '2026-02',
          badge: 'System Tool'
        },
        githubUrl: 'https://github.com/pwh-pwh/memkit',
        diagramType: 'memkit-proc',
        diagramCaption: 'Fig 2.2 — memkit 解析 /proc/<pid>/maps 并通过并发 Worker 执行 AOB/指针链扫描',
        rotation: 0.8,
        handTag: 'built with curiosity',
        marginNote: '把底层 `/proc/<pid>/maps` 和 `pagemap` 拆明白之后，用纯 Go 并发协程做内存特征扫描既干净又快。'
      },
      {
        id: 'enlearn',
        indexLabel: 'EXP #07 · TERMINAL TUI',
        name: 'enlearn',
        categoryKey: 'dev-tools',
        categoryLabel: 'Project 02 — Developer Tools',
        summary: '本地优先（Local-first）的终端英语单词记忆 TUI/CLI 工具。支持导入开源 ECDICT 词库并通过简化 SM-2 间隔重复算法安排复习。',
        highlights: [
          '支持从开源 ECDICT 按类别（四六级、雅思、托福、GRE 等）全量导入词库，全部词条与复习进度保存在本地 SQLite 数据库',
          '基于简化 SM-2 记忆算法计算复习间隔（0–5 分自评），每日任务按 10 词一组推进，低分错词立即进入组内强化循环',
          '支持键盘流（`j/k`、方向键、`Enter`、`q`）全终端 TUI 交互以及 `uv run enlearn` CLI 统计命令'
        ],
        techStack: ['Python', 'Terminal TUI', 'SQLite', 'SM-2 Algorithm', 'ECDICT'],
        status: 'Active (2026) · Local-First CLI/TUI',
        metrics: {
          stars: 1,
          forks: 1,
          updatedAt: '2026-05',
          badge: 'CLI / TUI'
        },
        githubUrl: 'https://github.com/pwh-pwh/enlearn',
        diagramType: 'enlearn-tui',
        diagramCaption: 'Fig 2.3 — ECDICT 词库入库 SQLite 与 SM-2 间隔重复复习状态流转图',
        rotation: -0.6,
        handTag: 'built with curiosity',
        marginNote: '写代码时不想切出终端去打开臃肿的背单词 App，干脆自己用 Python + SQLite 写了一个键盘流 TUI。'
      },

      // ==================== Group 03: Open Source Projects ====================
      {
        id: 'douyinvd',
        indexLabel: 'EXP #08 · OPEN SOURCE',
        name: 'douyinVd',
        categoryKey: 'open-source',
        categoryLabel: 'Project 03 — Open Source Projects',
        summary: '基于 Deno 与 TypeScript 构建的抖音无水印视频与图文解析下载服务，支持 Web 界面直接预览下载与结构化 JSON API 返回。',
        highlights: [
          '根路径 `/` 自带轻量 Web 页面（粘贴分享链接即可预览视频/图文图集并下载），同时提供 `?url=` 直链模式与 `?data&url=` JSON 接口',
          '完整解析视频直链、图文 `image_url_list`、作者信息及互动统计数据 (`aweme_id` / 点赞 / 评论 / 收藏 / 分享)',
          '一套代码支持 Deno Deploy、Cloudflare Workers (`denoflare`)、Vercel Serverless 与 Docker 四种部署方式'
        ],
        techStack: ['TypeScript', 'Deno', 'Cloudflare Workers', 'Vercel', 'Docker'],
        status: 'Active (2026) · ★ 373 Stars · 204 Forks',
        metrics: {
          stars: 373,
          forks: 204,
          updatedAt: '2026-09',
          badge: '373★ Open Source'
        },
        githubUrl: 'https://github.com/pwh-pwh/douyinVd',
        diagramType: 'douyin-serverless',
        diagramCaption: 'Fig 3.1 — 多端 Serverless 部署架构与 Web / JSON 双模式解析响应流',
        rotation: 0.7,
        handTag: 'built with curiosity',
        marginNote: '最初写过 Kotlin (Ktor) 版和 Go (Gin) 版，最后用 Deno + TS 重构成了支持 CF Worker / Vercel 的多端版本。'
      },
      {
        id: 'android-lsposed-suite',
        indexLabel: 'EXP #09 · ANDROID & PRIVACY',
        name: 'FakePers & fuck_shake',
        categoryKey: 'open-source',
        categoryLabel: 'Project 03 — Open Source Projects',
        summary: '两款围绕 Android 隐私边界与使用体验的开源 LSPosed / Xposed 模块：用「礼貌的伪装」守护设备隐私，拦截烦人的摇一摇开屏跳转。',
        highlights: [
          '`FakePers`（Kotlin 2.x + Jetpack Compose + YukiHookAPI 1.3）：「权限可以假装给了，隐私不必真的交出」——在权限检查层返回已授权，而在通讯录/文件/位置等敏感数据侧可选返回空结果',
          '`fuck_shake`（★ 100 Stars）：针对国内 App 泛滥的陀螺仪「摇一摇」开屏广告跳转，提供按应用勾选精准屏蔽的 Xposed 模块',
          '全部代码开源透明，基于现代 Kotlin 与 Compose UI 构建清爽的模块配置界面'
        ],
        techStack: ['Kotlin 2.x', 'Jetpack Compose', 'YukiHookAPI', 'LSPosed / Xposed', 'Android'],
        status: 'Active (2026) · ★ 125 Combined Stars',
        metrics: {
          stars: 125,
          forks: 6,
          updatedAt: '2026-07',
          badge: 'Android Hook'
        },
        githubUrl: 'https://github.com/pwh-pwh/FakePers',
        secondaryRepo: {
          name: 'fuck_shake (★100)',
          url: 'https://github.com/pwh-pwh/fuck_shake'
        },
        diagramType: 'android-lsposed',
        diagramCaption: 'Fig 3.2 — FakePers 在 App 权限检查层与敏感数据读取层之间的 Hook 拦截示意',
        rotation: -0.8,
        handTag: 'built with curiosity',
        marginNote: '「可以，但房间里什么也没有。」——这是写 FakePers 时最喜欢的一句设计注脚。'
      },
      {
        id: 'walrus-rust-suite',
        indexLabel: 'EXP #10 · RUST & CRATES.IO',
        name: 'walrus_rs & walrus_store',
        categoryKey: 'open-source',
        categoryLabel: 'Project 03 — Open Source Projects',
        summary: '去中心化 Blob 存储网络 Walrus 的 Rust 开源生态实践：包含已发布至 Crates.io 的异步 SDK 库与基于 Iced 构建的跨平台云盘桌面客户端。',
        highlights: [
          '`walrus_rs`（已发布 Crates.io `v0.1.4`）：基于 Tokio + Reqwest + Serde 的异步客户端库，封装 Aggregator 与 Publisher 节点的 Blob / Quilt 读写接口',
          '`walrus_store`：基于 `walrus_rs` 与 Rust 原生 GUI 框架 `Iced` 开发的桌面云盘应用，支持文件上传、按 ID/文件名搜索、多选下载与本地索引管理',
          '另有 `text_hidden`（零宽字符文本隐写库，已发 Crates.io）与 `couplet_gen`（Rust + DeepSeek/GPT 智能对联生成与图片渲染器）等 Rust 开源实验'
        ],
        techStack: ['Rust', 'Tokio', 'Iced GUI', 'Reqwest', 'Crates.io', 'Walrus API'],
        status: 'Published on Crates.io (v0.1.4) · ★ 16 Combined',
        metrics: {
          stars: 16,
          forks: 4,
          updatedAt: '2025-09',
          badge: 'Crates.io SDK'
        },
        githubUrl: 'https://github.com/pwh-pwh/walrus_rs',
        secondaryRepo: {
          name: 'walrus_store (Iced GUI)',
          url: 'https://github.com/pwh-pwh/walrus_store'
        },
        diagramType: 'walrus-rust',
        diagramCaption: 'Fig 3.3 — Iced 桌面客户端通过 walrus_rs 异步 SDK 与 Publisher/Aggregator 交互',
        rotation: 0.6,
        handTag: 'built with curiosity',
        marginNote: '先写好底层 Rust SDK 发到 crates.io，再拿 Iced 给它套一个桌面 GUI，整套链路跑通时非常有成就感。'
      }
    ]
  },

  notes: {
    titleEn: 'notes from my desk',
    titleZh: '随手记',
    subtitle: '这里不是正襟危坐的长篇技术博客，而是写代码、调 Agent 和做自动化时顺手贴在桌角的几张思考便签。点击任意便签可翻看展开手稿。',
    items: [
      {
        id: 'note-01',
        number: 'NOTE #01',
        date: '2026.08 · AGENT DESIGN',
        title: 'AI Agent 到底应该如何调用工具？',
        excerpt: '别把所有逻辑都塞进 Prompt。好用的 Agent 工具应该像 Unix 小工具一样：输入 Schema 极度明确、失败信息可读、自带环境自检（doctor），把不确定性留在模型推理层，把确定性交给代码。',
        fullThoughts: [
          '在写 cal-mcp、coin-mcp-server 和 local-ocr 技能包的时候，我越来越觉得：Agent 调不好工具，很多时候不是模型不够聪明，而是工具本身的边界太模糊。',
          '1. 确定性归代码，语义理解归模型：像数学表达式求值、API 签名、二进制调用，必须通过 Zod Schema 或严格参数约束交给确定性代码执行。',
          '2. 工具要自带「听诊器 (Doctor)」：Agent 在用户机器上跑脚本时，最怕缺依赖、缺模型。所以在 local-ocr 里，第一次执行会自动触发 doctor.sh 检查预编译二进制并按 tier 拉取模型，不让 Agent 陷入盲目报错重试。',
          '3. 输出结构要对上下文友好：干脆利落的 JSON 行或结构化摘要，远比打印几百行原始堆栈更有用。'
        ],
        codeSketch: `// 理想中的 Agent 工具契约：严格 Schema + 确定性执行 + 自检兜底
tool("local_ocr", {
  schema: z.object({ imagePath: z.string(), tier: z.enum(["tiny", "small", "medium"]) }),
  run: async (args) => ensureDoctorReady().then(() => execOcrBinary(args))
})`,
        tags: ['AI Agent', 'MCP', 'Agent Skills', 'Tool Calling'],
        paperStyle: 'yellow-sticky',
        pinType: 'tape',
        rotation: -1.8,
        doodleHint: 'schema -> deterministic run ✓'
      },
      {
        id: 'note-02',
        number: 'NOTE #02',
        date: '2026.06 · WORKFLOW',
        title: '自动化流程中，稳定性比什么都重要。',
        excerpt: '一个成功率只有 85% 的自动化脚本，往往比纯手动更累——因为你不仅要干活，还要去排查它卡在了哪一步。幂等设计、断点状态保存和清晰的可观测日志，才是自动化的骨架。',
        fullThoughts: [
          '刚开始写自动化工具时，最容易追求「一行命令全自动跑完」的爽感；但跑上几个月就会发现，外部网页改版、网络抖动、Token 过期全是常态。',
          '真正能长期服役的自动化流程，往往需要在三个地方下笨功夫：',
          '• 幂等与可重入：就像 enlearn 导入词库或批量同步任务一样，中途断掉再跑一次，绝不能产生脏数据或重复副作用。',
          '• 显式的状态检查点：把每一步的中间产物（JSON / SQLite 记录）落盘，出错时能直接从失败阶段恢复，而不是从头再来。',
          '• 失败时「体面停机」：与其拿着残缺数据往下硬跑，不如在校验不通过时立刻抛出明确原因并保留现场。'
        ],
        codeSketch: `// 宁可慢半秒做校验，不在脏数据上裸奔
if (!validateStageOutput(stage1Result)) {
  saveCheckpoint("stage1.failed.json", stage1Result);
  throw new RetryableWorkflowError("Stage 1 schema mismatch");
}`,
        tags: ['Workflow', 'Idempotency', 'Reliability'],
        paperStyle: 'blue-grid',
        pinType: 'pin',
        rotation: 1.4,
        doodleHint: 'retry safe & idempotent!'
      },
      {
        id: 'note-03',
        number: 'NOTE #03',
        date: '2026.07 · BROWSER AUTO',
        title: '如何让浏览器自动化更可靠？',
        excerpt: '与其每次启动全新无头浏览器去和复杂的登录墙、滑块验证码硬碰硬，不如通过 CDP / 浏览器扩展直接复用真实用户会话，并配合语义化树（Accessibility Tree）与确定性等待策略。',
        fullThoughts: [
          '从早年用 Kotlin + Selenium 写 bili_auto_tool，到现在结合 Playwright、CDP 与 WebBridge 控制真实浏览器，浏览器自动化的思路变了很多：',
          '1. 复用真实上下文：很多内部系统（BI 报表、OA、复杂后台）最难的不是点按钮，而是多因素登录态。通过接管已登录的浏览器会话，可以直接跳过 80% 的脆弱环节。',
          '2. 告别脆弱的死等 (sleep)：用网络空闲判定、DOM 状态断言或拦截底层接口响应，替代硬编码的 `sleep(5000)`。',
          '3. 能走接口或导出流就别纯靠抠 DOM：先用浏览器环境拿到鉴权上下文或触发原生导出，再用脚本做后续解析，稳定度会提升一个数量级。'
        ],
        codeSketch: `// 连接到已就绪的浏览器上下文，等待确定性条件而非盲目 sleep
const page = await browserContext.newPage();
await page.goto(targetUrl, { waitUntil: "domcontentloaded" });
await page.locator('[role="button"][name="导出"]').waitFor({ state: "visible" });`,
        tags: ['Playwright', 'CDP', 'Browser Automation'],
        paperStyle: 'cream-lined',
        pinType: 'clip',
        rotation: -1.1,
        doodleHint: 'real session > headless fight'
      },
      {
        id: 'note-04',
        number: 'NOTE #04',
        date: '2026.05 · ENGINEERING',
        title: '技术方案不止要能跑，还要能维护。',
        excerpt: '写出能跑的 Demo 只需要一个周末，但让半年后的自己还能一眼看懂、5 分钟改完上线，靠的是克制的依赖、清晰的数据与视图分离，以及恰到好处的文档。',
        fullThoughts: [
          '翻看自己过去几年的仓库（比如从早期 Ktor / Gin 版一路演进到多端部署的 douyinVd，或是 aiwechat-vercel），最深的体会是：',
          '• 少即是多：能用标准库或单文件搞定的边缘服务（如 DenoProxy），绝不引入十几个庞大的中间件。',
          '• 配置与逻辑解耦：把经常变动的环境变量、模型参数、业务规则抽离出来，改需求时不用在业务代码里大海捞针。',
          '• 给未来的自己留张字条：哪怕是个人项目，在 README 或 CLAUDE.md 里写清楚启动命令、目录职责和踩坑记录，几个月后回来迭代时会感谢当时的自己。'
        ],
        tags: ['Software Engineering', 'Maintainability', 'Clean Architecture'],
        paperStyle: 'kraft-memo',
        pinType: 'tape',
        rotation: 1.7,
        doodleHint: 'keep dependencies light'
      },
      {
        id: 'note-05',
        number: 'NOTE #05',
        date: '2026.09 · PHILOSOPHY',
        title: '把重复工作交给机器，把时间留给更重要的事。',
        excerpt: '写代码的乐趣之一，就是向一切机械重复的劳动发起小小的「叛逆」——无论是自动导出报表、批量处理文件，还是让 Agent 先帮我跑完第一轮排查。',
        fullThoughts: [
          '每次遇到需要反复点鼠标、复制粘贴、核对表格或者配环境的事情，脑子里总会冒出一个念头：「能不能写个脚本把它干掉？」',
          '有时候写自动化工具花掉的 3 个小时，表面上看比手动操作 15 分钟更久；但它带来的不只是省下以后的几十次 15 分钟——更重要的是，它把人从枯燥、易错的机械劳动里解放出来，去思考真正有趣的问题。',
          '这也是我一直折腾 AI Agent、自动化工具链和各种小玩具的初衷：把好奇心写进代码里，让机器去做机器擅长的事。'
        ],
        tags: ['Automation', 'Developer Mindset', 'Productivity'],
        paperStyle: 'olive-card',
        pinType: 'tape',
        rotation: -1.3,
        doodleHint: 'automate the boring stuff ✳'
      }
    ]
  },

  now: {
    titleEn: 'currently on my desk',
    titleZh: '最近在折腾什么',
    subtitle: '这张大便签记录了我近期正在动手实验和深入研究的方向（数据由 src/config/siteConfig.ts 驱动，随探索进度持续勾选更新）。',
    cornerNote: 'work in progress...',
    updatedLabel: 'DESK SNAPSHOT · AUTUMN 2026',
    items: [
      {
        id: 'now-01',
        text: 'AI Agent 的架构与技能设计。',
        detail: '探索轻量、可组合的 Agent Skills 规范与多阶段 Pipeline 设计（如本地 OCR 技能包、UI 截图转代码流水线），让智能体具备可靠的领域专业能力。',
        tag: 'Agent Architecture',
        status: 'building'
      },
      {
        id: 'now-02',
        text: '智能体的工具权限和安全隔离。',
        detail: '研究 MCP 工具调用与本地命令执行时的最小权限边界、沙箱隔离策略与高风险操作确认机制，兼顾自动化效率与系统安全。',
        tag: 'Security & Sandbox',
        status: 'exploring'
      },
      {
        id: 'now-03',
        text: '浏览器自动化与任务执行。',
        detail: '结合 Playwright、CDP 与真实浏览器会话桥接（WebBridge），攻克复杂业务系统的长链路自动化操作与数据采集。',
        tag: 'Browser Agent',
        status: 'building'
      },
      {
        id: 'now-04',
        text: '大模型与企业业务流程的集成。',
        detail: '将 LLM、多维表格/文档协作工具与内部 ERP / BI / CRM 系统连接起来，落地真正能减少日常手工统计与催办成本的智能助手。',
        tag: 'Enterprise AI',
        status: 'iterating'
      },
      {
        id: 'now-05',
        text: '开发环境和自动化工具链的优化。',
        detail: '持续打磨 Linux / WSL2 终端工作流、TUI 效率工具与 AI 辅助编程配置，让从「冒出想法」到「验证上线」的路径更短。',
        tag: 'DevEx & Toolchain',
        status: 'iterating'
      }
    ],
    sideDoodleNote: 'Coffee status: 2nd cup today ☕ · Always open to new ideas!'
  },

  contact: {
    titleEn: 'say hello!',
    titleZh: '保持联系',
    message: '如果你也喜欢折腾技术、研究 AI，或者正在做一些有趣的项目，欢迎来交流。',
    githubDisplay: 'github.com/pwh-pwh',
    githubUrl: 'https://github.com/pwh-pwh',
    /**
     * 其他联系方式（邮箱、博客、社交账号）：
     * 默认 enabled: false 自动在页面上隐藏，绝不展示虚假占位账号。
     * 当你补充真实信息后，只需将对应项的 enabled 改为 true 并填入 url/handle 即可自动显示。
     */
    socials: [
      {
        id: 'email',
        label: 'Email',
        handle: 'your-email@example.com',
        url: 'mailto:your-email@example.com',
        enabled: false,
        note: '在 src/config/siteConfig.ts 中填入真实邮箱并将 enabled 设为 true 即可开启显示'
      },
      {
        id: 'blog',
        label: 'Blog',
        handle: 'blog.example.com',
        url: 'https://',
        enabled: false,
        note: '在 src/config/siteConfig.ts 中填入真实独立博客地址并将 enabled 设为 true 即可开启显示'
      },
      {
        id: 'x-twitter',
        label: 'X / Twitter',
        handle: '@your_handle',
        url: 'https://',
        enabled: false,
        note: '在 src/config/siteConfig.ts 中填入社交账号并将 enabled 设为 true 即可开启显示'
      }
    ],
    footerText: 'Made with curiosity & a little bit of coffee.',
    colophon: 'Handcrafted Digital Notebook · Built with React, TypeScript & SVG Ink Sketches'
  }
}
