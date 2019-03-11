import Bunnyhop from '@autolotto/bunnyhop';
import config from '../config';

const { clientName, ...configRemnant } = config.rabbitmq;

export default Bunnyhop( clientName, configRemnant );
