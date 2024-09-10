import styled from "styled-components";
import { NavLink } from "react-router-dom";

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: center;
  padding: 0;
  margin: 0.5rem;
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: ${(props) => (props.size ? props.size : "1.8rem")};
`;

// 하단 네비게이션바 아이콘
export default function NavigationIcon({ icon, size, color, to }) {
  return (
    <NavLink to={to}>
      <IconWrapper size={size} color={color}>
        {icon}
      </IconWrapper>
    </NavLink>
  );
}
