import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-lg-1"></div>
      <div class="col-lg-5 col-md-12 col-sm-12">
        <StaticImage
          src="../images/michael.png"
          layout="fixed"
          height={600}
          quality={100}
          formats={["AUTO", "WEBP"]}
          alt="Photo of Michael Drawe"
          className="d-block mx-lg-auto img-fluid"
        />
      </div>
      <div className="col-lg-5 col-md-12 col-sm-12 text-center">
        <h1 className="display-2 fw-bold lh-1 mb-3">Hello and welcome!</h1>
        <h1 className="lead display-4 fw-bold lh-1 mb-3">I'm Michael Drawe</h1>
        <hr />
        <p className=" display-5">Front-End Web Developer</p>
        <p className="display-5">and </p>
        <p className="display-5"> Always Curious Human</p>
      </div>
      <div className="col-lg-1"></div>
    </div>
    <div className="row">
      <div class="d-grid gap-4 d-xl-flex justify-content-xl-center">
      <div className="col-xl-6"></div>
      <div className="col-xl-5">
        {" "}
        <button type="button" class="btn btn-primary btn-lg">
          Check out My portfolio
        </button>
        <button type="button" class="btn btn-outline-secondary btn-lg">
          Contact Me
        </button>
      </div>
      </div>{" "}<div className="col-xl-1"></div>
    </div>
  </Layout>
)

export default IndexPage
