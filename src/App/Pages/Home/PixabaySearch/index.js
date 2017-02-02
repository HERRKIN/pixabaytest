import React from 'react'
// import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import Text from 'simple-react-form-material-ui/lib/text'
import RaisedButton from 'material-ui/RaisedButton'
import autobind from 'autobind'

export default class PixabaySearch extends React.Component {

  static propTypes = {
    onSearch: React.PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {term: ''}
  }
  @autobind
  submit () {
    if (this.state.term !== '') {
      // console.log('state', this.state)
      this.props.onSearch(this.state)
    }
  }
  render () {
    return (
      <div className='row col-xs-12 middle-xs'>
        <div className='col-xs-4'>
          <Form state={this.state} onChange={changes => {
            this.setState(changes)
          }} onSubmit={changes => {
            this.submit()
          }}>
            <Field
              fieldName='term'
              type={Text}
              label='Search for an image' />
          </Form>
        </div>
        <div >
          <RaisedButton label='search' primary onTouchTap={this.submit} />
        </div>
      </div>
    )
  }

}
