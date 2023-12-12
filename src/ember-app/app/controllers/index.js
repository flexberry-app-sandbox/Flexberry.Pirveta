import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.pirveta.caption'),
          title: i18n.t('forms.application.sitemap.pirveta.title'),
          children: [{
            link: 'i-i-s-pirveta-список-контей-l',
            caption: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-список-контей-l.caption'),
            title: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-список-контей-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-pirveta-докум-постав-l',
            caption: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-докум-постав-l.caption'),
            title: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-докум-постав-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-pirveta-формир-распред-l',
            caption: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-формир-распред-l.caption'),
            title: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-формир-распред-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-pirveta-организация-l',
            caption: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-организация-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-pirveta-формир-рез-пос-l',
            caption: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-формир-рез-пос-l.caption'),
            title: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-формир-рез-пос-l.title'),
            children: null
          }, {
            link: 'i-i-s-pirveta-клиенты-l',
            caption: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-клиенты-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-pirveta-товары-l',
            caption: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-товары-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-pirveta-пункт-погрузки-l',
            caption: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-пункт-погрузки-l.caption'),
            title: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-пункт-погрузки-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-pirveta-список-барж-l',
            caption: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-список-барж-l.caption'),
            title: i18n.t('forms.application.sitemap.pirveta.i-i-s-pirveta-список-барж-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})