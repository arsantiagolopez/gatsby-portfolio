/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Flex } from "@chakra-ui/react"
import PropTypes from "prop-types"
import React from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"

const Layout = ({ children }) => (
  <>
    <Header />
    <Flex {...styles.wrapper}>
      <main>{children}</main>
    </Flex>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }

// Styles

const styles = {
  wrapper: {
    direction: "column",
    justify: "center",
    marginX: { base: "2em", md: "26vw" },
  },
}
