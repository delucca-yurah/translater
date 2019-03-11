import rabbitmq from '../../infrastructure/rabbitmq';
import handlers from './handlers';
import validators from './validators';

const transcribeWrapper = (data) =>
  validators.translate.validate(data.content)
    .then(handlers.translate)
    .catch( (error) => {
      console.error(error);

      return setTimeout(data.reject, 5000);
    })

export default () => {
  rabbitmq.listen(
    'indexing.TRANSLATE',
    transcribeWrapper,
    { autoAck: true }
  ).then( () => console.log('Listening to indexing.TRANSLATE') )
}
