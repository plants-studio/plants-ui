/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type SubHeaderProps = {
  /** 서브 헤더 안의 내용 */
  children: React.ReactNode;
  /** 서브 헤더의 너비 */
  width?: string | number;
  /** 서브 헤더의 크기 */
  size: "small";
  /** 서브 헤더의 패딩 */
  padding?: string | number;
  /** 오버플로우 모드 활성화 여부 */
  isOverflowMode?: boolean;
  /** Word-Keep 모드 활성화 여부 */
  isWordKeepMode?: boolean;
};

/** `SubHeader` 는 보조적인 설명이 있는 헤더입니다 */
function subHeader({
  children,
  width,
  size = "small",
  padding,
  isOverflowMode = false,
  isWordKeepMode = true,
}: SubHeaderProps) {
  return (
    <h3
      css={[
        defaultStyle,
        sizes[size],
        { width },
        { padding },
        setOverflow(isOverflowMode),
        setWordKeepMode(isWordKeepMode),
      ]}
    >
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
    font-size: 0.875rem;
  `,
};

const setOverflow = (isOverflowMode: boolean) => {
  if (isOverflowMode) {
    return css`
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `;
  } else {
    return css``;
  }
};

const setWordKeepMode = (isWordKeepMode: boolean) => {
  if (isWordKeepMode) {
    return css`
      word-break: keep-all;
    `;
  } else {
    return css``;
  }
};

export default subHeader;
