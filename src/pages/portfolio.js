import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
const PortfolioPage = () => (
  <Layout>
    <Seo title='Portfolio Page' />
    <div className='container my-3'>
      <h1 className='display-3 text-muted'>Portfolio Projects</h1>
      <div className='row row-lg-3 align-items-stretch g4 py-5'>
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 pt-3'>
          <div className='card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg'>
            <StaticImage
              src='../images/Screenshot-Website-Project-Image.png'
              quality={100}
              aspectRatio={16 / 9}
              layout='constrained'
              formats={['AUTO', 'WEBP']}
              alt='A Gatsby astronaut'
              className='card-img'
              fit='cover'
            />
            <div class='card-body'>
              <h5 class='card-title display-6'>This website</h5>
              <p class='card-text'>
                <ul>
                  <li>React.js</li>
                  <li>Gatsby.js</li>
                  <li>Bootstrap</li>
                  <li>SASS</li>
                </ul>
              </p>
            </div>
            <div class='card-footer'>
              <div className='row text-muted'>
                <div className='col'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='#4fa2f5'
                    class='bi bi-github'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                  </svg>
                  <a href='#'> Code</a>
                  <a href='#'> </a>
                </div>
                <div className='col '>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-play-fill '
                    viewBox='0 0 16 16'
                  >
                    <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
                  </svg>{' '}
                  App
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default PortfolioPage
