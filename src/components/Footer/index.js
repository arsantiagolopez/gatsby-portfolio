import { Flex, Icon, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { IoCall, IoMail } from "react-icons/io5"
import { RiGithubFill, RiInstagramFill } from "react-icons/ri"

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          phone
          instagram
          github
        }
      }
    }
  `)

  const formatPhone = number => {
    const phone = Array.from(number)
    const last = phone.splice(-4)
    const middle = phone.splice(-3)
    const area = phone.splice(-3)
    const extension = phone
    return `${extension} (${area}) ${middle}-${last}`.replaceAll(",", "")
  }

  return (
    <Flex {...styles.wrapper}>
      <Flex {...styles.section} {...styles.contact}>
        <Text {...styles.heading}>Get in touch</Text>

        <a href={`sms:${site.siteMetadata.phone}`}>
          <Text {...styles.text} {...styles.link}>
            <Icon as={IoCall} {...styles.icon} />
            {formatPhone(site.siteMetadata.phone)}
          </Text>
        </a>
        <a href={`mailto:${site.siteMetadata.email}`}>
          <Text {...styles.text} {...styles.link}>
            <Icon as={IoMail} {...styles.icon} />
            {site.siteMetadata.email}
          </Text>
        </a>
      </Flex>
      <Flex {...styles.section} {...styles.socials}>
        <Text {...styles.heading}>Socials</Text>
        <Flex>
          <a href={site.siteMetadata.instagram}>
            <Icon as={RiInstagramFill} {...styles.socialIcon} />
          </a>
          <a href={site.siteMetadata.github}>
            <Icon as={RiGithubFill} {...styles.socialIcon} />
          </a>
        </Flex>
      </Flex>
    </Flex>
  )
}

export { Footer }

// Styles

const styles = {
  wrapper: {
    direction: { base: "column", md: "row" },
    justify: "center",
    width: "100%",
    minHeight: { base: "40vh", md: "30vh" },
    background: "gray.800",
    color: "white",
    fontFamily: "Times New Roman",
    paddingX: { base: "2em", md: "26vw" },
  },
  section: {
    direction: "column",
    align: { base: "center", md: "flex-start" },
    minHeight: "20vh",
    width: "100%",
  },
  contact: {},
  socials: {},
  heading: {
    fontSize: "18pt",
    fontWeight: "semibold",
    paddingTop: { base: "3vh", md: "7vh" },
    paddingBottom: "2vh",
    fontStyle: "italic",
  },
  text: {
    fontSize: "12pt",
    paddingY: "1vh",
  },
  link: {
    _hover: {
      textDecoration: "underline",
    },
  },
  icon: {
    marginRight: "3",
    fontSize: "16pt",
  },
  socialIcon: {
    marginX: "2",
    fontSize: "26pt",
  },
}
