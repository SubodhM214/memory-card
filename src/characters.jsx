import { nanoid } from "nanoid";

import phineas from "../src/assets/characters/phineas.png";
import ferb from "../src/assets/characters/ferb.png";
import perry from "../src/assets/characters/perry.png";
import candace from "../src/assets/characters/candace.png";
import baljeet from "../src/assets/characters/baljeet.png";
import isabella from "../src/assets/characters/isabella.png";
import vanessa from "../src/assets/characters/vanessa.png";
import jeremy from "../src/assets/characters/jeremy.png";
import monogram from "../src/assets/characters/major_monogram.jpg";
import doofenshmirtz from "../src/assets/characters/doofenshmirtz.png";
import buford from "../src/assets/characters/buford.png";
import linda from "../src/assets/characters/linda.png";

const characters = [
  {
    id: nanoid(),
    name: "Phineas",
    img: phineas,
  },
  {
    id: nanoid(),
    name: "Ferb",
    img: ferb,
  },
  {
    id: nanoid(),
    name: "Perry",
    img: perry,
  },
  {
    id: nanoid(),
    name: "Candace",
    img: candace,
  },
  {
    id: nanoid(),
    name: "Baljeet",
    img: baljeet,
  },
  {
    id: nanoid(),
    name: "Isabella",
    img: isabella,
  },
  {
    id: nanoid(),
    name: "Vanessa",
    img: vanessa,
  },
  {
    id: nanoid(),
    name: "Jeremy",
    img: jeremy,
  },
  {
    id: nanoid(),
    name: "Major Monogram",
    img: monogram,
  },
  {
    id: nanoid(),
    name: "Dr. Heinz Doofenshmirtz",
    img: doofenshmirtz,
  },
  {
    id: nanoid(),
    name: "Buford",
    img: buford,
  },
  {
    id: nanoid(),
    name: "Linda",
    img: linda,
  },
];

export default characters;
