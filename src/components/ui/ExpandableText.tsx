import { useState } from "react";

interface Props {
  description: string;
  limit: number;
}

const ExpandableText = ({ description, limit }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleClick = () => setExpanded(!isExpanded);

  const text =
    description.length > limit && !isExpanded
      ? ` ${description.substring(0, 300).trim()}...`
      : description;

  const button = description.length > limit && (
    <button
      onClick={handleClick}
      className="bg-yellow-200 text-black font-medium rounded-md px-2.5 cursor-pointer"
    >
      {isExpanded ? "Read Less" : "Read More"}
    </button>
  );

  return (
    <p className="text-justify">
      {text} {button}
    </p>
  );
};

export default ExpandableText;
