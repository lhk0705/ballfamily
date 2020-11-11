module.exports={
    insert:'insert into stores(storeId,userName,storeName) values (?,?,?)',
    queryByName:'select * from stores where userName=?',
    queryByStoreName:'select * from stores where storeName=?',
    queryAll:'select * from stores'
}