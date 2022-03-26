import { Flex, Tooltip } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { tech } from "../../data"
import { LogoScroller } from "../LogoScroller"

const TechList = ({ isHovered }) => {
  const [rows, setRows] = useState(null)

  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "tech" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  // Split tech into three rows of equal size
  useEffect(() => {
    const thirdIndex = Math.floor(edges.length / 3)
    const firstRow = edges.splice(0, thirdIndex)
    const secondRow = edges.splice(0, thirdIndex)
    const thirdRow = edges // Remaining tech
    setRows([firstRow, secondRow, thirdRow])
  }, [])

  return (
    <Flex {...styles.wrapper}>
      {rows &&
        rows.map((row, index) => {
          const list = row.map(({ node: { publicURL, name } }) => {
            const { width, label } = tech.find(item => item.name === name)
            return (
              <Tooltip
                key={name}
                label={label}
                aria-label={label}
                {...styles.tooltip}
              >
                <img
                  src={publicURL}
                  alt={name}
                  loading="lazy"
                  style={{ ...styles.image, width: `${width * 0.6}px` }}
                />
              </Tooltip>
            )
          })

          return (
            <LogoScroller
              key={index}
              reverse={index % 2 === 1 ? true : false}
              logos={list}
              isHovered={isHovered}
            />
          )
        })}
    </Flex>
  )
}

export { TechList }

// Styles

const styles = {
  wrapper: {
    direction: "column",
    marginY: "5vh",
    minHeight: { base: "37vh", md: "50vh" },
    height: "100%",
  },
  image: {
    display: "inline-block",
    marginLeft: "4vw",
    maeginRight: "4vw",
    filter: "brightness(1) invert(1)",
  },
  tooltip: {
    fontFamily: "Times New Roman",
  },
}
