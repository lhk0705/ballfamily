module.exports={
    insert:'insert into match(matchId,league,host,guest,matchTime,rounds,hostScore,guestScore) values(?,?,?,?,?,?,?,?)', 
    queryById: 'SELECT * FROM match WHERE matchId=?',
    queryAll: 'SELECT * FROM match',
    queryTeam:'select round,matchTime from match where host=? or guest=?'
}