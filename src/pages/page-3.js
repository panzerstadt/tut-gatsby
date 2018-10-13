import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class ThirdPage extends Component {
  state = { count: 1 }

  increment() {
    this.setState(prev => ({ count: prev.count + 1 }))
  }
  render() {
    let time = setTimeout(() => this.increment(), 1000)

    let style = {
      color: 'red',
    }

    const SecondPage = () => (
      <Layout>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 3</p>
        <p>
          count: <span style={style}>{this.state.count}</span>
        </p>
      </Layout>
    )
    return SecondPage()
  }
}

export default ThirdPage
