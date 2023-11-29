import type { App } from 'vue';
import _IconEvernoteFill from './icon-evernote-fill.vue';

const IconEvernoteFill = Object.assign(_IconEvernoteFill, {
  install: (app: App) => {
    app.component(_IconEvernoteFill.name, _IconEvernoteFill);
  }
});

export default IconEvernoteFill;