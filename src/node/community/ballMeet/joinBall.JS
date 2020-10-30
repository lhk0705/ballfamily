const { queryById } = require("../../association/match");

module.exports={
    insert:'insert into joinBall(joinId,ballId,userName) values (?,?,?)',
    queryById:'select userName from joinBall where ballId=?'
}