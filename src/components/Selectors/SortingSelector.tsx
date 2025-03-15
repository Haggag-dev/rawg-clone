import { getOptionData, options } from "../../services/orderOptions";
import Selector from "./Selector";

interface Props {
  selectedOrder: number;
  setSelectedOrder: (orderId: number) => void;
}

const SortingSelector = ({ selectedOrder, setSelectedOrder }: Props) => {
  const orderOptions = options;
  const { name } = getOptionData(selectedOrder);

  return (
    <Selector
      buttonName={name ? `Order by: ${name}` : "Order by: Relevance"}
      data={orderOptions}
      setState={(orderId: number) => setSelectedOrder(orderId)}
    />
  );
};

export default SortingSelector;
