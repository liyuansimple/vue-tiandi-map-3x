export function createLngLat(T, options = {}) {
  const { lng, lat } = options
  return new T.LngLat(lng, lat)
}

export function createPoint (T, options = {}) {
  const {x, y} = options
  return new T.Point(x, y)
}

export function createBounds (T, options = {}) {
  const {sw, ne} = options
  return new t.LngLatBounds(createLngLat(t, sw), createLngLat(T, ne))
}

export function createIcon (T, options = {}) {
  const { iconUrl, iconSize, iconAnchor} = options
  return new T.Icon({
    iconUrl,
    iconSize: createPoint(T, iconSize),
    iconAnchor: iconAnchor && createPoint(T, iconAnchor)
  })
}
