import styled from "@emotion/styled";

import { media } from "../utils/media";

interface Props {
  fullWidth: boolean;
}

export const Wrapper = styled.div<Props>(({
  fullWidth,
}) => {
  return {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: fullWidth ? "100%" : "100rem",
    padding: fullWidth ? "0" : "0 6rem",
    `@media ${media.tablet}`: {
      padding: `${(props: any) => (props.fullWidth ? "0" : "0 3rem")}`,
    },
    `@media ${media.phone}`: {
      padding: `${(props: any) => (props.fullWidth ? "0" : "0 1rem")}`,
    }
  }
});
