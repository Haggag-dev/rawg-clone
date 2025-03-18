import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term , children }: Props) => {
  return (
    <div className="flex flex-col">
      <dt className="font-bold text-neutral-500">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DefinitionItem;
