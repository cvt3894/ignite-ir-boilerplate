import { StyleSheet } from 'react-native'

import { Fonts, Colors } from '../../../Themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(52,52,52,0.5)'
  },
  contentContainer: {
    width: '80%',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 0,
    paddingHorizontal: 0
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  action: {
    borderTopWidth: 0.8,
    borderTopColor: Colors.divider,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  title: {
    ...Fonts.style.bold,
    paddingVertical: 5,
    paddingHorizontal: 15,
    textAlign: 'center'
  },
  message: {
    ...Fonts.style.normal,
    paddingTop: 5,
    paddingHorizontal: 15,
    textAlign: 'center'
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonCancel: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.8,
    borderRightColor: Colors.divider
  },
  buttonText: {
    ...Fonts.style.normal,
    color: Colors.primaryColor
  }
})

export default styles
