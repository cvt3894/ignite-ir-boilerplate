import React from 'react'
import { StyleSheet } from 'react-native'
import RootSiblings from 'react-native-root-siblings'
import DropdownAlert from 'react-native-dropdownalert'
import { Colors } from '../../../Themes'
class DropdownAlertContainer extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
    type: 'error'
  }

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount = () => {
    if (this.dropdown) {
      const { type, title, message } = this.props
      this.dropdown.alertWithType(type, title, message)
    }
  }

  componentWillUnmount = () => {
    if (this.dropdown) {
      this.dropdown.close()
    }
  }

  render () {
    return (
      <DropdownAlert
        ref={ref => { this.dropdown = ref }}
        closeInterval={5000}
        errorColor='rgba(0,0,0,0.85)'
        infoColor='rgba(0,0,0,0.85)'
        translucent
        activeStatusBarBackgroundColor={'transparent'}
        inactiveStatusBarBackgroundColor={'transparent'}
        activeStatusBarStyle='dark-content'
        inactiveStatusBarStyle='dark-content'
        {...this.props}
      />
    )
  }
}

class DropdownAlertManager extends React.Component {
  static displayName = 'DropdownAlertManager';
  static propTypes = DropdownAlertContainer.propTypes;

  static show = (type, title, message, options) => {
    return new RootSiblings(<DropdownAlertContainer
      type={type}
      title={title}
      message={message}
      {...options}
    />)
  };

  static hide = dropdownAlert => {
    if (dropdownAlert instanceof RootSiblings) {
      dropdownAlert.destroy()
    } else {
      console.warn(`DropdownAlertManager.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof alert}\` instead.`)
    }
  };

  render () {
    return null
  }
}

const styles = StyleSheet.create({
  titleStyle: {}
})

export {
  RootSiblings as Manager
}
export default DropdownAlertManager
