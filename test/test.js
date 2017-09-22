const expect = require('chai').expect
const dapinotest = require('..').default

describe('#dapinotest', function () {
    it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
        const translation = dapinotest("Programar")
        expect(translation).to.equal("Program")
      })
    
      it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
        const translation = dapinotest("Zorro")
        const translation2 = dapinotest("Zarpar")
    
        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
      })
    
      it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function () {
        const translation = dapinotest("abecedario")
        expect(translation).to.equal("abece-dario")
      })
    
      it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function () {
        const translation = dapinotest("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})