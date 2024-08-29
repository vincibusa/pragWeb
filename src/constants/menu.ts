
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
        name:"Perle al Profumo di Mare",
        price:"€ 16,00",
        description:'Riso, Vongole, Cozze, Calamaro, Gambero, Pomodorino, Aglio'
       },
       {
        name:"Fettuccine agli Scampi",
        price:"€ 20,00",
        description:'Scampi, Pomodorino giallo, Aglio, Prezzemolo'
       },
       {
        name:"Fettuccine all'Astice",
        price:"€ 25,00",
        description:'Astice, Pomodorino rosso, Aglio, Prezzemolo'
       },
       {
        name:"Fettuccine agli Scampi",
        price:"€ 20,00",
        description:'Scampi, Pomodorino giallo, Aglio, Prezzemolo'
       },
  ]