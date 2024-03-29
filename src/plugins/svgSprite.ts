import { Plugin } from 'vite'
import { readFileSync, readdirSync } from 'fs'

let idPrefix = ''
const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g

const hasViewBox = /(viewBox="[^>+].*?")/g

const clearReturn = /(\r)|(\n)/g

function findSvgFile (dir: string): string[] {
  const svgRes = []
  const directs = readdirSync(dir, {
    withFileTypes: true
  })
  for (const dirent of directs) {
    if (dirent.isDirectory()) {
      svgRes.push(...findSvgFile(dir + dirent.name + '/'))
    } else {
      const svg = readFileSync(dir + dirent.name)
        .toString()
        .replace(clearReturn, '')
        .replace(svgTitle, ($1, $2) => {
          // console.log(++i)
          // console.log(dirent.name)
          let width = 0
          let height = 0
          let content = $2.replace(
            clearHeightWidth,
            (s1: string, s2: string, s3: number) => {
              if (s2 === 'width') {
                width = s3
              } else if (s2 === 'height') {
                height = s3
              }
              return ''
            }
          )
          if (!hasViewBox.test($2)) {
            content += `viewBox="0 0 ${width} ${height}"`
          }
          return `<symbol id="${idPrefix}-${dirent.name.replace(
                        '.svg',
                        ''
                    )}" ${content}>`
        })
        .replace('</svg>', '</symbol>')
      svgRes.push(svg)
    }
  }
  return svgRes
}

export const svgBuilder = (
  path: string,
  prefix = 'icon'
): Plugin => {
  idPrefix = prefix
  const res = findSvgFile(path)
  return {
    name: 'svg-transform',
    transformIndexHtml (html): string {
      return html.replace(
        '<body>',
                `
          <body>
            <svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; width: 0; height: 0">
              ${res.join('')}
            </svg>
        `
      )
    }
  }
}
