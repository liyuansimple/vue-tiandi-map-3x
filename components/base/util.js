import { createLngLat } from './factory'

export const isPoint = obj => obj.lng && obj.lat
export const checkType = val => Object.prototype.toString.call(val).slice(8, -1)
export const getPosition = (T, point) => isPoint(point) ? createLngLat(T, point) : point
