import { useForm } from "react-hook-form";
import * as S from "./styles/open-account-page.style.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 계좌 개설 페이지
export default function OpenAccountPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // POST: 계좌 개설
  const onSubmit = (data) => {
    const { account_name, account_type, account_pw, day_transfer_limit } = data;
    const newAccountData = {
      account_name,
      account_type,
      account_pw,
      day_transfer_limit,
    };

    const openAccountURL = `api/account/open`;
    axios
      .post(openAccountURL, newAccountData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status === 201) {
          alert(res.data.message);
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log("Internal Server Error", err);
      });
  };

  // 비밀번호와 비밀번호 확인 값을 실시간으로 감시
  const password = watch("account_pw");
  const passwordAgain = watch("account_pw_again");

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Header>
          <S.HeaderIcon />
          <S.HeaderTitle>통장을 만들어보세요</S.HeaderTitle>
        </S.Header>
        <S.Label>계좌명</S.Label>
        <S.Input
          {...register("account_name", { required: true })}
          placeholder="계좌명을 입력하세요"
        />
        {errors.account_name && (
          <S.ErrorMsg>계좌명 입력은 필수입니다</S.ErrorMsg>
        )}

        <S.Label>계좌용도</S.Label>
        <S.Select {...register("account_type", { required: true })}>
          <option value="입출금통장" defaultValue>
            입출금통장
          </option>
          <option value="모임통장">모임통장</option>
          <option value="적금통장">적금통장</option>
        </S.Select>
        {errors.account_type && (
          <S.ErrorMsg>계좌용도 선택은 필수입니다</S.ErrorMsg>
        )}

        <S.Label>계좌비밀번호</S.Label>
        <S.Input
          {...register("account_pw", {
            required: true,
            minLength: 6,
            maxLength: 6,
          })}
          type="password"
          placeholder="계좌비밀번호"
        />
        {errors.account_pw && (
          <S.ErrorMsg>계좌 비밀번호를 입력하세요</S.ErrorMsg>
        )}

        <S.Label>계좌비밀번호 확인</S.Label>
        <S.Input
          {...register("account_pw_again", {
            required: true,
            minLength: 6,
            maxLength: 6,
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
          type="password"
          placeholder="계좌비밀번호 확인"
        />
        {errors.account_pw_again && (
          <S.ErrorMsg>비밀번호를 다시 확인해주세요</S.ErrorMsg>
        )}

        <S.Label>
          <S.Input {...register("day_transfer_limit")} type="checkbox" />
          일일이체한도 지정
        </S.Label>

        <S.SubmitButton type="submit">계좌 개설</S.SubmitButton>
      </S.Form>
    </S.Wrapper>
  );
}
