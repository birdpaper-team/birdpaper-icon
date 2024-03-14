import path from "path";

/**
 * 转换短横线命名
 * @param string
 * @returns
 */
export const toKebabCase = (string: string): string => {
  return string.replace(/[A-Z]+/g, (match, offset) => {
    return `${offset > 0 ? "-" : ""}${match.toLocaleLowerCase()}`;
  });
};

/**
 * 帕斯卡命名（首字母大写）
 * @param string
 * @returns
 */
export const toPascalCase = (string: string): string => {
  return string
    .replace(/^./, match => match.toLocaleUpperCase())
    .replace(/-(.)/g, (match, p1: string) => {
      return p1.toLocaleUpperCase();
    });
};

export const resolvePath = (root: string, ...relativePath: string[]) => {
  return path.resolve(root, ...relativePath);
};

/**
 * 判断对象是否为数组
 * @param obj
 * @returns
 */
export const isArray = (obj: any) => {
  return obj && typeof obj == "object" && obj instanceof Array;
};

/**
 * 对象深拷贝
 * @param tSource
 * @returns
 */
export const deepClone = <T>(tSource: T, tTarget?: any | T): T => {
  if (isArray(tSource)) {
    tTarget = tTarget || [];
  } else {
    tTarget = tTarget || {};
  }
  for (const key in tSource) {
    if (Object.prototype.hasOwnProperty.call(tSource, key)) {
      if (typeof tSource[key] === "object" && typeof tSource[key] !== null) {
        tTarget[key] = isArray(tSource[key]) ? [] : {};
        deepClone(tSource[key], tTarget[key]);
      } else {
        tTarget[key] = tSource[key];
      }
    }
  }
  return tTarget as T;
};

/**
 * 判断元素是否在可是区域内
 * @param element
 * @returns
 */
export const isInViewport = (element: Element | any) => {
  var rect = element.getBoundingClientRect();

  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const offsetTop = element.offsetTop;
  const scollTop = document.documentElement.scrollTop;
  const top = offsetTop - scollTop;
  return top <= viewPortHeight && rect.bottom > 0;
};

/**
 * 函数节流
 * @param func
 * @param time
 * @param immediate
 * @returns
 */
export function throttle<T extends (...args: any[]) => any>(fn: T, delay: number): T {
  let lastCall: number | null = null;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> | void {
    const now = Date.now();
    if (!lastCall || now - lastCall >= delay) {
      lastCall = now;
      return fn.apply(this, args);
    }
  } as T;
}
