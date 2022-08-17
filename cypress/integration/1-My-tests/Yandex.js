describe('Yandex', function () {

     it('Поиск картинок', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('Котята');
        cy.get('.search2__button > .button').click();
        cy.contains('Картинки по запросу котята')
        })
})