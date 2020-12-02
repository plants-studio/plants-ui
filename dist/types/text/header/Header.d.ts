/// <reference types="react" />
export declare type HeaderProps = {
    /** 헤더 안의 내용 */
    children: React.ReactNode;
    /** 헤더의 너비 */
    width?: string | number;
    /** 헤더의 크기 */
    size: "small" | "medium" | "large";
    /** 오버플로우 모드 활성화 여부 */
    isOverflowMode?: boolean;
    /** Word-Keep 모드 활성화 여부 */
    isWordKeepMode?: boolean;
};
/** `Header` 는 기본적인 헤더입니다 */
declare function Header({ children, width, size, isOverflowMode, isWordKeepMode, }: HeaderProps): JSX.Element;
export default Header;
