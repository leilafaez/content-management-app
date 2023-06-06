
export default async function(req,res){
    if(req==="GET"){
        const dataRes = await fetch("http://localhost:3001/api/resources");
        const data = await dataRes.json();
        return res.send(data);
    }
    if(req==="POST"){
       return res.send("data has been recieved!")
    }
    
}