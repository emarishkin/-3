import { cryptoAssets, cryptoData } from "./data/data"

export const fetchCryptoApi = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(cryptoData)
        },1000)
    })
}

export const fetchAssetApi = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(cryptoAssets)
        },1000)
    })
}