import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наимКонт: DS.attr('string'),
  номерКонт: DS.attr('number')
});

export let ValidationRules = {
  наимКонт: {
    descriptionKey: 'models.i-i-s-pirveta-список-контей.validations.наимКонт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерКонт: {
    descriptionKey: 'models.i-i-s-pirveta-список-контей.validations.номерКонт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокКонтейE', 'i-i-s-pirveta-список-контей', {
    номерКонт: attr('Номер конт', { index: 0 }),
    наимКонт: attr('Наим конт', { index: 1 })
  });

  modelClass.defineProjection('СписокКонтейL', 'i-i-s-pirveta-список-контей', {
    номерКонт: attr('Номер конт', { index: 0 }),
    наимКонт: attr('Наим конт', { index: 1 })
  });
};
