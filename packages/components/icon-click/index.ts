import type { App } from 'vue';
import _IconClick from './icon-click.vue';

const IconClick = Object.assign(_IconClick, {
  install: (app: App) => {
    app.component(_IconClick.name, _IconClick);
  }
});

export default IconClick;