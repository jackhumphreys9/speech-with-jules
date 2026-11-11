import type { PaletteColor } from "../styles/palette";

export interface ServiceCategory {
  name: string;
  color: PaletteColor;
  services: string[];
}

export const servicesHeading = "What services are you interested in?";

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Individual Therapy",
    color: "blue",
    services: [
      "In-person individual speech therapy (45-60 min sessions, I come to you)",
      "Virtual speech therapy (30-45 min sessions)",
    ],
  },
  {
    name: "Group Services",
    color: "green",
    services: [
      "Virtual groups (age 7+ only!)",
      "Play groups (4-6 year olds)",
      "Little kid groups (7-11 year olds)",
      "Big kid groups (12-15 year olds)",
      "Teen groups (16+)",
    ],
  },
  {
    name: "School Support",
    color: "pink",
    services: [
      "IEP/school service review and consultation (informal, I'm not a lawyer lol)",
      "Direct school consultation (I come to school and help your child's school team)",
    ],
  },
  {
    name: "Family & Parent Support",
    color: "purple",
    services: [
      "Parent coaching/training",
      "Parent groups (for connecting with local parents)",
    ],
  },
];

export const scheduling = {
  heading: "Scheduling by geographic location",
  body:
    "I am working on building a schedule based on geographic location. I have many clients in " +
    "Montgomery, Prince George's, Howard, and Anne Arundel County. Please let me know your " +
    "county first, then your address so I can ensure the time I offer you works with travel time " +
    "considered.",
};
