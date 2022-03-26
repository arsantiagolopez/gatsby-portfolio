import { Flex, Heading, Link, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { detailedProjects } from "../../data"

const TechPerProject = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                width: 150
                placeholder: NONE
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  return (
    <Flex {...styles.wrapper}>
      <Text {...styles.heading}>Tech per project basis</Text>
      <Flex {...styles.content}>
        {detailedProjects.map(
          ({
            name,
            label,
            height,
            href,
            github,
            frontend,
            backend,
            devops,
          }) => {
            const image = edges.find(({ node }) => node.name === name).node
              .childImageSharp
            return (
              <Flex key={name} {...styles.project}>
                <Flex {...styles.header}>
                  <Heading {...styles.name}>{label}</Heading>
                  <GatsbyImage
                    image={getImage(image)}
                    alt={label}
                    quality={100}
                    objectFit="contain"
                    style={{ ...styles.image, height }}
                  />
                </Flex>

                <Flex {...styles.tech}>
                  <Text>
                    <b>Frontend:</b> {frontend.join(", ")}.
                  </Text>
                  <Text>
                    <b>Backend:</b> {backend.join(", ")}.
                  </Text>
                  <Text>
                    <b>DevOps:</b> {devops.join(", ")}.
                  </Text>
                </Flex>

                <Flex>
                  <Link
                    href={`https://${href}`}
                    {...styles.demo}
                    marginRight="3"
                    isExternal
                  >
                    {href}
                  </Link>
                  |
                  <Link
                    href={github}
                    {...styles.demo}
                    marginLeft="3"
                    isExternal
                  >
                    See the code
                    {name === "flavors" && " (private)"}
                  </Link>
                </Flex>
              </Flex>
            )
          }
        )}
      </Flex>
    </Flex>
  )
}

export { TechPerProject }

// Styles

const styles = {
  wrapper: {
    direction: "column",
    align: "center",
    width: "100%",
  },
  heading: {
    paddingY: "7vh",
    fontSize: "14pt",
    fontWeight: "semibold",
    color: "gray.700",
  },
  content: {
    direction: "column",
    width: "100%",
    paddingBottom: "10vh",
  },
  project: {
    direction: "column",
    width: "100%",
    paddingY: "2vh",
  },
  header: {
    direction: "row",
    align: "center",
    justify: "space-between",
    width: "100%",
    minHeight: "5vh",
  },
  name: {
    fontSize: "14pt",
    fontFamily: "Times New Roman",
    color: "gray.700",
  },
  image: {
    filter: "brightness(0)",
    opacity: "0.7",
  },
  tech: {
    direction: "column",
    width: { base: "100%", md: "80%" },
    paddingY: { base: "2vh", md: "1vh" },
  },
  demo: {
    textDecoration: "underline",
  },
  icon: {
    fontSize: "9pt",
  },
}
