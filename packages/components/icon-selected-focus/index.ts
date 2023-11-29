import type { App } from 'vue';
import _IconSelectedFocus from './icon-selected-focus.vue';

const IconSelectedFocus = Object.assign(_IconSelectedFocus, {
  install: (app: App) => {
    app.component(_IconSelectedFocus.name, _IconSelectedFocus);
  }
});

export default IconSelectedFocus;