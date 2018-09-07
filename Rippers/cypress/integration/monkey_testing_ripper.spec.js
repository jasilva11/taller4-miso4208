describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvent(10);
    })
})
function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length-1));
            if(!Cypress.Dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomClick, 1000, monkeysLeft);
        });
    }   
}
function randomEvent(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    var monkeysLeft = monkeysLeft;
    var types = ['input', 'a', 'button', 'combobox'];
    if(monkeysLeft > 0) {
        var element = types[getRandomInt(0, types.length-1)];
        cy.get(element).then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length-1));
            if(!Cypress.Dom.isHidden(randomLink)) {
                if(element=='input') { cy.wrap(randomLink).click({force: true}).type("test1"); }
                else{cy.wrap(randomLink).click({force: true});}
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomEvent, 1000, monkeysLeft);
        });
    }   
}
