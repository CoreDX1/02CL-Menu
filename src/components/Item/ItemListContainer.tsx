import { Sum } from "./Suma";
import "./Item.scss";

interface Prop {
  wpns: Array<{
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
  }>;
}

export const ItemListContainer = ({ wpns }: Prop) => {
  const renderList = (): JSX.Element[] => {
    return wpns.map((x) => {
      return (
        <div key={x.id} className="items">
          <div className="container-imagen">
            <div className="imagen">
              <img src={x.img} />
            </div>
          </div>
          <p>{x.name}</p>
          <p>Disponibles : {x.quantity}</p>
          <div className="price">
            <p>${x.price}</p>
            <Sum stock={x.quantity} />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="container-items">
        <div className="lista-items">{renderList()}</div>
      </div>
    </>
  );
};
