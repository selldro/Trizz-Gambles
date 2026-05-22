export function LeaderboardSidebar() {
  return (
<<<<<<< HEAD
    <aside className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-5">
      {/* Empty sidebar */}
=======
    <aside className="rounded-xl bg-[#120b26] border border-[#1a1033] p-5">
      {/* How it works */}
      <div className="flex items-center gap-2">
        <span className="grid place-items-center w-7 h-7 rounded-md bg-[#1a1033] border border-[#1a1033]">
          <Star className="w-4 h-4 text-[#8b3dff]" fill="#8b3dff" />
        </span>
        <h3 className="text-[12px] font-bold tracking-[0.18em] text-[#8b3dff]">HOW IT WORKS</h3>
      </div>

      <ol className="mt-5 relative">
                {steps.map((s, index) => (
          <li key={s.n} className="relative pl-12 pb-6 last:pb-0">
            {/* Line to next step (only for steps 1 and 2) */}
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[14px] top-7 w-px h-16 bg-[#252525]"
              />
            )}
            <span className="absolute left-0 top-0 grid place-items-center w-7 h-7 rounded-full bg-[#1a1033] border border-[#252525] text-[11px] font-bold text-[#8b3dff]">
              {s.n}
            </span>
            <div className="text-[12px] font-bold tracking-[0.16em] text-[#8b3dff]">
              {s.title}
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-[#cccccc]">{s.desc}</p>
          </li>
        ))}
      </ol>

>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
    </aside>
  )
}
