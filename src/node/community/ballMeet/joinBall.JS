module.exports={
    insert:'insert into joinBall(joinId,ballId,userName) values (?,?,?)',
    queryBallers:'select userName from joinBall where ballId=?'

}