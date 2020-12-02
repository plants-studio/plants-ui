/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type CardProps = {
  /** 카드 안에 들어갈 내용. div로 감싸져 있어야 함 */
  children: React.ReactNode;
  /** 카드의 너비 */
  width?: string | number;
  /** 카드의 높이 */
  height?: string | number;
  /** 카드의 타이틀 */
  cardTitle?: string;
  /** 카드의 padding 여부 */
  isPadding?: boolean;
};

function Card({
  children,
  width,
  height,
  cardTitle,
  isPadding = true,
}: CardProps) {
  return (
    <div
      css={[defaultStyle, { width }, { height }, paddingSelector(isPadding)]}
    >
      {cardTitle != null && <span css={cardTitleStyle}>{cardTitle}</span>}
      {children}
    </div>
  );
}

const defaultStyle = css`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 6px 25px #d1d5df;
  overflow: hidden;
`;

const cardTitleStyle = css`
  display: block;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: normal;
  color: #858997;
`;

const paddingSelector = (props: boolean) =>
  props
    ? css`
        padding: 1rem 1rem;
      `
    : css`
        padding: 0;
      `;

export default Card;
