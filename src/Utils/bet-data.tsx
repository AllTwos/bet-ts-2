export interface Bet {
  id: number;
  key: number;
  user: string;
  betStr: string;
  date: string;
  comments: any;
}

export type Bets = Bet[];

export const bets: Bets = [
  {
    id: 1,
    key: new Date().getTime(),
    user: "betMan333",
    betStr: "the moon will fall to earth",
    date: new Date().toLocaleDateString(),
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
    key: new Date().getTime(),
    user: "testBetter9",
    betStr: "birds will stop flying",
    date: new Date().toLocaleDateString(),
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
    key: new Date().getTime(),
    user: "hungryHippo23",
    betStr: "the yankees will become a hockey team",
    date: new Date().toLocaleDateString(),
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
    ],
  },
];

export const comments: any = [];
