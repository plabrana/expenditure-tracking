import {initializeApp} from 'firebase'

const config = {
  apiKey: "AIzaSyA6Unk406tvcBZ9l1QdbmCweh12Eqk61yA",
  authDomain: "expendiure-tracking.firebaseapp.com",
  databaseURL: "https://expendiure-tracking.firebaseio.com",
  projectId: "expendiure-tracking",
  storageBucket: "expendiure-tracking.appspot.com",
  messagingSenderId: "72656436246"
}
const app = initializeApp(config)

export const db = app.database()
export const categories = db.ref('categories')
export const paymentMethod = db.ref('paymentMethod')
export const cards = db.ref('cards')