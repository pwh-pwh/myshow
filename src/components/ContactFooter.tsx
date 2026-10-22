import React, { useState } from 'react'
import { Github, ArrowUpRight, Copy, Check, ExternalLink } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import {
  DoodleCoffeeCup,
  DoodlePencil,
  SketchCircleHighlight,
  SketchUnderline
} from './doodles/NotebookDoodles'

export const ContactFooter: React.FC = () => {
  const { contact } = siteConfig
  const [copied, setCopied] = useState(false)

  // 仅渲染 enabled === true 的额外联系方式（邮箱/博客/社交账号默认隐藏，直到补充真实信息）
  const enabledSocials = contact.socials.filter((s) => s.enabled)

  const handleCopyGithub = async () => {
    try {
      await navigator.clipboard.writeText(contact.githubUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore clipboard errors
    }
  }

  return (
    <footer
      id="contact"
      className="pt-16 pb-16 sm:pt-24 sm:pb-20 relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 手账封底联络卡片 */}
        <div className="relative bg-paper-sheet sketch-box shadow-paper p-7 sm:p-12 text-center">
          {/* 顶部装饰和纸胶带 */}
          <div
            className="washi-tape washi-tape-blue absolute -top-3.5 left-1/2 -translate-x-1/2 w-36 h-7 rotate-1 pointer-events-none"
            aria-hidden="true"
          />

          <span className="font-mono text-xs text-accent-brick tracking-widest uppercase block mb-2">
            NOTEBOOK PAGE #06 · BACK COVER &amp; CONTACT
          </span>

          {/* 标题：say hello! */}
          <div className="inline-block relative mb-4">
            <h2
              id="contact-heading"
              className="font-hand text-5xl sm:text-6xl font-bold text-ink tracking-wide px-4"
            >
              {contact.titleEn}
            </h2>
            <SketchUnderline className="w-40 h-3.5 mx-auto text-accent-brick" color="#B8523B" />
          </div>

          {/* 联络文案 */}
          <p className="font-body text-base sm:text-lg text-ink-secondary max-w-xl mx-auto leading-relaxed mt-3 mb-8">
            {contact.message}
          </p>

          {/* 主 GitHub 入口按钮：github.com/pwh-pwh */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 bg-ink text-paper-sheet hover:bg-accent-brick font-mono text-sm sm:text-base font-semibold sketch-pill shadow-sketch transition-all hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
              <span>{contact.githubDisplay}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              type="button"
              onClick={handleCopyGithub}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 bg-paper-warm hover:bg-accent-yellow/75 text-ink font-mono text-xs sm:text-sm sketch-pill transition-colors"
              title="复制 GitHub 主页链接"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-accent-olive" />
                  <span className="text-accent-olive font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-ink-secondary" />
                  <span>Copy URL</span>
                </>
              )}
            </button>
          </div>

          {/* 当用户在 siteConfig.ts 中将邮箱/博客/社交账号设为 enabled: true 时自动渲染 */}
          {enabledSocials.length > 0 && (
            <div className="mt-6 pt-6 border-t border-dashed border-ink/20 flex flex-wrap items-center justify-center gap-3">
              {enabledSocials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-paper-bg hover:bg-accent-yellow/60 border border-ink/25 rounded-full font-mono text-xs text-ink transition-colors"
                >
                  <span className="font-semibold">{social.label}:</span>
                  <span>{social.handle}</span>
                  <ExternalLink className="w-3 h-3 text-ink-muted" />
                </a>
              ))}
            </div>
          )}

          {/* 手写圈注装饰 */}
          <div className="mt-8 inline-flex items-center gap-2 relative px-4 py-1">
            <SketchCircleHighlight color="#556B45" />
            <span className="relative z-10 font-hand text-xl text-accent-olive font-bold">
              open to interesting ideas &amp; collaborations ✳
            </span>
          </div>
        </div>

        {/* 页脚收尾：Made with curiosity & a little bit of coffee. + 手绘咖啡杯与铅笔 */}
        <div className="mt-12 pt-8 border-t border-dashed border-ink/25 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="doodle-hover">
              <DoodleCoffeeCup className="w-11 h-11" />
            </div>
            <div className="text-left">
              <p className="font-hand text-2xl sm:text-[26px] text-ink font-bold tracking-wide">
                {contact.footerText}
              </p>
              <p className="font-mono text-[11px] text-ink-muted">
                {contact.colophon}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-ink-muted">
            <DoodlePencil className="w-8 h-8 doodle-hover" />
            <span>© {new Date().getFullYear()} coderpwh (@pwh-pwh)</span>
            <a
              href="#top"
              className="px-2.5 py-1 bg-paper-sheet hover:bg-accent-yellow border border-ink/25 rounded font-hand text-base text-ink transition-colors"
            >
              ↑ top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
