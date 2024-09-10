import styled from "styled-components";
import NavigationIcon from "./navigation-icon";
import { BiSolidCategory } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";

const Wrapper = styled.nav`
  width: 100%;
  height: var(--btm-navbar-height);
  background-color: white;
  position: fixed;
  left: 0;
  right: 0;
  bottom:0;
  margin: 0;
  padding: 0.8rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 20;
  border-radius: 1rem 1rem 0rem 0rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

// 하단 네비게이션바
export default function BottomNavBar() {
  const content = [
    { icon: <FaRegUser />, path: "/home" },
    { icon: <BiSolidCategory />, path: "/service" },
    { icon: <BiSolidBell />, path: "/notice" },
  ];

  return (
    <Wrapper>
      {content.map((section, idx) => (
        <NavigationIcon
          key={idx}
          icon={section.icon}
          to={section.path}
          size="1.8rem"
          color="gray"
        />
      ))}
    </Wrapper>
  );
}
