import { Figure } from "../models/figures/Figure";

interface LostFigureProps {
  title: string;
  figures: Figure[];
}

export default function LostFigures({ title, figures }: LostFigureProps) {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name}{" "}
          {figure.logo && <img width="20px" height="20px" src={figure.logo} />}
        </div>
      ))}
    </div>
  );
}
