import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
// import {Link} from 'react-router'
// import styles from './styles.css'
export default class PixabayList extends React.Component {

  static propTypes = {
    list: React.PropTypes.object,
    error: React.PropTypes.object
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
    console.log(this.props)
    if (this.props.list.error.message) {
      return <h1>error: {this.props.list.error.message}</h1>
    } else {
      return <h1> no images found</h1>
    }
  }

  renderTiles () {
    return this.props.list.hits.map((tile) => (
      <a href={tile.pageURL} key={tile.previewURL}>
        <GridTile
          title={<span><b>Likes:</b>{tile.likes}</span>}
          // actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
          <img src={tile.previewURL} />
        </GridTile>
      </a>))
  }
  render () {
    // console.log('inlist ', this.props.list)
    if (this.props.list.loading) {
      return <h1>Loading</h1>
    }

    if (this.props.list.hits.length > 0) {
      return (
        <div className='row col-xs-12 center-xs'>
          {/* this.renderImages() */}
          <GridList cols={3} >
            {this.renderTiles()}
          </GridList>
        </div>
      )
    } else {
      return (<div className='row col-xs-12 '>
        {this.renderNotFound() }
      </div>)
    }
  }

}
