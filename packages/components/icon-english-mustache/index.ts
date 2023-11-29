import type { App } from 'vue';
import _IconEnglishMustache from './icon-english-mustache.vue';

const IconEnglishMustache = Object.assign(_IconEnglishMustache, {
  install: (app: App) => {
    app.component(_IconEnglishMustache.name, _IconEnglishMustache);
  }
});

export default IconEnglishMustache;