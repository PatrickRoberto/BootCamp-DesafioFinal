
//const url = 'http://localhost:3001/api/transaction'

/*const CaptureTransactions = async () => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
*/
/*essa configuração so funciona, pois esta ultilizando no package.json
o comando localhost apontando par ao host do servidor do backend
Isso permite que mesmo q a rota mude, a base continua funcionando e quando feito no deploy, continua sendo reconhecido
*/ 
import axios from 'axios'

const api = axios.create({ baseURL: 'api' });

const CaptureTransactions = async () => {
    const {data} = await api.get('/transaction')
    console.log('Agora usado o axios', data);
    return data;
}

export default {CaptureTransactions};

  
