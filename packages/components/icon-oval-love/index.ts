import type { App } from 'vue';
import _IconOvalLove from './icon-oval-love.vue';

const IconOvalLove = Object.assign(_IconOvalLove, {
  install: (app: App) => {
    app.component(_IconOvalLove.name, _IconOvalLove);
  }
});

export default IconOvalLove;