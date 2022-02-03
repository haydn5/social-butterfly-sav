import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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
    </BgImage>
    <Container className="py-5">
    <h2 className="pb-4">The Ways We Can Work Together</h2>
      <Row className="gx-5">
        <Col lg={4}>
          <p><strong>Monthly Auditing & Consulting</strong></p>
          <p>Sometimes you need someone to review your social media strategy and give advice on how you can improve it. For companies that already have someone managing their social media, this is an excellent way to gain insights will still retaining current social media staff members.</p>
        </Col>
        <Col lg={4}>
          <p><strong>Lite Social Media Management</strong></p>
          <p>
            Social media is crucial to your business and sometimes you just need help getting started or getting a routine going of posting content. We can help you get going on your various social media platforms to grow your audience.
          </p>
        </Col>
        <Col lg={4}>
          <p><strong>Active Media Management</strong></p>
          <p>
            <strong><em>Only 6 out of 7 spots left</em></strong> | 
            Let us take over how your social media is run. We will take an actived-managed role in your social media, respond to comments, get a hashtag trending, creating real-time stories and fully engage with your audience, putting the social in social media.
          </p>
        </Col>
      </Row>
    </Container>
    <div className="reversed-bg-color">
      <Container className="breathing-room">
        <Row>
        <Col lg={6}>
          <h1><strong>Montana Tohm</strong> <br />
          <small>Savannah's Social (Media) Butterfly</small></h1>
          <p>Originally from Canada, Montana currently resides in Savannah, Georgia. Before actively managing the HSGS social media accounts, she ran the largest dog sitting & walking company in Nova Scotia, Canada.</p>
          <p>
            She is an avid runner & donates her timing serving the four-legged & winged animals of Savannah at the Savannah Wildlife Rescue Center as well as working to make Savannah a gorgeous place to live by serving on the board of the Keep Savannah Beautiful council. 
          </p>
          <p>
            When she's not making Savannah goregous or resucing animals, she's serving the business community by being an ambassador with the Savannah Chamber of Commerce as well as being a member of the JCs and Junior League.
          </p>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
        <StaticImage
            src="../images/montana-portrait.jpg"
            width={400}
            quality={85}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
          />
        </Col>
        </Row>
      </Container>
    </div>
    <Container className="breathing-room singleCol">
      <h2 className="text-center">Work with Savannah's Social Butterfly</h2>
      <p className="text-center">and take your social media to the next level with Montana's expertise.</p>
      <Form 
                        name="contact v9"
                        method="post"
                        action="/success/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit="submit"
                    >
                      <hr />
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact v9" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" />
                    </label>
                    </p>
                     


                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                        type="text" name="first-name"
                                     />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                            <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                       type="text" name="last-name"

                                     />
                            </Form.Group>
                            </Col>
                        </Row>


                            
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                required
                                type="email" 
                                name="email" 
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                                required
                                type="text" 
                                name="phone" 
                            />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Please tell us a little bit about your business.</Form.Label>
                            <Form.Control 
                            required
                                as="textarea" 
                                name="more-about-business"
                                rows="3"
                             />
                        </Form.Group>
                        <Button type="submit" className="btn-dark">Submit</Button>
                        </Form>
    </Container>
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
