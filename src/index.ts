import * as R from 'ramda'

export const dynamicString = R.curry(
  (templateString: string, templateVariables: Record<string, any>) =>
    templateString.replace(/\${(.*?)}/g, (_, g) => templateVariables[g])
)
