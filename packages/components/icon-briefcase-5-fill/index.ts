import type { App } from 'vue';
import _IconBriefcase5Fill from './icon-briefcase-5-fill.vue';

const IconBriefcase5Fill = Object.assign(_IconBriefcase5Fill, {
  install: (app: App) => {
    app.component(_IconBriefcase5Fill.name, _IconBriefcase5Fill);
  }
});

export default IconBriefcase5Fill;