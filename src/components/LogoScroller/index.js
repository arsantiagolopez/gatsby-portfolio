import { Flex } from "@chakra-ui/react"
import React from "react"
import "./scroll.css"

const LogoScroller = ({ logos, isHovered, reverse }) => (
  <Flex {...styles.wrapper}>
    <Flex {...styles.mobileOnly}>
      <div
        style={{
          ...styles.logos,
          animation: `${reverse ? "right" : "left"} 100s linear infinite`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {logos}
      </div>
    </Flex>
    <Flex {...styles.desktopOnly}>
      <div
        style={{
          ...styles.logos,
          animation: `${reverse ? "right" : "left"} 100s linear infinite`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {logos}
        {logos}
        {logos}
      </div>
    </Flex>
  </Flex>
)

export { LogoScroller }

// Styles

const styles = {
  wrapper: {
    whiteSpace: "nowrap",
    display: "inline-block",
    marginY: { base: "2vh", md: "4vh" },
  },
  mobileOnly: {
    display: { base: "flex", md: "none" },
  },
  desktopOnly: {
    display: { base: "none", md: "flex" },
  },
  logos: {
    minWidth: "100%",
    display: "inline-block",
  },
}
