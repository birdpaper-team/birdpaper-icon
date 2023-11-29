import type { App } from 'vue';
import _IconHomeSmile2Line from './icon-home-smile-2-line.vue';

const IconHomeSmile2Line = Object.assign(_IconHomeSmile2Line, {
  install: (app: App) => {
    app.component(_IconHomeSmile2Line.name, _IconHomeSmile2Line);
  }
});

export default IconHomeSmile2Line;