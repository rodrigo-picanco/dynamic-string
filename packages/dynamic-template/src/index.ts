import * as R from 'ramda'

const dynamicTemplate = R.curry(
  (templateString: string, templateVariables: Record<string, any>) =>
    templateString.replace(/\${(.*?)}/g, (_, g) => templateVariables[g])
)

export default dynamicTemplate
