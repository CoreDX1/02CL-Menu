import styled from "styled-components";
export const CartWidget = () => {
  return (
    <>
      <Div>
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="contador">0</span>
      </Div>
    </>
  );
};

const Div = styled.div`
  background-color: #0088cc;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  gap: 20px;
  margin-right: 20px;
  cursor: pointer;
  i {
    color: #fff;
  }
  span {
    color: #fff;
  }
`;
