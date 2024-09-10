import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const ListContainer = styled.div`
  width: 100%;
`;
const Header = styled.div`
  text-align: left;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
`;
const MyAccountItem = styled.div`
  width: 100%;
  height: 2rem;
  background-color: var(--main-bg-color);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0.5rem;
`;

// 출금계좌 목록 (입출금 통장만 보임)
export default function OriginAccountList({
  setOriginAccount,
  isOpen,
  setIsOpen,
}) {
  const [myAccounts, setMyAccounts] = useState([]);

  // GET: 사용자 계좌 목록 (입출금 통장인 경우만 필터링)
  const readMyAccounts = async () => {
    const myAccountsListURL = "/api/account";
    await axios
      .get(myAccountsListURL)
      .then((res) => {
        if (res.status === 200) {
          const filteredAccounts = res.data.accounts.filter(
            (account) => account.account_type === "입출금통장"
          );
          setMyAccounts(filteredAccounts);
        }
      })
      .catch(() => {
        alert("계좌 정보를 불러오는데 실패했습니다.");
      });
  };

  useEffect(() => {
    if (isOpen === true) {
      readMyAccounts();
    }
  }, [isOpen]);

  return (
    <Container>
      <Header>출금계좌</Header>
      {myAccounts.length > 0
        ? myAccounts.map((account, idx) => (
            <ListContainer key={idx}>
              <MyAccountItem
                onClick={() => {
                  setOriginAccount(account.account_number);
                  setIsOpen(false);
                }}
              >
                <div>{account.account_name}</div>
                <div>{account.account_number}</div>
              </MyAccountItem>
            </ListContainer>
          ))
        : "계좌 없음"}
    </Container>
  );
}
