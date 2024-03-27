require('cypress-xpath')
const cypress = require("cypress")

describe('Automation test', () => {

    it('test1', () => {
        cy.visit("https://techinsightsblog.com/");

        cy.xpath("//a[normalize-space()='Leave a comment']").click();

        cy.xpath("//textarea[@id='comment']").type("Abir Arshad1122@@@");

        cy.xpath("//input[@id='author']").type("Abir Arshad");

        cy.xpath("//input[@id='email']").type("abirarshad0@gmail.com");

        cy.xpath("//input[@id='url']").type("https://github.com/abir267");

        cy.xpath("//input[@id='wp-comment-cookies-consent']").click; 

        cy.xpath("//input[@id='submit']").click;



        
        
        
    
    })
  
})
