import React from 'react'
import styles from './styles.css'

export default class Header extends React.Component {

  static propTypes = {

  }

  render () {
    return (
      <div className={styles.container}>
        <h1>pixabay photos finder</h1>
      </div>
    )
  }

}
