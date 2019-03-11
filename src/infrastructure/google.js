import { Translate } from '@google-cloud/translate'
import config from '../config'

const translate = async content => {
  const gcloud = new Translate({
    credentials: config.google.credentials,
    projectId: config.google.projectId,
  })

  const translation = await gcloud.translate(content, 'pt-BR').then(r => r[0]).catch(console.error)

  return translation
}

export default {
  translate
}