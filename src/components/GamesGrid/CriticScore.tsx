interface Props {
  score: number;
}

interface ScoreColor {
  bg: string;
  text: string;
}

const CriticScore = ({ score }: Props) => {
  let scoreColor: ScoreColor =
    score > 75
      ? { bg: "#344038", text: "#9AE6B4" }
      : score > 65
      ? { bg: "yellow-500", text: "yellow-500" }
      : { bg: "#404040", text: "white" };

  return (
    <div
      className={"w-8 text-center text-sm rounded-sm font-[650] pb-px"}
      style={{ backgroundColor: scoreColor.bg, color: scoreColor.text }}
    >
      {score}
    </div>
  );
};

export default CriticScore;
