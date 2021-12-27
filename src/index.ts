import * as R from 'ramda'

export const dynamicTemplate = R.curry(
  (templateString: string, templateVariables: Record<string, any>) =>
    templateString.replace(/\${(.*?)}/g, (_, g) => templateVariables[g])
)

