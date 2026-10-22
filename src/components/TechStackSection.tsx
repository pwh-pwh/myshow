import React, { useState } from 'react'
import { Tag, FolderGit2, Sparkles } from 'lucide-react'
import { siteConfig, TechItem } from '../config/siteConfig'
import { DoodlePushPin, SketchUnderline } from './doodles/NotebookDoodles'

export const TechStackSection: React.FC = () => {
  const { techStack } = siteConfig
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [activeSticker, setActiveSticker] = useState<{
    categoryTitle: string
    item: TechItem
  }>({
    categoryTitle: techStack.categories[0].title,
    item: techStack.categories[0].items[0]
  })

  const getToneClasses = (tone: TechItem['tone']) => {
    switch (tone) {
      case 'yellow':
        return 'bg-accent-yellow/80 border-ink/45 text-ink'
      case 'blue':
        return 'bg-accent-blue/85 border-accent-blueInk/45 text-ink'
      case 'olive':
        return 'bg-[#E3EBD8] border-accent-olive/50 text-ink'
      case 'kraft':
        return 'bg-paper-kraft/85 border-accent-kraft/50 text-ink'
      case 'cream':
      default:
        return 'bg-paper-sheet border-ink/40 text-ink'
    }
  }

  const visibleCategories =
    selectedCategory === 'all'
      ? techStack.categories
      : techStack.categories.filter((c) => c.id === selectedCategory)

  return (
    <section
      id="tech-stack"
      className="py-16 sm:py-24 relative"
      aria-labelledby="tech-stack-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 模块标题：tools I play with */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs text-accent-brick tracking-widest uppercase block mb-1">
              NOTEBOOK PAGE #02 · TOOLBOX &amp; STICKERS
            </span>
            <h2
              id="tech-stack-heading"
              className="font-hand text-4xl sm:text-5xl text-ink font-bold tracking-wide inline-block"
            >
              {techStack.titleEn}
              <SketchUnderline className="w-44 h-3 text-accent-brick mt-0.5" color="#B8523B" />
            </h2>
          </div>

          <p className="font-body text-sm text-ink-secondary max-w-xl">
            {techStack.subtitle}
          </p>
        </div>

        {/* 顶部交互便签检视板（悬停或点击任意技术贴纸时实时展示用途说明） */}
        <div className="mb-8 relative bg-paper-sheet sketch-box p-4 sm:p-5 shadow-paper flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded bg-accent-yellow/75 border border-ink/30 shrink-0 mt-0.5">
              <Tag className="w-4 h-4 text-ink" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs uppercase px-2 py-0.5 bg-paper-warm rounded border border-ink/20 text-ink-secondary">
                  {activeSticker.categoryTitle}
                </span>
                <h3 className="font-mono text-base sm:text-lg font-bold text-ink">
                  {activeSticker.item.name}
                </h3>
                <span className="font-hand text-base text-accent-brick">
                  ← 悬停或点击下方任意贴纸查看实践笔记
                </span>
              </div>
              <p className="font-body text-sm text-ink-secondary mt-1.5 leading-relaxed">
                {activeSticker.item.note}
              </p>
            </div>
          </div>

          {activeSticker.item.verifiedRepo && (
            <div className="sm:text-right shrink-0 pl-10 sm:pl-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-blue/60 border border-accent-blueInk/30 rounded font-mono text-xs text-accent-blueInk">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>关联仓库: {activeSticker.item.verifiedRepo}</span>
              </span>
            </div>
          )}
        </div>

        {/* 分类过滤标签栏 */}
        <div
          className="flex flex-wrap items-center gap-2 mb-8"
          role="tablist"
          aria-label="技术栈分类筛选"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 font-hand text-xl sketch-pill transition-all ${
              selectedCategory === 'all'
                ? 'bg-ink text-paper-sheet shadow-sketch'
                : 'bg-paper-sheet text-ink hover:bg-paper-warm'
            }`}
          >
            All Desk Stickers (19)
          </button>
          {techStack.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 font-hand text-xl sketch-pill transition-all ${
                selectedCategory === cat.id
                  ? 'bg-ink text-paper-sheet shadow-sketch'
                  : 'bg-paper-sheet text-ink hover:bg-paper-warm'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* 四大工具箱抽屉 / 桌面散落贴纸网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {visibleCategories.map((category, catIdx) => {
            const pinColors = ['#B8523B', '#556B45', '#396482', '#8B6B4A']
            return (
              <div
                key={category.id}
                className="relative bg-paper-sheet/95 sketch-card p-6 sm:p-7 flex flex-col justify-between"
              >
                {/* 顶部按钉装饰 */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <DoodlePushPin color={pinColors[catIdx % pinColors.length]} />
                </div>

                <div>
                  {/* 分类标题栏 */}
                  <div className="flex items-baseline justify-between border-b border-dashed border-ink/25 pb-3 mb-5">
                    <div>
                      <h3 className="font-hand text-3xl font-bold text-ink tracking-wide">
                        {category.title}
                      </h3>
                      <p className="font-body text-xs text-ink-muted mt-0.5">
                        {category.zhSubtitle}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest px-2 py-0.5 bg-paper-warm border border-ink/20 rounded text-ink-secondary">
                      {category.stamp}
                    </span>
                  </div>

                  {/* 散落的手写贴纸便签列表 */}
                  <div className="flex flex-wrap gap-3 sm:gap-3.5 items-center py-1">
                    {category.items.map((tech) => {
                      const isSelected = activeSticker.item.name === tech.name
                      return (
                        <button
                          key={tech.name}
                          type="button"
                          onMouseEnter={() =>
                            setActiveSticker({ categoryTitle: category.title, item: tech })
                          }
                          onFocus={() =>
                            setActiveSticker({ categoryTitle: category.title, item: tech })
                          }
                          onClick={() =>
                            setActiveSticker({ categoryTitle: category.title, item: tech })
                          }
                          style={{
                            transform: isSelected
                              ? 'rotate(0deg) translateY(-4px) scale(1.04)'
                              : `rotate(${tech.rotation}deg)`
                          }}
                          className={`group relative text-left px-4 py-2.5 rounded border-[1.5px] shadow-sticky transition-all duration-200 hover:!rotate-0 hover:-translate-y-1 hover:shadow-paper-hover ${getToneClasses(
                            tech.tone
                          )} ${
                            isSelected
                              ? 'ring-2 ring-accent-brick ring-offset-2 ring-offset-paper-sheet font-bold'
                              : ''
                          }`}
                        >
                          {/* 贴纸顶部迷你胶带 */}
                          <span
                            className="washi-tape absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 opacity-80 pointer-events-none"
                            aria-hidden="true"
                          />

                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-sm sm:text-[15px] font-semibold tracking-tight">
                              {tech.name}
                            </span>
                            {tech.verifiedRepo && (
                              <Sparkles
                                className="w-3 h-3 text-accent-brick opacity-75 group-hover:opacity-100"
                                aria-label="有公开仓库验证"
                              />
                            )}
                          </div>

                          {/* 贴纸底部简短用途提示（移动端与桌面端均清晰可读） */}
                          <p className="font-body text-[11px] text-ink-secondary line-clamp-1 max-w-[210px] mt-0.5">
                            {tech.note}
                          </p>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 卡片右下角页码手写批注 */}
                <div className="mt-5 pt-3 border-t border-dashed border-ink/15 flex items-center justify-between text-xs font-hand text-ink-muted">
                  <span>no fake skill percentages — real projects only</span>
                  <span>box #{catIdx + 1}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
