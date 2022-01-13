export function provide<T>(key: InjectionKey<T> | string, value: T) {
  // 若currentInstance无值即没有当前活动的实例，那开发环境会报警
  let provides = currentInstance.provides
  // 取当前实例上的provides对象，再取父实例对象上的provides对象
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