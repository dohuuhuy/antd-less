import React from 'react'
import { Button } from "antd"
export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    console.log(query);
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent, query }
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  onClick(e) {
    console.log('clicked', e);
  }
  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
        <p>id = {this.props.query.id}</p>
        <Button onClick={this.onClick}>123</Button>
      </div>
    )
  }
}