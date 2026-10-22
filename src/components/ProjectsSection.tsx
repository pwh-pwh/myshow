import React, { useState } from 'react'
import { Github, Star, GitFork, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react'
import { ProjectCategoryKey, siteConfig } from '../config/siteConfig'
import { SketchUnderline } from './doodles/NotebookDoodles'
import { ProjectArchitectureSketch } from './doodles/ProjectArchitectureSketches'

export const ProjectsSection: React.FC = () => {
  const { projects } = siteConfig
  const [activeGroup, setActiveGroup] = useState<ProjectCategoryKey | 'all'>('all')

  const filteredProjects =
    activeGroup === 'all'
      ? projects.items
      : projects.items.filter((item) => item.categoryKey === activeGroup)

  const currentGroupMeta =
    projects.groups.find((g) => g.key === activeGroup) || projects.groups[0]

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 relative"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 模块标题：things I've built & explored */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-olive tracking-widest uppercase mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-olive" />
              <span>{projects.verificationNote}</span>
            </div>
            <h2
              id="projects-heading"
              className="font-hand text-4xl sm:text-5xl text-ink font-bold tracking-wide block"
            >
              {projects.titleEn}
              <SketchUnderline className="w-56 h-3 text-accent-olive mt-0.5" color="#556B45" />
            </h2>
          </div>

          <p className="font-body text-sm text-ink-secondary max-w-xl">
            {projects.subtitle}
          </p>
        </div>

        {/* 三大实验分类切换折页标签 (Project 01 / Project 02 / Project 03 / All) */}
        <div className="mb-8 space-y-3">
          <div
            className="flex flex-wrap items-center gap-2.5"
            role="tablist"
            aria-label="项目实验记录分类"
          >
            {projects.groups.map((group) => {
              const isSelected = activeGroup === group.key
              return (
                <button
                  key={group.key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveGroup(group.key)}
                  className={`px-4 py-2 text-left sketch-pill transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-ink text-paper-sheet shadow-sketch -translate-y-0.5'
                      : 'bg-paper-sheet text-ink hover:bg-paper-warm'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-accent-yellow text-ink font-bold'
                        : 'bg-paper-warm text-ink-muted'
                    }`}
                  >
                    {group.code}
                  </span>
                  <span className="font-hand text-xl font-bold tracking-wide">
                    {group.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* 当前分类说明条 */}
          <div className="px-4 py-2.5 bg-paper-warm/75 border-l-4 border-accent-olive rounded-r flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-ink-secondary">
            <span className="font-body">{currentGroupMeta.description}</span>
            <span className="font-mono text-xs text-ink-muted">
              Showing {filteredProjects.length} verified records
            </span>
          </div>
        </div>

        {/* 实验记录卡片列表 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const tapeVariant =
              idx % 3 === 0
                ? ''
                : idx % 3 === 1
                ? 'washi-tape-olive'
                : 'washi-tape-blue'

            return (
              <article
                key={project.id}
                style={{ transform: `rotate(${project.rotation}deg)` }}
                className="group relative bg-paper-sheet sketch-card p-6 sm:p-7 flex flex-col justify-between hover:!rotate-0 hover:-translate-y-1 transition-all duration-300"
              >
                {/* 顶部胶带装饰 */}
                <div
                  className={`washi-tape ${tapeVariant} absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-6 pointer-events-none`}
                  aria-hidden="true"
                />

                <div>
                  {/* 卡片头部：实验编号、项目类型与状态徽标 */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-dashed border-ink/25">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-semibold px-2 py-0.5 bg-paper-warm border border-ink/25 rounded text-ink">
                        {project.indexLabel}
                      </span>
                      <span className="font-mono text-[11px] text-ink-muted hidden sm:inline">
                        {project.categoryLabel.split('—')[1]?.trim() || project.categoryLabel}
                      </span>
                    </div>

                    {/* 附加手绘标签：built with curiosity */}
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-accent-yellow/80 border border-ink/40 rounded-full font-hand text-base font-bold text-ink -rotate-2 group-hover:rotate-0 transition-transform">
                      <span>✳</span>
                      <span>{project.handTag}</span>
                    </span>
                  </div>

                  {/* 项目名称与真实 GitHub 数据 */}
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2.5">
                    <h3 className="font-mono text-xl sm:text-2xl font-bold text-ink group-hover:text-accent-brick transition-colors">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:underline decoration-wavy decoration-accent-brick underline-offset-4"
                      >
                        <span>{project.name}</span>
                        <ArrowUpRight className="w-4 h-4 text-accent-brick" />
                      </a>
                    </h3>

                    {project.metrics && (
                      <div className="flex items-center gap-2.5 font-mono text-xs text-ink-secondary">
                        {typeof project.metrics.stars === 'number' && project.metrics.stars > 0 && (
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-paper-warm rounded border border-ink/15"
                            title="GitHub Stars"
                          >
                            <Star className="w-3.5 h-3.5 text-accent-brick fill-accent-yellow" />
                            <span>{project.metrics.stars}</span>
                          </span>
                        )}
                        {typeof project.metrics.forks === 'number' && project.metrics.forks > 0 && (
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-paper-warm rounded border border-ink/15"
                            title="GitHub Forks"
                          >
                            <GitFork className="w-3.5 h-3.5 text-accent-olive" />
                            <span>{project.metrics.forks}</span>
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* 项目简短介绍 */}
                  <p className="font-body text-sm sm:text-[15px] text-ink leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* 手绘工程架构图区 (Hand-drawn SVG Architecture Sketch) */}
                  <div className="mb-4 p-3 bg-paper-bg/90 grid-mini-sheet border border-dashed border-ink/35 rounded-lg">
                    <ProjectArchitectureSketch
                      type={project.diagramType}
                      className="w-full h-28 sm:h-32"
                    />
                    <p className="font-hand text-sm text-ink-muted text-center mt-1 border-t border-dashed border-ink/15 pt-1">
                      {project.diagramCaption}
                    </p>
                  </div>

                  {/* 核心功能与工程亮点 */}
                  <ul className="space-y-1.5 mb-4 text-xs sm:text-[13px] text-ink-secondary font-body">
                    {project.highlights.map((pt, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="font-mono text-accent-brick font-bold mt-0.5">›</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 手写页边心得批注 */}
                  <div className="mb-4 px-3 py-2 bg-accent-yellow/35 border-l-2 border-accent-kraft rounded-r font-handZh text-base sm:text-[17px] text-ink-secondary">
                    ✎ 手账批注：{project.marginNote}
                  </div>
                </div>

                {/* 卡片底部：使用技术栈 + 项目状态 + 真实 GitHub 外链 */}
                <div className="pt-3 border-t border-dashed border-ink/25 space-y-3">
                  {/* 技术栈标签 */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-ink-muted mr-1" aria-hidden="true" />
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono bg-paper-warm/90 text-ink border border-ink/20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 状态与 GitHub 链接栏 */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <span className="font-mono text-[11px] text-accent-olive font-medium">
                      ● {project.status}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.secondaryRepo && (
                        <a
                          href={project.secondaryRepo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono bg-paper-warm hover:bg-accent-blue/60 text-ink rounded border border-ink/25 transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          <span>{project.secondaryRepo.name}</span>
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold bg-ink text-paper-sheet hover:bg-accent-brick rounded transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View Source</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
