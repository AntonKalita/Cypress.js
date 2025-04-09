describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт 
         cy.get('#mail').type('german@dolnikov.ru') // ввел верный логин 
         cy.get('#pass').type('iLoveqastudio1') // ввел верный пароль 
         cy.get('#loginButton').click(); // нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // текст видин пользователю 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он видин пользователю

     })

     it('Восстановление пароля ', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#forgotEmailButton').click(); // нажал забыл пароль 
        cy.get('#mailForgot').type('akalita763@gmail.com') // ввел любой логин 
        cy.get('#restoreEmailButton').click(); // нажимаю отправить код 
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю, что после отпр вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст видин пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он видин пользователю
  
    })

    it('Негативный кейс авторизации ', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#mail').type('german@dolnikov.ru') // ввел верный логин
        cy.get('#pass').type('Gatti0907') // ввел не верный пароль 
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после отпр вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст видин пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он видин пользователю
  
    })

    
    it('Негативный кейс авторизации 2.0 ', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#mail').type('akalita763@gmail.com') // ввел  не верный логин
        cy.get('#pass').type('iLoveqastudio1') // ввел  верный пароль 
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после отпр вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст видин пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он видин пользователю
  
    })

    it('Негативный кейс валидации ', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#mail').type('germandolnikov.ru') // ввел логин без собаки
        cy.get('#pass').type('iLoveqastudio1') // ввел  верный пароль 
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после отпр вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст видин пользователю 
  
    })

    it('Проверка на приведение к строчным буквам в логине ', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#mail').type('GerMan@Dolnikov.ru') // ввел логин строчными буквами
        cy.get('#pass').type('iLoveqastudio1') // ввел  верный пароль 
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после отпр вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст видин пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он видин пользователю
  
    })
 })
 