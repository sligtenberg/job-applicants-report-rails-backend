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
    const [uniqSkillCount, setUniqSkillCount] = useState(0)

    // fetch data from server
    useEffect(() => {
        fetch('/jobs').then(rspns => {
            if (rspns.ok) rspns.json().then(rspns => {
                setJobs(rspns.jobs)
                setUniqSkillCount(rspns.unique_skills_count)
            })
            else console.log(rspns) // dev only
        })
    }, [])

    return (
        <table className="job-applicants">
            <Header />
            <Body jobs={jobs}/>
            <Footer numApplicants={jobs.reduce((acc, job) => acc + job.applicants.length, 0)} numUniqSkills={uniqSkillCount}/>
        </table>
    );
}

export default MainPage;
