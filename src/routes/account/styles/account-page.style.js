import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-bottom: var(--btm-navbar-height);
  display: flex;
  flex-direction: column;
  /* 커스텀 색상으로 변경 */
  background-color: rgb(255, 243, 235);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--primary-color);
`;

export const AccountName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-color);
`;

export const AccountInfo = styled.div`
  text-align: center;
  padding: 1rem 0 1.6rem;
`;

export const AccountNumber = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #767676;
  text-decoration: underline;
`;

export const AccountBalance = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1.2rem 1.5rem 2rem;
`;

export const ActionButton = styled.button`
  width: 7rem;
  height: 3rem;
  line-height: 100%;
  background-color: var(--sub-bg-color);
  color: white;
  font-weight: bold;
  letter-spacing: 0.05rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 2rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
  }
`;
