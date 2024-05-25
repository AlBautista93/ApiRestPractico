class Conexion{
    const API_URL= '';
    
    conexion(endPonit,parameters){
        let result = fetch(this.API_URL+endPonit,this.parameters(method,data))
    }
    parameters(method,data){
        if(method === 'GET')
            return null

        return {
            
            header:{

            }
        }
    }
}