import { Serializer as ДокумПоставSerializer } from
  '../mixins/regenerated/serializers/i-i-s-pirveta-докум-постав';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокумПоставSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
