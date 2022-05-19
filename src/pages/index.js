import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <div className='container col-xxl-8 my-3'>
      <div className='row flex-lg-row align-items-center g-5 py-5'>
        <div className='col col-xl-6 text-center'>
          <h1 className='display-5 fw-bold lh-1 mb-3 text-muted'>
            Hello and welcome!
          </h1>
          <p className='display-3 fw-bold text-muted '>I'm Michael Drawe</p>
          <p className='display-6 text-muted '>Front-End Web Developer</p>
          <p className='display-6 text-muted text-align-center'>and </p>
          <p className='display-6 text-muted '> Always Curious Human</p>
          <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
            <button
              type='button'
              className='btn btn-outline-primary text-primary btn-lg me-sm-3 fw-bold'
            >
              Check out My portfolio
            </button>
            <button
              type='button'
              className='btn btn-outline-secondary text-secondary btn-lg px-4'
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className='col-12 col-xl-6 mx-auto'>
          <StaticImage
            src='../images/michael.png'
            layout='fixed'
            height={600}
            quality={100}
            formats={['AUTO', 'WEBP']}
            alt='Photo of Michael Drawe'
            className='d-block mx-lg-auto img-fluid '
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
