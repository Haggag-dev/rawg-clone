interface Props {
  score: number;
}

const CriticScoreIcon = ({ score }: Props) => {
  const scoreIcon =
    score > 90 ? "🎯" : score > 80 ? "👍" : score > 70 ? "😑" : "⛔";
  return <span className="text-xl">{scoreIcon}</span>;
};

export default CriticScoreIcon;
