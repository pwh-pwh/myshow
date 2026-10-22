import React from 'react'
import { Github, ArrowUpRight, Compass, Terminal, Sparkles } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import {
  HandDrawnDeveloperAvatar,
  SketchArrowCurved,
  SketchCircleHighlight,
  SketchUnderline
} from './doodles/NotebookDoodles'

export const HeroSection: React.FC = () => {
  const { hero } = siteConfig

  return (
    <section
      id="top"
      className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden"
      aria-label="首页主视觉手账页"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 手账页顶部编号与日期戳 */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-dashed border-ink/25 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-accent-olive" />
            <span>NOTEBOOK SPREAD #00 · DEVELOPER FIELD JOURNAL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>OWNER: {hero.profileCard.displayName}</span>
            <span className="hidden sm:inline">GITHUB: {hero.profileCard.githubUsername}</span>
          </div>
        </div>

        {/* 自然铺开的手账跨页布局 */}
        <div className="relative bg-paper-sheet/90 sketch-box shadow-paper p-6 sm:p-10 lg:p-14">
          {/* 顶部装饰和纸胶带 */}
          <div
            className="washi-tape absolute -top-3.5 left-10 sm:left-20 w-36 h-7 -rotate-2 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="washi-tape washi-tape-olive absolute -top-3 right-12 sm:right-28 w-28 h-6 rotate-3 pointer-events-none hidden sm:block"
            aria-hidden="true"
          />

          {/* 左侧装订打孔装饰（桌面端显示） */}
          <div
            className="hidden lg:flex flex-col justify-between absolute left-3.5 top-12 bottom-12 pointer-events-none"
            aria-hidden="true"
          >
            {[0, 1, 2, 3, 4, 5].map((hole) => (
              <span
                key={hole}
                className="w-3.5 h-3.5 rounded-full bg-paper-bg border border-ink/35 shadow-inner"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start lg:pl-6">
            {/* 左页：主手写标题、口号、介绍与便签 */}
            <div className="lg:col-span-7 space-y-6 relative">
              {/* 手写圈注：always curious ↗ */}
              <div className="inline-flex items-center gap-2 relative">
                <div className="relative inline-block px-3.5 py-1">
                  <SketchCircleHighlight color="#B8523B" />
                  <span className="relative z-10 font-hand text-xl sm:text-2xl font-bold text-accent-brick tracking-wide">
                    {hero.curiousCallout}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-ink-muted hidden sm:inline">
                  // keep tinkering &amp; writing notes
                </span>
              </div>

              {/* 主标题：Hi, I'm coderpwh. */}
              <div className="space-y-3">
                <p className="font-hand text-3xl sm:text-4xl lg:text-[42px] text-ink-secondary leading-tight">
                  {hero.greeting}
                </p>

                {/* 下一行更大的手写字体：“把好奇心写进代码里。” */}
                <h1 className="relative inline-block font-handZh text-4xl sm:text-6xl lg:text-[64px] text-ink leading-[1.15] tracking-wide pt-1">
                  <span className="relative z-10">{hero.mainSlogan}</span>
                  {/* 黄色荧光笔底纹与手绘双笔触下划线 */}
                  <span
                    className="absolute left-1 right-2 bottom-1.5 h-4 sm:h-5 bg-accent-yellow/75 -z-0 -rotate-1 rounded-sm"
                    aria-hidden="true"
                  />
                  <SketchUnderline
                    className="w-full h-4 text-accent-brick mt-1"
                    color="#B8523B"
                  />
                </h1>
              </div>

              {/* 英文辅助句：Building things, breaking things, learning things. */}
              <div className="flex items-center gap-3 pt-1">
                <span className="text-accent-olive font-hand text-2xl" aria-hidden="true">
                  ✎
                </span>
                <p className="font-hand text-2xl sm:text-3xl text-accent-olive font-semibold tracking-wide">
                  {hero.subSloganEn}
                </p>
              </div>

              {/* 个人介绍正文 */}
              <div className="relative pl-4 sm:pl-5 border-l-2 border-accent-brick/55 py-1 max-w-2xl">
                <p className="font-body text-base sm:text-lg text-ink leading-relaxed">
                  {hero.bio}
                </p>
              </div>

              {/* 快捷手账翻页动作区 */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper-sheet font-body text-sm sm:text-base font-medium sketch-pill shadow-sketch hover:bg-accent-brick transition-all hover:-translate-y-0.5"
                >
                  <Compass className="w-4 h-4" />
                  <span>翻阅实验记录 (Projects)</span>
                  <span className="font-hand text-lg group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>

                <a
                  href={hero.profileCard.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-paper-warm/90 hover:bg-accent-yellow/70 text-ink font-mono text-sm sketch-pill transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/pwh-pwh</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-brick" />
                </a>
              </div>

              {/* 散落在左下角的两张小便签 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {hero.floatingStickies.map((sticky, idx) => {
                  const bgClass =
                    sticky.tone === 'yellow'
                      ? 'bg-accent-yellow/75'
                      : sticky.tone === 'blue'
                      ? 'bg-accent-blue/80'
                      : 'bg-paper-kraft/80'

                  return (
                    <div
                      key={sticky.label}
                      style={{ transform: `rotate(${sticky.rotation}deg)` }}
                      className={`relative p-4 ${bgClass} border border-ink/35 rounded-sm shadow-sticky transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
                    >
                      <div
                        className="washi-tape absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 pointer-events-none"
                        aria-hidden="true"
                      />
                      <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mb-1.5">
                        <span>{sticky.label}</span>
                        <span>#{idx + 1}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-ink leading-relaxed">
                        {sticky.content}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 右页：带胶带装饰的个人档案卡 (Taped Profile Card) + 手绘箭头引导 */}
            <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end">
              {/* 手绘引导箭头与旁注（桌面端显示） */}
              <div
                className="hidden sm:flex items-center gap-1 self-start lg:self-center mb-2 -ml-4"
                aria-hidden="true"
              >
                <span className="font-hand text-xl text-accent-brick -rotate-6">
                  developer ID card
                </span>
                <SketchArrowCurved className="w-14 h-10 rotate-12" color="#B8523B" />
              </div>

              {/* 胶带固定的个人卡片 */}
              <div className="relative w-full max-w-md bg-paper-bg sketch-card p-5 sm:p-6 rotate-[1.2deg] hover:rotate-0 transition-transform duration-300">
                {/* 顶部斜贴胶带 */}
                <div
                  className="washi-tape washi-tape-brick absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-7 -rotate-2 pointer-events-none"
                  aria-hidden="true"
                />
                {/* 右下角胶带 */}
                <div
                  className="washi-tape absolute -bottom-2.5 -right-3 w-20 h-5 -rotate-45 pointer-events-none"
                  aria-hidden="true"
                />

                {/* 卡片顶部栏 */}
                <div className="flex items-center justify-between border-b border-dashed border-ink/25 pb-2.5 mb-4">
                  <span className="font-mono text-xs font-semibold tracking-wider text-ink-secondary flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-accent-olive" />
                    PROFILE CARD · #01
                  </span>
                  <span className="px-2 py-0.5 text-[11px] font-mono bg-accent-olive/15 text-accent-olive border border-accent-olive/35 rounded">
                    VERIFIED
                  </span>
                </div>

                {/* 个人插画/手绘头像占位（可在 siteConfig.ts 替换，绝不使用虚假真人照片） */}
                <div className="relative mx-auto w-44 h-44 sm:w-48 sm:h-48 mb-4 p-2 bg-paper-sheet border-2 border-ink rounded-lg shadow-sm">
                  {hero.profileCard.customAvatarUrl ? (
                    <img
                      src={hero.profileCard.customAvatarUrl}
                      alt={`${hero.profileCard.displayName} 头像`}
                      className="w-full h-full object-cover rounded"
                      loading="eager"
                    />
                  ) : (
                    <HandDrawnDeveloperAvatar className="w-full h-full rounded" />
                  )}

                  {/* 头像右下角手写小便签角标 */}
                  <span className="absolute -bottom-2.5 right-2 px-2 py-0.5 bg-accent-yellow border border-ink text-[11px] font-hand text-ink rotate-[-2deg] shadow-sm">
                    {hero.profileCard.avatarCaption}
                  </span>
                </div>

                {/* 核心三项信息（严格遵循要求：GitHub / Focus / Status） */}
                <dl className="space-y-3 text-sm border-t border-dashed border-ink/25 pt-4">
                  <div className="flex items-center justify-between gap-2 py-1 border-b border-ink/10">
                    <dt className="font-hand text-xl text-ink-muted">GitHub</dt>
                    <dd>
                      <a
                        href={hero.profileCard.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono font-semibold text-accent-blueInk hover:text-accent-brick underline decoration-wavy decoration-accent-brick/60 underline-offset-4"
                      >
                        <span>{hero.profileCard.githubUsername}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </dd>
                  </div>

                  <div className="flex items-start justify-between gap-3 py-1 border-b border-ink/10">
                    <dt className="font-hand text-xl text-ink-muted shrink-0">Focus</dt>
                    <dd className="font-mono text-xs sm:text-[13px] font-medium text-ink text-right">
                      {hero.profileCard.focus}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between gap-2 py-1 border-b border-ink/10">
                    <dt className="font-hand text-xl text-ink-muted">Status</dt>
                    <dd className="inline-flex items-center gap-1.5 font-hand text-xl font-bold text-accent-olive">
                      <span className="w-2 h-2 rounded-full bg-accent-olive animate-pulse" />
                      <span>{hero.profileCard.status}</span>
                    </dd>
                  </div>
                </dl>

                {/* 真实 GitHub 仓库足迹注脚 */}
                <div className="mt-4 pt-2.5 flex items-center justify-between text-[11px] font-mono text-ink-muted bg-paper-warm/65 px-3 py-1.5 rounded border border-ink/15">
                  <span className="inline-flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-accent-brick" />
                    {hero.profileCard.verifiedFootprint}
                  </span>
                  <span>{hero.profileCard.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
