import React from 'react'
import { ArchitectureDiagramType } from '../../config/siteConfig'

interface Props {
  type: ArchitectureDiagramType
  className?: string
}

/**
 * 为每个真实 GitHub 仓库定制的手绘工程架构草图 (SVG Sketch Diagrams)
 * 模拟开发者在方格手账纸上用钢笔与马克笔画出的架构流转图
 */
export const ProjectArchitectureSketch: React.FC<Props> = ({ type, className = 'w-full h-36' }) => {
  switch (type) {
    case 'aiwechat-serverless':
      return (
        <svg viewBox="0 0 380 120" fill="none" className={className} role="img" aria-label="aiwechat-vercel 架构草图">
          {/* 微信用户端 */}
          <rect x="10" y="34" width="76" height="52" rx="8" fill="#F8E8A0" fillOpacity="0.6" stroke="#282923" strokeWidth="1.8" />
          <text x="48" y="56" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">WeChat MP</text>
          <text x="48" y="72" textAnchor="middle" fill="#4E5044" fontFamily="Noto Sans SC, sans-serif" fontSize="9.5">公众号消息</text>

          {/* 箭头 1 */}
          <path d="M88 60H132" stroke="#282923" strokeWidth="1.7" strokeLinecap="round" strokeDasharray="3 2" />
          <path d="M126 55L133 60L126 65" stroke="#282923" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <text x="110" y="51" textAnchor="middle" fill="#B8523B" fontFamily="Caveat, cursive" fontSize="12">/api/wx</text>

          {/* Vercel Serverless Go */}
          <rect x="136" y="22" width="106" height="76" rx="10" fill="#FBF9F3" stroke="#282923" strokeWidth="2" />
          <text x="189" y="44" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fontWeight="600">Vercel Func (Go)</text>
          <rect x="148" y="54" width="82" height="32" rx="5" fill="#DCEBF5" fillOpacity="0.7" stroke="#396482" strokeWidth="1.3" strokeDasharray="3 2" />
          <text x="189" y="69" textAnchor="middle" fill="#396482" fontFamily="JetBrains Mono, monospace" fontSize="9">Vercel KV Redis</text>
          <text x="189" y="81" textAnchor="middle" fill="#4E5044" fontFamily="Noto Sans SC, sans-serif" fontSize="8.5">会话状态缓存</text>

          {/* 箭头 2 */}
          <path d="M244 45L282 32M244 60H282M244 75L282 88" stroke="#556B45" strokeWidth="1.6" strokeLinecap="round" />

          {/* 多模型路由 */}
          <rect x="285" y="16" width="84" height="26" rx="5" fill="#EFEAD8" stroke="#282923" strokeWidth="1.5" />
          <text x="327" y="33" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5">OpenAI / GPT</text>

          <rect x="285" y="47" width="84" height="26" rx="5" fill="#EFEAD8" stroke="#282923" strokeWidth="1.5" />
          <text x="327" y="64" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5">Qwen / Spark</text>

          <rect x="285" y="78" width="84" height="26" rx="5" fill="#EFEAD8" stroke="#282923" strokeWidth="1.5" />
          <text x="327" y="95" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5">Gemini API</text>
        </svg>
      )

    case 'local-ocr-skill':
      return (
        <svg viewBox="0 0 380 120" fill="none" className={className} role="img" aria-label="local-ocr 技能架构草图">
          {/* Agent Skill Trigger */}
          <rect x="10" y="32" width="80" height="56" rx="8" fill="#DCEBF5" fillOpacity="0.65" stroke="#282923" strokeWidth="1.8" />
          <text x="50" y="54" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">Agent Skill</text>
          <text x="50" y="71" textAnchor="middle" fill="#396482" fontFamily="JetBrains Mono, monospace" fontSize="8.5">scripts/ocr</text>

          <path d="M92 60H126" stroke="#282923" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M121 55L127 60L121 65" stroke="#282923" strokeWidth="1.7" strokeLinecap="round" />

          {/* Doctor & Prebuilt */}
          <rect x="130" y="20" width="112" height="80" rx="9" fill="#FBF9F3" stroke="#282923" strokeWidth="1.9" />
          <text x="186" y="40" textAnchor="middle" fill="#B8523B" fontFamily="Caveat, cursive" fontSize="14" fontWeight="700">Auto Doctor Check</text>
          <text x="186" y="58" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5">ocr-rs (Rust)</text>
          <rect x="142" y="66" width="88" height="24" rx="4" fill="#F8E8A0" fillOpacity="0.65" stroke="#282923" strokeWidth="1.2" />
          <text x="186" y="82" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="8.5">PP-OCRv6 + MNN</text>

          <path d="M244 60H278" stroke="#556B45" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M273 55L279 60L273 65" stroke="#556B45" strokeWidth="1.8" strokeLinecap="round" />

          {/* JSON Output */}
          <rect x="282" y="28" width="88" height="64" rx="8" fill="#EFEAD8" stroke="#282923" strokeWidth="1.8" />
          <text x="326" y="48" textAnchor="middle" fill="#556B45" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">--format json</text>
          <text x="326" y="64" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8.5">{'{"ok":true,'}</text>
          <text x="326" y="77" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8.5">{'"lines":[...]}'}</text>
        </svg>
      )

    case 'mcp-servers':
      return (
        <svg viewBox="0 0 380 120" fill="none" className={className} role="img" aria-label="MCP Servers 架构草图">
          {/* Claude / Agent Host */}
          <rect x="10" y="34" width="82" height="52" rx="8" fill="#EFEAD8" stroke="#282923" strokeWidth="1.8" />
          <text x="51" y="56" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">LLM Client</text>
          <text x="51" y="72" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8.5">Claude / Host</text>

          {/* stdio bidirectional */}
          <path d="M95 54H142M142 66H95" stroke="#B8523B" strokeWidth="1.7" strokeLinecap="round" />
          <text x="118" y="47" textAnchor="middle" fill="#B8523B" fontFamily="JetBrains Mono, monospace" fontSize="8.5">stdio MCP</text>

          {/* FastMCP + Zod */}
          <rect x="145" y="24" width="102" height="72" rx="9" fill="#F8E8A0" fillOpacity="0.55" stroke="#282923" strokeWidth="1.9" />
          <text x="196" y="46" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fontWeight="600">FastMCP + Zod</text>
          <text x="196" y="63" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8.5">Schema Validation</text>
          <text x="196" y="79" textAnchor="middle" fill="#556B45" fontFamily="Caveat, cursive" fontSize="13">Bun / TS Runtime</text>

          <path d="M249 46L282 36M249 74L282 84" stroke="#282923" strokeWidth="1.6" strokeLinecap="round" />

          {/* Two tools */}
          <rect x="285" y="18" width="85" height="36" rx="6" fill="#DCEBF5" fillOpacity="0.7" stroke="#282923" strokeWidth="1.6" />
          <text x="327" y="34" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">Bitget API</text>
          <text x="327" y="46" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">getTokenPrice</text>

          <rect x="285" y="64" width="85" height="36" rx="6" fill="#FBF9F3" stroke="#282923" strokeWidth="1.6" />
          <text x="327" y="80" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">expr-eval</text>
          <text x="327" y="92" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">{'cal(exp) -> PI/E'}</text>
        </svg>
      )

    case 'ai-gui-desktop':
      return (
        <svg viewBox="0 0 380 120" fill="none" className={className} role="img" aria-label="ai-gui 桌面应用架构草图">
          {/* Floating Icon */}
          <circle cx="46" cy="60" r="26" fill="#F8E8A0" stroke="#282923" strokeWidth="1.9" />
          <text x="46" y="57" textAnchor="middle" fill="#282923" fontFamily="Caveat, cursive" fontSize="14" fontWeight="700">Float</text>
          <text x="46" y="71" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">Mini Icon</text>

          <path d="M75 60H116" stroke="#282923" strokeWidth="1.7" strokeDasharray="3 2" strokeLinecap="round" />
          <text x="96" y="51" textAnchor="middle" fill="#B8523B" fontFamily="Caveat, cursive" fontSize="12">toggle</text>

          {/* Wails Shell */}
          <rect x="120" y="22" width="124" height="76" rx="9" fill="#FBF9F3" stroke="#282923" strokeWidth="1.9" />
          <text x="182" y="42" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">Wails (Go + Vue3)</text>
          <rect x="132" y="50" width="100" height="36" rx="5" fill="#DCEBF5" fillOpacity="0.55" stroke="#396482" strokeWidth="1.3" />
          <text x="182" y="66" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="8.5">PrimeVue Chat UI</text>
          <text x="182" y="79" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">sample.json config</text>

          <path d="M246 60H282" stroke="#556B45" strokeWidth="1.7" strokeLinecap="round" />

          {/* Multi providers */}
          <rect x="285" y="26" width="84" height="68" rx="8" fill="#EFEAD8" stroke="#282923" strokeWidth="1.7" />
          <text x="327" y="46" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">LLM Providers</text>
          <text x="327" y="62" textAnchor="middle" fill="#4E5044" fontFamily="Noto Sans SC, sans-serif" fontSize="9">OpenAI / 千帆</text>
          <text x="327" y="78" textAnchor="middle" fill="#4E5044" fontFamily="Noto Sans SC, sans-serif" fontSize="9">Kimi / 星火 / 千问</text>
        </svg>
      )

    case 'deno-proxy-edge':
      return (
        <svg viewBox="0 0 380 120" fill="none" className={className} role="img" aria-label="DenoProxy 架构草图">
          <rect x="12" y="28" width="86" height="64" rx="8" fill="#EFEAD8" stroke="#282923" strokeWidth="1.8" />
          <text x="55" y="52" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">HTTP Client</text>
          <text x="55" y="68" textAnchor="middle" fill="#B8523B" fontFamily="JetBrains Mono, monospace" fontSize="8.5">?setUrl=target</text>
          <text x="55" y="81" textAnchor="middle" fill="#396482" fontFamily="JetBrains Mono, monospace" fontSize="8.5">/proxy/path</text>

          <path d="M100 60H142" stroke="#282923" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M136 55L143 60L136 65" stroke="#282923" strokeWidth="1.8" strokeLinecap="round" />

          <rect x="146" y="22" width="110" height="76" rx="10" fill="#F8E8A0" fillOpacity="0.6" stroke="#282923" strokeWidth="2" />
          <text x="201" y="45" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fontWeight="600">Deno Edge Proxy</text>
          <text x="201" y="63" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8.5">Dynamic Target State</text>
          <text x="201" y="80" textAnchor="middle" fill="#556B45" fontFamily="Caveat, cursive" fontSize="13.5">Deno Deploy :8000</text>

          <path d="M258 60H294" stroke="#556B45" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M288 55L295 60L288 65" stroke="#556B45" strokeWidth="1.8" strokeLinecap="round" />

          <rect x="298" y="32" width="72" height="56" rx="8" fill="#DCEBF5" fillOpacity="0.65" stroke="#282923" strokeWidth="1.8" />
          <text x="334" y="56" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">Upstream</text>
          <text x="334" y="72" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8.5">Target API</text>
        </svg>
      )

    case 'memkit-proc':
      return (
        <svg viewBox="0 0 380 120" fill="none" className={className} role="img" aria-label="memkit 内存扫描框架草图">
          <rect x="10" y="24" width="96" height="72" rx="8" fill="#DCEBF5" fillOpacity="0.6" stroke="#282923" strokeWidth="1.8" />
          <text x="58" y="45" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">/proc/&lt;pid&gt;/</text>
          <text x="58" y="62" textAnchor="middle" fill="#396482" fontFamily="JetBrains Mono, monospace" fontSize="8.5">maps · mem · pagemap</text>
          <text x="58" y="78" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">process_vm_readv</text>

          <path d="M108 60H144" stroke="#282923" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M138 55L145 60L138 65" stroke="#282923" strokeWidth="1.8" strokeLinecap="round" />

          <rect x="148" y="20" width="112" height="80" rx="9" fill="#FBF9F3" stroke="#282923" strokeWidth="2" />
          <text x="204" y="41" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">memkit (Pure Go)</text>
          <text x="204" y="58" textAnchor="middle" fill="#556B45" fontFamily="JetBrains Mono, monospace" fontSize="8.5">Worker Pool Scanner</text>
          <text x="204" y="74" textAnchor="middle" fill="#B8523B" fontFamily="JetBrains Mono, monospace" fontSize="8.5">Range Filter: Heap/Java</text>

          <path d="M262 60H292" stroke="#556B45" strokeWidth="1.8" strokeLinecap="round" />

          <rect x="295" y="26" width="75" height="68" rx="8" fill="#F8E8A0" fillOpacity="0.65" stroke="#282923" strokeWidth="1.8" />
          <text x="332" y="48" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">AOB Search</text>
          <text x="332" y="63" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">Pointer Chain</text>
          <text x="332" y="78" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">Patch &amp; Fuzzy</text>
        </svg>
      )

    case 'enlearn-tui':
      return (
        <svg viewBox="0 0 380 120" fill="none" className={className} role="img" aria-label="enlearn TUI 架构草图">
          <rect x="10" y="30" width="82" height="60" rx="7" fill="#EFEAD8" stroke="#282923" strokeWidth="1.8" />
          <text x="51" y="54" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">ECDICT</text>
          <text x="51" y="70" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">CET / IELTS / GRE</text>

          <path d="M94 60H130" stroke="#282923" strokeWidth="1.7" strokeLinecap="round" />

          <rect x="133" y="24" width="110" height="72" rx="9" fill="#FBF9F3" stroke="#282923" strokeWidth="1.9" />
          <text x="188" y="45" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">Local SQLite DB</text>
          <rect x="145" y="53" width="86" height="31" rx="5" fill="#F8E8A0" fillOpacity="0.65" stroke="#282923" strokeWidth="1.3" />
          <text x="188" y="68" textAnchor="middle" fill="#B8523B" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">SM-2 Scheduler</text>
          <text x="188" y="80" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="7.5">score 0..5 interval</text>

          <path d="M245 60H280" stroke="#556B45" strokeWidth="1.7" strokeLinecap="round" />

          <rect x="283" y="26" width="86" height="68" rx="8" fill="#DCEBF5" fillOpacity="0.65" stroke="#282923" strokeWidth="1.8" />
          <text x="326" y="48" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">Terminal TUI</text>
          <text x="326" y="64" textAnchor="middle" fill="#396482" fontFamily="JetBrains Mono, monospace" fontSize="8.5">j/k · 10-word batch</text>
          <text x="326" y="79" textAnchor="middle" fill="#4E5044" fontFamily="Noto Sans SC, sans-serif" fontSize="8.5">错词组内强化</text>
        </svg>
      )

    case 'douyin-serverless':
      return (
        <svg viewBox="0 0 380 120" fill="none" className={className} role="img" aria-label="douyinVd 多端无水印服务草图">
          <rect x="10" y="30" width="84" height="60" rx="8" fill="#F8E8A0" fillOpacity="0.6" stroke="#282923" strokeWidth="1.8" />
          <text x="52" y="53" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">Share Link</text>
          <text x="52" y="69" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">?url= / ?data&amp;url=</text>

          <path d="M96 60H132" stroke="#282923" strokeWidth="1.8" strokeLinecap="round" />

          <rect x="135" y="20" width="114" height="80" rx="9" fill="#FBF9F3" stroke="#282923" strokeWidth="2" />
          <text x="192" y="41" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">Deno / TS Parser</text>
          <text x="192" y="58" textAnchor="middle" fill="#556B45" fontFamily="JetBrains Mono, monospace" fontSize="8.5">CF Workers · Vercel</text>
          <text x="192" y="73" textAnchor="middle" fill="#396482" fontFamily="JetBrains Mono, monospace" fontSize="8.5">Deno Deploy · Docker</text>
          <text x="192" y="88" textAnchor="middle" fill="#B8523B" fontFamily="Caveat, cursive" fontSize="12">Multi-Runtime Edge</text>

          <path d="M251 46L283 36M251 74L283 84" stroke="#282923" strokeWidth="1.6" strokeLinecap="round" />

          <rect x="286" y="18" width="84" height="36" rx="6" fill="#DCEBF5" fillOpacity="0.7" stroke="#282923" strokeWidth="1.6" />
          <text x="328" y="35" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">Web Preview</text>
          <text x="328" y="47" textAnchor="middle" fill="#4E5044" fontFamily="Noto Sans SC, sans-serif" fontSize="8">视频/图文直下</text>

          <rect x="286" y="64" width="84" height="36" rx="6" fill="#EFEAD8" stroke="#282923" strokeWidth="1.6" />
          <text x="328" y="81" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">JSON Schema</text>
          <text x="328" y="93" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">DouyinVideoInfo</text>
        </svg>
      )

    case 'android-lsposed':
      return (
        <svg viewBox="0 0 380 120" fill="none" className={className} role="img" aria-label="FakePers 与 fuck_shake LSPosed 架构草图">
          <rect x="10" y="30" width="82" height="60" rx="8" fill="#EFEAD8" stroke="#282923" strokeWidth="1.8" />
          <text x="51" y="53" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">Target App</text>
          <text x="51" y="69" textAnchor="middle" fill="#4E5044" fontFamily="Noto Sans SC, sans-serif" fontSize="8.5">权限检查 / 陀螺仪</text>

          <path d="M94 60H130" stroke="#B8523B" strokeWidth="1.8" strokeLinecap="round" />

          <rect x="133" y="20" width="114" height="80" rx="10" fill="#F8E8A0" fillOpacity="0.6" stroke="#282923" strokeWidth="2" />
          <text x="190" y="41" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">YukiHook / LSPosed</text>
          <text x="190" y="58" textAnchor="middle" fill="#B8523B" fontFamily="JetBrains Mono, monospace" fontSize="8.5">FakePers · fuck_shake</text>
          <text x="190" y="75" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">Kotlin 2.x + Compose</text>

          <path d="M249 44L282 35M249 76L282 85" stroke="#556B45" strokeWidth="1.7" strokeLinecap="round" />

          <rect x="285" y="16" width="85" height="38" rx="6" fill="#DCEBF5" fillOpacity="0.7" stroke="#282923" strokeWidth="1.6" />
          <text x="327" y="33" textAnchor="middle" fill="#556B45" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="600">GRANTED ✓</text>
          <text x="327" y="46" textAnchor="middle" fill="#4E5044" fontFamily="Noto Sans SC, sans-serif" fontSize="8">返回空通讯录/轨迹</text>

          <rect x="285" y="64" width="85" height="38" rx="6" fill="#FBF9F3" stroke="#282923" strokeWidth="1.6" />
          <text x="327" y="81" textAnchor="middle" fill="#B8523B" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="600">SHAKE BLOCKED</text>
          <text x="327" y="94" textAnchor="middle" fill="#4E5044" fontFamily="Noto Sans SC, sans-serif" fontSize="8">拦截开屏摇一摇</text>
        </svg>
      )

    case 'walrus-rust':
      return (
        <svg viewBox="0 0 380 120" fill="none" className={className} role="img" aria-label="walrus_rs 与 walrus_store 架构草图">
          <rect x="10" y="28" width="88" height="64" rx="8" fill="#DCEBF5" fillOpacity="0.65" stroke="#282923" strokeWidth="1.8" />
          <text x="54" y="51" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">walrus_store</text>
          <text x="54" y="66" textAnchor="middle" fill="#396482" fontFamily="JetBrains Mono, monospace" fontSize="8.5">Iced Desktop GUI</text>
          <text x="54" y="80" textAnchor="middle" fill="#4E5044" fontFamily="Noto Sans SC, sans-serif" fontSize="8">上传 / 搜索 / 下载</text>

          <path d="M100 60H136" stroke="#282923" strokeWidth="1.8" strokeLinecap="round" />

          <rect x="139" y="22" width="108" height="76" rx="9" fill="#F8E8A0" fillOpacity="0.58" stroke="#282923" strokeWidth="2" />
          <text x="193" y="43" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">walrus_rs (0.1.4)</text>
          <text x="193" y="59" textAnchor="middle" fill="#B8523B" fontFamily="JetBrains Mono, monospace" fontSize="8.5">Tokio + Reqwest SDK</text>
          <text x="193" y="76" textAnchor="middle" fill="#556B45" fontFamily="Caveat, cursive" fontSize="13">Published on crates.io</text>

          <path d="M249 46L282 36M249 74L282 84" stroke="#556B45" strokeWidth="1.7" strokeLinecap="round" />

          <rect x="285" y="18" width="85" height="36" rx="6" fill="#FBF9F3" stroke="#282923" strokeWidth="1.6" />
          <text x="327" y="35" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="600">Publisher Node</text>
          <text x="327" y="47" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">Store Blob / Quilt</text>

          <rect x="285" y="64" width="85" height="36" rx="6" fill="#EFEAD8" stroke="#282923" strokeWidth="1.6" />
          <text x="327" y="81" textAnchor="middle" fill="#282923" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="600">Aggregator</text>
          <text x="327" y="93" textAnchor="middle" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="8">Read Blob by ID</text>
        </svg>
      )
  }
}
