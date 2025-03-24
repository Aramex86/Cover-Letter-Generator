const replaceTemplateVariables = (
  template: string,

  values: Record<string, string> | unknown,
  flag?: boolean
) => {
  return flag
    ? template.replace("{{user}}", JSON.stringify(values))
    : template.replace(/\{\{(\w+)\}\}/g, (_, key) =>
        typeof values === "object" && values !== null && key in values
          ? (values as Record<string, string>)[key]
          : ""
      );
};

export default replaceTemplateVariables;
