import { 
  logo, 
  ArrowRight, 
  cog, 
  cylinder, 
  noodle, 
  avatar1, 
  avatar2, 
  avatar3, 
  avatar4, 
  avatar5, 
  avatar6, 
  avatar7, 
  avatar8, 
  avatar9, 
  exhi0, 
  exhi1, 
  exhi2, 
  exhi3, 
  exhi4, 
  exhi5, 
  exhi6, 
  exhi7, 
  exhi8, 
  exhi9, 
  exhi10, 
  exhi11, 
  exhi12, 
  exhi13, 
  exhi14, 
  exhi15, 
  exhi16, 
  exhi17, 
  exhi18, 
  exhi19, 
  exhi20, 
  exhi21, 
  exhi22, 
  exhi23, 
  exhi24, 
  exhi30, 
  exhi31, 
  exhi32, 
  exhi33, 
  exhi34, 
  exhi35, 
  exhi36, 
  exhi37, 
  acme, 
  apex, 
  celestial, 
  echo, 
  pulse, 
  quantum, 
  instagram, 
  linkedin, 
  pin, 
  x, 
  youtube, 
  spring, 
  star, 
  productImage, 
  pyramid, 
  tube, 
  check, 
  checkwhite, 
  arrowRightWhite, 
  imgDemo, 
  makingGif, 
  wechat,
  whatsapp,
  logopg1,
  logopg4,
  logopg5,
  logopg6,
  logopg2,
  logopg3,
  logopg7,
  logopg8,
  exhi38,
  exhi39,
  sudambeef,
  micro_solution,
  conaprole,
  buena_cafe,
  bonetech,
  al_ghurair,
  al_ghurair_img1,
  al_ghurair_img2,
  al_ghurair_vdo1,
  bonetech_img1,
  bonetech_img2,
  bonetech_vdo1,
  conaprole_vdo1,
  buena_cafe_vdo1,
  al_ghurair_img3,
  al_ghurair_img4,
  al_ghurair_img5,
  al_ghurair_img6,
  al_ghurair_img7,
  al_ghurair_img8,
  al_ghurair_img9,
  al_ghurair_img10,
  al_ghurair_img11,
  bonetech_img3,
  bonetech_img4,
  bonetech_img5,
  bonetech_img6,
  bonetech_img7,
  bonetech_vdo2,
  buena_cafe_img17,
  micro_solution_vdo6,
  micro_solution_img45,
  micro_solution_img44,
  micro_solution_img43,
  micro_solution_img42,
  micro_solution_img41,
  micro_solution_img40,
  micro_solution_img10,
  micro_solution_img9,
  micro_solution_img8,
  conaprole_img28,
  conaprole_img27,
  conaprole_img26,
  buena_cafe_img16,
  buena_cafe_img15,
  buena_cafe_img14,
  buena_cafe_img13,
  buena_cafe_img12,
  buena_cafe_img11,
  sudambeef_img18,
  sudambeef_img19,
  sudambeef_img20,
  sudambeef_img21,
  sudambeef_img22,
  sudambeef_img23,
  sudambeef_img24,
  sudambeef_img25,
  sudambeef_vdo2
} from "@/public";
import wechatQr from "@/public/wechat-qr.jpeg";
import { features } from "process";

/**
 * An array of navigation items, each with an id, title, and href.
 * These items are used to build the main navigation menu of the application.
 */
export const navigationItems = [
   {
      id: 1,
      title: 'Home',
      href: '/home'
   },
   {
      id: 2,
      title: 'Portfolio',
      href: '/features'
   },
   {
      id: 3,
      title: 'Services',
      href: '/services'
   },
   // {
   //    id: 4,
   //    title: 'Customers',
   //    href: '/customers'
   // },
   // {
   //    id: 5,
   //    title: 'Reviews',
   //    href: '/reviews'
   // },
   {
      id: 6,
      title: 'View Profile',
      href: '/profile'
   },
   // {
   //    id: 6,
   //    title: 'Contact Us',
   //    href: '/contact'
   // }
];

export const pricingTiers = [
   {
      id: 1,
      title: "Free",
      monthlyPrice: 0,
      buttonText: "Get started for free",
      popular: false,
      inverse: false,
      features: [
         "Up to 5 project members",
         "Unlimited tasks and projects",
         "2GB storage",
         "Integrations",
         "Basic support",
      ],
   },
   {
      id: 2,
      title: "Pro",
      monthlyPrice: 9,
      buttonText: "Sign up now",
      popular: true,
      inverse: true,
      features: [
         "Up to 50 project members",
         "Unlimited tasks and projects",
         "50GB storage",
         "Integrations",
         "Priority support",
         "Advanced support",
         "Export support",
      ],
   },
   {
      id: 3,
      title: "Business",
      monthlyPrice: 19,
      buttonText: "Sign up now",
      popular: false,
      inverse: false,
      features: [
         "Up to 5 project members",
         "Unlimited tasks and projects",
         "200GB storage",
         "Integrations",
         "Dedicated account manager",
         "Custom fields",
         "Advanced analytics",
         "Export capabilities",
         "API access",
         "Advanced security features",
      ],
   },
];

export const testimonials = [
   {
      id: 1,
      text: "To design and build innovative exhibition spaces that effectively communicate our clients’ brand stories, ensuring impactful engagement and memorable visitor experiences. ",
      src: exhi0,
      name: "Delivering Exceptional Exhibition Solutions",
     // username: "@uae",
      
   },
   {
      id: 2,
      text: "To continuously integrate creative design, advanced technology, and strategic thinking in order to deliver world-class exhibition and event solutions that exceed client expectations ",
      src: exhi1,
      name: "Driving Creativity and Innovation",
     // username: "@uae",
      
   },
   {
      id: 3,
      text: "To foster strong and long-term relationships with our clients by delivering reliable, high-quality services with professionalism, transparency, and attention to detail. ",
      src: exhi2,
      name: "Building Lasting Partnerships",
     // username: "@uae",
      
   },
   {
      id: 4,
      text: "This app has completely transformed how I manage my projects and deadlines.",
      src: exhi3,
      name: "KJO",
      username: "@uae",
      
   },
    {
      id: 5,
      text: "This app has completely transformed how I manage my projects and deadlines.",
      src: exhi3,
      name: "KJO",
      username: "@uae",
      
   },
    {
      id: 6,
      text: "This app has completely transformed how I manage my projects and deadlines.",
      src: exhi3,
      name: "KJO",
      username: "@uae",
      
   },
   {
      id: 20,
      src: exhi20,
      name: "BRISTOL",
      username: "@uae",
   },
    {
      id: 30,
      src: exhi30,
      name: "Nakamichi",
      username: "@uae",
    },
    
     {
      id: 32,
      src: exhi0,
      name: "DESON",
      username: "@uae",
     },
      {
      id: 33,
      src: exhi0,
      name: "DESON",
      username: "@uae",
     }
   
];

export const portpofolio = [
   {
      id: 40,
      src: al_ghurair_img1,
      name: "Al Ghurair",
      folder: "al_ghurair",
      username: "@uae",
      context: [
         {
            id: 401,
            src: al_ghurair_img1,
            name: "Al Ghurair",
            type: "jpeg",
         },
         {
            id: 402,
            src: al_ghurair_img2,
            name: "Al Ghurair",
            type: "jpeg",
         },
         {
            id: 404,
            src: al_ghurair_img3,
            name: "Al Ghurair",
            type: "jpeg",
         },
         {
            id: 405,
            src: al_ghurair_img4,
            name: "Al Ghurair",
            type: "jpeg",
         },
         {
            id: 406,
            src: al_ghurair_img5,
            name: "Al Ghurair",
            type: "jpeg",
         },
         {
            id: 407,
            src: al_ghurair_img6,
            name: "Al Ghurair",
            type: "jpeg",
         },
         {
            id: 408,
            src: al_ghurair_img7,
            name: "Al Ghurair",
            type: "jpeg",
         },
         {
            id: 409,
            src: al_ghurair_img8,
            name: "Al Ghurair",
            type: "jpeg",
         },
         {
            id: 410,
            src: al_ghurair_img9,
            name: "Al Ghurair",
            type: "jpeg",
         },
         {
            id: 411,
            src: al_ghurair_img10,
            name: "Al Ghurair",
            type: "jpeg",
         },
{
            id: 412,
            src: al_ghurair_img11,
            name: "Al Ghurair",
            type: "jpeg",
         },
         {
            id: 403,
            src: al_ghurair_vdo1,
            name: "Al Ghurair Video",
            type: "mp4",
         }
      ]
   },
   {
      id: 41,
      src: bonetech_img1,
      name: "Bonetech",
      folder: "bonetech",
      username: "@uae",
      context: [
         {
            id: 411,
            src: bonetech_img1,
            name: "Bonetech",
            type: "jpeg",
         },
         {
            id: 412,
            src: bonetech_img2,
            name: "Bonetech",
            type: "jpeg",
         },
         {
            id: 413,
            src: bonetech_img3,
            name: "Bonetech",
            type: "jpeg",
         },
         {
            id: 414,
            src: bonetech_img4,
            name: "Bonetech",
            type: "jpeg",
         },
         {
            id: 415,
            src: bonetech_img5,
            name: "Bonetech",
            type: "jpeg",
         },
         {
            id: 416,
            src: bonetech_img6,
            name: "Bonetech",
            type: "jpeg",
         },
         {
            id: 417,
            src: bonetech_img7,
            name: "Bonetech",
            type: "jpeg",
         },
         {
            id: 418,
            src: bonetech_vdo1,
            name: "Bonetech",
            type: "mp4",
         },
         {
            id: 419,
            src: bonetech_vdo2,
            name: "Review Video",
            type: "mp4",
         }
      ]
   },
   {
      id: 42,
      src: buena_cafe_img11,
      name: "Buena Cafe",
      folder: "Buencafe",
      username: "@uae",
      context: [
         {
            id: 421,
            src: buena_cafe_img11,
            name: "Buena Cafe",
            type: "jpeg",
         },
         {
            id: 422,
            src: buena_cafe_img12,
            name: "Buena Cafe",
            type: "jpeg",
         },
         {
            id: 423,
            src: buena_cafe_img13,
            name: "Buena Cafe",
            type: "jpeg",
         },
         {
            id: 424,
            src: buena_cafe_img14,
            name: "Buena Cafe",
            type: "jpeg",
         },
         {
            id: 425,
            src: buena_cafe_img15,
            name: "Buena Cafe",
            type: "jpeg",
         },
         {
            id: 426,
            src: buena_cafe_img16,
            name: "Buena Cafe",
            type: "jpeg",
         },
         {
            id: 427,
            src: buena_cafe_img17,
            name: "Buena Cafe",
            type: "jpeg",
         },
         {
            id: 428,
            src: buena_cafe_vdo1,
            name: "Buena Cafe Video",
            type: "mp4",
         }
      ]
   },
   {
      id: 43,
      src: conaprole_img26,
      name: "Conaprole",
      folder: "conaprole",
      username: "@uae",
      context: [
         {
            id: 431,
            src: conaprole_img26,
            name: "Conaprole",
            type: "jpeg",
         },
         {
            id: 432,
            src: conaprole_img27,
            name: "Conaprole",
            type: "jpeg",
         },
         {
            id: 433,
            src: conaprole_img28,
            name: "Conaprole",
            type: "jpeg",
         },
         {
            id: 434,
            src: conaprole_vdo1,
            name: "Conaprole Video",
            type: "mp4",
         }
      ]
   },
   {
      id: 44,
      src: micro_solution_img8,
      name: "Micro Solution",
      folder: "micro_solution",
      username: "@uae",
      context: [
         {
            id: 441,
            src: micro_solution_img8,
            name: "Micro Solution",
            type: "jpeg",
         },
         {
            id: 442,
            src: micro_solution_img9,
            name: "Micro Solution",
            type: "jpeg",
         },
         {
            id: 443,
            src: micro_solution_img10,
            name: "Micro Solution",
            type: "jpeg",
         },
         {
            id: 444,
            src: micro_solution_img40,
            name: "Micro Solution",
            type: "jpeg",
         },
         {
            id: 445,
            src: micro_solution_img41,
            name: "Micro Solution",
            type: "jpeg",
         },
         {
            id: 446,
            src: micro_solution_img42,
            name: "Micro Solution",
            type: "jpeg",
         },
         {
            id: 447,
            src: micro_solution_img43,
            name: "Micro Solution",
            type: "jpeg",
         },
         {
            id: 448,
            src: micro_solution_img44,
            name: "Micro Solution",
            type: "jpeg",
         },
         {
            id: 449,
            src: micro_solution_img45,
            name: "Micro Solution",
            type: "jpeg",
         },
         {
            id: 450,
            src: micro_solution_vdo6,
            name: "Micro Solutions Video",
            type: "mp4",
         }
      ]
   },
   {
      id: 45,
      src: sudambeef_img18,
      name: "Sudambeef",
      folder: "sudambeef",
      username: "@uae",
      context: [
         {
            id: 451,
            src: sudambeef_img18,
            name: "Sudambeef",
            type: "jpeg",
         },
         {
            id: 452,
            src: sudambeef_img19,
            name: "Sudambeef",
            type: "jpeg",
         },
         {
            id: 453,
            src: sudambeef_img20,
            name: "Sudambeef",
            type: "jpeg",
         },
         {
            id: 454,
            src: sudambeef_img21,
            name: "Sudambeef",
            type: "jpeg",
         },
         {
            id: 455,
            src: sudambeef_img22,
            name: "Sudambeef",
            type: "jpeg",
         },
         {
            id: 456,
            src: sudambeef_img23,
            name: "Sudambeef",
            type: "jpeg",
         },
         {
            id: 457,
            src: sudambeef_img24,
            name: "Sudambeef",
            type: "jpeg",
         },
         {
            id: 458,
            src: sudambeef_img25,
            name: "Sudambeef",
            type: "jpeg",
         },
         {
            id: 459,
            src: sudambeef_vdo2,
            name: "Sudambeef Video",
            type: "mp4",
         }
      ]
   },
   {
      id: 29,
      src: exhi20,
      name: "BRISTOL",
      username: "@uae",
      context: [
         {
            id: 201,
            src: exhi20,
            name: "BRISTOL",
            type: "jpeg",
         },
          {
            id: 202,
            src: exhi21,
            name: "BRISTOL",
            type: "jpeg",
         },
          {
            id: 203,
            src: exhi22,
            name: "BRISTOL",
            type: "jpeg",
         },
          {
            id: 204,
            src: exhi23,
            name: "BRISTOL",
            type: "jpeg",
         },
          {
            id: 205,
            src: exhi24,
            name: "BRISTOL",
            type: "mp4",
         }
         
      ],
   },
   {
      id: 30,
      src: exhi30,
      name: "Nakamichi",
      username: "@uae",
      context: [
         {
            id: 300,
            src: exhi30,
            name: "Nakamichi",
            type: "jpeg",
         },
          {
            id: 301,
            src: exhi31,
            name: "Nakamichi",
            type: "jpeg",
         },
          {
            id: 302,
            src: exhi32,
            name: "Nakamichi",
            type: "jpeg",
         },
          {
            id: 303,
            src: exhi33,
            name: "Nakamichi",
            type: "jpeg",
         },
          {
            id: 304,
            src: exhi34,
            name: "Nakamichi",
            type: "jpeg",
         }, {
            id: 305,
            src: exhi35,
            name: "Nakamichi",
            type: "jpeg",
         },
          {
            id: 306,
            src: exhi36,
            name: "Nakamichi",
            type: "jpeg",
         },
          {
            id: 307,
            src: exhi37,
            name: "Nakamichi",
            type: "jpeg",
         },
         {
            id: 308,
            src: exhi38,
            name: "Nakamichi",
            type: "mp4",
         },
          {
            id: 309,
            src: exhi39,
            name: "Review",
            type: "mp4",
         }
         
      ],
   },
   {
      id: 1,
      src: exhi0,
      name: "DESON",
      username: "@uae",
      context: [
         {
            id: 101,
            src: exhi0,
            name: "DESON Image 1",
            type: "jpeg",
         },
          {
            id: 1701,
            src: exhi17,
            name: "Deson Project",
            type: "jpeg",
         },
         {
            id: 1702,
            src: exhi16,
            name: "Deson Project",
            type: "jpeg",
         },
         {
            id: 1704,
            src: exhi18,
            name: "Deson Project",
            type: "jpeg",
         },
         {
            id: 1703,
            src: exhi19,
            name: "Deson Project",
            type: "jpeg",
         }
         
      ],
   },
   {
      id: 2,
      src: exhi1,
      name: "SPACE TOP CO LTD",
      username: "@uae",
      context: [],
   },
   {
      id: 3,
      text: "Our team's productivity has skyrocketed since we started using this tool. ",
      src: exhi2,
      name: "KJO",
      username: "@uae",
      context: [
         {
            id: 300,
            src: exhi3,
            name: "KJO ",
            type: "jpeg",
         },
         {
            id: 301,
            src: exhi4,
            name: "KJO ",
            type: "jpeg",
         },
         {
            id: 302,
            src: exhi2,
            name: "KJO ",
            type: "png",
         }
         
      ],
   },
  
   {
      id: 6,
      text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      src: exhi5,
      name: "TAIBA INVESTMENTS",
      username: "@uae",
      context: [
         {
            id: 601,
            src: exhi5,
            name: "TAIBA INVESTMENTS",
            type: "jpeg",
         },
      ],
   },
   {
      id: 7,
      text: "The customizability and integration capabilities of this app are top-notch.",
      src: exhi6,
      name: "PERF",
      username: "@uae",
      context: [
         {
            id: 701,
            src: exhi6,
            name: "PERF",
            type: "png",
         },
      ],
   },
   {
      id: 8,
      text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
      src: exhi7,
      name: "SAUDI SOFT",
      username: "@saudi",
      context: [
         {
            id: 801,
            src: exhi7,
            name: "Team Collaboration",
            type: "jpeg",
         },
         {
            id: 1201,
            src: exhi11,
            name: "Saudi Soft Project",
            type: "jpeg",
         },
      ],
   },
   {
      id: 9,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi8,
      name: "YOKOGAWA",
      username: "@uae",
      context: [
         // {
         //    id: 901,
         //    src: exhi11,
         //    name: "Task Management",
         //    type: "mp4",
         // },
      ],
   },
   {
      id: 10,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi9,
      name: "HYPE",
      username: "@uae",
      context: [
         // {
         //    id: 1001,
         //    src: exhi12,
         //    name: "Hype Project",
         //    type: "jpeg",
         // },
      ],
   },
   {
      id: 11,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi10,
      name: "RAHEB GROUP",
      username: "@uae",
      context: [
         // {
         //    id: 1101,
         //    src: exhi13,
         //    name: "Raheb Group Project",
         //    type: "png",
         // },
      ],
   },
   
   {
      id: 13,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi12,
      name: "MANDIANT GOOGLE CLOUD",
      username: "@uae",
      context: [
         // {
         //    id: 1301,
         //    src: exhi12,
         //    name: "Mandiant Google Cloud Project",
         //    type: "mp4",
         // },
      ],
   },
   {
      id: 14,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi13,
      name: "QUALYS",
      username: "@uae",
      context: [
         // {
         //    id: 1401,
         //    src: exhi13,
         //    name: "Qualys Project",
         //    type: "png",
         // },
      ],
   },
   {
      id: 15,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi14,
      name: "VIKING",
      username: "@uae",
      context: [
         // {
         //    id: 1501,
         //    src: exhi4,
         //    name: "Viking Project",
         //    type: "jpeg",
         // },
      ],
   },
   {
      id: 16,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi15,
      name: "BULWARK",
      username: "@uae",
      context: [
         // {
         //    id: 1601,
         //    src: exhi1,
         //    name: "Bulwark Project",
         //    type: "mp4",
         // },
      ],
   },
  
];

export const logoMarqueeItems = [
   {
      id: 1,
      src: logopg1
   },
   {
      id: 2,
      src: logopg2
   },
   {
      id: 3,
      src: logopg3
   },
   {
      id: 4,
      src: logopg4
   },
   {
      id: 5,
      src: logopg5
   },
   {
      id: 6,
      src: logopg6
   },
   {
      id: 7,
      src: logopg7
   },
   {
      id: 8,
      src: logopg8
   }
];

export const footerItems = [
   {
      id: 1,
      title: 'Home',
      href: '/home'
   },
   {
      id: 2,
      title: 'Portfolio',
      href: '/features'
   },
   {
      id: 3,
      title: 'Services',
      href: '/services'
   },
   // {
   //    id: 4,
   //    title: 'Customers',
   //    href: '/customers'
   // },
   // {
   //    id: 5,
   //    title: 'Reviews',
   //    href: '/reviews'
   // },
   {
      id: 6,
      title: 'View Profile',
      href: '/profile'
   },
];

export const footerSocialsItems = [
   {
      id: 1,
      src: instagram,
      name: "Instagram",
      href: "https://www.instagram.com/veloura_exhibition/"
   },
   {
      id: 2,
      src: linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/veloura-exhibition-956149382"
   },
   // {
   //    id: 3,
   //    src: pin,
   //    href: "/"
   // },
   // {
   //    id: 4,
   //    src: x,
   //    href: "/"
   // },
    {
      id: 4,
      src: wechat,
      name: "WeChat",
      href: "#",
      isWeChat: true,
      qrCode: wechatQr
   },
   {
      id: 5,
      src: youtube,
      name: "YouTube",
      href: "/"
   },
   {
      id: 6,
      src: whatsapp,
      name: "WhatsApp",
      href: "https://wa.me/971588860730", // Replace with your WhatsApp number
      isWhatsApp: true
   }
  
];

export const pricingItems = [
   {
      id: 1,
      title: 'Free',
      price: 0,
      btn: "Get for free",
      features: [
         {
            id: 1,
            feature: "Up to 5 project members",
         },
         {
            id: 2,
            feature: "Unlimited tasks and projects",
         },
         {
            id: 3,
            feature: "2GB storage",
         },
         {
            id: 4,
            feature: "Integrations",
         },
         {
            id: 5,
            feature: "Basic support",
         },
      ]
   },
   {
      id: 2,
      title: 'Pro',
      price: 9,
      btn: "Sign up now",
      features: [
         {
            id: 1,
            feature: "Up to 50 project members",
         },
         {
            id: 2,
            feature: "Unlimited tasks and projects",
         },
         {
            id: 3,
            feature: "50GB storage",
         },
         {
            id: 4,
            feature: "Integrations",
         },
         {
            id: 5,
            feature: "Priority support",
         },
         {
            id: 6,
            feature: "Advanced support",
         },
         {
            id: 7,
            feature: "Export support",
         },
      ]
   },
   {
      id: 3,
      title: 'Business',
      price: 19,
      btn: "Sign up now",
      features: [
         {
            id: 1,
            feature: "Up to 5 project members",
         },
         {
            id: 2,
            feature: "Unlimited tasks and projects",
         },
         {
            id: 3,
            feature: "200GB storage",
         },
         {
            id: 4,
            feature: "Integrations",
         },
         {
            id: 5,
            feature: "Dedicated account manager",
         },
         {
            id: 6,
            feature: "Custom fields",
         },
         {
            id: 7,
            feature: "Advanced analytics",
         },
         {
            id: 8,
            feature: "Export capabilities",
         },
         {
            id: 9,
            feature: "API access",
         },
         {
            id: 10,
            feature: "Advanced security features",
         },
      ]
   },
];