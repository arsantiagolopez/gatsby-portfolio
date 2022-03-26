import { Flex, Text } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import { TechList } from "../TechList"

const Technologies = () => {
  const [isHovered, setIsHovered] = useState(false)

  const wrapperRef = useRef(null)

  const onHover = () => setIsHovered(true)

  // Prevent hover on children to set hovered to false
  const onBlur = event => {
    event.stopPropagation()
    const { relatedTarget: hoveredNode } = event
    // Unmount returns "window" object, prevent throw
    if (hoveredNode.hasOwnProperty("window")) return setIsHovered(false)
    const hoveredOutsideOfWrapper = !wrapperRef?.current?.contains(hoveredNode)
    if (hoveredOutsideOfWrapper) {
      setIsHovered(false)
    }
  }

  const techListProps = { isHovered }

  return (
    <Flex
      ref={wrapperRef}
      onMouseEnter={onHover}
      onMouseLeave={onBlur}
      {...styles.wrapper}
    >
      <Text {...styles.heading}>Technologies used</Text>
      <TechList {...techListProps} />
    </Flex>
  )
}

export { Technologies }

// Styles

const styles = {
  wrapper: {
    direction: { base: "column", md: "column" },
    justify: "center",
    align: "center",
    width: "100vw",
    background: "gray.800",
    overflow: "hidden",
    minHeight: "35vh",
  },
  heading: {
    paddingTop: "7vh",
    fontSize: "14pt",
    fontWeight: "semibold",
    color: "white",
  },
}
