import type { App } from 'vue';
import _IconUser3Fill from './icon-user-3-fill.vue';

const IconUser3Fill = Object.assign(_IconUser3Fill, {
  install: (app: App) => {
    app.component(_IconUser3Fill.name, _IconUser3Fill);
  }
});

export default IconUser3Fill;