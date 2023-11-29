import type { App } from 'vue';
import _IconEnterTheKeyboard from './icon-enter-the-keyboard.vue';

const IconEnterTheKeyboard = Object.assign(_IconEnterTheKeyboard, {
  install: (app: App) => {
    app.component(_IconEnterTheKeyboard.name, _IconEnterTheKeyboard);
  }
});

export default IconEnterTheKeyboard;