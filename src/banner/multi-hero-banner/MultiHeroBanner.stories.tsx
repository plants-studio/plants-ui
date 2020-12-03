/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import MultiHeroBanner from "./MultiHeroBanner";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "components/Banner/MultiHeroBanner",
  component: MultiHeroBanner,
  decorators: [withKnobs],
};

const bannerData = [
  {
    header: "개리형배 제1회 천하제일 오른대회",
    subHeader: (
      <>
        오른장인 개리형이 오픈리그에 나타났습니다. 경기는 탑라인에서 1:1
        토너먼트 방식으로 진행되며, 대회날 당일 트위치 생방송을 통해 송출됩니다.
        <br />
        <br />총 10,000 RP 규모의 상금과 “고춘이 그자체” 칭호를 위해 도전하세요!
      </>
    ),
    imagePath: "https://i.ytimg.com/vi/hNpgWWwof6I/maxresdefault.jpg",
    contentType: "대회 / 이벤트",
  },
  {
    header: "제1회 배그 미라마 오토바이 레이스",
    subHeader: <>우탕탕탕 배그 레이스 오픈</>,
    imagePath:
      "https://t1.kakaocdn.net/gamepub/daumgame/common/meta_tag_pubg.png",
    contentType: "대회 / 이벤트",
  },
  {
    header: "제1회 문명 월드컵 (과학승리)",
    subHeader: <>자신의 문명을 과학승리로 이끌어보세요!!</>,
    imagePath: "https://t1.daumcdn.net/cfile/tistory/9967D13359B9E38628",
    contentType: "대회 / 이벤트",
  },
  {
    header: "오버워치 1대1 데스매치",
    subHeader: <>토너먼트 방식입니다. 어디까지 올라갈 수 있을까요?</>,
    imagePath:
      "https://bnetcmsus-a.akamaihd.net/cms/gallery/IS0TDFCUCB4X1549045732271.jpg",
    contentType: "대회 / 이벤트",
  },
];

export const multiHeroBanner = () => {
  const width = text("width", "62.5rem");
  const height = text("height", "25rem");
  return (
    <MultiHeroBanner
      width={width}
      height={height}
      bannerData={bannerData}
    ></MultiHeroBanner>
  );
};

multiHeroBanner.story = {
  name: "Default",
};
