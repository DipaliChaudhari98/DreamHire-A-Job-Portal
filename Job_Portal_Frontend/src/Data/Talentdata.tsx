import { IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const searchFields=[
    {title:"Job Title",icon:IconSearch,options:['Designer','Developer','Product Manager','Marketing Specialist','Data Analyst','Sales Executive','Content Writer','Customer Support']},
    {title:"Location",icon:IconMapPin,options:['Delhi','New York','San Francisco','London','Berlin','Tokyo','Sydney','Toronto']},
    {title:"Skills",icon:IconRecharging,options:['HTML','CSS','JavaScript','React','Angular','Node.js','Python','Java','Ruby','PHP','SQL','MongoDB','PostgreSQL','GIt','API Development','Testing and Debugging','Agile Methodologies','DevOps','AWS','Azure','Google Cloud']}
]
const talents=[
    {
        name:"Bob Smith",
        role:"Backend Developer",
        company:"Amazon",
        topSkills:["Node.js","Express","MySQL"],
        about:"As a Backend Developer at Amazon , I specialize in server-side developement and databse management.",
        expectedCtc:"₹55 -65 LPA",
        location:"Seattle ,United States",
        image:"avatar"
    },
    {
        name:"Diana Prince",
        role:"UI/UX Designer",
        company:"Adobe",
        topSkills:["Figma","Sketch","Invision"],
        about:"As a UI/UX Designer at Adobe, I am dedicated to crafting visually comelling and user centric designs.My expertise in Figma ,Sketch and Invision allows me to create intuitive interfaces that enhance user experience across digital platforms.",
        expectedCtc:"₹35 -50 LPA",
        location:"Austin ,United States",
        image:"avatar2"
    },
    {
        name: "Sophia Martinez",
        role: "AI/ML Engineer",
        company: "Meta",
        topSkills: ["TensorFlow", "PyTorch", "Python"],
        about: "At Meta, I develop machine learning models to power intelligent features across platforms, focusing on NLP and computer vision applications.",
        expectedCtc: "₹70 - 90 LPA",
        location: "Menlo Park, United States",
        image: "avatar"
    },
    {
        name: "Haruto Tanaka",
        role: "Frontend Developer",
        company: "Rakuten",
        topSkills: ["Vue.js", "JavaScript", "CSS"],
        about: "I specialize in crafting sleek and responsive user interfaces at Rakuten, with a passion for accessibility and performance optimization.",
        expectedCtc: "₹40 - 55 LPA",
        location: "Tokyo, Japan",
        image: "avatar2"
    },
    {
        name: "Chloe Zhang",
        role: "Product Manager",
        company: "Shopify",
        topSkills: ["Agile Methodologies", "Product Strategy", "Data Analysis"],
        about: "Leading cross-functional teams at Shopify, I transform user insights into product features that enhance ecommerce experiences globally.",
        expectedCtc: "₹60 - 75 LPA",
        location: "Toronto, Canada",
        image: "avatar"
    },
    {
        name:"Fiona Gallagher",
        role:"DevOps Engineer",
        company:"NetFlix",
        topSkills:["Docker","Kubernetes","AWS"],
        about:"As a DevOps Engineer at NetFlix , I focus on automating infrastructure and optimizing deployemnt processes to support scalable applications.",
        expectedCtc:"₹55 -70 LPA",
        location:"Austin ,United States",
        image:"avatar"
    },
    {
        name:"Ethan Hunt",
        role:"Data Scientist",
        company:"IBM",
        topSkills:["Python","R","Machine Learning"],
        about:"As a Data Scientist at IBM , I leverage my skills in Python, R ,and machine learning to analyze complex datasets and generate actionable insights.",
        expectedCtc:"₹55 -70 LPA",
        location:"Austin ,United States",
        image:"avatar1"
    },
    {
        name:"Jarrod Wood",
        role:"Software Engineer",
        company:"Apple",
        topSkills:["Swift","iOS","Xcode"],
        about:"As a mobile app developer at Apple , I specialize in creating intuitive and high performance iOS applications.",
        expectedCtc:"₹55 -70 LPA",
        location:"Cupertino ,United States",
        image:"avatar1"
    },
    {
        name:"George Lucas",
        role:"CyberSecurity Analyst",
        company:"Cisco",
        topSkills:["Penetration Testing","Network Security"],
        about:"As a Cybersecurity Analyst at Cisco, I focus on safeguarding organizations from cyber threats through proactive security measures.My skills in penetration testing , network security, and ethical hacking enable me to identify vulnerabilities and implement effective countermeasures.",
        expectedCtc:"₹60 -75 LPA",
        location:"San Jose, United States",
        image:"avatar1"
    }
];

const profile={
    name:"Jarrod Wood",
    role:"Software Engineer",
    company:"Google",
    location:"New York, United States",
    about:"As a SoftWare Engineer at Google, I specialize in building scalable and high-performance applications.My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences.With a strong foundation in React and SpringBoot , and a focus in MongoDB for database solutions,I am passionate about leveraging the latest technologies to solve complex problems and drive innovation.My goal is to create impactful software that enhances productivity and meets user needs effectively.",
    skills:[
        "React","SpringBoot","MongoDB","HTML","CSS","JavaScript","Node.js","Express","MySQL","Python","Django","Figma","AWS","Docker","Sketch"
    ],
    experience:[
        {
            title:"Software Engineer III",
            company:"Google",
            location:"New York, United States",
            startDate:"APR 2022",
            endDate:"Present",
            description:"As a software engineer at Google, I am responsible for designing ,developing ,and maintaining scalable software solutions that enhance user experience and improve operatinal efficiency."
         },
         {
            title:"Software Developer",
            company:"Microsoft",
            location:"Seattle,United States",
            startDate:"Jun 2018",
            endDate:"MAR 2022",
            description:"At Microsoft,I worked on developing and optimizing cloud based applications,focusing on enhancing performance and scalability."
         }
            ],
            certifications:[
                {
                    name:"Google Professinal Cloud Architect",
                    issuer:"Google",
                    issueDate:"May 2022",
                    certificationId:"CB72982GG"
                },
                {
                    name:"Microsoft Certified: Azure Solutions Architect Expert",
                    issuer:"Microsoft",
                    issueDate:"May 2022",
                    certificationId:"MSI382GG"
                }
            ]
}

export {searchFields,talents,profile};