//引入uuid生成临时身份【1:身份只能有一个 2：持久化存储】
import { v4 as uuidv4 } from 'uuid';

export const getUUID = ()=>{
    let uuid_token = localStorage.getItem("UUIDTOKEN");
    if(!uuid_token) {
        // 生成游客临时身份
        uuid_token = uuidv4();
        localStorage.setItem("UUIDTOKEN", uuid_token);
    }
    return uuid_token;
}