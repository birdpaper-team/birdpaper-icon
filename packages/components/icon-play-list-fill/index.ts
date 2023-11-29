import type { App } from 'vue';
import _IconPlayListFill from './icon-play-list-fill.vue';

const IconPlayListFill = Object.assign(_IconPlayListFill, {
  install: (app: App) => {
    app.component(_IconPlayListFill.name, _IconPlayListFill);
  }
});

export default IconPlayListFill;