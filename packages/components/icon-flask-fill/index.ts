import type { App } from 'vue';
import _IconFlaskFill from './icon-flask-fill.vue';

const IconFlaskFill = Object.assign(_IconFlaskFill, {
  install: (app: App) => {
    app.component(_IconFlaskFill.name, _IconFlaskFill);
  }
});

export default IconFlaskFill;