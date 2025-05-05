import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navlinks = () => {
    const user=useSelector((state:any)=>state.user);
    const links = [
        { name: "Find Job", url: "/find-jobs" },
        { name: "Find Talent", url: "/find-talent" },
        { name: "Post Job", url: "/post-job/0" },
        { name: "Posted Jobs", url: "/posted-jobs/0" },
        { name: "Job History", url: "/job-history" },
        ...(!user ? [{ name: "SignUp", url: "/signup" }] : []),
    ];

    const location = useLocation();

    return (
        <div className="flex bs-mx:hidden gap-5 h-full items-center text-mine-shaft-300">
            {links.map((link, index) => (
                <div
                    key={index}
                    className={`${
                        location.pathname === link.url
                            ? "border-t-bright-sun-400 text-bright-sun-400"
                            : "border-transparent"
                    } border-t-[3px] h-full flex items-center`}
                >
                    <Link to={link.url}>{link.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default Navlinks;
