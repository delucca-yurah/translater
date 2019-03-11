import google from './google'

test('It should translate a simple English text into Brazilian Portuguese', async () => {
  const result = await google.translate('Morty Smith is a stupid boy')

  return expect(result).toEqual('Morty Smith é um garoto estúpido')
})