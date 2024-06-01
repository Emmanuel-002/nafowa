import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import education from '../images/education.jpg'
import healthcare from '../images/healthcare.jpg'
import skillacquisition from '../images/skillacquisition.jpg'
import communitydev from '../images/communitydev.jpg'

import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
// import Carousel from 'react-material-ui-carousel';

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

export const services = [
    {   
        index:'education',
        src: education,
        alt: "Education",
        description: `NAFOWA operates several schools, including primary, secondary, and vocational schools, which provide quality education to NAF personnel`
    },
    {   
        index:'healthcare',
        src: healthcare,
        alt: "Health Care",
        description: `NAFOWA runs several clinics and hospitals which provide free or subsidized medical care to NAF personnel and their families. 
        The association also organizes health awareness campaigns and programs.`
    },

    {
        index:'skillacquisition',
        src: skillacquisition,
        alt: "Skill Acquisition",
        description: `NAFOWA provides skills acquisition and empowerment programs to NAF personnel's wives and other women in the communities where NAF bases are located. 
        These programs are designed to help women become financially independent and contribute to their families' well-being.`
    },
    {   
        index:'communitydevelopment',
        src: communitydev,
        alt: "Community Development",
        description: `NAFOWA undertakes several community development projects, such as the provision of water boreholes, schools, and hospitals.
        The association also supports orphanages, homes for the elderly, and other charitable organizations.`
    },
]

export const news = [
    {   
        id:'1',
        title:'News 1',
        src: banner1,
        alt: "Banner 1",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis quisquam fugiat similique saepe aperiam neque dolorem 
        odio asperiores exercitationem velit, nihil commodi, molestias provident eligendi reiciendis eum! Rerum dolorem ipsum animi libero tempore, 
        similique ab sapiente repellendus explicabo possimus! Molestias rem tempore necessitatibus sed, quos illum quod quidem, velit vero doloremque, 
        in dolorum incidunt. Sapiente provident nihil, quam repellat temporibus eos eius aperiam iusto cupiditate magnam maxime sed tempora recusandae 
        `
    },
    {   
        id:'2',
        title:'News 2',
        src: banner2,
        alt: "Banner 2",
        description: `assumenda eligendi? Libero quisquam dolores expedita! Harum, eligendi sit labore saepe earum consequatur adipisci ex eaque neque ratione modi 
        odio porro aliquid non numquam est, dolorem dolores molestias vero quod hic consequuntur odit. Non totam voluptatem temporibus doloremque ipsam 
        quibusdam voluptatibus. Ab illo, consectetur distinctio vel temporibus quaerat ipsum quis fugiat debitis adipisci incidunt aperiam, est 
        accusantium aspernatur voluptatibus fugit reprehenderit voluptate laudantium rem veritatis! Alias, doloribus itaque optio odio corrupti,
        `
    },

    {
        id:'3',
        title:'News 3',
        src: banner3,
        alt: "Banner 3",
        description: ` harum inventore et, illum deserunt eum dolorem voluptate molestiae maxime nostrum? Culpa eius placeat tempora vel facere cupiditate alias 
        dolore blanditiis nobis, dignissimos voluptas rem, quia, quaerat neque animi aspernatur? Numquam, nostrum quam? Quia autem exercitationem 
        porro sunt facere optio odio, dolorem repellendus qui vitae alias dignissimos, fugiat asperiores temporibus repellat quisquam dolore quae! 
        Et, deserunt. Consequuntur, reprehenderit velit, autem esse vitae veniam ratione facere tempore neque est exercitationem quasi blanditiis 
        fugiat saepe quod! Aperiam nemo hic eaque mollitia vero fuga excepturi! Dignissimos laborum fuga consectetur? Ullam porro, vero iste eos ab 
        ad eaque tempore voluptas fugiat quidem magni, aliquid quam! Esse dolores quaerat, reprehenderit autem iste iure.`
    },

    {
        id:'4',
        title:'News 4',
        src: banner3,
        alt: "Banner 4",
        description: ` harum inventore et, illum deserunt eum dolorem voluptate molestiae maxime nostrum? Culpa eius placeat tempora vel facere cupiditate alias 
        dolore blanditiis nobis, dignissimos voluptas rem, quia, quaerat neque animi aspernatur? Numquam, nostrum quam? Quia autem exercitationem 
        porro sunt facere optio odio, dolorem repellendus qui vitae alias dignissimos, fugiat asperiores temporibus repellat quisquam dolore quae! 
        Et, deserunt. Consequuntur, reprehenderit velit, autem esse vitae veniam ratione facere tempore neque est exercitationem quasi blanditiis 
        fugiat saepe quod! Aperiam nemo hic eaque mollitia vero fuga excepturi! Dignissimos laborum fuga consectetur? Ullam porro, vero iste eos ab 
        ad eaque tempore voluptas fugiat quidem magni, aliquid quam! Esse dolores quaerat, reprehenderit autem iste iure.`
    },

    {   
        id:'5',
        title:'News 5',
        src: banner2,
        alt: "Banner 5",
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