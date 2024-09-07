
export interface MenuItem {
    name: string;
    price: string;
    description: string;
  }
  
  export const Montanarine: MenuItem[] = [
    {
      name: 'Mortadellina',
      price: '€ 8,00',
      description: 'Mortadella, Stracciatella, Pesto di pistacchi',
    },
    {
        name: 'La Campana',
        price: '€ 8,00',
        description: 'Mozzarella di bufala, Pomodoro marinato al basilico, Scaglie di grana',
    },
    {
        name: "L'Affumicata",
        price: '€ 8,00',
        description: 'Salmone affumicato, Fior di latte, Zeste di lime'
    }

  ];

  export const AntipastiDiPesce: MenuItem[] = [
    {
      name: 'Zuppetta di Pesce',
      price: '€ 14,00',
      description: 'Pescata del giorno, Succo di pomodoro',
    },
   {
    name:"Insalata di Mare",
    price:"€ 16,00",
    description:''
   },
   {
    name:"Polpetta di Sarde",
    price:"€ 9,00",
    description:''
   },
   {
    name:"La Cozzata al Pepe Nero",
    price:"€ 10,00",
    description:''
   },
   {
    name:"Frittura di Cappuccetti",
    price:"€ 18,00",
    description:''
   },
   {
    name:"Soutè di Vongole",
    price:"€ 15,00",
    description:'Servito con: Crostone di pane'
   },
   {
    name:"Cruditè di Pesce",
    price:"€ 25,00",
    description:'Ostriche, Gambero Rosso di Mazzara, Scampo marinato, Julienne di Calamari, Tartare di Salmone, Vongole veraci'
   },
   {
    name:"Ostriche",
    price:"€ 3,50",
    description:'(cad.)'
   },
   {
    name:"Bruschette al Gambero Rosso",
    price:"€ 10,00",
    description:'Stracciatella, Pesto di pistacchi, Gambero Rosso di Mazzara'
   },
   {
    name:"Bruschette al Salmone",
    price:"€ 10,00",
    description:'Mozzarella di bufala, Salmone, Olio al Basilico, Zeste di lime'
   },
  
  ];

  export const Primi: MenuItem[] = [
    {
      name: "Perle al Profumo di Mare",
      price: "€ 16,00",
      description: 'Riso, Vongole, Cozze, Calamaro, Gambero, Pomodorino, Aglio'
    },
    {
      name: "Fettuccine agli Scampi",
      price: "€ 20,00",
      description: 'Scampi, Pomodorino giallo, Aglio, Prezzemolo'
    },
    {
      name: "Fettuccine all'Astice",
      price: "€ 25,00",
      description: 'Astice, Pomodorino rosso, Aglio, Prezzemolo'
    },
    {
      name: "Spaghetti Rebecca",
      price: "€ 19,00",
      description: 'Vongole, Aglio, Tartare di Gambero, Prezzemolo'
    },
    {
      name: "Spaghetti Cozze e Vongole",
      price: "€ 16,00",
      description: 'Cozze, Vongole, Aglio, Prezzemolo'
    },
    {
      name: "Bottoni Prag",
      price: "€ 18,00",
      description: 'Ripieno di Cernia, Pomodorino, Gambero, Scampo marinato, Gel di Basilico'
    },
    {
      name: "Pacchero Ginevra",
      price: "€ 17,00",
      description: 'Vongole, Gambero, Pomodorino, Pesto di pistacchi'
    },
    {
      name: "Perle Randazzo",
      price: "€ 16,00",
      description: 'Riso, Crema di zucca, Gambero, Stracciatella pugliese, Polvere di Pomodoro'
    },
    {
      name: "Fettuccine Trapanese di mare",
      price: "€ 19,00",
      description: 'Dadolata di Pomodoro, Basilico, Aglio, Stracciatella pugliese, Tartare di Tonno'
    },
    {
      name: "Spaghetti del cozzaro",
      price: "€ 16,00",
      description: 'Aglio, Cozze, Dadolata di Pomodoro, Granella di pistacchio, Prezzemolo'
    }
  ];
  
  export const Secondi: MenuItem[] = [
    {
      name: "Tataki di Tonno",
      price: "€ 18,00",
      description: "Servito con: Crema di Cipolle rosse, Verdure croccanti"
    },
    {
      name: "Frittura mista",
      price: "€ 18,00",
      description: "Calamaro, Gambero"
    },
    {
      name: "Polpo Caramellato",
      price: "€ 16,00",
      description: "Servito su Crema di patate allo Zafferano, Gel di Basilico"
    },
    {
      name: "Involtino di Pesce spada agli Agrumi",
      price: "€ 18,00",
      description: "Servito con: Insalata mista"
    },
    {
      name: "Salmone alla Griglia",
      price: "€ 18,00",
      description: "Servito con: Insalata mista"
    },
    {
      name: "Grigliata di pesce",
      price: "€ 18,00",
      description: "Polpo, Calamaro, Gambero, Salmone"
    },
    {
      name: "Calamaro ripieno",
      price: "€ 18,00",
      description: "Servito con: Crema di Pomodoro"
    }
  ];
  
  export const PerChiNonAmaIlPesce: MenuItem[] = [
    {
      name: "Paccheri alla Trapanese Rivisitata",
      price: "€ 12,00",
      description: "Dadolata di Pomodoro, Olio evo, Basilico, Stracciatella pugliese, Polvere di pistacchio"
    },
    {
      name: "Fettuccine al Ragù",
      price: "€ 12,00",
      description: "Tritato di Salsiccia, Funghi, Prosciutto Cotto, Basilico"
    },
    {
      name: "Fettuccine Villa Bianca",
      price: "€ 12,00",
      description: "Salsiccia, Funghi, Cotto, Panna"
    },
    {
      name: "Pollo panato o ai ferri",
      price: "€ 12,00",
      description: "Insalata mista"
    },
    {
      name: "Tagliata di Carne",
      price: "€ 18,00",
      description: "Rucola e Scaglie di grana"
    },
    {
      name: "Tris di Carne",
      price: "€ 17,00",
      description: "Salsiccia, Costoletta di Maiale e Involtino con Patatine fritte"
    }
  ];
  

  export const Pizzeria: MenuItem[] = [
  ]