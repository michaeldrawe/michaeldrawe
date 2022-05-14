import * as React from 'react'


import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => (
  <Layout>
    <Seo title='Contact Page' />
    <div className='container  my-5'>
      <h3 className='display-1 text-muted'>Contact Me</h3>
      <div className="row"><div className="col"><form method="post" action="https://getform.io/f/790613a8-f44e-4e84-9496-aa908a8d59d3">
  <div className="row">
    <div className="col"><input type="text" name="name" id="name" placeholder="name"/></div>
    </div>
  <div className="row">
  <div className="col">
    <input type="email" name="email" id="email" placeholder="Email"/>
  </div>
  </div>
  <div className="row">
  <div className="col">
    <input type="text" name="subject" id="subject" placeholder="Subject"/>
  </div>
  </div>
  <div className="row">
  <div className="col">
    <textarea name="message" id="message" rows="5" placeholder="Message"/>
  </div>
  </div>
  <div className="row"><div className="col"><button type="submit">Send</button>
  <input type="reset" value="Clear" /></div></div>
  
</form></div></div>
    </div>
  </Layout>
)

export default ContactPage
