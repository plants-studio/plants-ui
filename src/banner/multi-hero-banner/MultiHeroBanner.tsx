/** @jsx jsx */
import { useState, useEffect, useRef } from "react";
import { jsx, css } from "@emotion/core";
import Progress from "../../visibility/progress/Progress";
import Header from "../../text/header/Header";
import SubHeader from "../../text/sub-header/SubHeader";
import ContentType from "../../text/content-type/ContentType";
import ChevronButton from "../../button/chevron-button/ChevronButton";

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
  const index = useRef(0);
  const time = useRef(0);
  const [percentage, setPercentage] = useState(0);
  const [margin, setMargin] = useState("0");
  const [sliderWidth, setSliderWidth] = useState("");
  const [slideWidth, setSlideWidth] = useState("");
  const slides = document.getElementsByClassName("slide");

  useEffect(() => {
    setSliderWidth(`${(slides.length + 1) * 100}%`);
    setSlideWidth(`${100 / (slides.length + 1)}%`);
    setInterval(imageSwipe, 100);
  }, []);

  const imageSwipe = () => {
    if (time.current === 100) {
      time.current = 0;
      index.current++;
      setMargin(`0 0 0 -${(index.current % slides.length) * 100}%`);
    } else {
      time.current++;
      setPercentage(time.current);
    }
  };

  const swipePrevious = () => {
    if (index.current - 1 < 0) {
      index.current += slides.length - 1;
      setMargin(`0 0 0 -${(index.current % slides.length) * 100}%`);
    } else {
      index.current--;
      setMargin(`0 0 0 -${(index.current % slides.length) * 100}%`);
    }
    time.current = 0;
  };

  const swipeNext = () => {
    index.current++;
    setMargin(`0 0 0 -${(index.current % slides.length) * 100}%`);
    time.current = 0;
  };

  return (
    <div css={[bannerStyle, { width }, { height }]}>
      <div css={imageSliderStyle}>
        <div css={[imageSlidesStyle, { width: sliderWidth, margin }]}>
          {bannerData.map((data, i) => (
            <div
              css={[imageSlideStyle, { width: slideWidth }]}
              className="slide"
              key={i}
            >
              <img src={data.imagePath} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div css={textSliderWrapperStyle}>
        <div css={[textSliderStyle, { width: sliderWidth, margin }]}>
          {bannerData.map((data, i) => (
            <div css={[textSlideStyle, { width: slideWidth }]} key={i}>
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
        <div css={ProgressAreaStyle}>
          <Progress percentage={percentage} color="#f23c4c" width="80%" />
          <ChevronButton themeType="chevronLeft" onClick={swipePrevious} />
          <ChevronButton themeType="chevronRight" onClick={swipeNext} />
        </div>
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
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const ProgressAreaStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default MultiHeroBanner;
