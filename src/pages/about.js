import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => (
  <Layout>
    <Seo title='About Page' />
    <div className='container my-3'>
      <h1 className='display-3 text-muted'>About Me</h1>

      <div className='row'>
        <div className='col-md-4 p-5 mt-5 mb-5 lh-1 border text-muted'>
          <p>I enjoy finding out what I don't know.</p>
          <p>
            I enjoy the journey, even though sometimes I admit, I don't know the
            ending.
          </p>
        </div>
        <div className='col-md-8 mt-5 text-white'>
          <StaticImage
            src='../images/eye-4453129.jpg'
            layout='fixed'
            height={400}
            quality={100}
            formats={['AUTO', 'WEBP']}
            alt='Photo of Michael Drawe'
            className='d-block mx-lg-auto img-fluid'
          />
          <small>
            Image by{' '}
            <a href='https://pixabay.com/users/nika_akin-13521770/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4453129'>
              Nika Akin
            </a>{' '}
            from{' '}
            <a href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4453129'>
              Pixabay
            </a>
          </small>
        </div>

        <div className='col-md-8 pt-5 mb-5 lh-1 text-muted'>
          <StaticImage
            src='../images/eye-4453129.jpg'
            layout='fixed'
            height={400}
            quality={100}
            formats={['AUTO', 'WEBP']}
            alt='Photo of Michael Drawe'
            className='d-block mx-lg-auto img-fluid'
          />
          <small>
            Image by{' '}
            <a href='https://pixabay.com/users/nika_akin-13521770/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4453129'>
              Nika Akin
            </a>{' '}
            from{' '}
            <a href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4453129'>
              Pixabay
            </a>
          </small>
        </div>
        <div className='col-md-6 pt-5 mb-5 text-muted'>
          <p>
            I enjoy finding out what I don't know. I enjoy the journey, even
            though sometimes I admit, I don't know the ending.
          </p>
          <p>Now the important stuff...</p>
        </div>
        <div className='col-md-6 pt-5 mb-5 text-muted'></div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
