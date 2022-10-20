export interface Bet {
  id: number;
  user: string;
  betTitle: string;
  betStr: string;
  date: string;
  comments: any;
  bets: any;
}

export type Bets = Bet[];

export const bets: Bets = [
  {
    id: 1,
    user: "betMan333",
    betTitle: "When will Joe Everyman get divorced?",
    betStr: "We all know Joe is cheating on his wife. When will she find out?",
    date: new Date().toLocaleDateString(),
    bets: [
      {
        user: "TestPerson1",
        bet: "Summer 2023",
        date: new Date().toLocaleDateString(),
      },
      {
        user: "SandyPandy",
        bet: "Fall 2024",
        date: new Date().toLocaleDateString(),
      },
      {
        user: "BrotherJoe44",
        bet: "Today!",
        date: new Date().toLocaleDateString(),
      },
    ],
    comments: [
      {
        id: 1,
        user: "Larry",
        comment: "I cannot believe I am comment!",
      },
      {
        id: 2,
        user: "Shoozie",
        comment: "I cannot believe I am comment too!",
      },
    ],
  },
  {
    id: 2,
    user: "testBetter9",
    betTitle: "How many useless degrees until Max Personman gets a job",
    betStr: "Max is perpetually in school. When will he actually get a job?",
    date: new Date().toLocaleDateString(),
    bets: [
      {
        user: "TestPerson77",
        bet: "4",
        date: new Date().toLocaleDateString(),
      },
      {
        user: "UpDownAllAround5",
        bet: "3",
        date: new Date().toLocaleDateString(),
      },
      {
        user: "BrotherJoe44",
        bet: "100!",
        date: new Date().toLocaleDateString(),
      },
    ],
    comments: [
      {
        id: 1,
        user: "Bart",
        comment: "I wrote a song about an octopus!",
      },
      {
        id: 2,
        user: "Hamlet",
        comment: "I'm Ringo Star!",
      },
    ],
  },
  {
    id: 3,
    user: "hungryHippo23",
    betTitle: "Year when all the birds just give up",
    betStr: "They MUST be getting tired of flying. It's only a matter of time",
    date: new Date().toLocaleDateString(),
    bets: [
      {
        user: "HankHole",
        bet: "2030",
        date: new Date().toLocaleDateString(),
      },
      {
        user: `GerardButler'sButler`,
        bet: "2099",
        date: new Date().toLocaleDateString(),
      },
      {
        user: "Jenkins897823",
        bet: "2001!",
        date: new Date().toLocaleDateString(),
      },
    ],
    comments: [
      {
        id: 1,
        user: "Greg",
        comment: "I can fish with my eyes closed!",
      },
      {
        id: 2,
        user: "Greg's Mom",
        comment: "I cannot fish with my eyes closed. I'm sorry.",
      },
      {
        id: 3,
        user: "Greg's Mom",
        comment: "I cannot fish with my eyes closed. I'm sorry.",
      },
      {
        id: 4,
        user: "Greg's Mom",
        comment: "I cannot fish with my eyes closed. I'm sorry.",
      },
      {
        id: 5,
        user: "Greg's Mom",
        comment: "I shouldn't be shown!",
      },
    ],
  },
];

export const comments: any = [];
