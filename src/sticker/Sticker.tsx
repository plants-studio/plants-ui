/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type StickerProps = {
  /** 스티커 안에 들어갈 내용. 주로 텍스트임 */
  children: React.ReactNode;
  /** 스티커의 색상 */
  backgroundColor?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

function Sticker({
  children,
  backgroundColor = "gray",
  top,
  left,
  right,
  bottom,
}: StickerProps) {
  return (
    <div
      css={[
        defaultStyle,
        { backgroundColor },
        { top },
        { left },
        { right },
        { bottom },
      ]}
    >
      {children}
    </div>
  );
}

const defaultStyle = css`
  position: absolute;
  padding: 0.25rem 0.5rem;
  width: max-content;
  word-break: keep-all;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  z-index: 90;
`;

export default Sticker;
