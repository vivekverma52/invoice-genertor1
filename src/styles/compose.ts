import { Style } from '@react-pdf/types'
import styles from './styles'

const compose = (classes: string): Style => {
  const css: Style = {
    //@ts-ignore
    '@import': 'url(https://fonts.bunny.net/css?family=nunito:400,600)',
  }

  const classesArray: string[] = classes.replace(/\s+/g, ' ').split(' ')

  classesArray.forEach((className) => {
    if (styles[className]) {
      Object.assign(css, styles[className])
    }
  })

  return css
}

export default compose
