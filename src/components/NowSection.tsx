import React, { useState } from 'react'
import { Compass, Sparkles } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { SketchUnderline } from './doodles/NotebookDoodles'

export const NowSection: React.FC = () => {
  const { now } = siteConfig
  const [expandedId, setExpandedId] = useState<string | null>(now.items[0]?.id || null)

  const getStatusBadge = (status: 'exploring' | 'building' | 'iterating') => {
    switch (status) {
      case 'building':
        return {
          text: 'BUILDING',
          cls: 'bg-accent-olive/15 text-accent-olive border-accent-olive/40'
        }
      case 'exploring':
        return {
          text: 'EXPLORING',
          cls: 'bg-accent-brick/15 text-accent-brick border-accent-brick/40'
        }
      case 'iterating':
        return {
          text: 'ITERATING',
          cls: 'bg-accent-blue/70 text-accent-blueInk border-accent-blueInk/40'
        }
    }
  }

  return (
    <section
      id="now"
      className="py-16 sm:py-24 relative"
      aria-labelledby="now-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 模块标题：currently on my desk */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-mono text-xs text-accent-olive tracking-widest uppercase block mb-1">
              NOTEBOOK PAGE #05 · NOW PAGE
            </span>
            <h2
              id="now-heading"
              className="font-hand text-4xl sm:text-5xl text-ink font-bold tracking-wide inline-block"
            >
              {now.titleEn}
              <SketchUnderline className="w-52 h-3 text-accent-olive mt-0.5" color="#556B45" />
            </h2>
          </div>

          <p className="font-handZh text-2xl text-ink-secondary">
            「{now.titleZh}」
          </p>
        </div>

        {/* 一张较大的手绘桌面工作台便签 */}
        <div className="relative bg-[#FBF4D8] sketch-box shadow-paper-hover p-6 sm:p-10 lg:p-12 rotate-[-0.4deg] hover:rotate-0 transition-transform duration-300">
          {/* 左上与右上双胶带固定 */}
          <div
            className="washi-tape absolute -top-3.5 left-10 sm:left-16 w-32 h-7 -rotate-3 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="washi-tape washi-tape-olive absolute -top-3.5 right-10 sm:right-16 w-32 h-7 rotate-2 pointer-events-none"
            aria-hidden="true"
          />

          {/* 便签顶部日期栏与副标题 */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b-2 border-dashed border-ink/25">
            <div className="flex items-center gap-2 font-mono text-xs text-ink-secondary">
              <Compass className="w-4 h-4 text-accent-brick" />
              <span>{now.updatedLabel}</span>
            </div>
            <span className="font-mono text-[11px] text-ink-muted">
              SOURCE: src/config/siteConfig.ts
            </span>
          </div>

          <p className="font-body text-sm sm:text-base text-ink-secondary mb-6">
            {now.subtitle}
          </p>

          {/* 五大近期探索方向列表（可点击展开查看具体折腾细节） */}
          <div className="space-y-3.5">
            {now.items.map((item, idx) => {
              const isExpanded = expandedId === item.id
              const badge = getStatusBadge(item.status)
              return (
                <div
                  key={item.id}
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setExpandedId(isExpanded ? null : item.id)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                  className={`p-4 sm:p-5 rounded-lg border transition-all cursor-pointer ${
                    isExpanded
                      ? 'bg-paper-sheet border-ink shadow-sm'
                      : 'bg-paper-sheet/65 border-ink/25 hover:bg-paper-sheet'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      {/* 手绘复选框与序号 */}
                      <span
                        className={`w-6 h-6 rounded border-2 border-ink flex items-center justify-center font-hand text-lg font-bold ${
                          isExpanded ? 'bg-accent-yellow text-ink' : 'bg-paper-bg text-ink-muted'
                        }`}
                        aria-hidden="true"
                      >
                        {isExpanded ? '✓' : idx + 1}
                      </span>

                      <h3 className="font-serifZh text-base sm:text-lg font-bold text-ink">
                        {item.text}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 pl-9 sm:pl-0">
                      <span className="font-mono text-[11px] text-ink-muted hidden sm:inline">
                        #{item.tag}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-[10px] font-mono font-semibold border rounded ${badge.cls}`}
                      >
                        {badge.text}
                      </span>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-3 pl-9 pr-2 pt-2.5 border-t border-dashed border-ink/15 font-body text-sm text-ink-secondary leading-relaxed">
                      {item.detail}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* 卡片角落手写小字：work in progress... */}
          <div className="mt-8 pt-4 border-t-2 border-dashed border-ink/20 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary">
              <Sparkles className="w-3.5 h-3.5 text-accent-olive" />
              <span>{now.sideDoodleNote}</span>
            </div>

            <div className="relative inline-block">
              <span className="font-hand text-2xl sm:text-3xl font-bold text-accent-brick tracking-wide -rotate-2 inline-block">
                {now.cornerNote}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
