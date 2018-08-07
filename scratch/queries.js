'use strict';

const knex = require('../knex');

// let searchTerm = 'cats';
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

//GET NOTES BY ACCEPTING AN ID

// knex
//   .first('id', 'title', 'content')
//   .from('notes')
//   .where('id', 1013)
//   .then(note => {
//     console.log(note);
//   })
//   .catch(err => {
//     console.error(err);
//   });

//UPDATE NOTES

// knex('notes')
//   .update('title', '7 things lady gaga has in common with dogs')
//   .where('id', 1013)
//   .then(note => {
//     console.log(note);
//     console.log('Status 200 - OK');
//   })
//   .catch(err => {
//     console.error(err);
//   });

// const updateID = 1013;
// const updateNote = {
//   title: 'Richard has an filler dog',
//   content: 'filler text'
// };
// knex
//   .from('notes')
//   .modify(queryBuilder => {
//     queryBuilder
//       .where('notes.id', updateID)
//       .update(updateNote)
//       .returning(['id', 'title', 'content']);
//   })
//   .then(results => {
//     console.log(results[0]);
//   })
//   .catch(err => {
//     console.err(err);
//   });
//CREATE NOTES

// knex('notes')
//   .insert({ title: 'testNoteTitle', content: 'testNoteContent' })
//   .returning('id', 'title', 'content')
//   .then(note => {
//     console.log(note);
//     console.log('Status 201 - NEW NOTE');
//   })
//   .catch(err => {
//     console.error(err);
//   });

// //DELETE NOTES

// knex('notes')
//   .where('id', 1013)
//   .del()
//   .then(note => {
//     console.log(note);
//     console.log('Status 204 - DELETED NOTE');
//   })
//   .catch(err => {
//     console.error(err);
//   });
