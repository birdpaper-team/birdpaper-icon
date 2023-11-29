import type { App } from 'vue';
import _IconBriefcase from './icon-briefcase.vue';

const IconBriefcase = Object.assign(_IconBriefcase, {
  install: (app: App) => {
    app.component(_IconBriefcase.name, _IconBriefcase);
  }
});

export default IconBriefcase;