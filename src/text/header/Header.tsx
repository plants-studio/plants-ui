/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type HeaderProps = {
  /** 헤더 안의 내용 */
  children: React.ReactNode;
  /** 헤더의 너비 */
  width?: string | number;
  /** 헤더의 크기 */
  size: "small" | "medium" | "large";
  /** 오버플로우 모드 활성화 여부 */
  isOverflowMode?: boolean;
  /** Word-Keep 모드 활성화 여부 */
  isWordKeepMode?: boolean;
};

/** `Header` 는 기본적인 헤더입니다 */
function Header({
  children,
  width,
  size = "medium",
  isOverflowMode = false,
  isWordKeepMode = true,
}: HeaderProps) {
  return (
    <h1
      css={[
        defaultStyle,
        sizes[size],
        { width },
        setOverflow(isOverflowMode),
        setWordKeepMode(isWordKeepMode),
      ]}
    >
      {children}
    </h1>
  );
}

const defaultStyle = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: normal;
`;

const sizes = {
  small: css`
    font-size: 1rem;
    font-weight: bold;
  `,
  medium: css`
    font-size: 1.125rem;
  `,
  large: css`
    font-size: 1.5rem;
  `,
};

const setOverflow = (isOverflowMode: boolean) => {
  if (isOverflowMode) {
    return css`
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `;
  } else {
    return css``;
  }
};

const setWordKeepMode = (isWordKeepMode: boolean) => {
  if (isWordKeepMode) {
    return css`
      word-break: keep-all;
    `;
  } else {
    return css``;
  }
};

export default Header;
