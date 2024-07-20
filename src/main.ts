import "./styles/style.scss";

// import { stepOne, stepTwo, stepsHeadings } from "./ts/htmlTemplates";

/* ------- Global Variables ------- */

// Elements
const stepTitle = document.querySelector(
  "[data-step-title]"
) as HTMLHeadingElement;

const stepSubtitle = document.querySelector(
  "[data-step-subtitle]"
) as HTMLHeadingElement;

const currentStepContent = document.querySelector(
  "[data-step-content]"
) as HTMLDivElement;

// HTML
