/**
 * Shared webinar date helpers.
 *
 * A webinar is considered past once the end of its scheduled day has gone by,
 * so same-day webinars stay open for registration until midnight.
 * Webinars without a date ("Date TBD") are never considered past.
 */
export function isWebinarPast(date?: string | null): boolean {
  if (!date) return false
  const normalized = date.length === 10 ? `${date}T23:59:59` : date
  const d = new Date(normalized)
  return !Number.isNaN(d.getTime()) && d.getTime() < Date.now()
}