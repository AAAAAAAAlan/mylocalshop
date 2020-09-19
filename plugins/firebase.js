import firebase from 'firebase'

let app = null

const firebaseConfig = {
  apiKey: 'AIzaSyD1iwaoAlD6AyYVU0IbPbgwcMsk3VuTyGk',
  authDomain: 'mylocalshop-cf7ff.firebaseapp.com',
  databaseURL: 'https://mylocalshop-cf7ff.firebaseio.com',
  projectId: 'mylocalshop-cf7ff',
  storageBucket: 'mylocalshop-cf7ff.appspot.com',
  messagingSenderId: '384673207666',
  appId: '1:384673207666:web:dc7644009c6f9f78b6b9eb',
}

app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

export const db = app.database()
