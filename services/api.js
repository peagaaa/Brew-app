const fecthData = async (URL) => {
    try {
        const response = await fetch(URL)
        if(!response.ok){
            throw new Error('Erro na chamada da API, por algum motivo, descubra!!')
        }
        const respostaDaApi = await response.json()
        return respostaDaApi
    } catch (err) {
       console.error('Erro ao buscar a resposta: ', err)
       throw err
    }
};

export default fecthData
