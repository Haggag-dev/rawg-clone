interface Props {
  score: number;
}

const CriticScoreIcon = ({ score }: Props) => {
  const scoreIcon =
    score > 4 ? "🎯" : score > 3 ? "👍" : score > 2 ? "😑" : "⛔";
  return <span className="text-xl">{scoreIcon}</span>;
};

export default CriticScoreIcon;
