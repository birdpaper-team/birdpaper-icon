import type { App } from 'vue';
import _IconSpiderMan from './icon-spider-man.vue';

const IconSpiderMan = Object.assign(_IconSpiderMan, {
  install: (app: App) => {
    app.component(_IconSpiderMan.name, _IconSpiderMan);
  }
});

export default IconSpiderMan;