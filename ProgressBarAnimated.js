import React from 'react'
import {Animated, Dimensions, StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types'
import { Easing } from 'react-native-reanimated'


class ProgressBar extends React.Component
{
  state = {
    percent: new Animated.Value(0),
  }

  componentDidMount () {
    this.startAnimation()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.timeRemaining > this.props.timeRemaining) {
      this.setState({percent: new Animated.Value(0)}, this.startAnimation)
      // second parameter:
      // Callback to be invoked after the state has changed!!!
    }

  }
  startAnimation = () => {
    this.animation = Animated.timing(
      this.state.percent, 
      {
        toValue: 100,
        duration: this.props.timeRemaining,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    )
    this.animation.start()
  }


  render() {
    const {percent} = this.state
    //const {props} = this
    const {width} = Dimensions.get('window') 
    //const percent = 1 - props.timeRemaining / props.timeTotal
    
    return (
      <Animated.View 
        style= {[
          styles.progress, 
          {transform: [{scaleX: percent.interpolate ({
            inputRange: [0, 100],
            outputRange: [0, width]
          })}]},
        ]}
      />
    )
  }
}


const styles = StyleSheet.create ({
  progress:{
    backgroundColor: 'blue',
    height: 10,
    width: 2, 
  },
})

ProgressBar.propTypes = {
  timeRemaining: PropTypes.number,
  timeTotal: PropTypes.number,
  isRunning: PropTypes.bool,
}

export default ProgressBar
