import * as S from "./styles/group-account-page.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 모임 통장 페이지
export default function GroupAccountPage() {
  const navigate = useNavigate();

  const openAccountURL = `api/account/group-account`;
  axios
    .get(openAccountURL)
    .then((res) => {
      if (res.status === 200) {
        alert(res.data.message);
        navigate("/home");
      }
    })
    .catch((err) => {
      console.log("Internal Server Error", err);
    });

  return <S.Wrapper></S.Wrapper>;
}
