/// <reference types="react" />
export declare type ButtonProps = {
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
declare function Button({ children, themeType, isDisabled, width, onClick, }: ButtonProps): JSX.Element;
export default Button;
