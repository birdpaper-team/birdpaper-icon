import type { App } from 'vue';
import _IconDossierFill from './icon-dossier-fill.vue';

const IconDossierFill = Object.assign(_IconDossierFill, {
  install: (app: App) => {
    app.component(_IconDossierFill.name, _IconDossierFill);
  }
});

export default IconDossierFill;