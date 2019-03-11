import google from '../../infrastructure/google'

const translate = async data =>
  await google.translate(data.content)

export default {
  translate
}
