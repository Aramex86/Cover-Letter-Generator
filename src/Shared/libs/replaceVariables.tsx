const replaceTemplateVariables = (
  template: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //! fix any type
  values: Record<string, string> | any,
  flag?: boolean
) => {
  return flag
    ? template.replace("{{user}}", JSON.stringify(values))
    : template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] || "");
};

export default replaceTemplateVariables;
