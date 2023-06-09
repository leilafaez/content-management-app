import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";

const ActiveResource =()=>{

    const [resource,setResource]=useState({});
    const [second,setSecond]=useState();

    
    useEffect(()=>{
       async function fetchResource(){
        const axiosRes = await axios.get("/api/activeResource");
        const resource = axiosRes.data;
        const timeToFinish= parseInt(resource.timeToFinish,10);
        const elapsedTime = moment().diff(moment(resource.activationTime),"seconds");
        const updatedTimeToFinish = (timeToFinish * 60)-elapsedTime;

        if(updatedTimeToFinish >=0){
            resource.timeToFinish =updatedTimeToFinish;
            setSecond(updatedTimeToFinish);
        }
        setResource(resource)
        }
        fetchResource();
    },[])

    useEffect(()=>{
      const interval= setInterval(()=>{
            setSecond(second-1);
        },1000);
        if(second<0){
            clearInterval(interval)
        }
        return()=>clearInterval(interval);
    },[second])

    const completeResource = () => {
    axios
        .patch("/api/resources", { ...resource, status: "complete" })
        .then((_) => location.reload())
        .catch((_) => alert("cannot complete the resource!"));
    };

    const hasResource =resource && resource.id;

    return (
      <div className="active-resource">
        <h1 className="resource-name">
          {hasResource ? resource.title : "No Resource Active"}
        </h1>
        <div className="time-wrapper">
          {hasResource &&
            (second > 0 ? (
              <h2 className="elapsed-time">{second}</h2>
            ) : (
              <h2 className="elapsed-time">
                <button
                  className="button is-success"
                  onClick={completeResource}
                >
                  Click and Done!
                </button>
              </h2>
            ))}
        </div>
        {hasResource ? (
          <Link legacyBehavior href={`/resources/${resource.id}`}>
            <a className="button">go to Resource</a>
          </Link>
        ) : (
          <Link legacyBehavior href="/">
            <a className="button">go to Resources</a>
          </Link>
        )}
      </div>
    );
}

export default ActiveResource;