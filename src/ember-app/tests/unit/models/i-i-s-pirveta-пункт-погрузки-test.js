import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pirveta-пункт-погрузки', 'Unit | Model | i-i-s-pirveta-пункт-погрузки', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-pirveta-докум-постав',
    'model:i-i-s-pirveta-клиенты',
    'model:i-i-s-pirveta-организация',
    'model:i-i-s-pirveta-пункт-погрузки',
    'model:i-i-s-pirveta-список-барж',
    'model:i-i-s-pirveta-список-контей',
    'model:i-i-s-pirveta-т-ч-инф-о-зак',
    'model:i-i-s-pirveta-товары',
    'model:i-i-s-pirveta-формир-распред',
    'model:i-i-s-pirveta-формир-рез-пос',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
