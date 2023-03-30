const getDate = () => {
  const now = new Date();
  const date = now.toISOString();
  return date;
};

export default getDate;