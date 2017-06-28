const expect = require("chai").expect;
const Eleve = require("../eleve");

describe("Eleve", () => {
    describe("#ajouterNote", () => {
        it("on doit pouvoir ajouter une note vide, une erreur typée nous est retournée", () => {

        
            let eleve = new Eleve("Nom","Prenom");
            let error = null;

            try {
                eleve.ajouterNote(null);
            } catch(err) {
                error = err;
            }
            expect(error).to.not.null;
        });
        
    });
    describe("#calculMoyenne", ()=>{
        it("On veux verifier que la moyenne n'est pas nulle",() => {

            let eleve = new Eleve("Nom","Prenom");
            let error = null;
            try {
                eleve.calculMoyenne(null);
            }catch(err) {
                error = err;
            }
            expect(error).to.not.null;
        });
        it("On veux verifier que la moyenne n'est pas supérieure à 20",() => {

            let eleve = new Eleve("Nom","Prenom");
            let note = new note("Nom","Prenom","21","SI",new Date())
            let error = null;
            try {
                this_note.getValeur()<=20;
            }catch(err) {
                error = err;
            }
            expect(error).to.not.null;
        });
    });
});