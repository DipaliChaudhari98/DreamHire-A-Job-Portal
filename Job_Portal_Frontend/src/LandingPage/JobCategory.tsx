import { Carousel } from "@mantine/carousel";
import Data from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {

  const { jobCategory } = Data();
  return <div className="mt-20 pb-5">
    <div className="text-4xl mb-10 font-semibold md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-mine-shaft-100 text-center">
      Browse <span className="text-bright-sun-400">Job</span> Category
    </div>

    <div className="text-lg sm-mx:text-base xs-mx:text-sm text-mine-shaft-300 text-center w-1/2 mx-auto mb-10 sm-mx:w-11/12">Explore diverse job opportunities tailored to your skills.Start your career journey today!</div>

    <Carousel slideSize="22%" slideGap="md" className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none  [&_button]:hover:opacity-75 [&_button]:opacity-0    hover:[&_button]:opacity-100" loop nextControlIcon={<IconArrowRight className="h-8 w-8" />}
      previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
    >
      {
        jobCategory.map((category, index) => <Carousel.Slide>
          <div className="flex flex-col items-center w-64 sm-mx:w-56 xs-mx:w-48 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-300 my-5 transition duration-300 ease-in-out">
            <div className="p-2 bg-bright-sun-300 rounded-full ">
              <img src={`/Category/${category.name}.png`} alt={category.name} className="h-8 w-8 sm-mx:h-6 sm-mx:w-6 xs-mx:h-4 xs-mx:w-4" />
            </div>

            <div className="text-mine-shaft-100 text-xl font-semibold sm-mx:text-lg xs-mx:text-base">{category.name} </div>
            <div className="text-sm text-center text-mine-shaft-300 xs-mx:text-xs">{category.desc}</div>

          </div>
        </Carousel.Slide>)
      }
    </Carousel>


  </div>
}

export default JobCategory;