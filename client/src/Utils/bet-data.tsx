export interface Bet {
  id: number;
  user: string;
  betTitle: string;
  betStr: string;
  date: string;
  comments: any;
  childBets: any;
}

export type Bets = Bet[];

export const bets: Bets = [
  {
    id: 1,
    user: "Taylor",
    betTitle: "When will Tanner get married again? $50",
    betStr: `The new one has arrived! When will we go through this pony show again? Buy in is $50. <Bet added 11/4/2022>`,
    date: new Date().toLocaleDateString(),
    childBets: [
      {
        user: "Taylor",
        bet: "July 2024",
        date: new Date().toLocaleDateString(),
      },
      {
        user: "Holly",
        bet: "April 2023",
        date: new Date().toLocaleDateString(),
      },
      {
        user: "Tatum",
        bet: "May 2024",
        date: new Date().toLocaleDateString(),
      },
      {
        user: "Mark",
        bet: "June 2025",
        date: new Date().toLocaleDateString(),
      },
    ],
    comments: [],
  },
  {
    id: 2,
    user: "Mark G",
    betTitle: "When will Tanner reveal his new gf to everyone? $50",
    betStr: "The reveal has to be <add stipulation>",
    date: new Date().toLocaleDateString(),
    childBets: [
      {
        user: "Taylor",
        bet: "January 14 2023",
        date: new Date().toLocaleDateString(),
      },
      {
        user: "Holly",
        bet: "TBD",
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
    childBets: [
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
