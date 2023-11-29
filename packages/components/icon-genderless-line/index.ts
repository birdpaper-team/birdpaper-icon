import type { App } from 'vue';
import _IconGenderlessLine from './icon-genderless-line.vue';

const IconGenderlessLine = Object.assign(_IconGenderlessLine, {
  install: (app: App) => {
    app.component(_IconGenderlessLine.name, _IconGenderlessLine);
  }
});

export default IconGenderlessLine;