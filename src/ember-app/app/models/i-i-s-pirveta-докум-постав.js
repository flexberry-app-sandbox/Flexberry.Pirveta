import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокумПоставMixin
} from '../mixins/regenerated/models/i-i-s-pirveta-докум-постав';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокумПоставMixin, Validations, {
});

defineProjections(Model);

export default Model;
