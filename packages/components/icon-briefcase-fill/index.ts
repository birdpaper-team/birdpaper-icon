import type { App } from 'vue';
import _IconBriefcaseFill from './icon-briefcase-fill.vue';

const IconBriefcaseFill = Object.assign(_IconBriefcaseFill, {
  install: (app: App) => {
    app.component(_IconBriefcaseFill.name, _IconBriefcaseFill);
  }
});

export default IconBriefcaseFill;