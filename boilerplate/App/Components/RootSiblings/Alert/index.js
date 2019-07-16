import React from 'react'
import RootSiblings from 'react-native-root-siblings'
import AwesomeAlert from './Alert'

class AlertContainer extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor (props) {
    super(props)
    this.state = {
      visible: this.props.visible
    }
  }

  componentDidMount = () => {
    if (this.state.visible) {
      this.show()
    }
  }

  componentWillUnmount = () => {
    this.close()
  }

  show () {
    this.setState({ visible: true })
  }

  close () {
    this.setState({ visible: false })
  }

  render () {
    return (
      <AwesomeAlert
        show={this.state.visible}
        showConfirmButton
        {...this.props}
        onConfirmPressed={() => {
          if (this.props.onConfirmPressed) {
            const close = this.close()
            this.props.onConfirmPressed(close)
          } else {
            this.close()
          }
        }}
        onCancelPressed={() => {
          if (this.props.onCancelPressed) {
            const close = this.close()
            this.props.onCancelPressed(close)
          } else {
            this.close()
          }
        }}
      />
    )
  }
}

class Alert extends React.Component {
  static displayName = 'Alert';
  static propTypes = AlertContainer.propTypes;

  static show = (message, options = {}) => {
    return new RootSiblings(<AlertContainer
      message={message}
      {...options}
      visible
    />)
  };

  static hide = alert => {
    if (alert instanceof RootSiblings) {
      alert.destroy()
    } else {
      console.warn(`Alert.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof alert}\` instead.`)
    }
  };

  render () {
    return null
  }
}

export {
  RootSiblings as Manager
}
export default Alert
