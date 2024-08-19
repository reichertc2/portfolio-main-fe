export const getCurrentYear = () => {
  let yearDate: Date = new Date();
  let currentYear = `${yearDate.getFullYear()}`;

  return currentYear;
};
