/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type SubHeaderProps = {
  /** 서브 헤더 안의 내용 */
  children: React.ReactNode;
  /** 서브 헤더의 너비 */
  width?: string | number;
  /** 서브 헤더의 크기 */
  size: "small";
  /** 서브 헤더의 padding 값 */
  padding?: string | number;
};

/** `SubHeader` 는 보조적인 설명이 있는 헤더입니다 */
function subHeader({
  children,
  width,
  size = "small",
  padding,
}: SubHeaderProps) {
  return (
    <h3 css={[defaultStyle, sizes[size], { width }, { padding }]}>
      {children}
    </h3>
  );
}

const defaultStyle = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #5d5d5d;
  font-weight: normal;
`;

const sizes = {
  small: css`
    font-size: 1rem;
  `,
};

export default subHeader;
