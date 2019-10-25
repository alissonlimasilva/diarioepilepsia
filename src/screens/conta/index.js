import React from 'react';
import {View, Text, TextInput} from 'react-native';
import FotoPerfil from '../../components/foto-user';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'react-native-firebase';

export default class Conta extends React.Component {
  state = {
    email: '',
    phone: '',
    name: '',
    photo: '',
  };

  componentDidMount() {
    const user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('data')
      .doc('account')
      .get()
      .then(snapshot => {
        const data = snapshot.data();
        console.log(data);
        if (data) {
          this.setState({
            user,
            email: data.email,
            phone: data.phone,
            photo: data.photo,
            name: data.name,
          });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({user, name: user.name});
      });
  }

  render() {
    const {email, phone, photo} = this.state;
    return (
      <View style={styles.main}>
        {this.logout()}
        <FotoPerfil source={{uri: photo}} />
        {this.nome()}
        {this.campos('E-mail', 'email-outline', email)}
        {this.campos('Telefone', 'phone-outline', phone)}
      </View>
    );
  }

  logout() {
    return (
      <Icon
        name="logout"
        style={styles.logout}
        size={30}
        onPress={() => {
          firebase.auth().signOut();
          const {navigation} = this.props;
          navigation.navigate('Login');
        }}
      />
    );
  }

  nome() {
    const {name} = this.state;
    return <Text style={styles.nome}>{name}</Text>;
  }

  campos(titulo, icone, value) {
    return (
      <View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon
            name={icone}
            size={20}
            color="gray"
            style={{alignSelf: 'center'}}
          />
          <View style={{flex: 1, marginLeft: 8}}>
            <Text style={styles.titleField}>{titulo}</Text>
            <Text style={styles.valueField}>{value}</Text>
            {/* <TextInput value={value} /> */}
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
}
