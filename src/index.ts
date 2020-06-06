import * as R from 'ramda'
import { renderToString } from 'react-dom/server'
import parse from 'html-react-parser'

export const dynamicTemplate = R.curry(
  (templateString: string, templateVariables: Record<string, any>) =>
    templateString.replace(/\${(.*?)}/g, (_, g) => templateVariables[g])
)

export const dynamicRenderTemplate = (
  templateString: string,
  templateVariables: Record<string, any>
) =>
  parse(
    dynamicTemplate(
      templateString,
      R.map<Record<string, any>, Record<string, string>>(
        renderToString,
        templateVariables
      )
    )
  )
