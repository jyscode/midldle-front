import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./routes/login/login";
import Signup from "./routes/signup/signup";
import Profile from "./routes/profile/profile";
import AccountPage from "./routes/account/account-page";
import Home from "./routes/home/home";
import Transfer from "./routes/transfer/transfer";
import OpenAccountPage from "./routes/account/open-account-page";
import GroupAccountPage from "./routes/account/group-account-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      // 로그인 페이지
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      // 회원가입 페이지
      {
        path: "signup",
        element: <Signup />,
      },
      // 사용자 홈 페이지
      {
        path: "home",
        element: <Home />,
      },
      // 사용자 프로필 페이지
      {
        path: "profile",
        element: <Profile />,
      },
      // 계좌 내역 페이지 (잔액, 입출금 내역 조회 등)
      {
        path: "account/:accountId",
        element: <AccountPage />,
      },
      // 계좌 개설 페이지
      {
        path: "open-account",
        element: <OpenAccountPage />,
      },
      // 입출금 페이지
      {
        path: "transfer/:accountId",
        element: <Transfer />,
      },
      // 모임통장 페이지
      {
        path: "group-account",
        element: <GroupAccountPage />,
      },
    ],
  },
]);
