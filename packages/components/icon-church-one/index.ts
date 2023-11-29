import type { App } from 'vue';
import _IconChurchOne from './icon-church-one.vue';

const IconChurchOne = Object.assign(_IconChurchOne, {
  install: (app: App) => {
    app.component(_IconChurchOne.name, _IconChurchOne);
  }
});

export default IconChurchOne;