import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View, Linking} from 'react-native';

export default function Feed() {
  
  return (
    <View >
        <Text style={styles.Text}>Cadastrar</Text>

        <TextInput placeholder='Email' style={styles.TextInput}/>
        <TextInput placeholder='Senha' style={styles.TextInput}/>
        <TextInput placeholder='Confirmar senha' style={styles.TextInput}/>

        <Pressable style={styles.Button}>Cadastrar</Pressable>
        <Text style={styles.Text2}>Já possui uma conta? <Link href='/index'>Login</Link> </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  Text: {
    textAlign:'center',
    margin:15,
    fontWeight:'bold',
    padding:10,
    fontSize:35,
  },
  Text2: {
    alignSelf: 'center',
  },
  TextInput: {
    color: 'gray',
    backgroundColor:'white',
    width: 250,
    margin: 7,
    alignSelf:'center',
  },
  Button: {
    margin: 15,
    alignSelf: 'center',
    backgroundColor: 'black',
    fontWeight: 'bold',
    color: 'white',
    marginBlock: 20,
    fontSize: 23,
    paddingHorizontal: 45,
  }
});
