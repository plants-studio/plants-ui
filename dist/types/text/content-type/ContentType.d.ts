/// <reference types="react" />
export declare type ConentTypeProps = {
    /** 콘텐츠 타입 */
    children: React.ReactNode;
    /** 콘텐츠 타입의 너비 */
    width?: string | number;
};
/** `ContentType` 는 콘텐츠의 타입을 알려주는 텍스트입니다 */
declare function ContentType({ children, width }: ConentTypeProps): JSX.Element;
export default ContentType;
