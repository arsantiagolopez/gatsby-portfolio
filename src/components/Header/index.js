import { Flex, Icon, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { RiGithubFill, RiInstagramFill } from "react-icons/ri"
import { AnimatedAvatar } from "../AnimatedAvatar"

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          email
          description
          github
          instagram
        }
      }
    }
  `)

  return (
    <Flex {...styles.wrapper}>
      <Flex {...styles.model}>
        <AnimatedAvatar />
      </Flex>

      {/* <StaticImage
        src="../../images/alex.png"
        width={150}
        quality={100}
        placeholder="none"
        formats={["auto", "webp", "avif"]}
        alt={site.siteMetadata?.name}
        style={styles.image}
      /> */}

      <Text {...styles.name}>{site.siteMetadata?.name}</Text>
      <a href={`mailto:${site.siteMetadata?.email}`}>
        <Text {...styles.email}>{site.siteMetadata?.email}</Text>
      </a>
      <Text {...styles.about}>{site.siteMetadata?.description}</Text>

      <Flex {...styles.socials}>
        <a href={site.siteMetadata?.github} rel="noreferrer" target="_blank">
          <Icon as={RiGithubFill} {...styles.icon} />
        </a>
        <a href={site.siteMetadata?.instagram} rel="noreferrer" target="_blank">
          <Icon as={RiInstagramFill} {...styles.icon} />
        </a>
      </Flex>
    </Flex>
  )
}

export { Header }

// Styles

const styles = {
  wrapper: {
    direction: "column",
    justify: "center",
    align: "center",
    width: "100%",
    marginTop: "18vh",
    fontFamily: "Times New Roman",
    fontSize: "12pt",
    color: "gray.600",
  },
  model: {
    height: "20vh",
  },
  image: {},
  name: {
    fontSize: "2xl",
    fontWeight: "semibold",
    letterSpacing: "tight",
    paddingY: "1.5vh",
    color: "gray.700",
  },
  email: {
    _hover: {
      textDecoration: "underline",
    },
  },
  about: {
    paddingTop: "1.5vh",
  },
  socials: {
    direction: "row",
    justify: "center",
    align: "center",
    paddingTop: "2vh",
  },
  icon: {
    variant: "unstyled",
    fontSize: { base: "20pt", md: "18pt" },
    marginLeft: { base: "3", md: "1" },
    cursor: "pointer",
    _hover: {
      color: "black",
    },
  },
}
