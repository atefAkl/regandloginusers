const market = [
    {id: 1, name: 'Computers', submenues: [{id: 2, name: 'Laptops'},{id: 3, name: 'Desktops'},{id: 4, name: 'Servers'},{id: 5, name: 'Tablets'},{id: 6, name: 'Printers'},{id: 7, name: 'Scanners'},{id: 8, name: 'Storage devices'},{id: 9, name: 'Software'},]},
    {id: 10, name: 'Smart Phones', submenues: [{id: 12, name: 'Android'},{id: 13, name: 'iPhones'},{id: 14, name: 'Windows'}]},
    {id: 20,name: 'Instruments',submenues: [{id: 21, name: 'Flutes'},{id: 22, name: 'Clarinet'},{id: 23, name: 'Saxophone'},{id: 24, name: 'Violin'},{id: 25, name: 'Trumpet'},{id: 26, name: 'Cello'},{id: 27, name: 'Accordion'},{id: 28, name: 'mandolin'},]},
    {id: 30,name: 'Electric Devices',submenues: [{id: 31, name:'Appliances'},{id: 32, name:'Electronics'},{id: 33, name:'Tools'},{id: 34, name:'Toys'},{id: 35, name:'Games'},{id: 36, name:'Lighting'},{id: 37, name:'Home security'},{id: 38, name:'Healthcare'},{id: 39, name:'Automotive'},]},
    {id: 40,name: 'Smart Devices',submenues: [{id: 41, name: 'TVs'},{id: 42, name: 'speakers'},{id: 43, name: 'thermostats'},{id: 44, name: 'doorbells'},{id: 45, name: 'lights'},{id: 46, name: 'locks'},{id: 47, name: 'plugs'},{id: 48, name: 'assistants'},]}
]

const allProducts = [
    {
        id: 2,
        category: 'Laptops',
        market: 'Computers',
        currency: 'SAR',
        products: [
        {
            id: 211,
            name: "Apple MacBook Pro",
            description: "The latest MacBook Pro is the most powerful and versatile MacBook yet. It features a new M1 Pro or M1 Max chip that delivers up to 80% faster CPU performance and up to 32 times faster graphics performance than the previous generation. It also has a new Liquid Retina XDR display with up to 1600 nits of brightness and a 120Hz refresh rate.",
            specs: {
                "processor": "M1 Pro or M1 Max",
                "memory": "up to 64GB",
                "storage": "up to 8TB",
                "operating system": "macOS Monterey",
                "screen size": "14-inch or 16-inch",
                "screen resolution": "3024 x 1964 or 3456 x 2234",
                "weight": "3.5 pounds or 4.7 pounds",
                "battery life": "up to 21 hours or 20 hours",
                "price": "$1,999 or $2,499"
            },
            image: "https://m.media-amazon.com/images/I/61RHsomZZTS._AC_SX679_.jpg",
            price: 3649.90,

        },
        {
            id: 212,
            name: "Dell Menta 13",
            description: "The Dell Menta 13 is a sleek and powerful ultrabook that is perfect for students, professionals, and anyone who needs a portable computer. It features a 13.4-inch InfinityEdge display with a 16:10 aspect ratio, a 12th Gen Intel Core processor, up to 64GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 64GB",
                "storage": "up to 2TB",
                "operating system": "Windows 11",
                "screen size": "13.4 inches",
                "screen resolution": "3840 x 2400",
                "weight": "2.6 pounds",
                "battery life": "up to 12 hours",
                "price": "$999 or $1,299"
            },
            image: "https://m.media-amazon.com/images/I/51fLmA46liL._AC_SX679_.jpg",
            price: 4749.90,
        },
        {
            id: 213,
            name: "HP Spectre x360 14",
            description: "The HP Spectre x360 14 is a convertible laptop that can be used as a tablet, laptop, or stand-alone tablet. It features a 14-inch AMOLED display with a 16:10 aspect ratio, a 12th Gen Intel Core processor, up to 64GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 64GB",
                "storage": "up to 2TB",
                "operating system": "Windows 11",
                "screen size": "14 inches",
                "screen resolution": "3840 x 2160",
                "weight": "2.7 pounds",
                "battery life": "up to 16 hours",
                "price": "$1,299 or $1,599"
            },
            image: "https://m.media-amazon.com/images/I/71r3nsF2SmL._AC_SX679_.jpg",
            price: 2999.90,
        },
        {
            id:214,
            name: "Lenovo Truck End Pro",
            description: "The latest Lenovo Truck End Pro Pro is the most powerful and versatile MacBook yet. It features a new M1 Pro or M1 Max chip that delivers up to 80% faster CPU performance and up to 32 times faster graphics performance than the previous generation. It also has a new Liquid Retina XDR display with up to 1600 nits of brightness and a 120Hz refresh rate.",
            specs: {
                "processor": "M1 Pro or M1 Max",
                "memory": "up to 64GB",
                "storage": "up to 8TB",
                "operating system": "macOS Monterey",
                "screen size": "14-inch or 16-inch",
                "screen resolution": "3024 x 1964 or 3456 x 2234",
                "weight": "3.5 pounds or 4.7 pounds",
                "battery life": "up to 21 hours or 20 hours",
                "price": "$1,999 or $2,499"
            },
            image: "https://m.media-amazon.com/images/I/618VNbd2N6L._AC_SX679_.jpg",
            price: 6349.90,
        },
        {
            id: 215,
            name: "Accer XPS 1320",
            description: "The Accer XPS 1320 is a sleek and powerful ultrabook that is perfect for students, professionals, and anyone who needs a portable computer. It features a 13.4-inch InfinityEdge display with a 16:10 aspect ratio, a 12th Gen Intel Core processor, up to 64GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 64GB",
                "storage": "up to 2TB",
                "operating system": "Windows 11",
                "screen size": "13.4 inches",
                "screen resolution": "3840 x 2400",
                "weight": "2.6 pounds",
                "battery life": "up to 12 hours",
                "price": "$999 or $1,299"
            },
            image: "https://m.media-amazon.com/images/I/61Iu3NF1EHL._AC_SX679_.jpg",
            price: 5249.90,
        },
        {
            id: 216,
            name: "Dell Inspiron x360 17",
            description: "The Dell Inspiron x360 17 is a convertible laptop that can be used as a tablet, laptop, or stand-alone tablet. It features a 14-inch AMOLED display with a 16:10 aspect ratio, a 12th Gen Intel Core processor, up to 64GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 64GB",
                "storage": "up to 2TB",
                "operating system": "Windows 11",
                "screen size": "14 inches",
                "screen resolution": "3840 x 2160",
                "weight": "2.7 pounds",
                "battery life": "up to 16 hours",
                "price": "$1,299 or $1,599"
            },
            image: "https://m.media-amazon.com/images/I/81bkItk-wSL._AC_SX679_.jpg",
            price: 3199.90,
        }
    ]},
    {
        id: 3,
        products: [
        {
            id: 311,
            name: "Apple iMac 24",
            description: "The Apple iMac 24 is a sleek and powerful all-in-one desktop computer that is perfect for students, professionals, and anyone who needs a stylish and easy-to-use computer. It features a 24-inch Retina display with a 4.5K resolution, a M1 chip, up to 16GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "M1",
                "memory": "up to 16GB",
                "storage": "up to 2TB",
                "operating system": "macOS Monterey",
                "screen size": "24 inches",
                "screen resolution": "4.5K (4480 x 2520)",
                "weight": "5.9 pounds",
                "battery life": "n/a",
                "price": "$1,299 or $1,499"
            },
            image: "https://m.media-amazon.com/images/I/61p-ADlugUS.__AC_SY445_SX342_QL70_ML2_.jpg",
            price: 1899.90,
        },
        {
            id: 312,
            name: "Dell XPS 8940",
            description: "The Dell XPS 8940 is a powerful and stylish desktop computer that is perfect for gamers, creative professionals, and anyone who needs a high-performance computer. It features a 12th Gen Intel Core processor, up to 64GB of RAM, and up to 4TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 64GB",
                "storage": "up to 4TB",
                "operating system": "Windows 11",
                "screen size": "n/a",
                "screen resolution": "n/a",
                "weight": "22 pounds",
                "battery life": "n/a",
                "price": "$1,299 or $1,599"
            },
            image: "https://m.media-amazon.com/images/I/81rt17lGrmL._AC_SX679_.jpg",
            price: 1659.90,
        },
        {
            id: 313,
            name: "HP Envy 24",
            description: "The HP Envy 24 is a stylish and powerful all-in-one desktop computer that is perfect for students, professionals, and anyone who needs a computer that can do it all. It features a 24-inch Full HD display, a 12th Gen Intel Core processor, up to 16GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 16GB",
                "storage": "up to 2TB",
                "operating system": "Windows 11",
                "screen size": "24 inches",
                "screen resolution": "1920 x 1080",
                "weight": "5.5 pounds",
                "battery life": "n/a",
                "price": "$899 or $1,099"
            },
            image: "https://m.media-amazon.com/images/I/61XRW8z8GrL._AC_SX679_.jpg",
            price: 1249.90,
        },
        {
            id: 314,
            name: "Apple iMac Pro 23",
            description: "The Apple iMac Pro 23 is a sleek and powerful all-in-one desktop computer that is perfect for students, professionals, and anyone who needs a stylish and easy-to-use computer. It features a 24-inch Retina display with a 4.5K resolution, a M1 chip, up to 16GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "M1",
                "memory": "up to 16GB",
                "storage": "up to 2TB",
                "operating system": "macOS Monterey",
                "screen size": "24 inches",
                "screen resolution": "4.5K (4480 x 2520)",
                "weight": "5.9 pounds",
                "battery life": "n/a",
                "price": "$1,299 or $1,499"
            },
            image: "https://m.media-amazon.com/images/I/61p-ADlugUS.__AC_SY445_SX342_QL70_ML2_.jpg",
            price: 999.90,
        },
        {
            id: 315,
            name: "Dell Nukita XPS 7040",
            description: "The Dell Nukita XPS 7040 is a powerful and stylish desktop computer that is perfect for gamers, creative professionals, and anyone who needs a high-performance computer. It features a 12th Gen Intel Core processor, up to 64GB of RAM, and up to 4TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 64GB",
                "storage": "up to 4TB",
                "operating system": "Windows 11",
                "screen size": "n/a",
                "screen resolution": "n/a",
                "weight": "22 pounds",
                "battery life": "n/a",
                "price": "$1,299 or $1,599"
            },
            image: "https://m.media-amazon.com/images/I/81rt17lGrmL._AC_SX679_.jpg",
            price: 2299.90,
        },
        {
            id: 316,
            name: "HP Enuda 22",
            description: "The HP Enuda 22 is a stylish and powerful all-in-one desktop computer that is perfect for students, professionals, and anyone who needs a computer that can do it all. It features a 24-inch Full HD display, a 12th Gen Intel Core processor, up to 16GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 16GB",
                "storage": "up to 2TB",
                "operating system": "Windows 11",
                "screen size": "24 inches",
                "screen resolution": "1920 x 1080",
                "weight": "5.5 pounds",
                "battery life": "n/a",
                "price": "$899 or $1,099"
            },
            image: "https://m.media-amazon.com/images/I/61XRW8z8GrL._AC_SX679_.jpg",
            price: 1599.90,
        }
    ]},
    {
        id: 4,
        products: [
        {
            id: 411,
            name: "Apple iMac 24",
            description: "The Apple iMac 24 is a sleek and powerful all-in-one desktop computer that is perfect for students, professionals, and anyone who needs a stylish and easy-to-use computer. It features a 24-inch Retina display with a 4.5K resolution, a M1 chip, up to 16GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "M1",
                "memory": "up to 16GB",
                "storage": "up to 2TB",
                "operating system": "macOS Monterey",
                "screen size": "24 inches",
                "screen resolution": "4.5K (4480 x 2520)",
                "weight": "5.9 pounds",
                "battery life": "n/a",
                "price": "$1,299 or $1,499"
            },
            image: "https://m.media-amazon.com/images/I/81faY237fGS._AC_SX679_.jpg",
            price: 1249.90,
        },
        {
            id: 412,
            name: "Dell XPS 8940",
            description: "The Dell XPS 8940 is a powerful and stylish desktop computer that is perfect for gamers, creative professionals, and anyone who needs a high-performance computer. It features a 12th Gen Intel Core processor, up to 64GB of RAM, and up to 4TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 64GB",
                "storage": "up to 4TB",
                "operating system": "Windows 11",
                "screen size": "n/a",
                "screen resolution": "n/a",
                "weight": "22 pounds",
                "battery life": "n/a",
                "price": "$1,299 or $1,599"
            },
            image: "https://m.media-amazon.com/images/I/6164LaeYxjL._AC_SX679_.jpg",
            price: 1249.90,
        },
        {
            id: 413,
            name: "HP Envy 24",
            description: "The HP Envy 24 is a stylish and powerful all-in-one desktop computer that is perfect for students, professionals, and anyone who needs a computer that can do it all. It features a 24-inch Full HD display, a 12th Gen Intel Core processor, up to 16GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 16GB",
                "storage": "up to 2TB",
                "operating system": "Windows 11",
                "screen size": "24 inches",
                "screen resolution": "1920 x 1080",
                "weight": "5.5 pounds",
                "battery life": "n/a",
                "price": "$899 or $1,099"
            },
            image: "https://m.media-amazon.com/images/I/61K0PuMOITL._AC_SX679_.jpg",
            price: 1249.90,
        },
        {
            id: 414,
            name: "Apple iMac 24",
            description: "The Apple iMac 24 is a sleek and powerful all-in-one desktop computer that is perfect for students, professionals, and anyone who needs a stylish and easy-to-use computer. It features a 24-inch Retina display with a 4.5K resolution, a M1 chip, up to 16GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "M1",
                "memory": "up to 16GB",
                "storage": "up to 2TB",
                "operating system": "macOS Monterey",
                "screen size": "24 inches",
                "screen resolution": "4.5K (4480 x 2520)",
                "weight": "5.9 pounds",
                "battery life": "n/a",
                "price": "$1,299 or $1,499"
            },
            image: "https://m.media-amazon.com/images/I/81faY237fGS._AC_SX679_.jpg",
            price: 1249.90,
        },
        {
            id: 415,
            name: "Dell XPS 8940",
            description: "The Dell XPS 8940 is a powerful and stylish desktop computer that is perfect for gamers, creative professionals, and anyone who needs a high-performance computer. It features a 12th Gen Intel Core processor, up to 64GB of RAM, and up to 4TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 64GB",
                "storage": "up to 4TB",
                "operating system": "Windows 11",
                "screen size": "n/a",
                "screen resolution": "n/a",
                "weight": "22 pounds",
                "battery life": "n/a",
                "price": "$1,299 or $1,599"
            },
            image: "https://m.media-amazon.com/images/I/6164LaeYxjL._AC_SX679_.jpg",
            price: 1249.90,
        },
        {
            id: 416,
            name: "HP Envy 24",
            description: "The HP Envy 24 is a stylish and powerful all-in-one desktop computer that is perfect for students, professionals, and anyone who needs a computer that can do it all. It features a 24-inch Full HD display, a 12th Gen Intel Core processor, up to 16GB of RAM, and up to 2TB of storage.",
            specs: {
                "processor": "12th Gen Intel Core i5 or i7",
                "memory": "up to 16GB",
                "storage": "up to 2TB",
                "operating system": "Windows 11",
                "screen size": "24 inches",
                "screen resolution": "1920 x 1080",
                "weight": "5.5 pounds",
                "battery life": "n/a",
                "price": "$899 or $1,099"
            },
            image: "https://m.media-amazon.com/images/I/61K0PuMOITL._AC_SX679_.jpg",
            price: 1249.90,
        }
    ]}

]
    