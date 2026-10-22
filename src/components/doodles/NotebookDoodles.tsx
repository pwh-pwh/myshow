import React from 'react'

/**
 * 手绘略带抖动的双笔触下划线
 */
export const SketchUnderline: React.FC<{
  className?: string
  color?: string
}> = ({ className = 'w-full h-3', color = 'currentColor' }) => (
  <svg
    viewBox="0 0 260 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 10.5C58 5.2 124 4.8 188 7.5C216 8.7 239 9.8 257 6.5"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      className="ink-stroke-animate"
    />
    <path
      d="M14 13.8C78 10.2 154 9.5 244 12.2"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.65"
    />
  </svg>
)

/**
 * 手绘弯曲指向箭头
 */
export const SketchArrowCurved: React.FC<{
  className?: string
  color?: string
}> = ({ className = 'w-16 h-12', color = '#B8523B' }) => (
  <svg
    viewBox="0 0 92 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6 52C18 24 42 12 80 18"
      stroke={color}
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeDasharray="2 0"
      className="ink-stroke-animate"
    />
    <path
      d="M69 9C75 13 80 16.5 83 18.5C78.5 21 72 24.5 67 27"
      stroke={color}
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * 手绘带打圈的指向箭头
 */
export const SketchArrowLoop: React.FC<{
  className?: string
  color?: string
}> = ({ className = 'w-20 h-14', color = '#556B45' }) => (
  <svg
    viewBox="0 0 110 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M8 18C28 14 48 26 42 40C37 51 22 46 26 33C31 18 65 20 98 46"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
    />
    <path
      d="M87 47C93 47.5 98 47.5 101 47C99 43 96.5 37 95 33"
      stroke={color}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * 手绘椭圆圈注（用于圈出重点词）
 */
export const SketchCircleHighlight: React.FC<{
  className?: string
  color?: string
}> = ({ className = ' inset-0 w-full h-full', color = '#B8523B' }) => (
  <svg
    viewBox="0 0 180 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M16 14C52 3 138 3 164 18C182 28 174 49 142 56C101 64 31 61 11 45C-2 34 6 16 32 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.85"
      className="ink-stroke-animate"
    />
  </svg>
)

/**
 * 铅笔手绘分隔线（带中央小星号与草图笔触）
 */
export const PencilDivider: React.FC<{
  label?: string
  className?: string
}> = ({ label, className = 'my-10' }) => (
  <div className={`flex items-center gap-4 select-none ${className}`} aria-hidden="true">
    <svg viewBox="0 0 400 12" className="flex-1 h-3 text-ink/35" fill="none" preserveAspectRatio="none">
      <path
        d="M2 6.5C95 4.2 195 8.5 298 5.2C340 4.1 375 6.8 398 5.8"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeDasharray="6 4"
      />
    </svg>
    {label ? (
      <span className="font-hand text-lg text-ink-muted tracking-wide px-2">
        ✳ {label} ✳
      </span>
    ) : (
      <span className="font-hand text-lg text-accent-brick/80">✳</span>
    )}
    <svg viewBox="0 0 400 12" className="flex-1 h-3 text-ink/35" fill="none" preserveAspectRatio="none">
      <path
        d="M2 5.5C88 8.1 210 3.8 312 6.9C350 7.8 378 5.1 398 6.2"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeDasharray="6 4"
      />
    </svg>
  </div>
)

/**
 * 手绘灯泡图标 (Explore)
 */
export const DoodleBulb: React.FC<{ className?: string }> = ({ className = 'w-11 h-11' }) => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* 光芒短线 */}
    <path
      d="M28 4V9M10 12L14 15.5M46 12L42 15.5M5 28H10M46 28H51"
      stroke="#B8523B"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    {/* 灯泡主体底色 */}
    <path
      d="M18 26C18 19.5 22.5 15 28 15C33.5 15 38 19.5 38 26C38 30 35 33 33.5 36.5H22.5C21 33 18 30 18 26Z"
      fill="#F8E8A0"
      opacity="0.85"
    />
    {/* 灯泡手绘轮廓 */}
    <path
      d="M22 37C19.5 33.5 16.5 30.2 16.8 25.2C17.2 18.2 22.2 13.8 28.2 14C34.4 14.2 39.2 18.9 39.2 25.4C39.2 30.2 36.2 33.2 34 37"
      stroke="#282923"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* 灯丝 */}
    <path
      d="M25 36.5V30.5L23 27.5M31 36.5V30.5L33 27.5M23.5 28H32.5"
      stroke="#282923"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* 灯座螺纹 */}
    <path
      d="M22.5 40.5H33.5M23.5 44H32.5M25.5 47.5H30.5"
      stroke="#282923"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
  </svg>
)

/**
 * 手绘铅笔图标 (Build)
 */
export const DoodlePencil: React.FC<{ className?: string }> = ({ className = 'w-11 h-11' }) => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* 铅笔笔杆填色 */}
    <path d="M36 11L45 20L21 44L12 35L36 11Z" fill="#DCEBF5" />
    <path d="M39 8L48 17L44.5 20.5L35.5 11.5L39 8Z" fill="#E59885" opacity="0.8" />
    {/* 铅笔外框 */}
    <path
      d="M12 44L14.5 34.5L37.5 11.5C39.2 9.8 41.8 9.8 43.5 11.5L45 13C46.7 14.7 46.7 17.3 45 19L22 42L12 44Z"
      stroke="#282923"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* 笔芯与木头分界 */}
    <path d="M14.8 34.8L21.5 41.5" stroke="#282923" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M34 15L41 22" stroke="#282923" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 38L37 19" stroke="#282923" strokeWidth="1.3" strokeDasharray="3 3" strokeLinecap="round" />
    {/* 写出的小波浪线 */}
    <path
      d="M11 47.5C18 49.5 25 45.5 33 48.2C39 50 44 46.8 48 48"
      stroke="#556B45"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

/**
 * 手绘闪电图标 (Automate)
 */
export const DoodleBolt: React.FC<{ className?: string }> = ({ className = 'w-11 h-11' }) => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M31 7L13 30H27L23 49L43 24H29L31 7Z"
      fill="#F8E8A0"
      stroke="#282923"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 17L13 19M46 14L42 17M45 39L41 37M10 41L14 38"
      stroke="#B8523B"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

/**
 * 手绘回形针装饰 (Paperclip)
 */
export const DoodlePaperclip: React.FC<{ className?: string }> = ({ className = 'w-7 h-12' }) => (
  <svg viewBox="0 0 32 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M21 15V39C21 44.5 16.8 48.5 11.8 48.5C6.8 48.5 3 44.5 3 39V12.5C3 6.2 7.8 2 13.8 2C19.8 2 24.5 6.2 24.5 12.5V37.5C24.5 41.2 21.8 44 18.2 44C14.6 44 12 41.2 12 37.5V16"
      stroke="#4E5044"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
  </svg>
)

/**
 * 手绘按钉装饰 (PushPin)
 */
export const DoodlePushPin: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#B8523B'
}) => (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="15" cy="15" r="7" fill="rgba(40,41,35,0.12)" />
    <circle cx="13.5" cy="13.5" r="7.5" fill={color} stroke="#282923" strokeWidth="1.8" />
    <circle cx="11.2" cy="11.2" r="2.2" fill="#FBF9F3" opacity="0.85" />
    <path d="M13.5 21L14.5 26" stroke="#282923" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

/**
 * 手绘热气咖啡杯（页脚与手账角落装饰）
 */
export const DoodleCoffeeCup: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* 热气 */}
    <path
      d="M22 18C20 14 24 11 22 7M31 16C29 12 33 9 31 5M40 18C38 14 42 11 40 7"
      stroke="#8B6B4A"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* 杯身填色 */}
    <path d="M14 24H46V38C46 46 40 51 30 51C20 51 14 46 14 38V24Z" fill="#E5DBC5" />
    {/* 杯口咖啡液面 */}
    <ellipse cx="30" cy="24" rx="16" ry="3.5" fill="#8B6B4A" stroke="#282923" strokeWidth="2" />
    {/* 杯身外框 */}
    <path
      d="M14 24V37.5C14 45.8 20.5 51.5 30 51.5C39.5 51.5 46 45.8 46 37.5V24"
      stroke="#282923"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* 杯把 */}
    <path
      d="M46 28H50.5C54.2 28 56.5 30.8 56.5 34.5C56.5 38.2 54.2 41 50.5 41H45.2"
      stroke="#282923"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* 杯托碟子 */}
    <path d="M9 54.5C21 56.8 39 56.8 52 54.5" stroke="#282923" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

/**
 * 原创钢笔速写手绘开发者头像插画 (HandDrawnDeveloperAvatar)
 * 绝不生成虚假真人照片，采用手账钢笔速写 + 水彩淡染风格，可在 siteConfig.ts 中一键替换
 */
export const HandDrawnDeveloperAvatar: React.FC<{ className?: string }> = ({
  className = 'w-full h-full'
}) => (
  <svg
    viewBox="0 0 220 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="coderpwh 手绘开发者速写头像"
  >
    {/* 纸张暖底与手绘方格浅纹 */}
    <rect width="220" height="220" rx="10" fill="#F6F1E3" />
    <path
      d="M0 44H220M0 88H220M0 132H220M0 176H220M44 0V220M88 0V220M132 0V220M176 0V220"
      stroke="#DED7C6"
      strokeWidth="0.8"
      opacity="0.65"
    />

    {/* 水彩淡色晕染背景圆 */}
    <circle cx="112" cy="106" r="68" fill="#F8E8A0" opacity="0.52" />
    <circle cx="96" cy="118" r="56" fill="#DCEBF5" opacity="0.45" />

    {/* 角落手绘符号：Rust 齿轮 / 终端符号 / 星星 */}
    <text x="18" y="34" fill="#556B45" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="600">
      {'fn main()'}
    </text>
    <text x="148" y="36" fill="#B8523B" fontFamily="Caveat, cursive" fontSize="18" fontWeight="700">
      {'agent ✳'}
    </text>
    <path d="M26 146L32 150L26 154M35 155H43" stroke="#396482" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* 人物肩膀与卫衣线条 */}
    <path
      d="M48 205C53 171 75 156 110 156C145 156 167 171 172 205"
      fill="#556B45"
      fillOpacity="0.22"
    />
    <path
      d="M46 204C52 169 74 155 110 155C146 155 168 169 174 204"
      stroke="#282923"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    {/* 卫衣抽绳与领口 */}
    <path
      d="M90 156C96 168 124 168 130 156M98 165V184M122 165V182"
      stroke="#282923"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* 脖子与脸部轮廓 */}
    <path d="M98 140V158H122V140" fill="#FBF9F3" stroke="#282923" strokeWidth="2.4" strokeLinecap="round" />
    <path
      d="M74 96C74 71 89 56 110 56C131 56 146 71 146 96C146 123 131 143 110 143C89 143 74 123 74 96Z"
      fill="#FBF9F3"
      stroke="#282923"
      strokeWidth="2.8"
    />

    {/* 蓬松自然的开发者手绘头发 */}
    <path
      d="M70 95C66 74 77 52 98 46C106 43 119 42 131 48C145 55 153 72 148 93C144 79 136 69 124 65C114 62 103 66 93 64C83 68 75 79 70 95Z"
      fill="#282923"
      stroke="#282923"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* 头顶翘起的两根呆毛（好奇心符号） */}
    <path
      d="M108 44C106 34 114 27 121 29M116 45C120 36 128 33 133 36"
      stroke="#282923"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    {/* 标志性黑框眼镜 */}
    <rect x="81" y="88" width="24" height="18" rx="4" fill="#DCEBF5" fillOpacity="0.45" stroke="#282923" strokeWidth="2.5" />
    <rect x="115" y="88" width="24" height="18" rx="4" fill="#DCEBF5" fillOpacity="0.45" stroke="#282923" strokeWidth="2.5" />
    <path d="M105 95H115M74 94L81 95M139 95L146 94" stroke="#282923" strokeWidth="2.4" strokeLinecap="round" />

    {/* 眼神与眉毛 */}
    <circle cx="93" cy="97" r="2.5" fill="#282923" />
    <circle cx="127" cy="97" r="2.5" fill="#282923" />
    <path d="M84 82C89 79 96 79 101 82M119 82C124 79 131 79 136 82" stroke="#282923" strokeWidth="2.2" strokeLinecap="round" />

    {/* 鼻子与松弛微笑 */}
    <path d="M110 98L107 110H112" stroke="#282923" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M99 122C105 127 116 127 122 121" stroke="#282923" strokeWidth="2.4" strokeLinecap="round" />

    {/* 前景手绘笔记本电脑背板与贴纸 */}
    <rect x="64" y="176" width="92" height="36" rx="5" fill="#EFEAD8" stroke="#282923" strokeWidth="2.5" />
    <circle cx="110" cy="194" r="6" fill="#F8E8A0" stroke="#282923" strokeWidth="1.8" />
    <text x="73" y="198" fill="#4E5044" fontFamily="JetBrains Mono, monospace" fontSize="9.5">
      {'RUST'}
    </text>
    <text x="125" y="198" fill="#B8523B" fontFamily="JetBrains Mono, monospace" fontSize="9.5">
      {'MCP'}
    </text>
  </svg>
)
