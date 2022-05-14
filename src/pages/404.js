import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title='404: Found something for ya!' />
    <div className=' h-100 text-center my-5 text-muted'>
      <h1>404: Not Found</h1>
      <p>Now where did I leave that page?</p>
      <p>Here's something to take your mind off this 404 error</p>

      <div className='row fourzerofour h-100'>
        <div className='col-12 text-muted bg-light'>
          
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
