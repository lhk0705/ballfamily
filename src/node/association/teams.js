module.exports={
    insert:'insert into players(playerId,playerName,team,league,age,role,playerTime) values(?,?,?,?,?,?,?)', 
    queryById: 'SELECT * FROM match WHERE matchId=?',
    queryAll: 'SELECT * FROM match',
    queryTeam:'select round,matchTime from match where host=? or guest=?',
    queryRates:'select * from teams where league=? and area=?'
}