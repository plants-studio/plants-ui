/** @jsx jsx */
import { jsx } from "@emotion/core";
import Sticker from "./Sticker";

export default {
  title: "components/Sticker",
  conponent: Sticker,
};

export const DefaultSticker = () => {
  return <Sticker>LEAGUE OF LEGENDS</Sticker>;
};
