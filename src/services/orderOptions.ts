const options = [
  {
    id: 0,
    name: "Relevance",
    slug: "",
  },
  {
    id: 1,
    name: "Date Added",
    slug: "-added",
  },
  {
    id: 2,
    name: "Name",
    slug: "name",
  },
  {
    id: 3,
    name: "Release Date",
    slug: "-released",
  },
  {
    id: 4,
    name: "Popularity",
    slug: "-metacritic",
  },
  {
    id: 5,
    name: "Average Rating",
    slug: "-rating",
  },
];

const getOptionData = (orderId: number | undefined) => {
  if (!orderId) return { name: "", slug: "" };

  for (let i = 0; i < options.length; i++)
    if (orderId === options[i].id)
      return { name: options[i].name, slug: options[i].slug };
  return { name: "", slug: "" };
};

export { options, getOptionData };
