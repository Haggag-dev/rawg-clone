interface Result {
  id: number;
  name: string;
}

const getObjectName = (id: number, results: Result[] | undefined) => {
  if (results)
    for (let i = 0; i < results.length; i++)
      if (results[i].id === id) return results[i].name;
};

export default getObjectName;
