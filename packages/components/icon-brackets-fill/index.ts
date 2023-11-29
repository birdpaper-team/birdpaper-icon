import type { App } from 'vue';
import _IconBracketsFill from './icon-brackets-fill.vue';

const IconBracketsFill = Object.assign(_IconBracketsFill, {
  install: (app: App) => {
    app.component(_IconBracketsFill.name, _IconBracketsFill);
  }
});

export default IconBracketsFill;