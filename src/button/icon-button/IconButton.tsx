/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../../Icon/Icon";
import { IconType } from "../../util/Type";

export type IconButtonProps = {
  /** 클릭 시 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 아이콘 버튼의 너비와 높이 */
  size?: string;
  /** 아이콘 버튼의 margin */
  margin?: string;
  /** 버튼 안에 들어갈 아이콘의 이름 */
  icon: IconType;
};

/** `IconButton` 은 아이콘이 있는 버튼입니다. */
function IconButton({
  size = "4.5rem",
  icon,
  margin,
  onClick,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      css={[defaultStyle, { width: size, height: size, margin }]}
    >
      <Icon icon={icon}></Icon>
    </button>
  );
}

const defaultStyle = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  width: 4.5rem;
  height: 4.5rem;
  padding: 0;
  border-radius: 35%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(237, 240, 247, 0.4);

  &:hover {
    cursor: pointer;
    background-color: rgba(237, 240, 247, 1);
    svg {
      color: #bdc6d8;
    }
  }

  svg {
    width: 40%;
    color: #dde3ef;
  }
`;

export default IconButton;
