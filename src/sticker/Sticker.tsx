/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type StickerProps = {
  /** 스티커 안에 들어갈 내용. 주로 텍스트임 */
  children: React.ReactNode;
  /** 스티커의 색상 */
  backgroundColor?: string;
};

function Sticker({ children, backgroundColor = "gray" }: StickerProps) {
  return <div css={[defaultStyle, { backgroundColor }]}>{children}</div>;
}

const defaultStyle = css`
  padding: 0.25rem 0.5rem;
  width: max-content;
  word-break: keep-all;
  border-radius: 4px;
  font-size: 1.125rem;
  font-weight: bold;
  color: white;
  z-index: 99;
`;

export default Sticker;
