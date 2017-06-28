const expect = require('chai').expect;
const assert = require('chai').assert;
const Eleve = require('../eleve');
const Prof=require("../Prof");
const Matiere=require("../Matiere.js");
const Note=require("../Note.js");

describe("Eleve",()=>{
    describe("#ajouterNotes",()=>{
        it("gestion null",()=>{
            let eleve = new Eleve("bob","bob");
            let error =null;
            try{
                eleve.ajouterNote(null);
            }catch(err){
                error=err;
            }
            expect(error).to.not.null;
        })
    })
    describe("#ajouterNotes",()=>{
        it("verif ajout",()=>{
            let eleve = new Eleve("bob","bob");
            let prof = new Prof("a","b");
            let mat = new Matiere("node",prof);
            let note = new Note(100,"26-06-2017",mat);
            eleve.ajouterNote(note);
            expect(eleve.lesNotes).to.have.lengthOf(1);
        })
    })
    describe("#getMoy",()=>{
        it("gestion div 0",()=>{
            let eleve = new Eleve("bob","bob");
            let error =null;
            try{
                eleve.getMoy();
            }catch(err){
                error=err;
            }
            expect(error).to.not.null;
        })
     })
    describe("#getMoy",()=>{
        it("calcul ok",()=>{
            let eleve = new Eleve("bob","bob");
            let prof = new Prof("a","b");
            let mat = new Matiere("node",prof);
            let note = new Note(100,"26-06-2017",mat);
            let moy;
            eleve.ajouterNote(note);
            note = new Note(50,"27-06-2017",mat);
            eleve.ajouterNote(note);
            moy = eleve.getMoy();

            expect(moy).to.equals(75);
        })
    })
})