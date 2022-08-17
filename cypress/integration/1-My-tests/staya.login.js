describe('Stay', function () {

     it('Авторизация', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('zhenya_pro93@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('iLoveQA1');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы')
        })
})