const INITIAL_STATE = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hot Mail", "How to Make Lasagna"],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "How many tags are in a regular element?",
    options: ["2", "1", "3"],
    answer: "Hyper Text Markup Language",
  },
  {
    question:
      "What is the difference between an opening tag and a closing tag?",
    options: [
      "Opening tag has a / in front",
      "Closing tag has a / in front",
      "There is no difference",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "< br  / > What type of tag is this?",
    options: ["Break tag", "A broken one","An opening tag"],
    answer: "Break tag",
  },
  {
    question: "< body > Is this an opening tag or a closing tag?",
    options: ["Opening", "Closing"],
    answer: "Opening",
  },
  {
    question: " Where is the meta tag only found?",
    options: ["The last page", "The home page", "The second page"],
    answer: "The home page",
  },
];

const reducer = (state = INITIAL_STATE) => state;

export default reducer;
