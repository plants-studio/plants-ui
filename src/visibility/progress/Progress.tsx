/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type ProgressProps = {
  /** 퍼센트에이지 */
  percentage: number;
  /** 프로그래스바의 너비 */
  width?: string | number;
  /** 프로그래스바의 색깔 */
  color?: string;
  /** 프로그래스바의 두께 */
  height?: string | number;
};

/** `Progress` 는 기본적인 프로그래스바 입니다. */
function Progress({
  percentage,
  width = "100%",
  color = "#f23c4c",
  height = "0.5rem",
}: ProgressProps) {
  return (
    <div className="area" css={[areaStyle, { width: width, height: height }]}>
      <div className="back" css={[backStyle, { background: color }]}></div>
      <div
        className="progress"
        css={[
          fillStyle,
          {
            width: `${percentage}%`,
            height: height,
            background: color,
            bottom: height,
          },
        ]}
      ></div>
    </div>
  );
}

const areaStyle = css`
  border-radius: 2px;
  overflow: hidden;
`;

const backStyle = css`
  width: 100%;
  height: 100%;
  background: red;
  opacity: 0.3;
`;

const fillStyle = css`
  position: relative;
  height: 100%;
  background: red;
  opacity: 1;
  transition: 150ms;
`;

export default Progress;
