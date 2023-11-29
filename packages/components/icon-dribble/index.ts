import type { App } from 'vue';
import _IconDribble from './icon-dribble.vue';

const IconDribble = Object.assign(_IconDribble, {
  install: (app: App) => {
    app.component(_IconDribble.name, _IconDribble);
  }
});

export default IconDribble;