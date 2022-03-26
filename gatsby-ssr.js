/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import { wrapPageWithChakra } from "./src/utils/wrapPageWithChakra"

export const wrapPageElement = wrapPageWithChakra
