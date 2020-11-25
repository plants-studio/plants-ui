/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type ConentTypeProps = {
  /** 콘텐츠 타입 */
  children: React.ReactNode;
  /** 콘텐츠 타입의 너비 */
  width?: string | number;
};

/** `ContentType` 는 콘텐츠의 타입을 알려주는 텍스트입니다 */
function ContentType({ children, width }: ConentTypeProps) {
  return <p css={[defaultStyle, { width }]}>{children}</p>;
}

const defaultStyle = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  font-weight: bold;
  color: #f23c4c;
`;

export default ContentType;
