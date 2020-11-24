/// <reference types="react" />
export declare type NavButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭 시 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼의 너비 */
    width?: string | number;
    /** 해당 페이지인지 여부 */
    isSelected?: boolean;
};
/** `NavButton` 은 페이지 이동 및 호버 애니메이션을 가진 버튼입니다. */
declare function NavButton({ children, width, isSelected, onClick }: NavButtonProps): JSX.Element;
export default NavButton;
