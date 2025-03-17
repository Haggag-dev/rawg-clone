import { getOptionData, options } from "../../../services/orderOptions";
import useGameQueryStore from "../../../stores/gameQueryStore";
import Selector from "./Selector";

const SortingSelector = () => {
  const selectedOrderId = useGameQueryStore((s) => s.gameQuery.orderId);
  const setSelectedOrderId = useGameQueryStore((s) => s.setOrderId);

  const orderOptions = options;
  const { name } = getOptionData(selectedOrderId);

  return (
    <Selector
      buttonName={name ? `Order by: ${name}` : "Order by: Relevance"}
      data={orderOptions}
      setState={(orderId: number) => setSelectedOrderId(orderId)}
    />
  );
};

export default SortingSelector;
