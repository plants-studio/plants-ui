/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type HeaderProps = {
  /** 헤더 안의 내용 */
  children: React.ReactNode;
  /** 헤더의 너비 */
  width?: string | number;
  /** 헤더의 크기 */
  size: "small" | "medium" | "large";
};

/** `Header` 는 기본적인 헤더입니다 */
function Header({ children, width, size }: HeaderProps) {
  return <h1 css={[style, sizes[size], { width }]}>{children}</h1>;
}

Header.defaultProps = {
  size: "medium",
};

const style = css`
  box-sizing: border-box;
  height: 2.6rem;
  margin: 0;
  padding: 0;
  font-weight: normal;
`;

const sizes = {
  small: css`
    font-size: 1.25rem;
  `,
  medium: css`
    font-size: 1.5rem;
  `,
  large: css`
    font-size: 2rem;
  `,
};

export default Header;
