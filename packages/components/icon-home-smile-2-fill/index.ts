import type { App } from 'vue';
import _IconHomeSmile2Fill from './icon-home-smile-2-fill.vue';

const IconHomeSmile2Fill = Object.assign(_IconHomeSmile2Fill, {
  install: (app: App) => {
    app.component(_IconHomeSmile2Fill.name, _IconHomeSmile2Fill);
  }
});

export default IconHomeSmile2Fill;