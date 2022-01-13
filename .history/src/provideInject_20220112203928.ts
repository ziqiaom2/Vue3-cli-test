export function provide<T>(key: InjectionKey<T> | string, value: T) {
  let provides = currentInstance.provides

  const parentProvides =
    currentInstance.parent && currentInstance.parent.provides
  if (parentProvides === provides) {
    provides = currentInstance.provides = Object.create(parentProvides)
  }

  provides[key as string] = value
}

export function inject(
key: InjectionKey<any> | string,
defaultValue?: unknown
) {

const instance = currentInstance || currentRenderingInstance
if (instance) {
  const provides = instance.provides
  if (key in provides) {
    return provides[key as string]
  } else if (arguments.length > 1) {
    return defaultValue
  }
}
}