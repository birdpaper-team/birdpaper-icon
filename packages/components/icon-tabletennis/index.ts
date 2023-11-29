import type { App } from 'vue';
import _IconTabletennis from './icon-tabletennis.vue';

const IconTabletennis = Object.assign(_IconTabletennis, {
  install: (app: App) => {
    app.component(_IconTabletennis.name, _IconTabletennis);
  }
});

export default IconTabletennis;