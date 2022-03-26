import { ChakraProvider } from "@chakra-ui/react"
import React from "react"

export const wrapPageWithChakra = ({ element }) => (
  <ChakraProvider resetCSS>{element}</ChakraProvider>
)
