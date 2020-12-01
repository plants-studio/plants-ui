/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type HeaderProps = {
  /** 헤더 안의 내용 */
  children: React.ReactNode;
  /** 헤더의 너비 */
  width?: string | number;
  /** 헤더의 크기 */
  size: "small" | "medium" | "large";
  /** 헤더의 padding 값 */
  padding?: string | number;
};

/** `Header` 는 기본적인 헤더입니다 */
function Header({ children, width, size = "medium", padding }: HeaderProps) {
  return (
    <h1 css={[defaultStyle, sizes[size], { width }, { padding }]}>
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
    font-size: 1.125rem;
    font-weight: bold;
  `,
  medium: css`
    font-size: 1.5rem;
  `,
  large: css`
    font-size: 2rem;
  `,
};

export default Header;
