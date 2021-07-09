export function generateApiObjectForAddRule(unModifiedData) {
  let modifiedData = {};
  let modifiedRules = [];
  modifiedData.templateName = unModifiedData.name;
  unModifiedData.rules.map((rule) => {
    modifiedRules.push({
      ruleName: rule.value,
      properties: rule.properties,
    });
  });
  modifiedData.rules = modifiedRules;
  return modifiedData;
}
