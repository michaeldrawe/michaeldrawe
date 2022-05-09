import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const PortfolioPage = () => (
  <Layout>
    <Seo title='About Gatsby Bootsrap 5 starter' />
    <div className='container  my-5'>
      <div className='container'>
        <h1>Portfolio Projects</h1>
      </div>
    </div>
  </Layout>
)

export default PortfolioPage
