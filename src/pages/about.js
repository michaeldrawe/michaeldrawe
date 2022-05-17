import * as React from 'react'


import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => (
  <Layout>
    <Seo title='About Page' />
    <div className='container my-3'>
      <h1 className='display-3 text-muted'>About Me</h1>
      <p>I enjoy finding out what I don't know.</p>
      <p>Now the important stuff...</p>
      <div clsasName="row">col-md-12</div>
    </div>
  </Layout>
)

export default AboutPage
