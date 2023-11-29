import type { App } from 'vue';
import _IconEvernoteLine from './icon-evernote-line.vue';

const IconEvernoteLine = Object.assign(_IconEvernoteLine, {
  install: (app: App) => {
    app.component(_IconEvernoteLine.name, _IconEvernoteLine);
  }
});

export default IconEvernoteLine;