import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData=[
    {title:"Job Title",icon:IconSearch ,options:['Designer','Developer','Product Manager','Marketing Specialist','Data Analyst','Sales Executive','Content Writer','Customer Support']},
    {title:"Location",icon: IconMapPin ,options:['Delhi','New York','San Francisco','London','Berlin','Tokyo','Sydney','Toronto']},
    {title:"Experience",icon: IconBriefcase ,options:['Entry Level','Intermediate','Expert']},
    {title:"Job Type",icon:IconRecharging ,options:['Full Time','Part Time','Contract','Freelance','Internship']},
];

const jobList=[
    {
        jobTitle:"Product Designer",
        company:"Meta",
        applicants:25,
        experience:"Entry Level",
        jobType:"Full-Time",
        location:"New York",
        package:"32 LPA",
        postedDaysAgo:7,
        description:"Meta is Seeking a Product Designer to join our team.You'll br working on designing user-centric interfaces for our blockchain wallet platform."
    },
    {
        jobTitle:"Product Designer",
        company:"Adobe",
        applicants:23,
        experience:"Expert",
        jobType:"Part-Time",
        location:"Toronto",
        package:"33 LPA",
        postedDaysAgo:22,
        description:"Adobe is seeking a part time Product Designer to help us enhance our user experience."
    }, 
    {
        jobTitle:"SMM Manager",
        company:"Spotify",
        applicants:73,
        experience:"Intermediate",
        jobType:"Full-Time",
        location:"Delhi",
        package:"34 LPA",
        postedDaysAgo:8,
        description:"Spotify is looking for an SMM Manager to lead our social media marketing efforts in Delhi.You will create and manage campaigns to promote our music streaming service,engage with our audience,and driven growth."
    },
    {
        jobTitle:"Frontend Developer",
        company:"Amazon",
        applicants:50,
        experience:"Intermediate",
        jobType:"Full-Time",
        location:"Seattle",
        package:"36 LPA",
        postedDaysAgo:10,
        description:"Amazon is looking for a Frontend Developer to build and maintain our customer-facing applications."
    },
    {
        jobTitle:"Sr.UX Designer",
        company:"Netflix",
        applicants:14,
        experience:"Expert",
        jobType:"Part-Time",
        location:"San Francisco",
        package:"40 LPA",
        postedDaysAgo:10,
        description:"Netflix is looking for a Sr.UX Designer to enhance our user experience on streaming platforms."
    },
    {
        jobTitle:"iOS Developer",
        company:"Apple",
        applicants:30,
        experience:"Expert",
        jobType:"Full-Time",
        location:"Cupertine",
        package:"42 LPA",
        postedDaysAgo:7,
        description:"Apple is seeking an iOS Developer to join our team in Cupertine. You will work on developing cutting-edge applications for iOS devices,ensuring high performance and an exceptional user experience."
    }
];

export {dropdownData,jobList};