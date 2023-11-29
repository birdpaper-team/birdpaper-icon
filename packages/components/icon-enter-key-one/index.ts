import type { App } from 'vue';
import _IconEnterKeyOne from './icon-enter-key-one.vue';

const IconEnterKeyOne = Object.assign(_IconEnterKeyOne, {
  install: (app: App) => {
    app.component(_IconEnterKeyOne.name, _IconEnterKeyOne);
  }
});

export default IconEnterKeyOne;