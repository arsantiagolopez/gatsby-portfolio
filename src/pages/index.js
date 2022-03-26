import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import { Layout } from "../components/Layout"
import { Projects } from "../components/Projects"
import { Seo } from "../components/Seo"
import { Technologies } from "../components/Technologies"
import { TechPerProject } from "../components/TechPerProject"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Flex {...styles.content}>
        <Text {...styles.heading}>About me</Text>
        <Text>
          I'm a full stack javascript developer with an eye for design. My
          current favorite technologies are: React.js, TypeScript, Node.js and
          PostgreSQL. I love innovation and picked up my current tech stack to
          take advantage of the newest and best in the web.
        </Text>

        <Projects />

        <Technologies />

        <TechPerProject />
      </Flex>
    </Layout>
  )
}

export default IndexPage

// Styles

const styles = {
  content: {
    direction: "column",
    justify: "center",
    align: "center",
    width: "100%",
    fontFamily: "Times New Roman",
    fontSize: "12pt",
    color: "gray.600",
  },
  heading: {
    paddingTop: { base: "5vh", md: "6vh" },
    paddingBottom: "2vh",
    fontWeight: "semibold",
    color: "gray.700",
    fontSize: "14pt",
  },
}
