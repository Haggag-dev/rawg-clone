interface Result {
  id: number;
  name: string;
}

const getObjectName = (
  id: number | undefined,
  results: Result[] | undefined
) => {
  if (!id) return "";
  if (results)
    for (let i = 0; i < results.length; i++)
      if (results[i].id === id) return results[i].name;
};

export default getObjectName;
