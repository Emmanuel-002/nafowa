import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import awardpresentation from '../images/award-presentation.jpg'
import cancerawareness from '../images/cancerawareness.jpg'
import cassAddress from '../images/CAS-address.jpg'
import conference from '../images/conference.jpg'
import culturalday from '../images/culturalday.jpg'
import depowa from '../images/depowa.jpg'
import humanitarian from '../images/humanitarian.jpg'
import nafowavisittocdswife from '../images/nafowavisittocdswife.jpg'
import presentationofgift from '../images/presentationofgift.jpg'
import sendforth from '../images/sendforth.jpg'
import walkatonsenatecommittee from '../images/walkatonsenatecommittee.jpg'
import walkjog from '../images/walkjog.jpg'
import education from '../images/education.jpg'
import skillacquisition from '../images/skillacquisition.jpg'
import communitydev from '../images/communitydev.jpg'
import healthcare from '../images/communitydev.jpg'
import VicePresident from '../images/vice-president.png'
import NationalSecretary from '../images/national-secretary.png'
import AssistantNationalSecretary from '../images/assistant-national-secretary.png'
import HeadOfProgramme from '../images/head-of-programme.png'
import PublicRelationOfficer from '../images/public-relation-officer.png'
import HeadOfFinance from '../images/head-of-finance.png'
import HeadOfEntertainment from '../images/head-of-entertainment.png'
import HeadOfSocialWelfare from '../images/head-of-social.png'

export const about = [
    {   
        title:'Vision',
        image: <RemoveRedEyeIcon style={{width:'100px', height:'100px'}} />,
        detail: `NAFOWA vision is embedded in the Association’s motto which is “Service to Humanity”`
    },
    {   
        title:'Mision',
        image: <FlagCircleIcon style={{width:'100px', height:'100px'}} />,
        detail: `To make life easy and meaningful to its members and the general public at large most especially children and women through various charity projects.
        NAFOWA vision is embedded in the Association’s motto which is “Service to Humanity”`
    },
    {
        title:'Core Values',
        image: <JoinInnerIcon style={{width:'100px', height:'100px'}} />,
        detail: `Our core values are Transparency, Compassion and Service to Humanity`
    },
]

export const executives = [
    {
        pos:1,
        id:'president',
        name:'',
        appointment:'President',
        image: '',
        about:'',
        email:'',
        phone:''
    },
    {
        pos:2,
        id:'vice-president',
        name:'Dr (Mrs) Ibiyemi Olatunde',
        appointment:'Vice President',
        image: VicePresident,
        about:'Dr (Mrs) Ibiyemi Olatunde hails from Osun State and she is currently the NAFOWA National Vice President. Mrs Olatunde holds a BSc (Hons), in Microbiology, MSc CPEB, PGDE and PhD in Microbiology. Her hobbies include reading and cooking.',
        email:'bukkyolatunde@gmail.com',
        phone:'08026635206'
    },
    {
        pos:3,
        id:'national-secretary',
        name:'Mrs Hussaina Umar',
        appointment:'National Secretary',
        image: NationalSecretary,
        about:'Mrs Hussaina Umar hails from Edo State and she is currently the NAFOWA National Secretary. Mrs Umar holds a BSc in Political Science. Her hobbies include exploring and interior decoration',
        email:'hussainasalihu2005@gmail.com',
        phone:'08022325952'
    },
    {
        pos:4,
        id:'assistant-national-secretary',
        name:'Mrs Yasmeen MK Usman',
        appointment:'Assistant National Secretary',
        image: AssistantNationalSecretary,
        about:'Mrs Yasmeen MK Usman hails from Kaduna State and she is currently the NAFOWA National Assistant Secretary. Mrs MK Usman holds a HND in Health Information Technology and Master Diploma in Counseling and Coaching (MDCC). Her hobby is cooking.  She can be contacted via ',
        email:'jaszabdul5@gmail.com',
        phone:'08065510402'
    },
    {
        pos:5,
        id:'head-of-programme',
        name:'Mrs Fatima Adisa',
        appointment:'Head of Programme',
        image: HeadOfProgramme,
        about:'Mrs Fatima Adisa hails from Kaduna State and she is currently the NAFOWA National Head of Programme. Mrs Adisa holds an OND Personnel Management, HND Marketing and PGD Education. Her hobbies include Reading Quran and making friends.',
        email:'fateemer2002gmail.com',
        phone:'08035999136'
    },
    {
        pos:6,
        id:'public-relation-officer',
        name:'Mrs Michelle Akins',
        appointment:'Public Relation Officer',
        image:PublicRelationOfficer,
        about:'Mrs Michelle Akins hails from Kogi State and she is currently the NAFOWA National PRO. Mrs Akins holds a Bachelor of Arts French Language, B1 Level CEFR (France) and OND in Accounting. Her hobbies include traveling and interior decoration.',
        email:'michyife@yahoo.com',
        phone:'08033723746'
    },
    {
        pos:7,
        id:'financial-secretary',
        name:'Mrs Ifeoma Anyadike',
        appointment:'Financial Secretary',
        image:HeadOfFinance,
        about:'Mrs Ifeoma Anyadike hails from Imo State and she is currently the NAFOWA National Financial Secretary. Mrs Anyadike holds a BSc Marketing from University of Nigeria Nsukka. Her hobby is listening to music.',
        email:'ifeoma.anyadike@yahoo.com',
        phone:'08033911500'
    },
    {
        pos:8,
        id:'head-of-entertainment',
        name:'Mrs Akintunde Dorathy',
        appointment:'Head of Entertainment',
        image:HeadOfEntertainment,
        about:'Mrs Akintunde Dorathy hails from Edo State and she is currently the NAFOWA National Head of Entertainment. Mrs Akintunde holds a BSc Enterpreneur and Business Management and Certificate in Human Resources (Alabama). Her hobbies include Travelling, Cooking and Baking.',
        email:'akindorathy@gmail.com',
        phone:'08136069553'
    },
    {
        pos:9,
        id:'head-of-social-welfare',
        name:'Mrs Zainab Usman',
        appointment:'Head of Social Welfare',
        image:HeadOfSocialWelfare,
        about:'Mrs Zainab Usman hails from Kebbi State and she is currently the NAFOWA National Head of Social Welfare. Mrs Usman holds a BSc Biology and MSc Biotechnology. Her hobbies include Reading and Making Friends.',
        email:'zainabtukur7@gmail.com',
        phone:'08060696686'
    }
]

export const services = [
    {   
        id:'education',
        src: education,
        alt: "Education",
        description: `NAFOWA operates several schools, including primary, secondary, and vocational schools, which provide quality education to NAF personnel`
    },
    {   
        id:'healthcare',
        src: healthcare,
        alt: "Health Care",
        description: `NAFOWA runs several clinics and hospitals which provide free or subsidized medical care to NAF personnel and their families. 
        The association also organizes health awareness campaigns and programs.`
    },

    {
        id:'skillacquisition',
        src: skillacquisition,
        alt: "Skill Acquisition",
        description: `NAFOWA provides skills acquisition and empowerment programs to NAF personnel's wives and other women in the communities where NAF bases are located. 
        These programs are designed to help women become financially independent and contribute to their families' well-being.`
    },
    {   
        id:'communitydevelopment',
        src: communitydev,
        alt: "Community Development",
        description: `NAFOWA undertakes several community development projects, such as the provision of water boreholes, schools, and hospitals.
        The association also supports orphanages, homes for the elderly, and other charitable organizations.`
    },
]

export const news = [
    {   
        id:'202406010',
        title:'Award Presentation',
        src: awardpresentation,
        alt: "Award Presentation",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis quisquam fugiat similique saepe aperiam neque dolorem 
        odio asperiores exercitationem velit, nihil commodi, molestias provident eligendi reiciendis eum! Rerum dolorem ipsum animi libero tempore, 
        similique ab sapiente repellendus explicabo possimus! Molestias rem tempore necessitatibus sed, quos illum quod quidem, velit vero doloremque, 
        in dolorum incidunt. Sapiente provident nihil, quam repellat temporibus eos eius aperiam iusto cupiditate magnam maxime sed tempora recusandae 
        `
    },
    {   
        id:'202406011',
        title:'Cancer Awareness',
        src: cancerawareness,
        alt: "Cancer Awareness",
        description: `assumenda eligendi? Libero quisquam dolores expedita! Harum, eligendi sit labore saepe earum consequatur adipisci ex eaque neque ratione modi 
        odio porro aliquid non numquam est, dolorem dolores molestias vero quod hic consequuntur odit. Non totam voluptatem temporibus doloremque ipsam 
        quibusdam voluptatibus. Ab illo, consectetur distinctio vel temporibus quaerat ipsum quis fugiat debitis adipisci incidunt aperiam, est 
        accusantium aspernatur voluptatibus fugit reprehenderit voluptate laudantium rem veritatis! Alias, doloribus itaque optio odio corrupti,
        `
    },

    {
        id:'202406012',
        title:'CAS Address',
        src: cassAddress,
        alt: "CAS Address",
        description: ` harum inventore et, illum deserunt eum dolorem voluptate molestiae maxime nostrum? Culpa eius placeat tempora vel facere cupiditate alias 
        dolore blanditiis nobis, dignissimos voluptas rem, quia, quaerat neque animi aspernatur? Numquam, nostrum quam? Quia autem exercitationem 
        porro sunt facere optio odio, dolorem repellendus qui vitae alias dignissimos, fugiat asperiores temporibus repellat quisquam dolore quae! 
        Et, deserunt. Consequuntur, reprehenderit velit, autem esse vitae veniam ratione facere tempore neque est exercitationem quasi blanditiis 
        fugiat saepe quod! Aperiam nemo hic eaque mollitia vero fuga excepturi! Dignissimos laborum fuga consectetur? Ullam porro, vero iste eos ab 
        ad eaque tempore voluptas fugiat quidem magni, aliquid quam! Esse dolores quaerat, reprehenderit autem iste iure.`
    },

    {
        id:'202406013',
        title:'NAFOWA Conference',
        src: conference,
        alt: "NAFOWA Conference",
        description: ` harum inventore et, illum deserunt eum dolorem voluptate molestiae maxime nostrum? Culpa eius placeat tempora vel facere cupiditate alias 
        dolore blanditiis nobis, dignissimos voluptas rem, quia, quaerat neque animi aspernatur? Numquam, nostrum quam? Quia autem exercitationem 
        porro sunt facere optio odio, dolorem repellendus qui vitae alias dignissimos, fugiat asperiores temporibus repellat quisquam dolore quae! 
        Et, deserunt. Consequuntur, reprehenderit velit, autem esse vitae veniam ratione facere tempore neque est exercitationem quasi blanditiis 
        fugiat saepe quod! Aperiam nemo hic eaque mollitia vero fuga excepturi! Dignissimos laborum fuga consectetur? Ullam porro, vero iste eos ab 
        ad eaque tempore voluptas fugiat quidem magni, aliquid quam! Esse dolores quaerat, reprehenderit autem iste iure.`
    },

    {   
        id:'202406014',
        title:'Cultural Day',
        src: culturalday,
        alt: "Cultural Day",
        description: `assumenda eligendi? Libero quisquam dolores expedita! Harum, eligendi sit labore saepe earum consequatur adipisci ex eaque neque ratione modi 
        odio porro aliquid non numquam est, dolorem dolores molestias vero quod hic consequuntur odit. Non totam voluptatem temporibus doloremque ipsam 
        quibusdam voluptatibus. Ab illo, consectetur distinctio vel temporibus quaerat ipsum quis fugiat debitis adipisci incidunt aperiam, est 
        accusantium aspernatur voluptatibus fugit reprehenderit voluptate laudantium rem veritatis! Alias, doloribus itaque optio odio corrupti,
        `
    },
    {   
        id:'202406015',
        title:'DEPOWA',
        src: depowa,
        alt: "DEPOWA",
        description: `assumenda eligendi? Libero quisquam dolores expedita! Harum, eligendi sit labore saepe earum consequatur adipisci ex eaque neque ratione modi 
        odio porro aliquid non numquam est, dolorem dolores molestias vero quod hic consequuntur odit. Non totam voluptatem temporibus doloremque ipsam 
        quibusdam voluptatibus. Ab illo, consectetur distinctio vel temporibus quaerat ipsum quis fugiat debitis adipisci incidunt aperiam, est 
        accusantium aspernatur voluptatibus fugit reprehenderit voluptate laudantium rem veritatis! Alias, doloribus itaque optio odio corrupti,
        `
    },
    {   
        id:'202406016',
        title:'Humanitarian Porgramme',
        src: humanitarian,
        alt: "Humanitarian",
        description: `assumenda eligendi? Libero quisquam dolores expedita! Harum, eligendi sit labore saepe earum consequatur adipisci ex eaque neque ratione modi 
        odio porro aliquid non numquam est, dolorem dolores molestias vero quod hic consequuntur odit. Non totam voluptatem temporibus doloremque ipsam 
        quibusdam voluptatibus. Ab illo, consectetur distinctio vel temporibus quaerat ipsum quis fugiat debitis adipisci incidunt aperiam, est 
        accusantium aspernatur voluptatibus fugit reprehenderit voluptate laudantium rem veritatis! Alias, doloribus itaque optio odio corrupti,
        `
    },
    {   
        id:'202406017',
        title:'NAFOWA Visits CDS Wife',
        src: nafowavisittocdswife,
        alt: "NAFOWA Visits CDS Wife",
        description: `assumenda eligendi? Libero quisquam dolores expedita! Harum, eligendi sit labore saepe earum consequatur adipisci ex eaque neque ratione modi 
        odio porro aliquid non numquam est, dolorem dolores molestias vero quod hic consequuntur odit. Non totam voluptatem temporibus doloremque ipsam 
        quibusdam voluptatibus. Ab illo, consectetur distinctio vel temporibus quaerat ipsum quis fugiat debitis adipisci incidunt aperiam, est 
        accusantium aspernatur voluptatibus fugit reprehenderit voluptate laudantium rem veritatis! Alias, doloribus itaque optio odio corrupti,
        `
    },
    {   
        id:'202406018',
        title:'Presentation of Gift',
        src: presentationofgift,
        alt: "Presentation of Gift",
        description: `assumenda eligendi? Libero quisquam dolores expedita! Harum, eligendi sit labore saepe earum consequatur adipisci ex eaque neque ratione modi 
        odio porro aliquid non numquam est, dolorem dolores molestias vero quod hic consequuntur odit. Non totam voluptatem temporibus doloremque ipsam 
        quibusdam voluptatibus. Ab illo, consectetur distinctio vel temporibus quaerat ipsum quis fugiat debitis adipisci incidunt aperiam, est 
        accusantium aspernatur voluptatibus fugit reprehenderit voluptate laudantium rem veritatis! Alias, doloribus itaque optio odio corrupti,
        `
    },
    {   
        id:'202406019',
        title:'Send Forth',
        src: sendforth,
        alt: "Send Forth",
        description: `assumenda eligendi? Libero quisquam dolores expedita! Harum, eligendi sit labore saepe earum consequatur adipisci ex eaque neque ratione modi 
        odio porro aliquid non numquam est, dolorem dolores molestias vero quod hic consequuntur odit. Non totam voluptatem temporibus doloremque ipsam 
        quibusdam voluptatibus. Ab illo, consectetur distinctio vel temporibus quaerat ipsum quis fugiat debitis adipisci incidunt aperiam, est 
        accusantium aspernatur voluptatibus fugit reprehenderit voluptate laudantium rem veritatis! Alias, doloribus itaque optio odio corrupti,
        `
    },
    {   
        id:'202406020',
        title:'Walkaton Senate Committee',
        src: walkatonsenatecommittee,
        alt: "Walkaton Senate Committee",
        description: `assumenda eligendi? Libero quisquam dolores expedita! Harum, eligendi sit labore saepe earum consequatur adipisci ex eaque neque ratione modi 
        odio porro aliquid non numquam est, dolorem dolores molestias vero quod hic consequuntur odit. Non totam voluptatem temporibus doloremque ipsam 
        quibusdam voluptatibus. Ab illo, consectetur distinctio vel temporibus quaerat ipsum quis fugiat debitis adipisci incidunt aperiam, est 
        accusantium aspernatur voluptatibus fugit reprehenderit voluptate laudantium rem veritatis! Alias, doloribus itaque optio odio corrupti,
        `
    },
    {   
        id:'202406021',
        title:'Walk Jog',
        src: walkjog,
        alt: "Walk Jog",
        description: `assumenda eligendi? Libero quisquam dolores expedita! Harum, eligendi sit labore saepe earum consequatur adipisci ex eaque neque ratione modi 
        odio porro aliquid non numquam est, dolorem dolores molestias vero quod hic consequuntur odit. Non totam voluptatem temporibus doloremque ipsam 
        quibusdam voluptatibus. Ab illo, consectetur distinctio vel temporibus quaerat ipsum quis fugiat debitis adipisci incidunt aperiam, est 
        accusantium aspernatur voluptatibus fugit reprehenderit voluptate laudantium rem veritatis! Alias, doloribus itaque optio odio corrupti,
        `
    },
]

  export const images = [
    education,
    healthcare,
    communitydev,
    skillacquisition,
  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));