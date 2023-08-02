import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
import App from './App';
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('screen').height;
class Splashscreen extends React.Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      this.props.navigation.navigate('App');
    }, 3000);
  }

  render() {
    return (
      <View style={{}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{resizeMode: 'center'}}
            source={require('./Image/name.png')}></Image>
        </View>
      </View>
    );
  }
}
export default Splashscreen;
