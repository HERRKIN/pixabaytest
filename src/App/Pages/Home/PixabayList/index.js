import React from 'react'
// import styles from './styles.css'
export default class PixabayList extends React.Component {

  static propTypes = {
    list: React.PropTypes.object
  }
  renderImages () {
    return this.props.list.hits.map(element => {
      return (
        <div className='col-xs-4'>
          <a href={element.pageURL}>
            <img src={element.previewURL} />
            <div>likes:{element.likes}</div>
          </a>
        </div>
      )
    })
  }
  renderNotFound () {
    return <h1> no images found</h1>
  }
  render () {
    console.log('inlist ', this.props.list)
    if (this.props.list.loading) {
      return <h1>Loading</h1>
    }
    return (
      <div className='row col-xs-12 center-xs'>
        {this.props.list.hits.length > 0 ? this.renderImages() : this.renderNotFound() }
      </div>
    )
  }

}
