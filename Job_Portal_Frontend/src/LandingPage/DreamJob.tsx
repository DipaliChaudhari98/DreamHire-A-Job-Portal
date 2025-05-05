import { Avatar, AvatarGroup, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
    return (
        <div className="flex sm-mx:flex-col-reverse items-center px-16 bs-mx:px-10 md-mx:px-5">
            <div className="flex flex-col w-[45%] sm-mx:w-full gap-3">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400 bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl">Find your <span >dream</span> <span> job </span>with us</div> {/* Here we have used [&>span] for selecting the child element i.e span */}

                <div className="text-lg text-mine-shaft-200 sm-mx:text-sm md-mx:text-base">Good life begins with a good company. Start to explore thousands of jobs in one place.</div>


                <div className="flex gap-3 mt-5 items-center">
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"
                        variant="unstyled" label="Job Title" placeholder="Software Engineer" />
                    {/* Here we have used [&_input] for selecting the descendent element i.e input */}

                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100" variant="unstyled" label="Job Type"
                        placeholder="Full Time" />


                    <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
                        <IconSearch className="h-[85%] w-[85%]" />
                    </div>
                </div>
            </div>
            <div className="w-[55%] sm-mx:w-full flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img src="/Boy.png" alt="Image" />
                    <div className="w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md absolute top-[50%] -right-10 bs-mx:right-0 xs-mx:top-[10%] xs-mx:!-left-5">
                        <div className="text-center text-mine-shaft-100 mb-1 text-sm">10K+ got job</div>
                        <AvatarGroup>
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEXZEcK46VFU6VDTgO3e1NqniAwSvxfUnSg&s"/>
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEXZEcK46VFU6VDTgO3e1NqniAwSvxfUnSg&s"/>
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEXZEcK46VFU6VDTgO3e1NqniAwSvxfUnSg&s"/>
                            <Avatar>+9K</Avatar>
                        </AvatarGroup>
                    </div>



                    <div className="w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md absolute top-[28%] xs:-left-5 flex flex-col gap-2 bs-mx:top-[35%] xs-mx:top-[60%] xs-mx:!-right-10">
                        <div className="flex gap-2 items-center ">
                            <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                                <img src="/Google.png" alt="" />
                            </div>
                            <div className="text-sm to-mine-shaft-100">
                                <div>Software Engineer</div>
                                <div className="text-mine-shaft-200 text-xs">New York</div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
                            <span>1 day ago</span>
                            <span>120 Applications</span>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
export default DreamJob;