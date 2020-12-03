/** @jsx jsx */
import { useState, useEffect, useRef } from "react";
import { jsx, css } from "@emotion/core";
import Progress from "../../visibility/progress/Progress";
import Header from "../../text/header/Header";
import SubHeader from "../../text/sub-header/SubHeader";
import ContentType from "../../text/content-type/ContentType";

export type MultiHeroBannerProps = {
  /** 배너의 너비 */
  width: string | number;
  /** 배너의 높이 */
  height: string | number;
  /** 배너 데이터리스트 */
  bannerData: {
    header: string;
    subHeader: any;
    imagePath: string;
    contentType: string;
  }[];
};

/** `MultiHeroBanner` 는 웹페이지 상단의 큰 배너입니다. */
function MultiHeroBanner({
  width = "62.5rem",
  height = "25rem",
  bannerData,
}: MultiHeroBannerProps) {
  const [margin, setMargin] = useState("0");
  const index = useRef(1);
  const [sliderWidth, setSliderWidth] = useState("");
  const [slideWidth, setSlideWidth] = useState("");
  const slides = document.getElementsByClassName("slide");

  const imageSwipe = () => {
    setMargin(`0 0 0 -${(index.current % slides.length) * 100}%`);
    index.current++;
  };

  useEffect(() => {
    setSliderWidth(`${(slides.length + 1) * 100}%`);
    setSlideWidth(`${100 / (slides.length + 1)}%`);
    setInterval(imageSwipe, 5000);
  }, []);

  return (
    <div css={[bannerStyle, { width }, { height }]}>
      <div css={imageSliderStyle}>
        <div css={[imageSlidesStyle, `width: ${sliderWidth};`, { margin }]}>
          {bannerData.map((data, i) => (
            <div
              css={[imageSlideStyle, `width: ${slideWidth}`]}
              className="slide"
              key={i}
            >
              <img src={data.imagePath} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div css={textSliderWrapperStyle}>
        <div css={[textSliderStyle, `width: ${sliderWidth};`, { margin }]}>
          {bannerData.map((data, i) => (
            <div css={[textSlideStyle, `width: ${slideWidth}`]} key={i}>
              <span>
                <ContentType>{data.contentType}</ContentType>
                <Header size="medium">{data.header}</Header>
              </span>
              <SubHeader size="small" padding="2rem 0">
                {data.subHeader}
              </SubHeader>
            </div>
          ))}
        </div>
        <Progress percentage={50} color="#f23c4c" width="100% "></Progress>
      </div>
    </div>
  );
}

const bannerStyle = css`
  background: #f8faff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const imageSliderStyle = css`
  width: 55%;
  height: 90%;
  border-radius: 10px;
  overflow: hidden;
`;

const imageSlidesStyle = css`
  height: 100%;
  display: flex;
  transition: all 600ms ease-in-out;
`;

const imageSlideStyle = css`
  img {
    width: 100%;
    height: 100%;
  }
`;

const textSliderWrapperStyle = css`
  width: 40%;
  height: 87.5%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const textSliderStyle = css`
  height: 90%;
  display: flex;
  overflow: hidden;
  transition: all 600ms ease-in-out;
`;

const textSlideStyle = css`
  display: flex;
  flex-direction: column;
`;

export default MultiHeroBanner;
