module.exports={
    insert:'insert into balls(ballId,ballTitle,place,ballTime,ballPeople,ballLimit,ballComments,ballCreater) values(?,?,?,?,?,?,?,?)',
    queryById:'select * from balls where ballId=?',
    queryByPlace:'select * from balls where place=?',
    queryAll:'select * from balls',
    updatePeople:'update balls set ballPeople=? where ballId=?',
    queryByName:'select * from balls where ballCreater=?'
}