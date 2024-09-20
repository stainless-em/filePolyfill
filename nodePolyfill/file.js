// do not add exports! this file can be imported as CJS or ESM
if (typeof require !== "undefined") {
  const obj = {hideFromBundlers: require}
  try {
    globalThis[Symbol.for('stainless.node.file')] = obj[String('hide')+'FromBundlers']('buffer').File
  } catch (e) {}
}
