import Link from "next/link";
const ActiveResource =()=>{
    return (
      <div className="active-resource">
        <h1 className="resource-name">My active resource</h1>
        <div className="time-wrapper">
          <h2 className="elapsed-time">1400</h2>
        </div>
        <Link legacyBehavior href="/">
          <a className="button">go to Resource</a>
        </Link>
      </div>
    );
}

export default ActiveResource;