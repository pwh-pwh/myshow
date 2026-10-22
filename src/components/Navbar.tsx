import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Sparkles } from 'lucide-react'
import { PaperTextureMode, siteConfig } from '../config/siteConfig'

interface NavbarProps {
  paperMode: PaperTextureMode
  onChangePaperMode: (mode: PaperTextureMode) => void
}

const PAPER_MODES: Array<{ key: PaperTextureMode; label: string; title: string }> = [
  { key: 'grid', label: '方格', title: '切换为工程方格手账纸' },
  { key: 'dotted', label: '点阵', title: '切换为子弹笔记点阵纸' },
  { key: 'ruled', label: '横线', title: '切换为经典横线笔记纸' },
  { key: 'plain', label: '纯纸', title: '切换为空白速写白卡纸' }
]

export const Navbar: React.FC<NavbarProps> = ({ paperMode, onChangePaperMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      const sectionIds = ['about', 'tech-stack', 'projects', 'notes', 'now', 'contact']
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 160) {
            current = id
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 主导航顺序严格对应需求：About / Projects / Tech Stack / Notes / Contact（并保留 Now 快捷锚点）
  const navLinks = [
    { id: 'about', label: 'About', zh: '关于' },
    { id: 'projects', label: 'Projects', zh: '实验' },
    { id: 'tech-stack', label: 'Tech Stack', zh: '工具箱' },
    { id: 'notes', label: 'Notes', zh: '随手记' },
    { id: 'now', label: 'Now', zh: '当下' },
    { id: 'contact', label: 'Contact', zh: '联系' }
  ]

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-paper-bg/92 backdrop-blur-sm border-b border-dashed border-ink/25 py-2.5 shadow-sm'
          : 'bg-transparent border-b border-dashed border-ink/15 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* 左侧：手绘风格小标志 coderpwh ✳ */}
          <div className="flex items-center gap-3">
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 text-ink hover:text-accent-brick transition-colors"
              aria-label="回到手账顶部 — coderpwh"
            >
              <span className="font-hand text-2xl sm:text-3xl font-bold tracking-tight">
                {siteConfig.navigation.brandName}
              </span>
              <span
                className="font-hand text-2xl sm:text-3xl text-accent-brick inline-block transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110"
                aria-hidden="true"
              >
                {siteConfig.navigation.brandSymbol}
              </span>
            </a>

            <span className="hidden xl:inline-block font-mono text-[11px] text-ink-muted border-l border-ink/20 pl-3 tracking-wider">
              {siteConfig.navigation.notebookVolume}
            </span>
          </div>

          {/* 右侧：手账页眉导航（桌面端） */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="主导航">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  data-active={isActive}
                  className={`nav-sketch-link relative px-2.5 py-1.5 font-hand text-xl lg:text-[22px] tracking-wide transition-colors ${
                    isActive ? 'text-accent-brick font-bold' : 'text-ink hover:text-accent-brick'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* 手绘笔迹下划线 */}
                  <svg
                    viewBox="0 0 110 10"
                    fill="none"
                    className="pointer-events-none absolute left-2 right-2 -bottom-0.5 h-2.5 w-[calc(100%-16px)]"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6.5C32 3.2 76 3.5 108 6.2"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      className="nav-underline-path"
                    />
                  </svg>
                </a>
              )
            })}
          </nav>

          {/* 右侧辅助：纸张底纹切换小工具 + GitHub 快捷页签 */}
          <div className="hidden sm:flex items-center gap-2.5">
            <div
              className="inline-flex items-center bg-paper-warm/80 border border-ink/25 rounded-full p-0.5 text-xs"
              role="group"
              aria-label="切换手账纸张纹理"
            >
              <span className="px-2 py-0.5 font-mono text-[10px] text-ink-muted hidden lg:inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-accent-olive" />
                纸纹
              </span>
              {PAPER_MODES.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  onClick={() => onChangePaperMode(m.key)}
                  title={m.title}
                  className={`px-2 py-0.5 rounded-full font-body text-[11px] transition-all ${
                    paperMode === m.key
                      ? 'bg-paper-sheet text-ink font-semibold shadow-sm border border-ink/20'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <a
              href={siteConfig.hero.profileCard.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-paper-sheet hover:bg-accent-yellow/60 text-ink font-mono text-xs sketch-pill transition-transform hover:-translate-y-0.5"
              title="访问 GitHub @pwh-pwh"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@pwh-pwh</span>
            </a>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-ink/30 bg-paper-sheet text-ink hover:bg-paper-warm"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? '收起导航菜单' : '展开导航菜单'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* 移动端折页式手账菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-4 bg-paper-sheet sketch-box shadow-paper space-y-3">
            <div className="flex items-center justify-between border-b border-dashed border-ink/20 pb-2">
              <span className="font-mono text-xs text-ink-muted">NOTEBOOK INDEX</span>
              <div className="flex items-center gap-1">
                {PAPER_MODES.map((m) => (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => onChangePaperMode(m.key)}
                    className={`px-2 py-0.5 rounded text-xs ${
                      paperMode === m.key
                        ? 'bg-accent-yellow text-ink font-medium border border-ink/30'
                        : 'text-ink-muted'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-baseline justify-between px-3 py-2 rounded border border-ink/15 bg-paper-bg/70 hover:bg-accent-yellow/40 transition-colors"
                >
                  <span className="font-hand text-xl font-bold text-ink">{item.label}</span>
                  <span className="text-xs text-ink-muted">{item.zh}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-dashed border-ink/20 flex items-center justify-between">
              <a
                href={siteConfig.hero.profileCard.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-blueInk underline"
              >
                <Github className="w-3.5 h-3.5" />
                github.com/pwh-pwh
              </a>
              <span className="font-hand text-sm text-ink-muted">always curious ✳</span>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
