interface Props {
  score: number;
  dark: boolean;
}

interface ScoreColor {
  colorDarker: string;
  color: string;
}

const CriticScore = ({ score, dark }: Props) => {
  let scoreColor: ScoreColor =
    score > 75
      ? { colorDarker: "#344038", color: "#9AE6B4" }
      : score > 65
      ? { colorDarker: "#434231", color: "#FAF089" }
      : { colorDarker: "#404040", color: "white" };

  return (
    <div
      className={"w-8 text-center text-sm rounded-sm font-[650] pb-px"}
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
