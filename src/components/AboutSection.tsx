import React from 'react'
import { siteConfig } from '../config/siteConfig'
import {
  DoodleBolt,
  DoodleBulb,
  DoodlePaperclip,
  DoodlePencil,
  SketchArrowLoop,
  SketchUnderline
} from './doodles/NotebookDoodles'

export const AboutSection: React.FC = () => {
  const { about } = siteConfig

  // 将正文中的高亮短语渲染为荧光笔/圈选样式
  const renderHighlightedParagraph = (text: string) => {
    let parts: React.ReactNode[] = [text]

    about.highlights.forEach((phrase, idx) => {
      const nextParts: React.ReactNode[] = []
      parts.forEach((part) => {
        if (typeof part !== 'string') {
          nextParts.push(part)
          return
        }
        const split = part.split(phrase)
        split.forEach((segment, sIdx) => {
          if (segment) nextParts.push(segment)
          if (sIdx < split.length - 1) {
            nextParts.push(
              <mark
                key={`${phrase}-${idx}-${sIdx}`}
                className={
                  idx % 2 === 0
                    ? 'marker-highlight-yellow text-ink font-medium'
                    : 'marker-highlight-blue text-ink font-medium'
                }
              >
                {phrase}
              </mark>
            )
          }
        })
      })
      parts = nextParts
    })

    return parts
  }

  const renderIcon = (icon: 'bulb' | 'pencil' | 'bolt') => {
    switch (icon) {
      case 'bulb':
        return <DoodleBulb className="w-12 h-12 shrink-0" />
      case 'pencil':
        return <DoodlePencil className="w-12 h-12 shrink-0" />
      case 'bolt':
        return <DoodleBolt className="w-12 h-12 shrink-0" />
    }
  }

  return (
    <section
      id="about"
      className="py-16 sm:py-24 relative"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 模块标题：a little about me... */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-mono text-xs text-accent-olive tracking-widest uppercase block mb-1">
              {about.notebookDate}
            </span>
            <h2
              id="about-heading"
              className="font-hand text-4xl sm:text-5xl text-ink font-bold tracking-wide inline-block"
            >
              {about.titleEn}
              <SketchUnderline className="w-48 h-3 text-accent-olive mt-0.5" color="#556B45" />
            </h2>
          </div>

          <p className="font-handZh text-2xl text-ink-secondary">
            「{about.titleZh}」
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* 左侧：横线手账纸手稿区域 */}
          <div className="lg:col-span-7 relative lined-notebook-sheet sketch-box shadow-paper p-6 sm:p-10">
            {/* 右上角回形针装饰 */}
            <DoodlePaperclip className="w-7 h-12 absolute -top-4 right-8 rotate-6 pointer-events-none" />

            {/* 经典手账本左侧竖向砖红双边线 */}
            <div
              className="hidden sm:block absolute top-0 bottom-0 left-12 w-1 border-l border-r border-accent-brick/35 pointer-events-none"
              aria-hidden="true"
            />

            <div className="sm:pl-10 space-y-6">
              {/* 手账页眉手写小批注 */}
              <div className="flex items-center justify-between text-xs font-mono text-ink-muted pb-2 border-b border-dashed border-ink/20">
                <span>TOPIC: WHY I WRITE CODE &amp; TINKER</span>
                <span className="font-hand text-base text-accent-brick">page 01 ✎</span>
              </div>

              {/* 四段正文 + 页边手写批注 */}
              <div className="space-y-5">
                {about.paragraphs.map((paragraph, index) => {
                  const marginNote = about.marginalia.find((m) => m.paragraphIndex === index)
                  return (
                    <div key={index} className="space-y-2">
                      <p className="font-body text-base sm:text-[17px] text-ink leading-[2.05] tracking-normal">
                        {renderHighlightedParagraph(paragraph)}
                      </p>
                      {marginNote && (
                        <div className="pl-3 border-l-2 border-accent-olive/50 font-handZh text-lg sm:text-xl text-accent-olive">
                          {marginNote.note}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* 手写签名与手绘箭头 */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-ink/20">
                <div className="flex items-center gap-2">
                  <span className="font-hand text-2xl text-ink-secondary">
                    — written by coderpwh
                  </span>
                  <span className="font-mono text-xs text-ink-muted">(@pwh-pwh)</span>
                </div>
                <div className="flex items-center gap-2 text-accent-olive">
                  <span className="font-hand text-lg">three things I love doing</span>
                  <SketchArrowLoop className="w-14 h-9 hidden lg:block" color="#556B45" />
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：三个手绘关键词 Explore / Build / Automate（配灯泡、铅笔、闪电手绘图标） */}
          <div className="lg:col-span-5 space-y-5">
            {about.keywords.map((item, idx) => {
              const rotations = ['-rotate-1', 'rotate-1', '-rotate-[0.8deg]']
              const tapeStyles = ['', 'washi-tape-olive', 'washi-tape-blue']
              return (
                <div
                  key={item.word}
                  className={`relative bg-paper-sheet sketch-card p-5 sm:p-6 ${rotations[idx % 3]} hover:rotate-0 transition-transform duration-300`}
                >
                  <div
                    className={`washi-tape ${tapeStyles[idx % 3]} absolute -top-3 right-8 w-24 h-5 rotate-2 pointer-events-none`}
                    aria-hidden="true"
                  />

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-paper-warm/80 rounded-lg border border-ink/20 doodle-hover">
                      {renderIcon(item.icon)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-hand text-3xl font-bold text-ink tracking-wide">
                          {item.word}
                        </h3>
                        <span className="font-mono text-[11px] text-ink-muted">
                          0{idx + 1} / 03
                        </span>
                      </div>

                      <p className="font-serifZh text-sm font-semibold text-accent-brick mt-0.5">
                        {item.zhLabel}
                      </p>

                      <p className="font-body text-sm text-ink-secondary leading-relaxed mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
