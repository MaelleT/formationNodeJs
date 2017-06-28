const expect = require('chai').expect ;
const Eleve = require('../eleve');
const Note = require('../note');

describe('Eleve', () => { 
 describe ('#ajouterNote',() =>{

     it('on gére le cas vide', () => {
        let eleve = new Eleve ("Nom", "Prenom");
        let erreor= null;

        try{
            eleve.ajouterNote(null);
        }catch (err) {
            error=err;
        }
        expect(error).to.not.null;
     })
 })

 describe ('#calculer moyenne',() =>{

     it('on gére le cas vide', () => {
        let eleve = new Eleve ("Nom", "Prenom");
        let erreor= null;

        try{
            eleve.moyenneGenerale(null);
        }catch (err) {
            error=err;
        }
        expect(error).to.not.null;
     })
 

      it('on vérifie le calcul de la moyenne', () => {
        let moyenne = 0 ;
        let eleve = new Eleve ("Nom", "Prenom");
        
        let note1 = new Note(14,"Histoire");
        eleve.notes.push(note1);
        let note2 = new Note(14,"Histoire");
        eleve.notes.push(note2);
        let note3 = new Note(16,"Geographie");
        eleve.notes.push(note3);
        let note4 = new Note(14,"Math");
        eleve.notes.push(note4);
        
        //à ne pas faire car on utilise un méthode dont on ne sait pas 
        //si elle fonctionne correctement. Donc la méthode au dessus est meilleure
        
        /*eleve.ajouterNote(14,"Histoire");
        eleve.ajouterNote(14,"Histoire");
        eleve.ajouterNote(16,"Geographie");
        eleve.ajouterNote(14,"Math");*/
     
        try{
            moyenne = eleve.moyenneGenerale();
        }catch (err) {
            error=err;
        }
        expect(moyenne).to.equal(14.5);
    
    })
 })
})


