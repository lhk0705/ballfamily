// 防抖，节流,加密，解密
import CryptoJS from 'crypto-js';

export const debounce=(func)=>{
    let timer=null
    return function () {
        if(timer){
        clearTimeout(timer)
        console.log('清除');
    }    
        timer=setTimeout(function(){
            func.apply(this,arguments)
            timer=null
            console.log('执行');
        },1000)
    }
}
export const throttle=(func)=>{
    // console.log(111);
    let timer=null
    return function(){
    if(timer){
        console.log('返回');
        return}
    timer=setTimeout(
        function() {
            func.apply(this,arguments)
            timer=null
            console.log('执行');
        },5000)
    } 
}

const KEY = CryptoJS.enc.Utf8.parse("1234567890ABCDEF");//  密钥        长度必须为16位
const IV = CryptoJS.enc.Utf8.parse("123456");           //  初始向量    长度随意

/*
 * AES加密 ：字符串 key iv  返回base64
 */
export function Encrypt(str, keyStr, ivStr) {
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
}

/*
 * AES 解密 ：字符串 key iv  返回base64
 */
export function Decrypt(str, keyStr, ivStr) {
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