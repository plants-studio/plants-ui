/// <reference types="react" />
export declare type SubHeaderProps = {
    /** 서브 헤더 안의 내용 */
    children: React.ReactNode;
    /** 서브 헤더의 너비 */
    width?: string | number;
    /** 서브 헤더의 크기 */
    size: "small";
};
/** `SubHeader` 는 보조적인 설명이 있는 헤더입니다 */
declare function subHeader({ children, width, size }: SubHeaderProps): JSX.Element;
export default subHeader;
