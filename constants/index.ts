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
  logopg8
} from "@/public";
import wechatQr from "@/public/wechat-qr.png";
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
      text: "By serving a wide variety of industries, our exhibition team has gained extensive knowledge and experience in achieving our clients’ objectives.. ",
      src: exhi0,
      name: "Custom Exhibition Solutions",
     // username: "@uae",
      
   },
   {
      id: 2,
      text: "We excel in creating and delivering impactful events for our valued clients, offering tailored solutions that cover everything from pre-event planning to post-event wrap-up.. ",
      src: exhi1,
      name: "Beyond Events",
     // username: "@uae",
      
   },
   {
      id: 3,
      text: "Our professional team delivers exceptional, customized solutions for all your interior design projects. ",
      src: exhi2,
      name: "Interior Concepts & Execution",
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
      name: "FIDELA",
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
      id: 20,
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
      name: "FIDELA",
      username: "@uae",
      context: [
         {
            id: 300,
            src: exhi30,
            name: "FIDELA",
            type: "jpeg",
         },
          {
            id: 301,
            src: exhi31,
            name: "FIDELA",
            type: "jpeg",
         },
          {
            id: 302,
            src: exhi32,
            name: "FIDELA",
            type: "jpeg",
         },
          {
            id: 303,
            src: exhi33,
            name: "FIDELA",
            type: "jpeg",
         },
          {
            id: 304,
            src: exhi34,
            name: "FIDELA",
            type: "jpg",
         }, {
            id: 305,
            src: exhi35,
            name: "FIDELA",
            type: "jpg",
         },
          {
            id: 306,
            src: exhi36,
            name: "FIDELA",
            type: "jpeg",
         },
          {
            id: 307,
            src: exhi37,
            name: "FIDELA",
            type: "jpeg",
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
            src: exhi2,
            name: "Deson Project",
            type: "png",
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
            src: exhi5,
            name: "KJO ",
            type: "png",
         },
         {
            id: 401,
            src: exhi6,
            name: "KJO ",
            type: "jpeg",
         },
         {
            id: 402,
            src: exhi3,
            name: "KJO ",
            type: "jpeg",
         },
          {
            id: 501,
            src: exhi7,
            name: "Integration Demo",
            type: "mp4",
         },
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
         {
            id: 901,
            src: exhi11,
            name: "Task Management",
            type: "mp4",
         },
      ],
   },
   {
      id: 10,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi9,
      name: "HYPE",
      username: "@uae",
      context: [
         {
            id: 1001,
            src: exhi12,
            name: "Hype Project",
            type: "jpeg",
         },
      ],
   },
   {
      id: 11,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi10,
      name: "RAHEB GROUP",
      username: "@uae",
      context: [
         {
            id: 1101,
            src: exhi13,
            name: "Raheb Group Project",
            type: "png",
         },
      ],
   },
   
   {
      id: 13,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi12,
      name: "MANDIANT GOOGLE CLOUD",
      username: "@uae",
      context: [
         {
            id: 1301,
            src: exhi12,
            name: "Mandiant Google Cloud Project",
            type: "mp4",
         },
      ],
   },
   {
      id: 14,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi13,
      name: "QUALYS",
      username: "@uae",
      context: [
         {
            id: 1401,
            src: exhi13,
            name: "Qualys Project",
            type: "png",
         },
      ],
   },
   {
      id: 15,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi14,
      name: "VIKING",
      username: "@uae",
      context: [
         {
            id: 1501,
            src: exhi4,
            name: "Viking Project",
            type: "jpeg",
         },
      ],
   },
   {
      id: 16,
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      src: exhi15,
      name: "BULWARK",
      username: "@uae",
      context: [
         {
            id: 1601,
            src: exhi1,
            name: "Bulwark Project",
            type: "mp4",
         },
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
   {
      id: 4,
      title: 'Customers',
      href: '/customers'
   },
   {
      id: 5,
      title: 'Reviews',
      href: '/reviews'
   },
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
      href: "https://wa.me/9846010886", // Replace with your WhatsApp number
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