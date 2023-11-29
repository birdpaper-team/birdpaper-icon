import type { App } from 'vue';
import _IconScorpio from './icon-scorpio.vue';

const IconScorpio = Object.assign(_IconScorpio, {
  install: (app: App) => {
    app.component(_IconScorpio.name, _IconScorpio);
  }
});

export default IconScorpio;