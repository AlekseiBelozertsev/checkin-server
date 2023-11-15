const generateSlug = (input) => {
  const slug = input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
  return slug;
};

module.exports = generateSlug;
