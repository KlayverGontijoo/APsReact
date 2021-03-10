import React,{Component} from 'react';
import {View,Image} from 'react-native';

class Logo extends Component{
    render(){
     let imagem='https://png.pngtree.com/png-vector/20190508/ourlarge/pngtree-vector-pink-supermarket-shopping-cart-logo-png-image_905189.jpg'
      return(
          <View>
       <Image
       source={{uri:imagem}}
       style={{width: this.props.largura ,height:this.props.altura}}
       
       />
       
       </View>
      )
    }
}

export default Logo;