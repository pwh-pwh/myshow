import React, { useState } from 'react'
import { BookOpen, X, Plus, Trash2, Sparkles } from 'lucide-react'
import { DeskNoteItem, siteConfig } from '../config/siteConfig'
import {
  DoodlePaperclip,
  DoodlePushPin,
  SketchUnderline
} from './doodles/NotebookDoodles'

interface VisitorSticky {
  id: string
  date: string
  title: string
  excerpt: string
}

const LOCAL_STORAGE_KEY = 'coderpwh_visitor_desk_notes_v1'

export const NotesSection: React.FC = () => {
  const { notes } = siteConfig
  const [selectedNote, setSelectedNote] = useState<DeskNoteItem | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [draftTitle, setDraftTitle] = useState('')
  const [draftContent, setDraftContent] = useState('')
  const [visitorNotes, setVisitorNotes] = useState<VisitorSticky[]>(() => {
    try {
      const saved = window.localStorage.getItem(LOCAL_STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const handleAddVisitorNote = (e: React.FormEvent) => {
    e.preventDefault()
    if (!draftTitle.trim() && !draftContent.trim()) return
    const newSticky: VisitorSticky = {
      id: `visitor-${Date.now()}`,
      date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
      title: draftTitle.trim() || '随手贴便签',
      excerpt: draftContent.trim() || '路过翻看手账，留下一张便签 ✳'
    }
    const next = [newSticky, ...visitorNotes]
    setVisitorNotes(next)
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore storage errors
    }
    setDraftTitle('')
    setDraftContent('')
    setShowAddForm(false)
  }

  const handleRemoveVisitorNote = (id: string) => {
    const next = visitorNotes.filter((n) => n.id !== id)
    setVisitorNotes(next)
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore storage errors
    }
  }

  const getPaperStyleClass = (style: DeskNoteItem['paperStyle']) => {
    switch (style) {
      case 'yellow-sticky':
        return 'bg-accent-yellow/80 border-ink/40'
      case 'blue-grid':
        return 'bg-accent-blue/80 grid-mini-sheet border-accent-blueInk/45'
      case 'kraft-memo':
        return 'bg-paper-kraft/85 border-accent-kraft/55'
      case 'olive-card':
        return 'bg-[#E4ECD9] border-accent-olive/50'
      case 'cream-lined':
      default:
        return 'lined-notebook-sheet border-ink/40'
    }
  }

  return (
    <section
      id="notes"
      className="py-16 sm:py-24 relative"
      aria-labelledby="notes-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 模块标题：notes from my desk（栏目名称：随手记） */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-accent-brick tracking-widest uppercase">
                NOTEBOOK PAGE #04 · DESK STICKIES
              </span>
              <span className="px-2 py-0.5 text-xs font-serifZh font-bold bg-accent-yellow border border-ink/30 rounded">
                栏目：{notes.titleZh}
              </span>
            </div>
            <h2
              id="notes-heading"
              className="font-hand text-4xl sm:text-5xl text-ink font-bold tracking-wide inline-block"
            >
              {notes.titleEn}
              <SketchUnderline className="w-48 h-3 text-accent-brick mt-0.5" color="#B8523B" />
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="font-body text-sm text-ink-secondary max-w-md">
              {notes.subtitle}
            </p>
            <button
              type="button"
              onClick={() => setShowAddForm((prev) => !prev)}
              className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 bg-paper-sheet hover:bg-accent-yellow/75 text-ink font-body text-xs font-medium sketch-pill transition-transform hover:-translate-y-0.5"
            >
              <Plus className="w-3.5 h-3.5 text-accent-brick" />
              <span>在桌面贴一张便签</span>
            </button>
          </div>
        </div>

        {/* 可选：在本地桌面贴一张临时便签的抽屉表单 */}
        {showAddForm && (
          <form
            onSubmit={handleAddVisitorNote}
            className="mb-8 p-5 bg-accent-yellow/55 sketch-box shadow-sticky max-w-xl space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-hand text-xl font-bold text-ink">
                ✎ 写一张本地随手记便签（保存在当前浏览器）
              </span>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="text-ink-muted hover:text-ink p-1"
                aria-label="关闭便签输入"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              value={draftTitle}
              onChange={(e) => setDraftTitle(e.target.value)}
              placeholder="便签标题，例如：关于 MCP 工具粒度的思考..."
              className="w-full px-3 py-2 bg-paper-sheet border border-ink/30 rounded text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent-brick"
              maxLength={60}
            />
            <textarea
              value={draftContent}
              onChange={(e) => setDraftContent(e.target.value)}
              placeholder="随手记下几句想法..."
              rows={3}
              className="w-full px-3 py-2 bg-paper-sheet border border-ink/30 rounded text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent-brick"
              maxLength={260}
            />
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-1.5 text-xs font-mono text-ink-secondary hover:text-ink"
              >
                取消
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-ink text-paper-sheet text-xs font-mono rounded hover:bg-accent-brick transition-colors"
              >
                贴到桌面上 ✳
              </button>
            </div>
          </form>
        )}

        {/* 随手记便签墙 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {notes.items.map((note) => (
            <article
              key={note.id}
              style={{ transform: `rotate(${note.rotation}deg)` }}
              className={`group relative rounded-md border-[1.75px] p-6 shadow-sticky flex flex-col justify-between transition-all duration-300 hover:!rotate-0 hover:-translate-y-1.5 hover:shadow-paper-hover cursor-pointer ${getPaperStyleClass(
                note.paperStyle
              )}`}
              onClick={() => setSelectedNote(note)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedNote(note)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`展开随手记：${note.title}`}
            >
              {/* 顶部固定件：胶带 / 图钉 / 回形针 */}
              {note.pinType === 'tape' && (
                <div
                  className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 pointer-events-none"
                  aria-hidden="true"
                />
              )}
              {note.pinType === 'pin' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none">
                  <DoodlePushPin color="#B8523B" />
                </div>
              )}
              {note.pinType === 'clip' && (
                <div className="absolute -top-4 right-6 pointer-events-none">
                  <DoodlePaperclip className="w-6 h-10" />
                </div>
              )}

              <div>
                {/* 便签编号与日期 */}
                <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted pb-2.5 mb-3 border-b border-dashed border-ink/20">
                  <span className="font-semibold text-ink-secondary">{note.number}</span>
                  <span>{note.date}</span>
                </div>

                {/* 便签主题标题 */}
                <h3 className="font-serifZh text-lg sm:text-xl font-bold text-ink group-hover:text-accent-brick transition-colors leading-snug mb-3">
                  「{note.title}」
                </h3>

                {/* 便签摘要正文 */}
                <p className="font-body text-sm text-ink-secondary leading-relaxed mb-4">
                  {note.excerpt}
                </p>
              </div>

              <div>
                {/* 便签手写涂鸦小字 */}
                <div className="flex items-center justify-between pt-3 border-t border-dashed border-ink/20">
                  <span className="font-hand text-base text-accent-olive font-semibold">
                    ✎ {note.doodleHint}
                  </span>

                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-ink group-hover:text-accent-brick font-medium">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>展开手稿</span>
                  </span>
                </div>

                {/* 标签 */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {note.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono bg-paper-sheet/75 border border-ink/20 rounded text-ink-secondary"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* 访问者在当前浏览器贴上的临时便签 */}
          {visitorNotes.map((vNote) => (
            <article
              key={vNote.id}
              className="relative rounded-md border-[1.75px] border-ink/40 bg-accent-yellow/85 p-6 shadow-sticky flex flex-col justify-between rotate-1 hover:rotate-0 transition-transform"
            >
              <div
                className="washi-tape washi-tape-olive absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 pointer-events-none"
                aria-hidden="true"
              />
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted pb-2 mb-3 border-b border-dashed border-ink/20">
                  <span className="inline-flex items-center gap-1 text-accent-olive font-semibold">
                    <Sparkles className="w-3 h-3" />
                    LOCAL MEMO
                  </span>
                  <div className="flex items-center gap-2">
                    <span>{vNote.date}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveVisitorNote(vNote.id)}
                      className="text-ink-muted hover:text-accent-brick"
                      title="撕下这张本地便签"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <h3 className="font-serifZh text-lg font-bold text-ink mb-2">
                  「{vNote.title}」
                </h3>
                <p className="font-body text-sm text-ink-secondary leading-relaxed whitespace-pre-wrap">
                  {vNote.excerpt}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-dashed border-ink/20 font-hand text-sm text-ink-muted">
                saved in your browser localStorage
              </div>
            </article>
          ))}
        </div>

        {/* 随手记完整手稿展开弹窗 (Manuscript Modal) */}
        {selectedNote && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/45 backdrop-blur-[2px]"
            onClick={() => setSelectedNote(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-note-title"
          >
            <div
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto lined-notebook-sheet sketch-box shadow-paper-hover p-6 sm:p-9"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between pb-3 mb-5 border-b border-dashed border-ink/30">
                <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                  <span className="px-2 py-0.5 bg-accent-yellow border border-ink/30 rounded text-ink font-semibold">
                    {selectedNote.number}
                  </span>
                  <span>{selectedNote.date}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedNote(null)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-ink/30 bg-paper-sheet hover:bg-accent-brick hover:text-paper-sheet text-xs font-mono transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>合上手稿</span>
                </button>
              </div>

              <h3
                id="modal-note-title"
                className="font-serifZh text-2xl sm:text-3xl font-bold text-ink mb-4 leading-snug"
              >
                {selectedNote.title}
              </h3>

              <div className="space-y-4 font-body text-sm sm:text-base text-ink leading-relaxed">
                {selectedNote.fullThoughts.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {selectedNote.codeSketch && (
                <div className="mt-6 p-4 bg-paper-bg border border-ink/35 rounded-md font-mono text-xs sm:text-[13px] text-ink overflow-x-auto">
                  <div className="text-[11px] text-accent-olive mb-1.5 font-semibold">
                    // notebook code sketch
                  </div>
                  <pre className="leading-relaxed">{selectedNote.codeSketch}</pre>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-dashed border-ink/25 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {selectedNote.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-mono bg-paper-warm border border-ink/20 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="font-hand text-xl text-accent-brick">
                  — jotted down by coderpwh ✳
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
