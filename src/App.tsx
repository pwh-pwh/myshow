import React, { useState, useEffect } from 'react'
import { PaperTextureMode, siteConfig } from './config/siteConfig'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { TechStackSection } from './components/TechStackSection'
import { ProjectsSection } from './components/ProjectsSection'
import { NotesSection } from './components/NotesSection'
import { NowSection } from './components/NowSection'
import { ContactFooter } from './components/ContactFooter'
import { PencilDivider } from './components/doodles/NotebookDoodles'

export const App: React.FC = () => {
  const [paperMode, setPaperMode] = useState<PaperTextureMode>(
    siteConfig.theme.defaultPaperMode
  )

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-notebook')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const paperClass =
    paperMode === 'grid'
      ? 'paper-surface-grid'
      : paperMode === 'dotted'
      ? 'paper-surface-dotted'
      : paperMode === 'ruled'
      ? 'paper-surface-ruled'
      : 'paper-surface-plain'

  return (
    <div className={`min-h-screen ${paperClass} text-ink relative selection:bg-accent-yellow selection:text-ink`}>
      {/* 跳转到主内容无障碍链接 */}
      <a
        href="#main-notebook"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-yellow focus:text-ink focus:font-mono focus:text-xs focus:rounded"
      >
        跳转到手账正文
      </a>

      {/* 顶部手账页眉导航 */}
      <Navbar paperMode={paperMode} onChangePaperMode={setPaperMode} />

      {/* 手账主体内容区 */}
      <main id="main-notebook">
        <HeroSection />

        <div className="max-w-5xl mx-auto px-6">
          <PencilDivider label="page 01 · about" className="my-2" />
        </div>

        <div className="reveal-notebook">
          <AboutSection />
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <PencilDivider label="page 02 · toolbox" className="my-2" />
        </div>

        <div className="reveal-notebook">
          <TechStackSection />
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <PencilDivider label="page 03 · experiments" className="my-2" />
        </div>

        <div className="reveal-notebook">
          <ProjectsSection />
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <PencilDivider label="page 04 · desk notes" className="my-2" />
        </div>

        <div className="reveal-notebook">
          <NotesSection />
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <PencilDivider label="page 05 · currently exploring" className="my-2" />
        </div>

        <div className="reveal-notebook">
          <NowSection />
        </div>
      </main>

      <div className="max-w-5xl mx-auto px-6">
        <PencilDivider label="page 06 · say hello" className="my-2" />
      </div>

      {/* 页脚与保持联系模块 */}
      <ContactFooter />
    </div>
  )
}

export default App
