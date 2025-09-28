import { Component } from "react";

class Card extends Component {
  render() {
    const { name, id, email } = this.props;
    return (
      <div
        className="card-container card"
        key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
