import useDarkMode from "../../../hooks/useDarkMode";

interface Props {
  score: number;
}

interface ScoreColor {
  colorDarker: string;
  color: string;
}

const CriticScore = ({ score }: Props) => {
  const { dark } = useDarkMode();

  let scoreColor: ScoreColor =
    score > 75
      ? { colorDarker: "#344038", color: "#9AE6B4" }
      : score > 65
      ? { colorDarker: "#434231", color: "#FAF089" }
      : { colorDarker: "#404040", color: "white" };

  return (
    <div
      className={"w-6 text-center text-xs rounded-sm font-[650] pb-px"}
      style={
        dark
          ? {
              backgroundColor: scoreColor.colorDarker,
              color: scoreColor.color,
            }
          : {
              backgroundColor: scoreColor.color,
              color: scoreColor.colorDarker,
            }
      }
    >
      {score}
    </div>
  );
};

export default CriticScore;
