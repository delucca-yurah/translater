import { defaultsDeep } from 'lodash';

const environment = process.env.NODE_ENV || 'development';
const config = defaultsDeep(
  require(`./${ environment }.environment`),
  require(`./shared`),
  { environment }
);

export default config.default;
