import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { product1, product2, product3, product4 , customer1, customer2, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#discount", label: "Discount" },

];

export const isActiveStyles =
"border border-dark bg-dark text-white text-xl font-semibold font-montserrat rounded-full px-4 py-2 ease-in-out transform transition duration-700 ";

export const isNotActiveStyles =
"border border-dark text-dark text-xl font-semibold font-montserrat rounded-full px-4 py-2 hover:bg-dark hover:text-white ease-in-out transform transition duration-700";

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        id:"1",
        imgURL: product1,
        name: "Nike shoe",
        price: "$150.20",
        type: ["Men", "All", "Fashion","Shoes", "Popular"],
    },
    {
        id:"2",
        imgURL: product2,
        name: "Nike Vintage",
        price: "$70.00",
        type: ["Men", "All", "Popular"],
    }, 
    {
        id:"3",
        imgURL: product3,
        name: "Simple white hoodie",
        price: "$50.00",
        type: ["Men", "All", "Popular"],
    },
    {
        id:"4",
        imgURL: product4,
        name: "Adidas BackPack",
        price: "$30.20",
        type: ["Women", "All", "Fashion", "Popular"],
    },
    {
        id:"5",
        imgURL: p1,
        name: "The North Face Puffer",
        price: "$130.99",
        type: ["Men", "All", "Fashion","Winter"],
    },
    {
        id:"6",
        imgURL: p2,
        name: "Nike White",
        price: "$77.25",
        type: ["Men", "All","Shoes"],
    },
    {
        id:"7",
        imgURL: p3,
        name: "Nike Zoom",
        price: "$89.99",
        type: ["Men", "All","Shoes"],
    },
    {
        id:"8",
        imgURL: p4,
        name: "Nike W19",
        price: "$85.70",
        type: ["Men", "All","Shoes"],
    },
    {
        id:"9",
        imgURL: p5,
        name: "Nike Simple",
        price: "$66.00",
        type: ["Men", "All","Shoes"],
    },
    {
        id:"10",
        imgURL: p6,
        name: "Nike Air Force",
        price: "$70.00",
        type: ["Men", "All","Shoes"],
    },
    {
        id:"11",
        imgURL: p7,
        name: "Lacoste Bull",
        price: "$52.40",
        type: ["Men", "All","Shoes"],
    },
    {
        id:"12",
        imgURL: p8,
        name: "Lacoste White",
        price: "$52.40",
        type: ["Men", "All","Shoes"],
    },
    {
        id:"13",
        imgURL: p9,
        name: "Lacoste Hawk",
        price: "$54.90",
        type: ["Men", "All","Shoes","Fashion"],
    },
    {
        id:"14",
        imgURL: p10,
        name: "Adidas Sport",
        price: "$65.00",
        type: ["Men", "All","Shoes"],
    },
    {
        id:"15",
        imgURL: p11,
        name: "Adidas Star",
        price: "$62.80",
        type: ["Men", "All","Shoes"],
    },
    {
        id:"16",
        imgURL: p12,
        name: "Adidas Smith",
        price: "$60.00",
        type: ["Men", "All","Shoes"],
    },
    {
        id:"17",
        imgURL: p13,
        name: "Nike Puffer",
        price: "$110.00",
        type: ["Men", "All", "Winter","Fashion"],
    },
    {
        id:"18",
        imgURL: p14,
        name: "Nike Shield",
        price: "$99.99",
        type: ["Men", "All", "Winter"],
    },
    {
        id:"19",
        imgURL: p15,
        name: "Adidas Jacket",
        price: "$50.60",
        type: ["Men", "All", "Winter","Fashion"],
    },
    {
        id:"20",
        imgURL: p16,
        name: "Nike Tiger",
        price: "$50.60",
        type: ["Men", "All", "Winter","Fashion"],
    },
    {
        id:"21",
        imgURL: p17,
        name: "Nike Survette",
        price: "$70.00",
        type: ["Men", "All"],
    },
    {
        id:"22",
        imgURL: p18,
        name: "Pink Jacket",
        price: "$33.80",
        type: ["Women", "All", "Winter"],
    },
    {
        id:"23",
        imgURL: p19,
        name: "White Puffer Women",
        price: "$55.20",
        type: ["Women", "All", "Winter"],
    },
    {
        id:"24",
        imgURL: p20,
        name: "Fashion Puffer",
        price: "$59.60",
        type: ["Women", "All", "Fashion", "Winter"],
    },
    {
        id:"25",
        imgURL: p21,
        name: "Wine Hoodie",
        price: "$40.00",
        type: ["Women", "All"],
    },
    {
        id:"26",
        imgURL: p22,
        name: "Heeled Sandal Black",
        price: "$85.00",
        type: ["Women", "All", "Fashion"],
    },
    {
        id:"27",
        imgURL: p23,
        name: "Heeled Sandal Transparent ",
        price: "$84.99",
        type: ["Women", "All", "Fashion"],
    },
    {
        id:"28",
        imgURL: p24,
        name: "Heeled Sandal Pointer",
        price: "$45.55",
        type: ["Women", "All"],
    },
    {
        id:"29",
        imgURL: p25,
        name: "Heeled Sandal Royal",
        price: "$50.30",
        type: ["Women", "All", "Fashion"],
    },
    {
        id:"30",
        imgURL: p26,
        name: "Special Dress",
        price: "$249.99",
        type: ["Women", "All", "Fashion"],
    },
    {
        id:"31",
        imgURL: p27,
        name: "Black Dress",
        price: "$230.00",
        type: ["Women", "All", "Fashion"],
    },
    {
        id:"32",
        imgURL: p28,
        name: "Royal Dress",
        price: "$300.20",
        type: ["Women", "All", "Fashion"],
    },
    
];

export const items = [

]

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Men Shoes", link: "/" },
            { name: "Women Shoes", link: "/" },
            { name: "Sweater", link: "/" },
            { name: "Hoodie", link: "/" },
            { name: "Cap", link: "/" },
            { name: "BackPack", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@paradise.com", link: "mailto:customer@paradise.com" },
            { name: "+212612345678", link: "tel:+212612345678" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
