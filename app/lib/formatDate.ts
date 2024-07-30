export const formatDate = (date) => {
  const formatedDate = new Date(date).toLocaleDateString();
  return formatedDate.replaceAll("/", ".");
};
