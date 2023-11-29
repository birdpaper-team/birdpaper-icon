import type { App } from 'vue';
import _IconPagesFill from './icon-pages-fill.vue';

const IconPagesFill = Object.assign(_IconPagesFill, {
  install: (app: App) => {
    app.component(_IconPagesFill.name, _IconPagesFill);
  }
});

export default IconPagesFill;