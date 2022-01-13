export function provide<T>(key: InjectionKey<T> | string, value: T) {
  let provides = currentInstance.provides

  const parentProvides =
    currentInstance.parent && currentInstance.parent.provides
  if (parentProvides === provides) {
    provides = currentInstance.provides = Object.create(parentProvides)
  }
  // TS doesn't allow symbol as index type
  provides[key as string] = value
}

export function inject(
key: InjectionKey<any> | string,
defaultValue?: unknown
) {
// fallback to `currentRenderingInstance` so that this can be called in
// a functional component
const instance = currentInstance || currentRenderingInstance
if (instance) {
  const provides = instance.provides
  if (key in provides) {
    // TS doesn't allow symbol as index type
    return provides[key as string]
  } else if (arguments.length > 1) {
    return defaultValue
  }
}
}