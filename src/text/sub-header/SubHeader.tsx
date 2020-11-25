/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type SubHeaderProps = {
  /** 서브 헤더 안의 내용 */
  children: React.ReactNode;
  /** 서브 헤더의 너비 */
  width?: string | number;
  /** 서브 헤더의 크기 */
  size: "small";
};

/** `SubHeader` 는 보조적인 설명이 있는 헤더입니다 */
function subHeader({ children, width, size }: SubHeaderProps) {
  return <h3 css={[style, sizes[size], { width }]}>{children}</h3>;
}

subHeader.defaultProps = {
  size: "small",
};

const style = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #5d5d5d;
  font-weight: normal;
`;

const sizes = {
  small: css`
    font-size: 1.125rem;
  `,
};

export default subHeader;
