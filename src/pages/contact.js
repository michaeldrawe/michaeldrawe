import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => (
  <Layout>
    <Seo title='Contact Page' />
    <div className='container  my-5'>
      <h3 className='display-1 text-muted'>Contact Me</h3>
      <div className='row justify-content-center'>
        <div className='col-xl-4 col-md-12 p-3 bg-white w-75'>
          <form
            method='post'
            action='https://getform.io/f/f9f1426f-d534-46da-93b5-ed96a2b124f0'
          >
            <div class='form-floating mb-3  justify-content-center'>
              <input
                type='text'
                name='name'
                class='form-control'
                id='floatingNameInput'
                placeholder='Name'
              />
              <label for='floatingNameInput'>Name</label>
            </div>
            <div class='form-floating mb-3 '>
              <input
                type='email'
                name='email'
                class='form-control'
                id='floatingEmailInput'
                placeholder='name@example.com'
              />
              <label for='floatingEmailInput'>Email address</label>
            </div>
            <div class='form-floating mb-3 '>
              <textarea
                class='form-control form-text-area'
                name='message'
                id='exampleFormControlTextarea1'
                placeholder='Type your message here'
               
              ></textarea>
              <label for='floatingTextarea'>Comments</label>
            </div>
            <div class='mb-3 w-75'>
              <button className='btn-primary p-3' type='submit'>
                Send
              </button>
              <button  className='btn-warning p-3 ' type='reset'>Clear Form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
