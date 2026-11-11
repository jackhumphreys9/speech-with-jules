import type { PaletteColor } from "../styles/palette";

export const noInsurance = {
  heading: "So no insurance?",
  body:
    "Yeah, no insurance. I KNOW I KNOW!!!! I promise that this decision was made because I feel " +
    "that the services I can offer without going through insurance will genuinely be BETTER for " +
    "your kid and your family. Branching off from insurance allows me to offer longer session " +
    "times, in-home care, and flexible options (I can come to your dentist appointment and help " +
    "with communication, I can help with your birthday party, we can meet at the library, the " +
    "options are endless now!). The upcoming changes with insurance reimbursement in 2027 are " +
    "going to be felt across many areas of the speech therapy field. I want to make sure that " +
    "the services I'm offering remain accessible to all families who wish to work with me. In " +
    "order to accomplish all this, I will be offering a sliding-scale payment system - loosely " +
    "described below.",
};

export interface Tier {
  name: string;
  price?: string;
  session?: string;
  spots: string;
  color: PaletteColor;
}

export const slidingScaleHeading = "Sliding Scale";

// Colors follow the J-U-L-E-S letters of the logo.
export const tiers: Tier[] = [
  { name: "Pay What You Can", spots: "1 family", color: "blue" },
  { name: "Tier 1", price: "$75", session: "45-minute in-person session", spots: "2 families", color: "green" },
  { name: "Tier 2", price: "$100", session: "45-minute in-person session", spots: "4 families", color: "red" },
  { name: "Tier 3", price: "$120", session: "60-minute in-person session", spots: "2 families", color: "pink" },
  { name: "Tier 4", price: "$155", session: "60-minute in-person session", spots: "10 families", color: "purple" },
];

export interface OtherCost {
  name: string;
  price: string;
  details: string[];
}

export const otherCostsHeading = "Other costs";

export const otherCosts: OtherCost[] = [
  {
    name: "Speech and Language Evaluation",
    price: "$250-600",
    details: ["(2-hour session, written report)", "(pay what you can, honor system)"],
  },
  {
    name: "Evaluation follow-up call",
    price: "$55",
    details: ["(30-minute plan of care review, virtual)", "(flat rate)"],
  },
  {
    name: "IEP consult/review",
    price: "$150",
    details: [
      "(includes written notes, recommendations, and option to add-on attendance at IEP meeting for $75)",
    ],
  },
  {
    name: "Groups",
    price: "$25/kid drop-in",
    details: ["$150/kid if paid all at once for the month (no refunds if you cancel though)"],
  },
];

export const costsFinePrint =
  "*costs are subject to change as the practice shifts and grows. I promise to communicate all " +
  "changes with as much advance notice as possible!";

export const slidingScaleDetails = [
  "All payment options are offered at a first-come, first-served basis. Financial status " +
    "determination is based on honor system/self-report. The whole point of offering sliding " +
    "scale services means that the people who pay a higher amount are helping to subsidize the " +
    "care for families who may not be able to pay as much (80% of the families I see at my " +
    "current job are covered by Medicaid and have $0 co-pays!). If there is a tier that you'd " +
    "like to pay at but is not available, I will be holding waitlists of 3 families max per tier " +
    "in line for that spot, should a family choose to move up or down in a tier or no longer need " +
    "services. You may be offered a higher tier until a lower one opens up. If you are able to " +
    "pay a little more, it offers movement for families who may be struggling!",
  "All tiers are subject to 2 attendance reminders (no-shows, late cancels without attempted " +
    "reschedule) before being offered a higher tier or referral to another SLP.",
];

export const lissFunding = {
  heading: "LISS Funding",
  body:
    "I recommend all of my families go ahead and apply for LISS funding for each of their " +
    "children for next year! This grant offers between $1,000-2,000 for families to put toward " +
    "therapy costs and home materials (sensory equipment, trampolines, AAC devices).",
};
