export const formatDate = (date) => {
  let formatedDate = new Date(date).toLocaleDateString();
  return formatedDate.replaceAll("/", ".");
};
