import type { App } from 'vue';
import _IconReactjsFill from './icon-reactjs-fill.vue';

const IconReactjsFill = Object.assign(_IconReactjsFill, {
  install: (app: App) => {
    app.component(_IconReactjsFill.name, _IconReactjsFill);
  }
});

export default IconReactjsFill;