'use client'

const PAGE_SIZE = 50

type Props = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export { PAGE_SIZE }

export function FellowsPagination({ page, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
      aria-label="Fellows pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="rounded border border-slate-300 bg-white px-3 py-1.5 text-sm text-[#002740] transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Previous page"
      >
        ←
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          aria-current={p === page ? 'page' : undefined}
          className={`min-w-[2.25rem] rounded border px-3 py-1.5 text-sm transition ${
            p === page
              ? 'border-[#002740] bg-[#002740] font-semibold text-white'
              : 'border-slate-300 bg-white text-[#002740] hover:bg-slate-50'
          }`}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="rounded border border-slate-300 bg-white px-3 py-1.5 text-sm text-[#002740] transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Next page"
      >
        →
      </button>
    </nav>
  )
}
