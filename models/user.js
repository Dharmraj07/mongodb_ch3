const mongodb=require('mongodb');
const { getdb } = require('../util/database');

const ObjectId=mongodb.ObjectId;
//const getDb=require('../util/database').getdb;

class User{
  constructor(username,email){
    this.name=username;
    this.email=email;
  }

  save(){
    const db=getdb();
    return db.collection('users').insertOne(this)
  }

  static findById(userId){
    const db=getdb();
    return db.collection('users').findOne({_id: new ObjectId(userId)})
    .then(user =>{
      console.log(user);
      return user;
    })
    .catch(err =>{
      console.log(err);
    });
    
  }
}

module.exports = User;


// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

// const User = sequelize.define('user', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   name: Sequelize.STRING,
//   email: Sequelize.STRING
// });