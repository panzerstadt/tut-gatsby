import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <br />
    <Link to="/page-3/">Go back to the homepage</Link>
    <br />
    What is happening
    <p>not sure actually, but this is pretty fast</p>
  </Layout>
)

export default SecondPage
