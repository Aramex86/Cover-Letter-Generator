const replaceTemplateVariables = (
  template: string,
  values: Record<string, string>,
  flag?: boolean
) => {
  return flag
    ? template.replace("{{user}}", JSON.stringify(values))
    : template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] || "");
};

export default replaceTemplateVariables;
