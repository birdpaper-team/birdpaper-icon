import type { App } from 'vue';
import _IconPhoneFindLine from './icon-phone-find-line.vue';

const IconPhoneFindLine = Object.assign(_IconPhoneFindLine, {
  install: (app: App) => {
    app.component(_IconPhoneFindLine.name, _IconPhoneFindLine);
  }
});

export default IconPhoneFindLine;