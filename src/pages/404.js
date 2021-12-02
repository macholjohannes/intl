import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div className='text-center m-24'>
      <h1>We are sorry...</h1>
      <p>
        We were unable to find the page you requested. Please try again or
        <Link to='/'>return to the homepage</Link>.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
