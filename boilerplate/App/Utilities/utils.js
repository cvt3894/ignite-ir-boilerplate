export const removeNonNumber = (string = '') => string.replace(/[^\d]/g, '')
export const removeLeadingSpaces = (string = '') => string.replace(/^\s+/g, '')

export function hexToRgb (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

export function rgbColor (hex, a) {
  return `rgba(${hexToRgb(hex).r},${hexToRgb(hex).g},${hexToRgb(hex).b},${a})`
}

// export function url (uri) {
//   return /^http/.test(uri) ? uri : `${config.BASE_URL}${uri}`
// }
