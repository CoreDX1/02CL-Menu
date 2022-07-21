import { useState } from "react";
import styled from "styled-components";

interface Props {
  stock: number;
}

export const Sum = ({ stock }: Props) => {

  const [cantidad, setCantidad] = useState<number>(1);

  const valor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const precio = Number(e.currentTarget.value);
    console.log(precio);
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }

  return (
    <>
      <Div>
        <button className="button-select" onClick={sumar}>
          +
        </button>
        <p>{cantidad}</p>
        <button className="button-select" onClick={restar}>
          -
        </button>
        <button value={cantidad} onClick={valor}>
          {" "}
          Buy{" "}
        </button>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .button-select {
    width: 20px;
  }
`;
