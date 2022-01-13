export function provide<T>(key: InjectionKey<T> | string, value: T) {
  // 取当前实例上的provides对象，再取父实例对象上的provides对象
  // 若currentInstance无值即没有当前活动的实例，那开发环境会报警

  let provides = currentInstance.provides;
  // 默认情况下，实例继承父类的provides对象
  // 当它需要提供自己的provide时，它使用父provide对象作为原型来创建自己的provide对象。

  const parentProvides =
    currentInstance.parent && currentInstance.parent.provides;
  // 两者相比较，如果相等，则继承父实例对象上的provides
  if (parentProvides === provides) {
    provides = currentInstance.provides = Object.create(parentProvides);
  }

  provides[key as string] = value;
}

export function inject(
  key: InjectionKey<any> | string,
  defaultValue?: unknown
) {
  //在原型链中查找注入祖辈实例provides对象中的属性和方法，如果找到对应的key的value值，则返回；如果没找到则使用defaultValue值；defaultValue值为undefined则报警
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.provides;
    if (key in provides) {
      return provides[key as string];
    } else if (arguments.length > 1) {
      return defaultValue;
    }
  }
}
