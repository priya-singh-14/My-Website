import { ascentSections, c4cSections, cairnSections, receiptSections, vzSections} from "./sections";
import { NewProject } from "./types";

export const allProjects: NewProject[] = [
  {
    slug: "receipt",
    sections: receiptSections,
  },
  {
    slug: "cairn",
    sections: cairnSections,
  },
  {
    slug: "klaviyo",
    sections: ascentSections,
  },
  {
    slug: "verizon",
    sections: vzSections,
  },
  {
    slug: "c4c",
    sections: c4cSections,
  },
];
