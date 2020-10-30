const { queryById } = require("../../association/match");

module.exports={
    insert:'insert into balls(ballId,ballTitle,place,ballTime,ballPeople,ballLimit,ballComments,ballCreater) values(?,?,?,?,?,?,?,?)',
    queryById:'select * from balls where ballId=?',
    queryByPlace:'select * from balls where place=?',
    queryAll:'select * from balls'
}