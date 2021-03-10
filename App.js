import React ,{Component} from 'react';
import {View,StyleSheet, FlatList,Text, ScrollView} from 'react-native';
import Produto from './src/components/Produto';
import Logo from './src/components/logo'


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      feed:[
        {id:'1',nome:'Açucar', valor:'R$ 11,00', marca:'Cristal', quantidade:'15',referencia:'007', desconto:'5% de Desconto',promocao:'3 por 25'},
        {id:'2',nome:'Café', valor:'R$ 8,00', marca:'Vasconcelos', quantidade:'12',referencia:'004', desconto:'3% de Desconto',promocao:'Leve 4 pague 3'},
        {id:'3',nome:'Pasta Dental', valor:'R$ 3,99', marca:'Colgate', quantidade:'20',referencia:'505', desconto:'2% de Desconto',promocao:'3 por 10'},
        {id:'4',nome:'Milho', valor:'R$ 4,00', marca:'Quero', quantidade:'15',referencia:'550', desconto:'8% de Desconto',promocao:'Leve 3 pague 2'},
        {id:'5',nome:'Barra de Chocolate', valor:'R$ 5,00', marca:'Lacta', quantidade:'6',referencia:'840', desconto:'5% de Desconto',promocao:'Leve 4 por 10,99'},
        {id:'6',nome:'Maionese', valor:'R$ 6,00', marca:'Hellmanns', quantidade:'20',referencia:'020', desconto:'5% de Desconto',promocao:'Leve 3 pague 2'},
      ]
    }
  }
  render(){
    return(
      <ScrollView>
      <View style={styles.container}>
        
      <View style={styles.bloco1}>
        <Logo largura={50} altura={50}/>
      </View>
      <View style={styles.bloco2}>
        <Text style={styles.title}>Lista de Produtos</Text>
      <FlatList showsVerticalScrollIndicator={false}
          data={this.state.feed}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>
        <Produto
          nome={item.nome}
          valor={item.valor}
          marca={item.marca}
          quantidade={item.quantidade}
          referencia={item.referencia}
          desconto={item.desconto}
          promocao={item.promocao}
        />}
        />
      </View>
      <View style={styles.bloco3}>
        <Text style={styles.rodape}>Products Bela Vista-2021</Text>
      </View>
      </View>
      </ScrollView>
      
    )
  }
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    margin:10
  },
  bloco1:{
    backgroundColor:'blue',
    height:70,
    padding:10
  },
  bloco2:{
    backgroundColor:'white',
    height:500
  },
  bloco3:{
    backgroundColor:"#515151",
    height:40
  },
  rodape:{
    textAlign:'center',
    color:'white'
  }, 
  title:{
    fontSize:30,
    padding:20,
    color:'#05C1FF'
  }
})