/** WordPress responsive derivative before extension, e.g. -900x500.jpg, -900x500-1.jpg, or " 900x500 2.jpeg". */
const WP_SIZE_VARIANT =
  /(?:-\d+x\d+|\s+\d+x\d+)(?:-\d+)?(?:\s+\d+)?\.(jpe?g|png|webp|gif|avif|svg)$/i

const VERIFY_ADMIN_TEST = /^verify-admin-test/i

export function isWordPressSizeVariant(filename: string): boolean {
  const base = filename.split(/[/\\]/).pop() ?? filename
  return WP_SIZE_VARIANT.test(base)
}

export function isVerifyAdminTestFile(filename: string): boolean {
  const base = filename.split(/[/\\]/).pop() ?? filename
  return VERIFY_ADMIN_TEST.test(base)
}

export function isHiddenMediaVariant(filename: string): boolean {
  return isWordPressSizeVariant(filename) || isVerifyAdminTestFile(filename)
}

/** Stem used to match a WP size variant to its original in the same folder. */
export function wordPressVariantStem(filename: string): string {
  const base = filename.split(/[/\\]/).pop() ?? filename
  const ext = base.includes('.') ? base.slice(base.lastIndexOf('.')) : ''
  const name = ext ? base.slice(0, -ext.length) : base
  return name.replace(/(?:-\d+x\d+|\s+\d+x\d+)(?:-\d+)?(?:\s+\d+)?$/i, '').trim()
}
