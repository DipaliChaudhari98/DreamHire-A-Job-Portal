import { Avatar, Rating } from "@mantine/core";
import Data from "../Data/Data";

const Testimonials = () => {
    const {testimonials}=Data();
    return <div>
        <div className="text-4xl mb-10 font-semibold text-mine-shaft-100 text-center">
            What  <span className="text-bright-sun-400">User </span> says about us?
        </div>
<div className="flex justify-evenly">
        {
            testimonials.map((item,index)=><div key={index} className="flex flex-col gap-3 w-[23%] border-bright-sun-400 p-3 border rounded-xl mt-10">
            <div className="flex gap-2 items-center">
                <Avatar className="!h-14 !w-14" src="avatar.png" alt="it's me" />
                <div>
                    <div className="text-lg text-mine-shaft-100 font-semibold">
                        {item.name}
                    </div>
                   <Rating value={item.rating} fractions={2} readOnly />
                  
                </div>
                
            </div>
            <div className="text-xs text-mine-shaft-300">{item.testimonial}</div>
        </div>)
        }
    </div>
    </div>
}

export default Testimonials;