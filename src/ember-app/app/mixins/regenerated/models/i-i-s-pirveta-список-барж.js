import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерБарж: DS.attr('number'),
  производитель: DS.attr('string')
});

export let ValidationRules = {
  номерБарж: {
    descriptionKey: 'models.i-i-s-pirveta-список-барж.validations.номерБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-pirveta-список-барж.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокБаржE', 'i-i-s-pirveta-список-барж', {
    номерБарж: attr('Номер барж', { index: 0 }),
    производитель: attr('Производитель', { index: 1 })
  });

  modelClass.defineProjection('СписокБаржL', 'i-i-s-pirveta-список-барж', {
    номерБарж: attr('Номер барж', { index: 0 }),
    производитель: attr('Производитель', { index: 1 })
  });
};
