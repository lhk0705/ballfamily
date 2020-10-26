module.exports={
    insert:'insert into matches(matchId,league,host,guest,matchTime,rounds,hostScore,guestScore) values(?,?,?,?,?,?,?,?)', 
    queryById: 'SELECT * FROM matches WHERE matchId=?',
    queryAll: 'SELECT * FROM matches where league=?',
    queryToday:'select * from matches where league=? and matchTime=?',
    queryTeam:'select rounds,matchTime from matches where host=? or guest=?'
}