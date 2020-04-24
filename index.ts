export const dynamicTemplate = (
  templateString: string,
  templateVariables: Record<string, any>
) => templateString.replace(/\${(.*?)}/g, (_, g) => templateVariables[g]);
