module.exports={
    insert:'insert into user(userId,password,userName,birthday) values(?,?,?,?)' ,
    delete: 'DELETE  FROM user WHERE userId=?',
    queryByName: 'SELECT * FROM user WHERE userName=?',
    queryAll: "SELECT * FROM user",
}