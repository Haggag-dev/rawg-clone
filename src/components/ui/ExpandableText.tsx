import { useState } from "react";

interface Props {
  text: string;
  limit: number;
}

const ExpandableText = ({ text, limit }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (!text) return null;

  const handleClick = () => setExpanded(!isExpanded);

  const textFinalized =
    text.length > limit && !isExpanded
      ? ` ${text.substring(0, 300).trim()}...`
      : text;

  const button = text.length > limit && (
    <button
      onClick={handleClick}
      className="bg-yellow-200 text-black font-medium rounded-md px-2.5 cursor-pointer hover:opacity-90"
    >
      {isExpanded ? "Read Less" : "Read More"}
    </button>
  );

  return (
    <p className="text-justify">
      {textFinalized} {button}
    </p>
  );
};

export default ExpandableText;
