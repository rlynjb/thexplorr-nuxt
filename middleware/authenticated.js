import Vue from 'vue';

export default function({ store, redirect }) {
  console.log('1st', this);

  /*
  if (!store.state.authenticated) {
    return redirect('/login');
  }
  */
}
