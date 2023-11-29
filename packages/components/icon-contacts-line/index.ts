import type { App } from 'vue';
import _IconContactsLine from './icon-contacts-line.vue';

const IconContactsLine = Object.assign(_IconContactsLine, {
  install: (app: App) => {
    app.component(_IconContactsLine.name, _IconContactsLine);
  }
});

export default IconContactsLine;