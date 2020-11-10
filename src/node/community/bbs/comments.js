module.exports={
    insert:'insert into comments(commentId,siteId,siteTitle,commentTime,commentContent,userName) values(?,?,?,?,?,?)',
    queryCommentsByUsername:'select * from comments where userName=?' ,
    querycommentsbysiteid:'select commentTime,commentContent,userName from comments where siteId=?',
    
}