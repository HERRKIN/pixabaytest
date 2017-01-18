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
  @autobind
  submit () {
    this.props.onSearch(this.state)
  }
  render () {
    return (
      <div className='row col-xs-12'>
        <div className='col-xs-4'>
          <Form state={this.state} onChange={changes => {
            this.setState(changes)
          }} onSubmit={changes => {
            this.submit()
          }}>
            <Field
              fieldName='termino'
              type={Text}
              label='busca una imagen' />
          </Form>
        </div>
        <div>
          <RaisedButton label='buscar' onTouchTap={this.submit} />
        </div>
      </div>
    )
  }

}
