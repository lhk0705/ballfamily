module.exports={
    insert:'insert into sites(siteId,siteTitle,siteContent,siteTime,userName,commentQuantity,markQuantity,shareQuantity) values(?,?,?,?,?,?,?,?)', 
    queryAll: 'SELECT * FROM sites',
    queryById:'SELECT * FROM sites where siteId=?',
    queryComments:'SELECT * FROM comments where siteId=?',
    updateComment:'update sites set commentQuantity=? where siteId=?',
    updateShare:'update sites set shareQuantity=? where siteId=?',
    updateMark:'update sites set markQuantity=? where siteId=?',
}