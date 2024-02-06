import Body from "./TableBody";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";

function MainPage() {

    /* **************************************************
    This app was originally build for a simle json server.
    It has been adapted to use run on a more robust rails server.
    The primary modification to the frontend app is that we only make one fetch request.
    The rails server serializes our data as a single nested object.
    This also means we don't have to use the nesting algorithm in the Main.js component,
    greatly simplifying the frontend workload.
    ************************************************** */

    // job data
    const [jobs, setJobs] = useState([])
    // const uniqSkills = new Set(skills.map(skill => skill.name))

    // fetch data from server
    useEffect(() => {
        fetch('/jobs').then(rspns => {
            if (rspns.ok) rspns.json().then(setJobs)
            else console.log(rspns) // dev only
        })
    }, [])

    return (
        <table className="job-applicants">
            <Header />
            <Body jobs={jobs}/>
            {/* <Footer numApplicants={applicants.length} numUniqSkills={uniqSkills.size}/> */}
        </table>
    );
}

export default MainPage;
