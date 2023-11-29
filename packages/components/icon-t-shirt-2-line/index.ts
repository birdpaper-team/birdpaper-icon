import type { App } from 'vue';
import _IconTShirt2Line from './icon-t-shirt-2-line.vue';

const IconTShirt2Line = Object.assign(_IconTShirt2Line, {
  install: (app: App) => {
    app.component(_IconTShirt2Line.name, _IconTShirt2Line);
  }
});

export default IconTShirt2Line;