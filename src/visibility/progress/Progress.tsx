/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type ProgressProps = {
  /** 퍼센트에이지 */
  percentage: number;
  /** 프로그래스바의 너비 */
  width: string | number;
  /** 프로그래스바의 색깔 */
  color?: string;
  /** 프로그래스바의 두께 */
  height?: string | number;
};

/** `Progress` 는 기본적인 프로그래스바 입니다. */
function Progress({
  percentage = 0,
  width = "100%",
  color = "#f23c4c",
  height = "0.5rem",
}: ProgressProps) {
  const background = color;
  return (
    <div
      className="area"
      css={[areaStyle, { width }, { height }, { background }]}
    >
      <div className="back" css={[backStyle]}></div>
      <div
        className="progress"
        css={[defaultStyle, `width: ${percentage}%;`, { background }]}
      ></div>
    </div>
  );
}

const areaStyle = css`
  display: flex;
  flex-direction: row-reverse;
  border-radius: 2px;
  overflow: hidden;
`;

const backStyle = css`
  width: 100%;
  height: 100%;
  background-color: #f23c4c;
  opacity: 0.3;
`;

const defaultStyle = css`
  height: 100%;
  background-color: #f23c4c;
  opacity: 1;
`;

export default Progress;
