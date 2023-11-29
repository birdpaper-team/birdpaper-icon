import type { App } from 'vue';
import _IconListRadio from './icon-list-radio.vue';

const IconListRadio = Object.assign(_IconListRadio, {
  install: (app: App) => {
    app.component(_IconListRadio.name, _IconListRadio);
  }
});

export default IconListRadio;