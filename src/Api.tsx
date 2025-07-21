import { Cards } from "./data/CalcCard"


export const FetchSiderApi = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(Cards)   
        },2000)
    })    
}

export const FetchFullApi = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(Cards)   
        },1000)
    })    
}