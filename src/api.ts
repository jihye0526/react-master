const BASE_URL = `https://api.coinpaprika.com/v1`;
const BASE_URL2 = `https://ohlcv-api.nomadcoders.workers.dev`;

export function fetchCoins(){
    return fetch(`${BASE_URL}/coins`).then(res => res.json());
}

export function fetchCoinInfo(coinId:string){
    return fetch(`${BASE_URL}/coins/${coinId}`).then(res => res.json());
}

export function fetchCoinTickers(coinId:string){
    return fetch(`${BASE_URL}/tickers/${coinId}`).then(res => res.json());
}

export function fetchCoinHistory(coinId:string){
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60*60*24*7;

    return fetch(`${BASE_URL2}/?coinId=${coinId}`).then(res => res.json());
}