const expect = require('chai').expect;
const Eleve = require('../eleve');
const Cours = require('../cours.js');


describe("Elèves",() => {
    describe("ajouterNoteMatiere",() => {
            it("Ajout note null doit lever une exception",() => {
                let eleve = new Eleve("Evan","Boissonnot");
                let cours = new Cours(libelle='SLAM4',null);

                let error = null;

                try {
                    eleve.ajouterNoteMatiere(null,cours);
                } catch (err)
                {
                    error= err
                }
                expect(error).to.not.null;
            }
            );
    }),
    describe("calculerMoyenneMatiere",() => {
            it("Aucunes notes",() => {
                let eleve = new Eleve("Evan","Boissonnot");
                let cours = new Cours(libelle='SLAM4',null);

                let error = null;

                try {
                    eleve.calculerMoyenneMatiere(cours);
                } catch (err)
                {
                    error= err
                }
                expect(error).to.not.null;
                
            }
            );
    }),
    describe("calculerMoyenneMatiere",() => {
            it("une seule note",() => {
                let eleve = new Eleve("Evan","Boissonnot");
                let cours = new Cours(libelle='SLAM4',null);

                eleve.ajouterNoteMatiere(10,cours);
            
                expect(eleve.calculerMoyenneMatiere(cours)).to.equal(10);
            
            }
            );
    }),
    describe("calculerMoyenneMatiere",() => {
            it("plusieurs notes",() => {
                let eleve = new Eleve("Evan","Boissonnot");
                let cours = new Cours(libelle='SLAM4',null);

                eleve.ajouterNoteMatiere(10,cours);
                eleve.ajouterNoteMatiere(15,cours);

                expect(eleve.calculerMoyenneMatiere(cours)).to.equal(12.5);
            
            }
            );

    }),
    describe("calculerMoyenneMatiere",() => {
            it("plusieurs matières",() => {
                let eleve = new Eleve("Evan","Boissonnot");
                let cours = new Cours(libelle='SLAM4',null);
                let cours2 = new Cours(libelle='SLAM5',null);

                eleve.ajouterNoteMatiere(10,cours);
                eleve.ajouterNoteMatiere(15,cours2);

                expect(eleve.calculerMoyenneMatiere(cours)).to.equal(10);
            
            }
            );
            
    }),
    describe("calculerMoyenneMatiere",() => {
            it("plusieurs matières",() => {
                let eleve = new Eleve("Evan","Boissonnot");
                let cours = new Cours(libelle='SLAM4',null);
                let cours2 = new Cours(libelle='SLAM5',null);

                eleve.ajouterNoteMatiere(10,cours);
                eleve.ajouterNoteMatiere(15,cours2);
                eleve.ajouterNoteMatiere(13,cours2);


                expect(eleve.calculerMoyenneMatiere(cours2)).to.equal(14);
            
            }
            );
            
    });
}
);