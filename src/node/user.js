module.exports={
    insert:'insert into user(userId,password,name,likeTeam,birthday) values(?,?,?,?,?)' ,
    delete: 'DELETE  FROM user WHERE userId=?',
    queryById: 'SELECT * FROM user WHERE userId=?',
    queryAll: 'SELECT * FROM user'
}