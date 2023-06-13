import Instagram from "../assets/icons/instagram.svg";
import InstagramPrimary from "../assets/icons/instagram-primary.svg";
import Twitter from "../assets/icons/twitter.svg";
import TwitterPrimary from "../assets/icons/twitter-primary.svg";
import Youtube from "../assets/icons/youtube.svg";
import YoutubePrimary from "../assets/icons/youtube-primary.svg";
import Facebook from "../assets/icons/facebook.svg";
import FacebookPrimary from "../assets/icons/facebook-primary.svg";
import Pinterest from "../assets/icons/pinterest.svg";
import PinterestPrimary from "../assets/icons/pinterest-primary.svg";

export const navbarData = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: undefined,
    name: "Rooms & Suites",
    subData: [
      {
        path: "/rooms",
        name: "Rooms",
      },
      {
        path: "/detail",
        name: "Room Detail",
      },
    ],
  },
  {
    path: "/restaurant",
    name: "Restaurant",
  },
  {
    path: "/spa",
    name: "Spa",
  },
  {
    path: undefined,
    name: "Pages",
    subData: [
      {
        path: "/services",
        name: "Services",
      },
      {
        path: "/facilities",
        name: "Facilities",
      },
      {
        path: "/team",
        name: "Team",
      },
      {
        path: "/pricing",
        name: "Pricing",
      },
      {
        path: "/careers",
        name: "Careers",
      },
      {
        path: "/faqs",
        name: "F.A.Qs",
      },
      {
        path: "/coming-soon",
        name: "Coming Soon",
      },
    ],
  },
  {
    path: "/news",
    name: "News",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export const exploreData = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/rooms",
    name: "Rooms & Suites",
  },
  {
    path: "/restaurant",
    name: "Restaurant",
  },
  {
    path: "/spa",
    name: "Spa & Wellness",
  },
  {
    path: "/about",
    name: "About Hotel",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export const socialIconData = [
  {
    normal: Instagram,
    primary: InstagramPrimary,
  },
  {
    normal: Twitter,
    primary: TwitterPrimary,
  },
  {
    normal: Youtube,
    primary: YoutubePrimary,
  },
  {
    normal: Facebook,
    primary: FacebookPrimary,
  },
  {
    normal: Pinterest,
    primary: PinterestPrimary,
  },
];

export const pricingCardData = [
  {
    image:
      "https://duruthemes.com/demo/html/cappa/demo2-dark/img/pricing/1.jpg",
    title: "Room Cleaning",
    price: "$50",
    per: "monthly",
  },
  {
    image:
      "https://duruthemes.com/demo/html/cappa/demo2-dark/img/pricing/2.jpg",
    title: "Drinks Included",
    price: "$30",
    per: "daily",
  },
  {
    image:
      "https://duruthemes.com/demo/html/cappa/demo2-dark/img/pricing/3.jpg",
    title: "Room Breakfast",
    price: "$30",
    per: "daily",
  },
  {
    image:
      "https://duruthemes.com/demo/html/cappa/demo2-dark/img/pricing/4.jpg",
    title: "Safe & Secure",
    price: "$15",
    per: "daily",
  },
];

export const clientReviewCarouselData = [
  {
    name: "Emily Brown",
    image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/4.jpg",
  },
  {
    name: "Norlan White",
    image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/1.jpg",
  },
  {
    name: "Olivia Martin",
    image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/5.jpg",
  },
];

export const servicesData = [
  {
    category: "DISCOVER",
    title: "The Restaurant",
    image:
      "https://duruthemes.com/demo/html/cappa/demo2-dark/img/restaurant/1.jpg",
    description:
      "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
  },
  {
    category: "EXPERIENCES",
    title: "Spa Center",
    image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/spa/3.jpg",
    description:
      "Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
  },
  {
    category: "MODERN",
    title: "Fitness Center",
    image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/spa/2.jpg",
    description:
      "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
  },
  {
    category: "EXPERIENCES",
    title: "The Health Club & Pool",
    image: "https://duruthemes.com/demo/html/cappa/demo2-dark/img/spa/1.jpg",
    description:
      "The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
  },
];

export const hoursData = [
  { text: "Breakfast: 7.00 am – 11.00 am (daily)" },
  { text: "Lunch: 12.00 noon – 2.00 pm (daily)" },
  { text: "Dinner: open from 6.30 pm, last order at 10.00 pm (daily)" },
];

export const checkinData = [
  { text: "Check-in from 9:00 AM - anytime" },
  { text: "Early check-in subject to availability" },
];
export const amenitiesData = [
  {
    icon: "flaticon-group",
    text: "1-2 Persons",
  },
  {
    icon: "flaticon-wifi",
    text: "Free Wifi",
  },
  {
    icon: "flaticon-clock-1",
    text: "200 sqft room",
  },
  {
    icon: "flaticon-breakfast",
    text: "Breakfast",
  },
  {
    icon: "flaticon-towel",
    text: "Towels",
  },
  {
    icon: "flaticon-swimming",
    text: "Swimming Pool",
  },
];

export const menuItemData = [
  {
    title: "Starters",
    data: [
      {
        name: "Mozzarella Dippers",
        price: "27",
        description: "Fried mozzarella sticks, marinara sauce",
      },
      {
        name: "Buffalo Wings",
        price: "37",
        description: "Spicy chicken wings, blue cheese sauce, carrot, celery",
      },
      {
        name: "Onion Rings",
        price: "32",
        description: "Fried onion rings, smoked aioli",
      },
      {
        name: "Chilli Con Carne",
        price: "32",
        description: "Spicy ground beef, bacon, kidney beans",
      },
      {
        name: "Fried Jalapeno",
        price: "52",
        description: "Fried jalapeno pickles, cheddar sauce",
      },
      {
        name: "Potato Skins",
        price: "42",
        description: "Crispy potato skins; bacon & cheddar or vegetables",
      },
    ],
  },
  {
    title: "Mains",
    data: [
      {
        name: "Rusty’s Burger",
        price: "27",
        description:
          "Smoked pulled beef ribs, bbq sauce, cheddar, crispy onion",
      },
      {
        name: "Crab Cake",
        price: "37",
        description: "Breaded crab cakes, tartar sauce, apple and fennel salad",
      },
      {
        name: "Cajun Fish Steak",
        price: "32",
        description:
          "Cajun spicied seabass, deep fried baby potatoes, side salad",
      },
      {
        name: "Baby Back Ribs",
        price: "32",
        description: "Bbq glazed baby pork ribs, coleslaw, fries",
      },
      {
        name: "Southern Fried Chicken",
        price: "52",
        description: "Cajun coated chicken breast, fries and honey mustard",
      },
      {
        name: "Smokehouse Combo",
        price: "42",
        description:
          "Smoked beef brisket, rib and sausage, coleslaw, cornbread",
      },
    ],
  },
  {
    title: "Salads",
    data: [
      {
        name: "Ceaser Salad",
        price: "47",
        description: "Romaine lettuce, croutons, parmigiano, Ceaser dressing.",
      },
      {
        name: "Grilled Salmon Salad",
        price: "37",
        description: "Grilled salmon, mixed greens, capers, orange slices",
      },
      {
        name: "Waldorf Salad",
        price: "52",
        description: "Lettuce, celery, apple, grape, walnut, waldorf sauce",
      },
      {
        name: "Chicken Cobb Salad",
        price: "32",
        description:
          "Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon",
      },
      {
        name: "Quinoa & Avocado Salad",
        price: "52",
        description:
          "Quinoa, avocado, mixed greens. Nuts, dried and fresh fruits",
      },
      {
        name: "Salad Chicken",
        price: "42",
        description: "Ceaser dressing. Optional grilled chicken breast",
      },
    ],
  },
  {
    title: "Wine",
    data: [
      {
        name: "Château d'Yquem 2011",
        price: "400",
        description: "Dessert Wine, Bordeaux, Graves, Sauternes",
      },
      {
        name: "La Grande Année 2007",
        price: "400",
        description: "Rosé, Champagne",
      },
      {
        name: "Alvear Cream NV",
        price: "30",
        description: "Dessert, Fortified Wine, Andalucia",
      },
      {
        name: "Sine Qua Non 2012",
        price: "520",
        description: "Syrah, Shiraz & Blends, California",
      },
      {
        name: "Chateau D'yquem 1990",
        price: "900",
        description: "Dessert Wine, Bordeaux, Graves, Sauternes",
      },
      {
        name: "W.S. Keyes Winery 2006",
        price: "240",
        description: "Merlot, California, Napa, Howell Mountain",
      },
    ],
  },
  {
    title: "Breakfast",
    data: [
      {
        name: "Egg Benedict",
        price: "60",
        description: "English muffin, beef, hollandaise sauce, poached egg.",
      },
      {
        name: "Salmon Bagel",
        price: "30",
        description: "Smoked salmon, cream cheese, dill, rocket, red onion.",
      },
      {
        name: "Texas Benedict",
        price: "30",
        description: "English muffin, short ribs, bbq sauce, poached egg.",
      },
      {
        name: "Breakfast Bagel",
        price: "33",
        description: "Chocolate, marshmallow, biscuit bar",
      },
      {
        name: "Rusty’s Omlette",
        price: "22",
        description: "Mozzarella, cheddar, caramelized onion, black beans.",
      },
      {
        name: "Rusty’s Pancake",
        price: "40",
        description: "Strawberry, white chocolate, dark chocolate, crispearls",
      },
    ],
  },
  {
    title: "Dessert",
    data: [
      {
        name: "Bourbon Pecan Pie",
        price: "67",
        description: "Bourbon pecan stuffed pie, vanilla ice-cream",
      },
      {
        name: "S’mores",
        price: "40",
        description: "Chocolate chip cookies, marshmallow, chocolate",
      },
      {
        name: "New York Cheesecake",
        price: "50",
        description: "Cheesecake, strawberry & lime salad",
      },
      {
        name: "Rocky Road",
        price: "42",
        description: "Chocolate, marshmallow, biscuit bar",
      },
      {
        name: "Rusty’s ice-cream",
        price: "32",
        description: "Vanilla, bourbon, cookie, chocolate ice-cream",
      },
      {
        name: "Apple & Pear Crumble",
        price: "42",
        description:
          "Caramelized pear and apple, oat crumble, vanilla ice-cream",
      },
    ],
  },
];

export const accordionData = [
  {
    id: 1,
    title: "Arriving at The Spa",
    description:
      "Please arrive at The Spa 15 minutes prior to your scheduled treatment and enjoy the calm and serenity of The Spa atmosphere. Arriving late makes it necessary to curtail the time for your treatment.",
    isOpen: false,
    height: "sm:h-[80px] h-[140px]",
  },
  {
    id: 2,
    title: "Mobile Phones",
    description:
      "Kindly refrain from using your mobile phone in The Spa premises. Please keep your mobile phone on silent mode at all times.",
    isOpen: false,
    height: "sm:h-[60px] h-[120px]",
  },
  {
    id: 3,
    title: "Valuables",
    description:
      "We provide a secure place for your personal items inside The Spa complex. However, we do not accept liability for loss or damage. We recommend valuable items are stored inside the safe located in your hotel room/suite.",
    isOpen: false,
    height: "sm:h-[80px] h-[160px]",
  },
  {
    id: 4,
    title: "Health Matters",
    description:
      "Please communicate health conditions such as high blood pressure and allergies, as well as pregnancy or any healtsm:h-relate h-[]d concerns you may have when making your appointment. We do not recommend the consumption of alcohol before or directly after spa treatments or before using any facilities in the Spa and Health Club.",
    isOpen: false,
    height: "sm:h-[100px h-[240px]",
  },
  {
    id: 5,
    title: "Children",
    description:
      "The minimum age for entry to The Spa, The Health Club and the hydrothermal facilities is 16 years of age. Children under the age of 16 may use the hotel pool if they are accompanied by a parent/adult.",
    isOpen: false,
    height: "sm:h-[80px] h-[140px]",
  },
  {
    id: 6,
    title: "Safety",
    description:
      "The max depth of the pool is 1.60 m. There is no lifeguard at the pool. Children may only use the pool if accompanied by an adult or parent/guardian.",
    isOpen: false,
    height: "sm:h-[60px] h-[120px]",
  },
  {
    id: 7,
    title: "Smoking",
    description:
      "Kindly note that you are not allowed to smoke in The Spa, The Health Club or sauna area.",
    isOpen: false,
    height: "sm:h-[60px] h-[100px]",
  },
];

export const faqData = [
  {
    id: 1,
    title: "How can I confirm that you have received my reservation?",
    description:
      "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    isOpen: false,
    height: "sm:h-[80px] h-[140px]",
  },
  {
    id: 2,
    title: "Up to what age are they considered children?",
    description:
      "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    isOpen: false,
    height: "sm:h-[80px] h-[140px]",
  },
  {
    id: 3,
    title: "Do you have any discount code?",
    description:
      "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    isOpen: false,
    height: "sm:h-[80px] h-[140px]",
  },
  {
    id: 4,
    title: "How can I get in touch with my hotel?",
    description:
      "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    isOpen: false,
    height: "sm:h-[80px] h-[140px]",
  },
  {
    id: 5,
    title: "On the last day, can I leave the room later?",
    description:
      "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    isOpen: false,
    height: "sm:h-[80px] h-[140px]",
  },
  {
    id: 6,
    title: "Can I cancel my reservation?",
    description:
      "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    isOpen: false,
    height: "sm:h-[80px] h-[140px]",
  },
  {
    id: 7,
    title: "Do you have hotels with a spa?",
    description:
      "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    isOpen: false,
    height: "sm:h-[80px] h-[140px]",
  },
];
