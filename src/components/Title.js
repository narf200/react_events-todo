import "./Title.css";

export default function Title({ title, subtitle }) {
  return (
    <div className="title-block">
      <h1 className="title">{title}</h1>
      <br />
      <h1 className="subtitle">{subtitle}</h1>
    </div>
  );
}
