/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type ConentTypeProps = {
  /** 서브 헤더 안의 내용 */
  children: React.ReactNode;
  /** 서브 헤더의 너비 */
  width?: string | number;
  /** 서브 헤더의 크기 */
};

/** `ContentType` 는 콘텐츠의 타입을 알려주는 텍스트입니다 */
function ContentType({ children, width }: ConentTypeProps) {
  return <p css={[style, { width }]}>{children}</p>;
}

const style = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  color: #f23c4c;
`;

export default ContentType;
