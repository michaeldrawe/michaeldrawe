import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const PortfolioPage = () => (
  <Layout>
    <Seo title='Portfolio Page' />
    <div className='container my-3'>
      <h1 className='display-3 text-muted'>Portfolio Projects</h1>
    </div>
  </Layout>
)

export default PortfolioPage
