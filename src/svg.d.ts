// src/svg.d.ts
declare module "*.svg" {
  const content: string; //Path to the SVG file (for use with <img />)
  export default content;
}
