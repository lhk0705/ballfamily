let connection=require('../ballSql');
connection.connect();
module.exports=(sql,params)=>{
    return new Promise((resolve,reject)=>{
        connection.query(sql,params,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}
