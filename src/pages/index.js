import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col } from 'react-bootstrap';

// The bridge for Gatsby Background Image in V3
import { BgImage } from 'gbimage-bridge'


const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <div className="logoColor bottom-color-border">
      <Container>
        <div className="d-md-flex justify-content-center align-items-center ">
          <div className="headerText">
          <h1>Social Media That Truly Flies</h1>
            <p className="lead">
              Montana took the Humane Society for Greater Society to heights beyond exptactions. Nearly 24,000 people actively particiate within the HSGS Facebook page, which lead to more adoptions for the society. 
            </p>
          </div>
          <div className="px-md-5 text-center">
          <StaticImage
            src="../images/hsgs-phone-image-cropped.png"
            width={300}
            quality={85}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
          />
          </div>

        
            
          
          </div>
      </Container>
    </div>
    <Container className="breathing-room">
      <Row>
        <Col lg={1}></Col>
        
        <Col lg={5}>
          <h2>Go Beyond Posts</h2>
          <p className="lead">Social Media has to be truly social. Reels, stories, hashtags, link in bio. Your business should truly be social. With the HSGS, sotries were should of options, hastags were followed and quizzes & social interactions were the norm.</p>

          <p className="lead">
            <strong>Due to a strong social media, the HSGS instagram page tripled</strong>, and lead to a dramatic increased awareness of HSGS to the community.
          </p>
        </Col>
        <Col lg={5} className="text-center" xs={{ order: 12 }}>
          <StaticImage
            src="../images/instagram-hsgs-white.jpg"
            width={400}
            quality={85}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
          />
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
    <BgImage 
      image={getImage(data.indexImage)} 
      className="masthead mb-4"
    >
      <div className="color-overlay d-flex flex-column justify-content-center align-items-center">
        <h1 >Your Trusted Partners in Real Estate</h1>
        <div className="m-0 m-lg-2 mt-lg-1 text-center">
          <Link to="/contact/" className="btn btn-outline-light p-2 btn-lg mx-2">Residential</Link>
          <Link to="/contact/" className="btn btn-outline-light p-2 btn-lg mx-2">Commercial</Link>

          
          
        </div>
        <Link to="/contact/" className="btn btn-dark p-2 mt-3 mt-md-2 mt-lg-0 btn-lg">Schedule a Consultation</Link>
      </div>
    </BgImage>
    
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
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
