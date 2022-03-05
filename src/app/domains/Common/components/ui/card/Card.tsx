import { FC, ReactElement } from "react";
import { CardProps } from "./types";
import "./card.scss";

const Card: FC<CardProps> = ({
  logoUrl,
  title,
  alliance,
  phone,
  website,
}): ReactElement => {
  return (
    <div className="card-wrapper">
      <img
        className="card-logo"
        src={`https://kayak.com${logoUrl}`}
        alt={title}
      />

      <div className="card-container">
        <div className="card-title">{title}</div>
        <div className="card-info">
          <div className="card-heading">{alliance}</div>
          <div className="card-heading">{phone}</div>
          <div className="card-subheading">{website}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

//
