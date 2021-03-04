function visit(target, refer) {
  if (typeof target === 'object' && target !== null) {
    let _target = Array.isArray(target) ? [] : {}
    if (Array.isArray(_target) && Array.isArray(refer)) {
      [].concat(refer, target).forEach(cfg => _target.push(cfg))
      return _target
    } else {
      if (typeof refer === 'object' && refer !== null) _target = Object.assign({}, refer)
      for (const key in target) {
        if (refer && refer[key]) {
          _target[key] = visit(target[key], refer[key])
        } else {
          _target[key] = target[key]
        }
      }
      return _target
    }
  } else {
    return target ? target : refer
  }
}

module.exports = function merge(...sources) {
  const config = sources.reduce((target, source) => {
    const rst = visit(source, target)
    return rst
  }, {})
  return config
}
