import { Flex, Link, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { projects } from "../../data"

const Projects = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `)

  return (
    <Flex {...styles.wrapper}>
      <Text {...styles.heading}>Some of my recent projects</Text>
      <Flex {...styles.content}>
        {projects.map(({ name, alt, href, height }) => {
          const {
            node: {
              childImageSharp: { gatsbyImageData },
            },
          } = edges.find(({ node }) => node?.name === name)
          return (
            <Link
              key={name}
              href={href}
              isExternal
              _hover={{
                filter: "brightness(1)",
                opacity: "1",
              }}
              {...styles.link}
            >
              <GatsbyImage
                href={href}
                alt={alt}
                image={getImage(gatsbyImageData)}
                quality={100}
                objectFit="contain"
                style={{
                  height,
                  marginTop:
                    name === "preppy"
                      ? "-0.75em"
                      : name === "flavors" || name === "vickyshop"
                      ? "0.2em"
                      : null,
                }}
              />
            </Link>
          )
        })}
      </Flex>
    </Flex>
  )
}

export { Projects }

// Styles

const styles = {
  wrapper: {
    direction: "column",
    align: "center",
    width: "100vw",
  },
  heading: {
    paddingTop: "6vh",
    fontSize: "14pt",
    fontWeight: "semibold",
    color: "gray.700",
  },
  content: {
    direction: { base: "column", md: "row" },
    align: "center",
    justify: "center",
    paddingY: "5vh",
    paddingX: { base: "2em", md: "20vw" },
  },
  link: {
    filter: "brightness(0)",
    opacity: "0.2",
    marginY: { base: "3vh", md: "none" },
    width: "100%",
    textAlign: "center",
  },
}
