export const deBounce = (func: Function, delay = 100, ...args: Array<undefined>): () => unknown => {
  let timer: number
  return () => {
    clearTimeout(timer)
    // @ts-ignore
    timer = setTimeout(() => {
      func(args)
    }, delay)
  }
}
