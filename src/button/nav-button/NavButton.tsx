/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type NavButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭 시 호출할 함수 */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** 버튼의 너비 */
  width?: string | number;
  /** 버튼의 margin */
  margin?: string;
  /** 해당 페이지인지 여부 */
  isSelected?: boolean;
};

/** `NavButton` 은 페이지 이동 및 호버 애니메이션을 가진 버튼입니다. */
function NavButton({
  children,
  width,
  margin,
  isSelected = false,
  onClick,
}: NavButtonProps) {
  return (
    <div
      css={[areaStyle, { width, margin }, focusSelector(isSelected)]}
      onClick={onClick}
    >
      <div className="item" css={itemStyle}>
        {children}
      </div>
    </div>
  );
}

const areaStyle = css`
  position: relative;
  color: #dde3ef;
  border-radius: 6px;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2.6rem;
  &:hover {
    cursor: pointer;
    background-color: #edf0f7;
    .item {
      transform: translateX(8px);
      color: #bdc6d8;
    }
  }
`;

// #F23C4C

const itemStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 1rem;
  font-weight: 600;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateX(0);
  transition: transform 0.5s cubic-bezier(0, 0, 0.2, 1) 0.0001s;
  svg {
    width: 1.3em;
    margin-right: 1em;
  }
`;

const focusSelector = (props: boolean) =>
  props
    ? css`
        color: #f23c4c;
        &:hover {
          background-color: #edf0f7;
          .item {
            transform: translateX(8px);
            color: #f23c4c;
          }
        }
      `
    : css``;

export default NavButton;
