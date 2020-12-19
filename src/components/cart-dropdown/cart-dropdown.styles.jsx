import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  overflow: hidden;
`
export const CartItemsContainer = styled.div`
    width: 100%;
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scrollbar-width: 0;
`
export const EmptyCart = styled.span`
  margin: 50px auto;
  font-size: 25px;
`;

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`