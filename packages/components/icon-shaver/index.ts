import type { App } from 'vue';
import _IconShaver from './icon-shaver.vue';

const IconShaver = Object.assign(_IconShaver, {
  install: (app: App) => {
    app.component(_IconShaver.name, _IconShaver);
  }
});

export default IconShaver;