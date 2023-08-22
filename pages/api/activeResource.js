import axios from "axios";

export default async function activeResource(req,res){
    const axiosRes = await axios.get(`${process.env.API_URL}/activeResource`);
    const resource = axiosRes.data;

    return res.send(resource.data);
}

