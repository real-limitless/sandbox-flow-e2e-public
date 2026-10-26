/**
 * Convert an input string into a URL-friendly slug.
 *
 * Lowercases, trims, replaces runs of non-alphanumeric characters with a
 * single hyphen, and strips leading/trailing hyphens. Nullish or empty
 * inputs return an empty string.
 *
 * @param {*} input - The string to slugify.
 * @returns {string} The slug, or '' for empty/nullish input.
 */
export function slugify(input) {
  if (input === null || input === undefined) {
    return '';
  }

  const normalized = String(input).trim().toLowerCase();
  const slug = normalized.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  return slug;
}
