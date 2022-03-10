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
    <Seo title="Social Media That Truly Flies" />
    <div className="logoColor bottom-color-border">
      <Container>
        <div className="d-md-flex justify-content-center align-items-center ">
          <div className="headerText">
          <h1>Social Media That Truly Flies</h1>
            <p className="lead">
              Montana took the Humane Society for Greater Savannah to heights beyond expectations. Nearly 24,000 people actively particiate within the HSGS Facebook page, which lead to more adoptions for the society. 
            </p>
          </div>
          <div className="px-md-5 text-center">
          <StaticImage
            src="../images/hsgs-phone-image-cropped.png"
            width={300}
            quality={85}
            formats={["auto", "webp", "avif"]}
            alt="Screen Shot of Humane Society for Greater Society Facebook Page"
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
          <p className="lead">Social Media is so much more than just posting a photo. It allows you to efficiently engage with your community on a scale like never before. Data shows optimizing social media directly and vastly impacts the financial growth and awareness of your business. We keep our clients informed and up to date with monthly progress reports on how their brand is growing. Our two major focuses are brand development and community awareness. Your business should truly be social, reels, stories, hashtags, correct links in bio quizzes & community engagement are the norm when you choose to use Social Butterfly Savannah. Spread your wings and fly with us to the next level. </p>

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
            alt="Screen Shot of Humane Society of Greater Savannah's instagram page"
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
          <p>Sometimes you need someone to review your social media strategy and give advice on how you can improve it. For companies that already have someone managing their social media, this is an excellent way to gain insights while still retaining current social media staff members.</p>
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
      <p><strong>Other Services:</strong></p>
      <p>
        * Event Planning <br />
        * Business Development & Strategizing<br />
        * Effective Networking workshops <br />
        * Graphic Design 
      </p>
    </Container>
    <div className="reversed-bg-color">
      <Container className="breathing-room">
        <Row>
        <Col lg={6}>
          <h1><strong>Montana Tohm</strong> <br />
          <small>Savannah's Social (Media) Butterfly</small></h1>
          <p>Originally from Canada, Montana currently resides in Savannah, Georgia. Before actively managing the HSGS social media accounts, she ran the largest dog sitting & walking company Halifetch in Nova Scotia, Canada.</p>
          <p>
She spends as much time with animals as she does enjoying  the outdoors. Serving her community has always been a top priority for her, she currently volunteers at the Savannah Wildlife Rescue Center, Fuzzy Therapy Miniature horses and Renegade Paws Rescue. Montana also currently serves on the board of Keep Savannah Beautiful for the city of Savannah, is an active member of the Jaycees and is an Ambassador for the Savannah Chamber of Commerce. 
She has been featured on The Great Canadian Women Podcast, CEMA (Chatham Emergency Management Agency) Y’all Ready For This Podcast, Mia Mance Trending Topics, Mark Robertson 98.7 The River, CTV, WTOC, WSAV, Fox28, Connect Savannah, Savannah Morning News, WJCL, Pinkblitz Magazine, Ogeechee River Keeper, Savannah Magazine, and Femme Bought. </p>
          <p>
          Montana has most recently been nominated for “Best Resident of Savannah” for 2022 via Connect Savannah. 
          </p>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <p className="text-center text-md-start">
            <StaticImage
                src="../images/montana-speaking.jpg"
                width={400}
                quality={85}
                formats={["auto", "webp", "avif"]}
                alt="Portrait of Montana Tohm"
              />
          </p>
        </Col>
        </Row>
      </Container>
    </div>
    <Container className="breathing-room singleCol">
      <h2 className="text-center">Work with Savannah's Social Butterfly</h2>
      <p className="text-center">and take your social media to the next level with Montana's expertise.</p>
      <Form 
                        name="contact"
                        method="post"
                        action="/contact-success/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit="submit"
                    >
                      <hr />
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
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
    <div className="reversed-bg-color breathing-room">
      <p className="lead text-center">Onsite photography available</p>
      <Container>
        <Row>
        <Col xs={4}>
          <StaticImage
            src="../images/savannah-01.jpg"
            width={400}
            quality={85}
            formats={["auto", "webp", "avif"]}
            alt="chairs around a fire pit at sunset"
          />
        </Col>
        <Col xs={4}>
          <StaticImage
            src="../images/savannah-02.jpg"
            width={400}
            quality={85}
            formats={["auto", "webp", "avif"]}
            alt="live oaks of Savannah Georgia"
          />
        </Col>
        <Col xs={4}>
          <StaticImage
            src="../images/savannah-03.jpg"
            width={400}
            quality={85}
            formats={["auto", "webp", "avif"]}
            alt="One of the squares of Savannah, Georgia"
          />
        </Col>
        </Row>
      </Container>
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
