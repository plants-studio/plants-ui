/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭 시 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새 타입 */
  themeType: "primary" | "secondary" | "tertiary";
  /** 버튼의 비활성화 여부 */
  isDisabled?: boolean;
  /** 버튼의 너비 */
  width?: string | number;
};

/** `Button` 은 기본적인 버튼입니다. */
function Button({
  children,
  themeType,
  isDisabled,
  width,
  onClick,
}: ButtonProps) {
  return (
    <button
      css={[defaultStyle, themeTypeStyle[themeType], { width }]}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  themeType: "primary",
};

const defaultStyle = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2.4rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    &:hover {
      cursor: not-allowed;
    }
  }
  &:hover {
    cursor: pointer;
  }

  svg {
    width: 1em;
    margin-right: 1em;
  }
`;

const themeTypeStyle = {
  primary: css`
    background: #f23c4c;
    color: white;
    svg {
      fill: white;
    }
    &:hover:enabled {
      background: #ff6870;
    }
    &:active:enabled {
      background: #ff6870;
    }
    &:disabled {
      background: #ff6870;
    }
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
    svg {
      fill: #343a40;
    }
    &:hover:enabled {
      background: #f1f3f5;
    }
    &:active:enabled {
      background: #dee2e6;
    }
    &:disabled {
      color: #c6d3e1;
      svg {
        fill: #c6d3e1;
      }
    }
  `,
  tertiary: css`
    background: none;
    color: #f23c4c;
    svg {
      fill: #f23c4c;
    }
    &:hover:enabled {
      background: #ffdde0;
    }
    &:active:enabled {
      background: #ffdde0;
    }
    &:disabled {
      color: #ffb4b8;
      svg {
        fill: #ffb4b8;
      }
    }
  `,
};

export default Button;
