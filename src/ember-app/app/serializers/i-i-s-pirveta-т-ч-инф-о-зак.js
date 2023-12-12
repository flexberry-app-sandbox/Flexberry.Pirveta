import { Serializer as ТЧИнфОЗакSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pirveta-т-ч-инф-о-зак';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧИнфОЗакSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
