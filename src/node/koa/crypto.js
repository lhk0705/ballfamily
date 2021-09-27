let CryptoJS=require('crypto-js') ;
const KEY = CryptoJS.enc.Utf8.parse("1234567890ABCDEF");//  密钥        长度必须为16位
const IV = CryptoJS.enc.Utf8.parse("123456"); 
module.exports={
    Encrypt:(str, keyStr, ivStr)=> {
        let key = KEY
        let iv = IV
    
        if (keyStr && ivStr) {
            key = CryptoJS.enc.Utf8.parse(keyStr);
            iv = CryptoJS.enc.Utf8.parse(ivStr);
        }
    
        let srcs = CryptoJS.enc.Utf8.parse(str);
        var encrypt = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,            //这里可以选择AES加密的模式
            padding: CryptoJS.pad.Pkcs7
        });
        return CryptoJS.enc.Base64.stringify(encrypt.ciphertext);
    },
    
    /*
     * AES 解密 ：字符串 key iv  返回base64
     */
    Decrypt:(str, keyStr, ivStr) =>{
        let key = KEY
        let iv = IV
    
        if (keyStr && ivStr) {
            key = CryptoJS.enc.Utf8.parse(keyStr);
            iv = CryptoJS.enc.Utf8.parse(ivStr);
        }
    
        let base64 = CryptoJS.enc.Base64.parse(str);
        let src = CryptoJS.enc.Base64.stringify(base64);
    
        var decrypt = CryptoJS.AES.decrypt(src, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,            //这里可以选择AES解密的模式
            padding: CryptoJS.pad.Pkcs7
        });
    
        var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
    }
}