// Core Setup
const router = require('express').Router();
const { createNewNote, deleteNote } = require('../lib/notes');
const notes = require('../Develop/db/db.json');
const { uuid, fromString } = require('uuid');
const fs = require('fs');

// reads db and returns all saved notes
router.get('/notes', (req, res) => {
    res.send(notes)
    console.log(notes)
});

// Post function creates new id number
router.post('/notes', (req, res) => {
    // create unique id for each note
    let noteId = uuid();
    let completeNote = {
        id: noteId, 
        title: req.body.title,
        text: req.body.text,
    }
    // Read db file for existing notes
    fs.readFile('../../Develop/db/db.json', 'utf-8',(error, data) => {
        if (error) throw (error);
        // turn JSON into an object
        let currentNotes = JSON.parse(data);
        // push complete note into current notes
        currentNotes.push(completeNote);
        // turn object back into JSON
        fs.writeFile('../../Develop/db/db.json', JSON.stringify(currentNotes), (error) => {
            if (error) throw (error);
            res.send(currentNotes);
            console.log('Note created successfully')
        })
    })
});

//export information
module.exports = router;