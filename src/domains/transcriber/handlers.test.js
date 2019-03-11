import handlers from './handlers'
import google from '../../infrastructure/google'
import testData from '../../test_data/handlers'

test('It should pass the content from the message to be translated by Google', async () => {
  google.translate = content => testData.translations[content]

  const result = await handlers.translate(testData.message)

  return expect(result).toEqual(testData.translations['Morty Smith is a stupid boy'])
})