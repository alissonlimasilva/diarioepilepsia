import firebase from 'react-native-firebase';
const firestore = firebase.firestore();
const auth = firebase.auth();
const user = auth.currentUser;

export const saveCrise = async crise => {
  console.log('salvando crise', JSON.stringify(crise));
  const trySave = await firestore
    .collection('users')
    .doc(user.uid)
    .collection('history')
    .add(crise);

  console.log('Nova crise cadastrada: ', trySave.id);

  return trySave.id ? true : false;
};

export const getNumeroCrises = async () => {
  const result = firestore
    .collection('users')
    .doc(user.uid)
    .collection('history');
};

// export const listenerChangeList = () => {
//   const listaAtual = useSelector(state => state.crise.lista);
//   const ref = firestore
//     .collection('users')
//     .doc(user.uid)
//     .collection('history');

//   ref.onSnapshot(docs => {
//     if (!docs) return;
//     let list = [];
//     docs.forEach(doc => {
//       const item = Object.assign(doc.data(), {id: doc.id});
//       list.push(item);
//     });
//     console.log('ONUPDATE', list);
//     list = orderBy(list, 'date');
//     this.setState({historico: list});
//   });
// };
