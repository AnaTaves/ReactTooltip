import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  position: absolute;
  display: inline-block;
  left: 40%;
  top: 60%;

  .label {
    cursor: pointer;
    background-color: transparent;
    border: none;
    &:focus ~ .content {
      display: flex;
    }
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  .content {
    display: none;
    flex-wrap: wrap;
    border-radius: 5px;
    position: absolute;
    bottom: 62px;
    left: -50px;

    background-color: #fff;
    box-shadow: 1px 1px 10px rgba(42, 42, 42, 0.5);
    padding: 20px 10px 5px 20px;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    &:after {
      position: absolute;
      display: block;
      right: 50px;
      bottom: -8px;
      border-top: 15px solid #ffffff;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
      border-bottom: none;
      content: " ";
      font-size: 0;
      line-height: 0;
      width: 0;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const Span = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  color: #008a81;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 12px;

  span {
    color: #008a81;
  }

  &:hover {
    cursor: pointer;
  }
`;
