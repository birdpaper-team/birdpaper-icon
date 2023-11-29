import type { App } from 'vue';
import _IconListAlphabet from './icon-list-alphabet.vue';

const IconListAlphabet = Object.assign(_IconListAlphabet, {
  install: (app: App) => {
    app.component(_IconListAlphabet.name, _IconListAlphabet);
  }
});

export default IconListAlphabet;