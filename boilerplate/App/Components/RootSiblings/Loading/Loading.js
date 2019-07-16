import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native'
import RootSiblings from 'react-native-root-siblings'
import {
  SkypeIndicator
} from 'react-native-indicators'
import { Colors } from '../../../Themes'

const { height, width } = Dimensions.get('window')
class LoadingContainer extends React.Component {
  static propTypes = {
    closeOnTouch: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.number,
    overlayColor: PropTypes.string
  }

  static defaultProps = {
    color: Colors.primaryColor,
    size: 40,
    overlayColor: 'rgba(0,0,0,0.5)',
    closeOnTouch: false
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

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.visible !== nextState.visible
  }

  show () {
    this.setState({ visible: true })
  }

  close () {
    this.setState({ visible: false })
    this.props.onClose && this.props.onClose()
  }

  render () {
    let { overlayColor, color } = this.props
    return this.state.visible ? (
      <View style={[styles.modalWrapper, { backgroundColor: overlayColor }]}>
        <TouchableWithoutFeedback onPress={() => this.props.closeOnTouch === true ? this.setState({ visible: false }) : null}>
          <View style={styles.modalUnderlay} />
        </TouchableWithoutFeedback>
        <SkypeIndicator color={color} {...this.props} />
      </View>
    ) : null
  }
}

class Loading extends React.Component {
  static displayName = 'Loading';
  static propTypes = LoadingContainer.propTypes;

  static show = (options = {}) => {
    return new RootSiblings(<LoadingContainer
      {...options}
      visible
    />)
  };

  static hide = loading => {
    if (loading instanceof RootSiblings) {
      loading.destroy()
    } else {
      console.warn(`Loading.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof alert}\` instead.`)
    }
  };

  render () {
    return null
  }
}

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    position: 'absolute',
    width,
    height,
    left: 0,
    top: 0,
    backgroundColor: '#000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalUnderlay: {
    position: 'absolute',
    width,
    height,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  content: {}
})

export {
  RootSiblings as Manager
}
export default Loading
