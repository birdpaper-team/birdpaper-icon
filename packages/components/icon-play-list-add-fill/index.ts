import type { App } from 'vue';
import _IconPlayListAddFill from './icon-play-list-add-fill.vue';

const IconPlayListAddFill = Object.assign(_IconPlayListAddFill, {
  install: (app: App) => {
    app.component(_IconPlayListAddFill.name, _IconPlayListAddFill);
  }
});

export default IconPlayListAddFill;