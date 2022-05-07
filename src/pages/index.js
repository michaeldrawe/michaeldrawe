import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-12 ">
        
        <StaticImage
            src="../images/gatsby-astronaut.png"
            layout="fixed"
            height={600}
            quality={100}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="d-block mx-lg-auto img-fluid" />
      </div>
      <div className="col-lg-12 text-center">
        <h1 className="display-2 fw-bold lh-1 mb-3">Hello and welcome!</h1>
        <h1 className="lead display-4 fw-bold lh-1 mb-3">I'm Michael Drawe</h1><hr/>
        <p className=" display-5">Front-End Web Developer,</p>
        <p className="display-5"> Designer and </p>
        <p className="display-5"> always curious human</p>
        <div class="d-grid gap-4 d-xl-flex justify-content-xl-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 justify-content-lg-middle">Check out my portfolio</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Me</button>
        </div>
      </div>
    </div>
    
    
  </Layout>
)

export default IndexPage
