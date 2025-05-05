import Marquee from "react-fast-marquee";
import Data from "../Data/Data";

const Companies = () => {
    const { companies } = Data();

    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl mb-10 font-semibold text-mine-shaft-100 text-center">
                Trusted By <span className="text-bright-sun-400">1000+</span> Companies
            </div>
            <Marquee pauseOnHover={true}>
                {companies.map((company,index)=> <div key={index} className="sm-mx:mx-6 xs-mx:mx-4 xsm:mx-2 mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer">
                    <img src={`/Companies/${company}.png`} alt={company} className="h-14"/>
                    </div> )}
              
            </Marquee>
        </div>
    );
};

export default Companies;
