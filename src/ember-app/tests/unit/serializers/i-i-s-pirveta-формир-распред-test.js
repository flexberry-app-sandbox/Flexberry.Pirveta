import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pirveta-формир-распред', 'Unit | Serializer | i-i-s-pirveta-формир-распред', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-pirveta-формир-распред',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-pirveta-ед-изм',
    'transform:i-i-s-pirveta-статус-заказа',
    'transform:i-i-s-pirveta-удовл-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
