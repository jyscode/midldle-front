import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding-bottom: var(--btm-navbar-height);
`;

export const Header = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
`;
export const HeaderIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: url("assets/account-3d.png");
  background-size: 100%;
`;

export const HeaderTitle = styled.div`
  font-size: 1.3rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  padding-bottom: calc(var(--btm-navbar-height) + 2rem);
`;

export const Input = styled.input`
  border: 1px solid var(--secondary-color);
  border-radius: 2rem;
  font-size: 1rem;
  padding: 1rem 2rem;
  outline-color: var(--primary-color);
`;

export const Select = styled.select`
  border: 1px solid var(--secondary-color);
  border-radius: 2rem;
  font-size: 1rem;
  padding: 1rem 2rem;
  outline-color: var(--primary-color);
`;

export const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--secondary-color);
  color: #fff;
  border: none;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
  }
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const ErrorMsg = styled.span`
  color: red;
`;
