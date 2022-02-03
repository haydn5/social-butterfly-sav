import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="py-5 text-center">
    <h2>Thanks! I'll will be in touch with you shortly.</h2>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    indexImage: file(relativePath: {eq: "downtown-sav.jpg"}) {
      id
      base
      relativePath
      childImageSharp {
        gatsbyImageData(
          width: 1600
          webpOptions: {quality: 30}
          placeholder: BLURRED
          blurredOptions: {width: 30}
        )
      }
    }
  }
`
