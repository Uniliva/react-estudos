import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const margem = {
  padding: 10,
  marginTop: 10,
};

// STATELESS FUNCTION
const MeuComponente = (props) => <Text>{props.text}</Text>;

const outroRender = <Text>NOVO ITEM</Text>;

export default class App extends React.Component {
  renderItems(lista) {
    return lista.map((element, index) => (
      <Text key={`${index}`} style={styles.titulo}>
        {element}
      </Text>
    ));
  }

  render() {
    const lista = ['item 1', 'item 2', 'item3'];

    return (
      <View style={styles.container}>
        {this.renderItems(lista)}
        <View style={[styles.containe2, styles.containe3]}>
          <Text style={{ flexDirection: 'center' }}>1</Text>
        </View>
        <View style={styles.containe3}>
          <Text>1</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containe2: {
    flex: 2,
    backgroundColor: 'red',
  },
  containe3: {
    flex: 5,
    backgroundColor: 'green',
  },
  titulo: {
    ...margem,
    fontSize: 40,
    backgroundColor: '#ccc',
  },
  subtitulo: {
    backgroundColor: 'red',
  },
});
