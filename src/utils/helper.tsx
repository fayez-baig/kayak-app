export const alliances = [
  {
    code: "OW",
    name: "Oneworld",
  },
  {
    code: "ST",
    name: "Sky Team",
  },
  {
    code: "SA",
    name: "Star Alliance",
  },
];

export const getFilteredData = (data, checkedValues) => {
  return !checkedValues.length
    ? data?.data
    : data?.data?.filter(({ alliance }) => checkedValues.includes(alliance));
};
