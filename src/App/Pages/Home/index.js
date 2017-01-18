import React from 'react'
import styles from './styles.css'
import PixabaySearch from './PixabaySearch'
import PixabayList from './PixabayList'
import Header from './Header'
import request from 'request'
import autobind from 'autobind'
export default class Home extends React.Component {

  static propTypes = {

  }
  constructor (props) {
    super(props)
    this.state = {hits: {length: 0}}
  }
  @autobind
  onSearch (args) {
    console.log(args)
    this.setState({...this.state, loading: true})
    request(`https://pixabay.com/api/?key=4302461-d0359356a2e08d69a2bedaa8f&q=${args.termino}&image_type=photo`, (error, response, body) => {
      console.log(response, body, error)
      console.log('body ' + body)
      this.setState({...JSON.parse(body), loading: false})
    })
  }
  render () {
    return (
      <div className={styles.container}>
        <Header />
        <PixabaySearch onSearch={this.onSearch} />
        <PixabayList list={this.state} />
      </div>
    )
  }

}
