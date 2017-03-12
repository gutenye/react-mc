import { uniq, pull } from 'lodash'

export function add(arr, value) {
  return uniq([...arr, value])
}

export function remove(arr, value) {
  return pull(arr, value)
}
