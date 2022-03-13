import firebase from "firebase/compat/app";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        console.log(dispatch, commit); // заткнули ошибки линтера
        throw e;
      }
    },
  },
};
