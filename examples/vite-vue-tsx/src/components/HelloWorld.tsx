import { ref, defineComponent, defineProps } from 'vue';

export default defineComponent({
  props: {
    msg: {
      require: false,
      type: String,
      default: '',
    },
  },
  setup(props) {
    const count = ref(0);

    console.log(props);

    return () => (
      <>
        <h1>{props.msg}</h1>
        <p>
          Recommended IDE setup:
          <a href="https://code.visualstudio.com/" target="_blank">
            VSCode
          </a>
          +
          <a
            href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
            target="_blank"
          >
            Vetur
          </a>
          or
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">
            Volar
          </a>
          (if using
          <code>&lt;script setup&gt;</code>)
        </p>

        <p>
          See <code>README.md</code> for more information.
        </p>

        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
          </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank">
            Vue 3 Docs
          </a>
        </p>

        <button type="button" onClick={() => count.value++}>
          count is: {count.value}
        </button>

        <p>
          Edit
          <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
      </>
    );
  },
});
