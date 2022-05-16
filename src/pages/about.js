import * as React from 'react'


import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => (
  <Layout>
    <Seo title='About Page' />
    <div className='container my-3'>
      <h1 className='display-3 text-muted'>About Me</h1>
    </div>
  </Layout>
)

export default AboutPage
