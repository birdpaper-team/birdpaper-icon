import type { App } from 'vue';
import _IconBriefcase3Fill from './icon-briefcase-3-fill.vue';

const IconBriefcase3Fill = Object.assign(_IconBriefcase3Fill, {
  install: (app: App) => {
    app.component(_IconBriefcase3Fill.name, _IconBriefcase3Fill);
  }
});

export default IconBriefcase3Fill;