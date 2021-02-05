// eslint-disable-next-line @typescript-eslint/ban-types
export const deBounce = (func: Function, delay = 100, ...args: Array<undefined>): () => unknown => {
  let timer: number;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, delay)
  }
}
