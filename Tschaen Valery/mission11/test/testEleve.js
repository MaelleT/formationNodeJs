"use strict";

const Eleve=require('../Eleve');
const expect=require('chai').expect;

const Cours = require('../cours');
const Prof = require('../prof');
const Note = require('../note');

describe("Eleve", () => {
    describe("#ajouterNote()", () => {
        it("Ajout note nulle doit lever une exception",() => {
            
            let eleve = new Eleve(1,"Boissonnot","Evan");        

            let error = null;
            
            try{
                eleve.ajouterNote(null,null,null);
            }
            catch(err)
            {
                error=err;
            }

            expect(error).to.not.null;
        });
        it("Ajout note non nulle ne doit pas lever d'exception",() => {
            
            let eleve = new Eleve(1,"Boissonnot","Evan");        

            let cours = new Cours("Maths",2,new Prof("Super","Man"));
            let d = new Date();
            

            let error = null;
            
            try{
                eleve.ajouterNote(12,cours,d);
            }
            catch(err)
            {
                error=err;
            }

            expect(error).to.null;
        });
        
    });
    describe("#getMoyenne()", () => {
        it("getMoyenne sans note doit lever une exception",() => {
            
            let eleve = new Eleve(1,"Boissonnot","Evan");        
        
            let d = new Date();
            let error = null;
            
            try{
                eleve.getMoyenne();
            }
            catch(err)
            {
                error=err;
            }

            expect(error).to.not.null;
        });

        it("getMoyenne doit renvoyer la bonne valeur",() => {
            
            let eleve = new Eleve(1,"Boissonnot","Evan");        

            let cours = new Cours("Maths",2,new Prof("Super","Man"));
            let d = new Date();
            
            let error = null;
            let moyenne = null;
            
            eleve.ajouterNote(15,cours,d);
            eleve.ajouterNote(15,cours,d);
            eleve.ajouterNote(12,cours,d);

            try{
                moyenne = eleve.getMoyenne();
            }
            catch(err)
            {
                error=err;
            }

            expect(moyenne).equal((15+15+12)/3);
        });
        
    })
})