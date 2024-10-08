import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated, Image, Easing, ActivityIndicator} from 'react-native'

// import ActivityIndicator from '../../assets/img/activity-indicator-circle.svg'
import { useTheme } from '../../contexts/theme'
import { testIdWithKey } from '../../utils/testable'


// const LoadingIndicator: React.FC = () => {
//   const { ColorPallet, Assets } = useTheme()
//   const rotationAnim = useRef(new Animated.Value(0)).current
//   const timing: Animated.TimingAnimationConfig = {
//     toValue: 1,
//     duration: 2000,
//     useNativeDriver: true,
//   }
//   const rotation = rotationAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   })
//   const style = StyleSheet.create({
//     animation: {
//       position: 'absolute',
//     },
//   })
//   const imageDisplayOptions = {
//     fill: ColorPallet.notification.infoText,
//     height: 200,
//     width: 200,
//   }

//   useEffect(() => {
//     Animated.loop(Animated.timing(rotationAnim, timing)).start()
//   }, [rotationAnim])

//   return (
//     <View style={{ alignItems: 'center', justifyContent: 'center' }} testID={testIdWithKey('LoadingActivityIndicator')}>
//       <Image
//         source={Assets.img.logoPrimary.src}
//         style={{ width: Assets.img.logoPrimary.width, height: Assets.img.logoPrimary.height }}
//         testID={testIdWithKey('LoadingActivityIndicatorImage')}
//       />
//       <Animated.View style={[style.animation, { transform: [{ rotate: rotation }] }]}>
//         <ActivityIndicator {...imageDisplayOptions} />
//       </Animated.View>
//     </View>
//   )
// }

const LoadingIndicator: React.FC = () => {
  const rotateValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator color="#5869E6" size={80} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    marginVertical: 0,
  },
});


export default LoadingIndicator
