import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding-bottom: var(--btm-navbar-height);
  overflow: auto;
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: var(--primary-color);
  color: white;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.1rem;
`;

export const DestinationAccountInput = styled.input`
  width: 100%;
  height: 3rem;
  text-align: center;
  font-size: 1rem;
  background-color: var(--main-bg-color);
  border: none;
  outline-color: var(--primary-color);
  letter-spacing: 0.1rem;
  background-color: rgb(255, 243, 235);
`;
export const TransferAmount = styled.input`
  text-align: center;
  width: 80%;
  height: 4rem;
  margin: 5rem auto;
  font-size: 2rem;
  border: none;
  border-radius: 4rem;
  outline: none;
`;
export const OriginAccountContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 1rem auto;
`;
export const OriginAccountInput = styled.input`
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  margin: 0 auto;
  padding-left: 2rem;
  border-radius: 2rem;
  border: 1px solid var(--secondary-color);
  outline-color: var(--primary-color);
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  pointer-events: none;
`;
export const MemoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 3.5rem;
  margin: 0.5rem auto;
  background-color: white;
  border-radius: 4rem;
  border: 1px solid lightgrey;
`;

export const Description = styled.span`
  width: 60%;
  padding-left: 1rem;
  margin: auto;
`;

export const MemoInput = styled.input`
  width: 40%;
  border: none;
  border-radius: 4rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  text-align: right;
  padding-right: 1rem;
  font-size: 1rem;
  outline: none;
`;

export const NextBtn = styled.button`
  width: 85%;
  height: 3.8rem;
  margin: auto;
  background-color: var(--primary-color);
  color: white;
  letter-spacing: 0.1rem;
  border-radius: 2rem;
`;
export const BtmSheetContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.2rem;
`;
export const AccountPwInput = styled.input`
  width: 85%;
  height: 3.8rem;
  font-size: 1.2rem;
  text-align: center;
  border: 1px solid var(--primary-color);
  border-radius: 2rem;
  margin: 0.5rem auto;
  outline-color: var(--primary-color);
  letter-spacing: 0.2rem;
  background-color: rgb(255, 243, 235);
`;
export const TransferBtn = styled.button`
  width: 85%;
  height: 3.8rem;
  margin: 0 auto;
  background-color: var(--primary-color);
  color: white;
  letter-spacing: 0.1rem;
  border-radius: 2rem;
`;
