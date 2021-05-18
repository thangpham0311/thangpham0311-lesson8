import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { MyContext } from '../../App';
import CustomFlatlist from '../component/CustomFlatlist';
import CustomFlatlist1 from '../component/CustomFlatlist1';

const DATA = [
  {
    id: 1,
    name: 'Pizza',
    url: 'https://cdn.tgdd.vn/2020/09/CookRecipe/Avatar/pizza-hai-san-pho-mai-thumbnail.jpg',

  },
  {
    id: 2,
    name: 'Burger',
    url: 'https://cdn.tgdd.vn/2020/09/CookRecipe/Avatar/pizza-hai-san-pho-mai-thumbnail.jpg',

  },
  {
    id: 3,
    name: 'Steak',
    url: 'https://cdn.tgdd.vn/2020/09/CookRecipe/Avatar/pizza-hai-san-pho-mai-thumbnail.jpg',

  },
  {
    id: 4,
    name: 'Pizza',
    url: 'https://cdn.tgdd.vn/2020/09/CookRecipe/Avatar/pizza-hai-san-pho-mai-thumbnail.jpg',

  },

]

const Explore: React.FC = () => {

  return (
    <View style={{}}>

      <Text style={{ fontWeight: 'bold', fontSize: 16, margin: 20 }}>Top Categories </Text>
      <CustomFlatlist data1={DATA} />


    </View>
  );
}
export default Explore;