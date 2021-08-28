export const getUniqueKeyListfromObject = (data) => [
  ...new Set(data.map((item) => item.environment)),
];
