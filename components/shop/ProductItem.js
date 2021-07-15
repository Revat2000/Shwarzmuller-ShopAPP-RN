import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Button
} from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

import Card from '../UI/Card';
import Colors from '../../constants/Colors';

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                color={Colors.primary}
                title='View Details'
                onPress={props.onViewDetail}
              />
              <Button
                color={Colors.primary}
                title='To Cart'
                onPress={props.onAddToCart}
              />
            </View >
          </View>
        </TouchableCmp>
      </View >
    </View>

    //   <Card style={styles.product}>
    //     <View style={styles.touchable}>
    //       <TouchableCmp onPress={props.onSelect} useForeground>
    //         <View>
    //           <View style={styles.imageContainer}>
    //             <Image style={styles.image} source={{ uri: props.image }} />
    //           </View>
    //           <View style={styles.details}>
    //             <Text style={styles.title}>{props.title}</Text>
    //             <Text style={styles.price}>${props.price.toFixed(2)}</Text>
    //           </View>
    //           <View style={styles.actions}>
    //             {props.children}
    //           </View>
    //         </View>
    //       </TouchableCmp>
    //     </View>
    //   </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 6,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 300,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '17%',
    padding: 10
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    marginVertical: 2
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20
  }
});

export default ProductItem;
