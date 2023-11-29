import type { App } from 'vue';
import _IconUnlike from './icon-unlike.vue';

const IconUnlike = Object.assign(_IconUnlike, {
  install: (app: App) => {
    app.component(_IconUnlike.name, _IconUnlike);
  }
});

export default IconUnlike;