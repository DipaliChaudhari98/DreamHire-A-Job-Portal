// Data.js
const Data = () => {
    const companies = [
        "Google (1)", "Amazon", "Figma", "Netflix", "Meta", "Microsoft", "Pinterest", "Slack", "Spotify", "Oracle", "Walmart"
    ];
    
    const jobCategory = [
        {
            "name": "Arts & Design",
            "desc": "Create visually appealing designs for digital and print media, including graphics, illustrations, and branding materials.",
            "jobs": ""
        },
        {
            "name": "Content Writing",
            "desc": "Write engaging and informative content for websites, blogs, social media, and marketing campaigns.",
            "jobs": ""
        },
        {
            "name": "Customer Support",
            "desc": "Assist customers by resolving their inquiries, complaints, and technical issues via phone, email, or chat.",
            "jobs": ""
        },
        {
            "name": "Data Entry",
            "desc": "Input, update, and manage large volumes of data accurately into digital systems.",
            "jobs": ""
        },
        {
            "name": "Digital Marketing",
            "desc": "Develop and execute online marketing strategies, including SEO, social media, and paid advertising campaigns.",
            "jobs": ""
        },
        {
            "name": "Finance",
            "desc": "Manage financial records, analyze budgets, and assist in financial decision-making for businesses.",
            "jobs": ""
        },
        {
            "name": "Human Resource",
            "desc": "Recruit, train, and manage employees while ensuring compliance with company policies and labor laws.",
            "jobs": ""
        },
        {
            "name": "Sales",
            "desc": "Engage with clients, generate leads, and close deals to drive revenue growth.",
            "jobs": ""
        },
        {
            "name": "UI-UX Designer",
            "desc": "Design intuitive and user-friendly interfaces for websites and mobile applications.",
            "jobs": ""
        },
        {
            "name": "Web Developer",
            "desc": "Build, maintain, and optimize websites and web applications using various programming languages and frameworks.",
            "jobs": ""
        }
    ];
    
    const work = [
        {
            "name": "Build Your Resume",
            "desc": "Create a standout resume with your skills."
        },
        {
            "name": "Apply For Job",
            "desc": "Find and apply for jobs that match your skills."
        },
        {
            "name": "Get Hired",
            "desc": "Connect with employers and start your new job."
        }
    ];
    
    const testimonials = [
        {
            "name": "Shivam Patel",
            "testimonial": "This job portal made job search easy and quick. Recommended to all job seekers!",
            "rating": 5
        },
        {
            "name": "Abhishek Kullu",
            "testimonial": "Found my dream job within a week! The application process was smooth.",
            "rating": 4
        },
        {
            "name": "Swapnil Pandey",
            "testimonial": "I secured a job offer within days of applying.exceptional user experience and support.",
            "rating": 4
        },
        {
            "name": "Pavan Barnana",
            "testimonial": "Highly efficient job portal with excellent resources .Helped me land a great position.",
            "rating": 4
        }
    ];
    
    const footerLinks =[
        {title:"Product",links:["Find Job","Find Company","Find Employee"]},
        {title:"Company",links:["About us","Contact Us","Privacy Policy","Terms & Conditions"]},
        {title:"Support",links:["Help & Support","Feedback","FAQs"]}
    ]
    
    return { companies, jobCategory, work, testimonials,footerLinks };
};

export default Data;
