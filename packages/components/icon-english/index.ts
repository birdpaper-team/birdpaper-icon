import type { App } from 'vue';
import _IconEnglish from './icon-english.vue';

const IconEnglish = Object.assign(_IconEnglish, {
  install: (app: App) => {
    app.component(_IconEnglish.name, _IconEnglish);
  }
});

export default IconEnglish;