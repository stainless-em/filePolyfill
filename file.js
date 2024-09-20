import "./nodePolyfill/file.js"
export const File = globalThis.File || globalThis[Symbol.for('stainless.node.file')]
