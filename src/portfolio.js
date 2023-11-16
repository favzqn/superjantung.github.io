/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fauzan Fathurrahman",
  title: "Hi! I'm Fauzan",
  subTitle: emoji(
    "I'm a versatile tech enthusiast who wears multiple hats. I'm a Full Stack Developer 🚀, SDET, AWS CB, Chatbot Engineer, Mentor, VN Developer, and IT Support. 😎💻🌟"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/superjantung",
  linkedin: "https://www.linkedin.com/in/fauzan-fathurrahman/",
  gmail: "fauzanf.work@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/jantung08 ",
  medium: "https://medium.com/@fauzanf",
  // stackoverflow: "https://stackoverflow.com/users/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE TECH ENTHUSIAST, DEDICATED TO EXPLORING AND MASTERING A VARIETY OF TECH STACKS!",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "go",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "QA Engineer, Chatbot Developer, Full-stack Developer",
      company: "Radya Labs",
      companylogo: require("./assets/images/radyaLogo.png"),
      date: "Jan 2019 - Mar 2021",
      desc: "Keywords: Katalon, Selenium, Appium, Burp Suite, MobSF, Zaproxy, Qiscus, Freshchat, Salesforce, REST API, HTML, CSS, Javascript, Laravel, MySQL, Angular, Go, Ng-Zorro",
      descBullets: [
        "Implement automated testing for multiple projects.",
        "Perform manual testing for various projects.",
        "Conduct penetration tests.",
        "Create and maintain Chatbots on various platforms.",
        "Develop and manage Web Applications."
      ]
    },
    {
      role: "SDET",
      company: "Mekari",
      companylogo: require("./assets/images/mekariLogo.png"),
      date: "Sep 2021 - Jul 2022",
      desc: "Keywords: Ruby, Selenium, Cucumber, Appium, TestRail, Jenkins, Docker, JMeter",
      descBullets: [
        "Develop and maintain test automation frameworks using Ruby, Cucumber, and Selenium.",
        "Manage and update Jenkins jobs for test automation.",
        "Facilitate knowledge sharing sessions with QA/SDET team members.",
        "Participate in code reviews as an SDET."
      ]
    },
    {
      role: "Chatbot Developer, Visual Novel Developer (Volunteer)",
      company: "Diceritain",
      companylogo: require("./assets/images/diceritainLogo.png"),
      date: "Nov 2022 – Jun 2023",
      desc: "Keywords: NodeJS, Serverless, Lambda, DynamoDB, Javascript, Monogatari",
      descBullets: [
        "Create a user-friendly chatbot that educates, provides references, and connects users with certified psychologists for mental health support.",
        "Develop a visually captivating and interactive visual novel to educate students about mental health topics in an engaging and enjoyable manner."
      ]
    },
    {
      role: "Mentor (Part-time)",
      company: "JayJay",
      companylogo: require("./assets/images/jayjayLogo.png"),
      date: "Nov 2022 – Jun 2023",
      desc: "Mentor young aspiring QA Engineers and/or any professionals who want to learn and/or switch to a QA Engineering career. ",
      descBullets: [
        "Assess, grade, and provide substantive feedback on any assignment submitted by the students in the LMS",
        "Answer any questions related to QA Engineering on the community group"
      ]
    },
    {
      role: "Lead Chatbot Engineer (Part-time)",
      company: "Chatbiz (YC W21)",
      companylogo: require("./assets/images/chatbizLogo.png"),
      date: "Apr 2021 – Present",
      desc: "Keywords: Whatsapp, Line, Web, Wit.ai, Dialogflow, Rasa, Node.js, Lambda, DynamoDB, Serverless",
      descBullets: [
        "Develop and maintain Chatbots",
        "Integrate advanced language understanding",
        "Collaborate with teams to resolve conflicts, prioritize needs, and define content criteria.",
        "Identify and resolve issues uncovered through customer feedback and testing."
      ]
    },
    {
      role: "Community Builder (Community)",
      company: "AWS",
      companylogo: require("./assets/images/awsLogo.png"),
      date: "Mar 2022 – Present",
      desc: "",
      descBullets: [
        "Contributed blog posts showcasing innovative uses of AWS technologies and best practices.",
        "Actively engaged in online forums, answering questions and sharing knowledge.",
        "Created engaging content for those interested in learning about AWS.",
        "Recognized as an AWS Community Builder for dedication to sharing expertise.",
        "Networked with AWS enthusiasts, experts, and employees, fostering collaborations and expanding professional connections."
      ]
    },
    {
      role: "SDET",
      company: "TipTip",
      companylogo: require("./assets/images/tiptipLogo.png"),
      date: "Jul 2022 – Present",
      desc: "Keywords: Playwright, JavaScript, K6, Ruby, Grafana, Loki, Zipkin, Flutter integration_test, Patrol, Maestro, Selenium, Cucumber, Appium, XRAY, Jenkins, Docker, JMeter",
      descBullets: [
        "Develop and maintain test automation frameworks.",
        "Manage and update Jenkins jobs for test automation.",
        "Facilitate knowledge sharing sessions with QA/SDET team members.",
        "Participate in code reviews as an SDET.",
        "Perform load testing to evaluate system performance and scalability."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Chatbot Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/sofia.png"),
      projectName: "[Chatbot] Sofia - Sophie Paris",
      projectDesc:
        "Sofia, offers promo info, FAQ support, member services (registration and login), order tracking, distributor location, product catalog, cart management, and transactions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sophieparis.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tsl.png"),
      projectName: "[Chatbot] Tarbiyah Sunnah Learning",
      projectDesc:
        "The Tarbiyah Sunnah Learning Chatbot offers quick access to class information, exams, and more. Features include user registration, FAQs, general info, class details, course updates, exams, grades, and an FAQ section.",
      footerLink: []
    },

    {
      image: require("./assets/images/vita.png"),
      projectName: "[Chatbot] VITA - Kemenparekraf",
      projectDesc:
        "Vita is a smartphone virtual assistant that offers immediate responses and general information, including FAQs, about Kemenparekraf and Nyatakan.id. It provides features like registration, general information, and FAQs for both platforms.",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/edenfarm.jpg"),
      projectName: "[Chatbot] Edeline - Edenfarm",
      projectDesc:
        "Introducing our Edenfarm chatbot – your grocery shopping companion and customer service expert, all in one. Effortlessly order groceries and get instant support with just a chat.",
      footerLink: []
    },
    {
      image: require("./assets/images/isuzu.jpg"),
      projectName: "[Chatbot] Rangga - Isuzu",
      projectDesc:
        "This chatbot offers a range of functionalities for you, including FAQs, customer support, emergency assistance, service bookings, and spare parts requests. It's your all-in-one Isuzu solution, designed for your convenience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/sbm.jpg"),
      projectName: "[Chatbot] Aura - SBM ITB",
      projectDesc:
        "The SBM ITB Chatbot simplifies your university journey with FAQs, study program details, easy program registration, and direct access to our support team, all in one convenient platform. Explore SBM ITB effortlessly with this versatile chatbot.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/itb.jpg"),
      projectName: "[Chatbot] ITB",
      projectDesc:
        "The ITB Chatbot is your all-in-one solution for registration and study program inquiries, providing guidance on requirements, enrollment, fees, deadlines, program options, and educational costs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/sharinghappiness.jpg"),
      projectName: "[Chatbot] Hepi- Sharing Happiness",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/surface.jpg"),
      projectName: "[Chatbot] Sasha - Surface Skin Habit",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/baraya.jpg"),
      projectName: "[Chatbot] Pamela - Baraya Travel",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/aragon.jpg"),
      projectName: "[Chatbot] Artra - Aragon Travel",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },

    {
      image: require("./assets/images/dt.jpg"),
      projectName: "[Chatbot] - Daarut Tauhiid",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/loreal.jpg"),
      projectName: "[Chatbot] - L'Oréal",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },

    {
      image: require("./assets/images/yakes.jpg"),
      projectName: "[Chatbot] Kesya - Yayasan Kesehatan Telkom",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/zahir.jpg"),
      projectName: "[Chatbot] - Zahir",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/dropezy.jpg"),
      projectName: "[Chatbot] - Dropezy",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/halofina.jpg"),
      projectName: "[Chatbot] - Halofina",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "[Chatbot] - Kino",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "[Chatbot] - Rumah Sakit Permata",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "[Chatbot] - Tunas BMW",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "[Chatbot] Mira - Mitsubishi",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "[Chatbot] Dr.Merck - Merck",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const projects = {
  title: "Other Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Howel&Co",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },

    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Kemnaker",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Covid19",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications that I have",

  achievementsCards: [
    {
      title: "AWS Certified Developer – Associate",
      subtitle:
        "Certification for expertise in secure and scalable AWS application development. Validates proficiency in service integration, deployment, and security. Enables skilled practitioners in efficient cloud solutions.",
      image: require("./assets/images/aws-d-a.png"),
      imageAlt: "AWS Certified Developer Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/f8a71293-48f5-4f85-a03a-86ab2fe81422/linked_in_profile"
        }
      ]
    },
    {
      title: "Japanese Language Proficiency Test (JLPT)",
      subtitle:
        "Introductory level certification for basic Japanese language skills. Validates comprehension of everyday expressions, simple sentences, and ability to engage in basic conversations.",
      image: require("./assets/images/jlpt.png"),
      imageAlt: "Japanese Language Proficiency Test (JLPT)",
      footerLink: []
    },

    {
      title: "Critical Thinking - NASBA",
      subtitle:
        "Measure and validate critical thinking skills for effective decision-making and problem-solving. Demonstrates proficiency in analyzing information, identifying assumptions, and drawing logical conclusions.",
      image: require("./assets/images/nasba.png"),
      imageAlt: "PWA Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62-895351290060",
  email_address: "fauzanf.work@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "superjantung", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  projects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
