import { defineComponent, reactive } from 'vue';
import HelloWorld from './components/HelloWorld';

import './index.css';

import logo from './assets/logo.png';

export default defineComponent({
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </>
    );
  },
});
