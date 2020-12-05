/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../../Icon/Icon";

export type ChevronButtonProps = {
  /** 클릭 시 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 화살표 버튼의 생김새 타입 */
  themeType: "chevronLeft" | "chevronRight";
  /** 화살표 버튼의 사이즈 */
  size?: string | number;
  /** 화살표 버튼의 margin */
  margin?: string;
};

/** `ChevronButton` 은 화살표 버튼입니다. */
function ChevronButton({
  themeType,
  size = "2rem",
  margin,
  onClick,
}: ChevronButtonProps) {
  return (
    <button
      css={[defaultStyle, { width: size, height: size, margin }]}
      onClick={onClick}
    >
      <Icon icon={themeType}></Icon>
    </button>
  );
}

const defaultStyle = css`
  position: relative;
  outline: none;
  border: none;
  box-sizing: border-box;
  background-color: #ffffff;
  color: #f23c4c;
  border-radius: 20%;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background: rgba(242, 60, 76, 0.1);
  }

  svg {
    width: 50%;
  }
`;

export default ChevronButton;
