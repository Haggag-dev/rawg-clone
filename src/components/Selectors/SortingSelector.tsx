import Selector from "./Selector";

export interface OrderSorter {
  id: number;
  name: string;
  slug: string;
  //   relavance: ; // Might need re-adjustment
  //   metacritic: string; // Popularity
}

interface Props {
  selectedOrder: string;
  setSelectedOrder: (order: OrderSorter) => void;
}

const SortingSelector = ({ selectedOrder, setSelectedOrder }: Props) => {
  const orderOptions = [
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

  return (
    <Selector
      buttonName={
        selectedOrder ? `Order by: ${selectedOrder}` : "Order by: Relevance"
      }
      data={orderOptions}
      setState={(order: OrderSorter) => setSelectedOrder(order)}
    />
  );
};

export default SortingSelector;
