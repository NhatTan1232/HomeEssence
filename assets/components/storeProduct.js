const products = [
  // Sofa products
  {
    id: 1,
    name: 'Bellagio 3 seater sofa',
    price: '22,500,000',
    type: 'Sofa',
    color: [
      {
        color_id: 1,
        color_name: 'brown',
        picture: require('../productPicture/sofa/bellagio_brown.jpg')
      },
      {
        color_id: 2,
        color_name: 'green',
        picture: require('../productPicture/sofa/bellagio_green.jpg')
      }
    ],
    detail: 'The Bellagio 3-seater sofa is a statement piece that commands attention – compelling you to sit and experience its comfort. With its low-back design, clean lines and minimalist aesthetic, this modern sofa offers a tactile experience like no other.',
  },
  {
    id: 2,
    name: 'Amsterdam corner sofa',
    price: '45,800,000',
    type: 'Sofa',
    color: [
      {
        color_id: 1,
        color_name: 'green',
        picture: require('../productPicture/sofa/amsterdam_green.jpg')
      },
      {
        color_id: 2,
        color_name: 'blue',
        picture: require('../productPicture/sofa/amsterdam_blue.jpg')
      }
    ],
    detail: 'The Amsterdam 3 seater sofa is your choice for the perfect, luxurious sofa statement.',
  },
  {
    id: 3,
    name: 'Salamanca corner sofa',
    price: '47,200,000',
    type: 'Sofa',
    color: [
      {
        color_id: 1,
        color_name: 'tan',
        picture: require('../productPicture/sofa/salamanca_sand.jpg')
      },
      {
        color_id: 2,
        color_name: 'dimgrey',
        picture: require('../productPicture/sofa/salamanca_grey.jpg')
      }
    ],
    detail: 'Embrace the art of lounging with Salamanca. A low \'floating\' sofa with a 1970s bohemian feel, this family lounge style is crafted with oversized proportions for serious comfort. Designed by Henrik Pedersen, it’s complete with super soft foam seats for great depth and moveable back cushions for modern flexibility. Available as a modular and freestanding design, add a sense of warmth to your living room with Salamanca.',
  },
  {
    id: 4,
    name: 'Southampton 2,5 seater sofa',
    price: '35,300,000',
    type: 'Sofa',
    color: [
      {
        color_id: 1,
        color_name: 'white',
        picture: require('../productPicture/sofa/southampton_white.jpg')
      }
    ],
    detail: 'The Southampton 2.5-seater sofa bed is the ultimate spot for relaxation and recreation, effortlessly combining esthetics and function to ensure that your guests feel at home. In addition to its modern quilted look and convenient storage provision, it features a small fabric skirt that hides the mechanism, for a flawless finish.',
  },
  {
    id: 5,
    name: 'Carmo corner sofa',
    price: '23,600,000',
    type: 'Sofa',
    color: [
      {
        color_id: 1,
        color_name: 'lightskyblue',
        picture: require('../productPicture/sofa/carmo_blue.jpg')
      },
      {
        color_id: 2,
        color_name: 'saddlebrown',
        picture: require('../productPicture/sofa/carmo_brown.jpg')
      },
      {
        color_id: 3,
        color_name: 'darkblue',
        picture: require('../productPicture/sofa/carmo_dblue.jpg')
      }
    ],
    detail: 'With its cubic Danish design expression, our signature Carmo sofa has been updated for a more refined look and enhanced comfort. Its free-standing design allows you to easily reorganise its modules at any time, for any occasion. Whether you are hosting guests or seeking a quiet moment, Carmo effortlessly adapts to your needs.',
  },

  // Bed products
  {
    id: 6,
    name: 'Lugano bed',
    price: '8,500,000',
    type: 'Bed',
    color: [
      {
        color_id: 1,
        color_name: 'white',
        picture: require('../productPicture/bed/lugano_white.jpg')
      },
      {
        color_id: 2,
        color_name: 'grey',
        picture: require('../productPicture/bed/lugano_grey.jpg')
      }
    ],
    detail: 'Let your body sink down and feel relaxation wash over you. Sleep like an angel in the elegant Lugano bed. Keeping a minimalist look with a clean wooden frame, this modern bed will bring a sense of calm and serenity to your bedroom.',
  },
  {
    id: 7,
    name: 'Lugano storage bed',
    price: '12,100,000',
    type: 'Bed',
    color: [
      {
        color_id: 1,
        color_name: 'white',
        picture: require('../productPicture/bed/lugano_storage_white.jpg')
      }
    ],
    detail: 'Let your body sink down and feel relaxation wash over you. Sleep like an angel in the elegant Lugano bed. Keeping a minimalist look with a clean wooden frame, this modern bed will bring a sense of calm and serenity to your bedroom.',
  },
  {
    id: 8,
    name: 'Arlington bed',
    price: '9,800,000',
    type: 'Bed',
    color: [
      {
        color_id: 1,
        color_name: 'saddlebrown',
        picture: require('../productPicture/bed/arlington_bed_brown.jpg')
      },
      {
        color_id: 2,
        color_name: 'lightgrey',
        picture: require('../productPicture/bed/arlington_bed_grey.jpg')
      },
      {
        color_id: 3,
        color_name: 'black',
        picture: require('../productPicture/bed/arlington_bed_black.jpg')
      }
    ],
    detail: 'Great support when sitting against the headboard and a soft landing make the Arlington bed an amazing addition to the bedroom. Just like the extension of a pillow, the soft headboard invites you in for a good night sleep.',
  },
  {
    id: 9,
    name: 'Fusion day bed',
    price: '7,500,000',
    type: 'Bed',
    color: [
      {
        color_id: 1,
        color_name: 'white',
        picture: require('../productPicture/bed/fusionday_white.jpg')
      }
    ],
    detail: 'The fusion daybed is a beautiful and iconic piece of design furniture, mixing Japanese aesthetics with Danish functionality. The loose pillows can be arranged freely, giving you the opportunity to change the look according to usage situation, while slim legs and clean lines keep the style light.',
  },
  {
    id: 10,
    name: 'Austin bed',
    price: '15,000,000',
    type: 'Bed',
    color: [
      {
        color_id: 1,
        color_name: 'indianred',
        picture: require('../productPicture/bed/austin_bed_red.jpg')
      },
      {
        color_id: 2,
        color_name: 'goldenrod',
        picture: require('../productPicture/bed/austin_bed_gold.jpg')
      }
    ],
    detail: 'Be embraced by the cocooning effect of the Austin bed. The headboard not only looks great, it defines your space and offers a comfortable place to rest. Choose your personal upholstery and create your bedroom haven.',
  },

  // Table products
  {
    id: 11,
    name: 'Ottawa table',
    price: '14,400,000',
    type: 'Table',
    color: [
      {
        color_id: 1,
        color_name: 'saddlebrown',
        picture: require('../productPicture/table/ottawa_brown.jpg')
      }
    ],
    detail: 'Defined by smooth, rounded edges and a sensual minimalism, the Ottawa dining table creates a serene atmosphere in your dining room. Unique, twig-like legs inspired by nature accentuates the natural beauty of the oval Ottawa dining table. Need extra seats? Just pull out the clever, built-in extension leaf and go from a 4-person family meal to a dinner party seating 14.',
  },
  {
    id: 12,
    name: 'Lugo coffee table',
    price: '9,100,000',
    type: 'Table',
    color: [
      {
        color_id: 1,
        color_name: 'bisque',
        picture: require('../productPicture/table/lugo_beige.jpg')
      },
      {
        color_id: 2,
        color_name: 'silver',
        picture: require('../productPicture/table/lugo_silver.jpg')
      }
    ],
    detail: 'Versatile minimalism that perfectly blends into your living room. The Lugo coffee table’s light look and clean lines will bring a timeless sophistication to your home for years to come. Place the square coffee table alone to accentuate the minimalist style or arrange it above the rectangular Lugo for a dynamic look and extra table space.',
  },
  {
    id: 13,
    name: 'Billund round table',
    price: '8,400,000',
    type: 'Table',
    color: [
      {
        color_id: 1,
        color_name: 'white',
        picture: require('../productPicture/table/billund_white.jpg')
      }
    ],
    detail: 'Billund is design and function coming together in a perfect expression of Scandinavian design. The tabletop makes the table adaptable to your exact needs. Have it down for an intimate meal for two or flip it up and have room for four or five around the table.',
  },
  {
    id: 14,
    name: 'Fiorentina extendable table',
    price: '11,230,000',
    type: 'Table',
    color: [
      {
        color_id: 1,
        color_name: 'dimgrey',
        picture: require('../productPicture/table/fiorentina_grey.jpg')
      },
      {
        color_id: 2,
        color_name: 'floralwhite',
        picture: require('../productPicture/table/fiorentina_white.jpg')
      }
    ],
    detail: 'Take your dining experience to new heights with the sculptural beauty of Fiorentina. The simple, yet expressive base ensures a stunning aesthetic that underlines the stylishness and functionality of the tabletop.',
  },
  {
    id: 15,
    name: 'Augusta extendable table',
    price: '25,610,000',
    type: 'Table',
    color: [
      {
        color_id: 1,
        color_name: 'black',
        picture: require('../productPicture/table/augusta_black.jpg')
      },
      {
        color_id: 2,
        color_name: 'saddlebrown',
        picture: require('../productPicture/table/augusta_brown.jpg')
      },
      {
        color_id: 3,
        color_name: 'silver',
        picture: require('../productPicture/table/augusta_silver.jpg')
      }
    ],
    detail: 'The Augusta dining table presents a clear and undisguised play with shapes. The visible construction adds an air of lightness to the exclusive dining table with room for all. Extend it and enjoy a great evening with all your loved ones.',
  },

  // Chair products
  {
    id: 16,
    name: 'Hamilton dining chair',
    price: '1,800,000',
    type: 'Chair',
    color: [
      {
        color_id: 1,
        color_name: 'black',
        picture: require('../productPicture/chair/hamilton_dining_chair_black.jpg')
      }
    ],
    detail: 'Classic meets contemporary in the Hamilton dining chair. Designed by Morten Georgsen, organic shapes offer cocooning comfort while a slim waist offers flexible sitting comfort. Enjoy the character of Hamilton and make a statement in your dining room.',
  },
  {
    id: 17,
    name: 'Ottawa chair',
    price: '2,200,000',
    type: 'Chair',
    color: [
      {
        color_id: 1,
        color_name: 'black',
        picture: require('../productPicture/chair/ottawa_chair_black.jpg')
      }
    ],
    detail: 'Visibly inspired by nature with its leaf-shape and curved design, the Ottawa dining chair is truly a unique piece of design furniture. Once you are seated, you will discover that the Ottawa chair is not only characteristic in looks, but also in comfort. The twig-like legs on Ottawa add to the organic chair design, completing its unique look. At the same time, the sculptured seat without upholstery highlights the clean lines and minimal form.',
  },
  {
    id: 18,
    name: 'Hauge dining chair',
    price: '2,500,000',
    type: 'Chair',
    color: [
      {
        color_id: 1,
        color_name: 'white',
        picture: require('../productPicture/chair/hauge_dining_chair_white.jpg')
      }
    ],
    detail: 'Designed to stand with the Hauge dining table as part of a matching set, the Hague dining chair is an elegant, timeless expression. With a soft, organic form, this contemporary yet comfortable chair seamlessly blends into any space.'
  },
  {
    id: 19,
    name: 'Princeton chair',
    price: '3,330,000',
    type: 'Chair',
    color: [
      {
        color_id: 1,
        color_name: 'beige',
        picture: require('../productPicture/chair/princeton_chair_beige.jpg')
      },
      {
        color_id: 2,
        color_name: 'maroon',
        picture: require('../productPicture/chair/princeton_chair_maroon.jpg')
      }
    ],
    detail: 'Elegance and comfort beautifully combine in the Princeton chair. The visual appeal of the chair invites you to explore how every curve adds both comfort and looks. Enjoy the elegant embrace of Princeton and add a feminine, exquisite touch to your dining space.',
  },
  {
    id: 20,
    name: 'Seoul dining chair',
    price: '4,500,000',
    type: 'Chair',
    color: [
      {
        color_id: 1,
        color_name: 'darkblue',
        picture: require('../productPicture/chair/seoul_dining_chair_blue.jpg')
      },
      {
        color_id: 2,
        color_name: 'darkolivegreen',
        picture: require('../productPicture/chair/seoul_dining_chair_green.jpg')
      }
    ],
    detail: 'Grounded in principles of simplicity and craftsmanship, Seoul’s clean lines and understated elegance pay homage to the timeless design traditions that have defined Danish design for generations – yet with a modern and contemporary touch. With its A-frame-style shape, short armrests and angled legs, it invites you to sit back and dine in comfort.',
  },

  // Storage products
  {
    id: 21,
    name: 'Lund glass cabinet',
    price: '13,850,000',
    type: 'Storage',
    color: [
      {
        color_id: 1,
        color_name: 'brown',
        picture: require('../productPicture/storage/lund_glass_cabinet.jpg')
      }
    ],
    detail: 'A new interpretation of a classic, the Lund cabinet is a contemporary yet timeless storage solution with a light, airy and personal expression. Designed by Morten Georgsen, this elegant design allows you to showcase your favourite books, ornaments or more in an organised and exclusive manner.',
  },
  {
    id: 22,
    name: 'Fermo sideboard',
    price: '10,000,000',
    type: 'Storage',
    color: [
      {
        color_id: 1,
        color_name: 'beige',
        picture: require('../productPicture/storage/fermo_sideboard.jpg')
      }
    ],
    detail: 'Let Fermo work its magic. Watch as the clean lines and minimalist look of the Fermo extend to your entire home, when your clutter is neatly hidden away. Whether you\'re watching the game, listening to music or showing your holiday photos, this TV unit will hide your electronics seamlessly, so you can concentrate on being entertained.',
  },
  {
    id: 23,
    name: 'Bordeaux console table',
    price: '5,020,000',
    type: 'Storage',
    color: [
      {
        color_id: 1,
        color_name: 'black',
        picture: require('../productPicture/storage/bordeaux_console_table.jpg')
      }
    ],
    detail: 'The Bordeaux console table - simple, minimalist design with a twist. Characterised by clean lines and a light structure, Bordeaux makes functionality and flexibility a thing of beauty. Utilise the space in your hallway with this console table, place it behind your sofa or let it store your books, papers and devices in your home office.',
  },
  {
    id: 24,
    name: 'Lugano sideboard',
    price: '18,000,000',
    type: 'Storage',
    color: [
      {
        color_id: 1,
        color_name: 'brown',
        picture: require('../productPicture/storage/lugano_sideboard_brown.jpg')
      },
      {
        color_id: 2,
        color_name: 'white',
        picture: require('../productPicture/storage/lugano_sideboard_white.jpg')
      }
    ],
    detail: 'Looking sleek, elegant and exclusive, Lugano will solve all your storage needs without breaking a sweat. Low, classy and with great functionality, this stylish sideboard will bring a luxurious look to your home.',
  },
  {
    id: 25,
    name: 'Bordeaux wall system',
    price: '5,300,000',
    type: 'Storage',
    color: [
      {
        color_id: 1,
        color_name: 'dimgrey',
        picture: require('../productPicture/storage/bordeaux_wall_system_grey.jpg')
      },
      {
        color_id: 2,
        color_name: 'floralwhite',
        picture: require('../productPicture/storage/bordeaux_wall_system_white.jpg')
      }
    ],
    detail: 'Characterised by clean lines and a light structure, Bordeaux makes functionality and flexibility a thing of beauty.',
  }
];

export default products;
