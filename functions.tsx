// @ts-nocheck

{
  key: "value";
  key2: 35;
  key3: [1, [2, 3]];
  key4: {
    key50: "value50";
  }
  [];
}

// OBJECT
// {
//   KEY (string): VALUE (Whatever)
//   KEY2 (string): VALUE (Whatever)
// }

// Variable
const variableName = 523;
let variableName2 = "hello";

// Function
function sum2(arg1, arg2) {
  return arg1 + arg2;
}

// COMPONENT REQUIREMENTS
// 1. Start with a capital letter
// 2. Is exported
// 3. Returns HTML

// Component
export function MyComponent(props) {
  return <div></div>;
}

// Props is an object

const prop1 = "value1";
const prop2 = "value2";
/* <MyComponent arg1={prop1} arg2={prop2} /> */
/* <link href="/contact-us" />; */

export function MyComponent(props) {
  // props: {arg1: "value1", arg2: "value2"}
  // props.arg1;
  // props.arg2;

  return (
    <div>
      <span>{props.arg1}</span>
      <span>{props.arg2}</span>
    </div>
  );
}

export function MyComponent(props) {
  // props: {arg1: "value1", arg2: "value2"}
  // props.arg1
  // props.arg2

  const { arg1, arg2 } = props;
  // arg1;
  // arg2;

  return (
    <div>
      <span>{arg1}</span>
      <span>{arg2}</span>
    </div>
  );
}

export function MyComponent({ arg1, arg2 }) {
  return (
    <div>
      <span>{arg1}</span>
      <span>{arg2}</span>
    </div>
  );
}

// TypeScript
function myFunction(arg1: TYPE, arg2: TYPE) {}

export function MyComponent(props: { arg1: string; arg2: number }) {
  // props: {arg1: "value1", arg2: "value2"}
  // props.arg1;
  // props.arg2;

  return (
    <div>
      <span>{props.arg1}</span>
      <span>{props.arg2}</span>
    </div>
  );
}

export function MyComponent({ arg1, arg2 }: { arg1: string; arg2: number }) {
  return (
    <div>
      <span>{arg1}</span>
      <span>{arg2}</span>
    </div>
  );
}

////////// THIS IS THE WAY TO DO IT //////////
interface MyComponentProps {
  arg1: string;
  arg2: number;
}

export function MyComponent({ arg1, arg2 }: MyComponentProps) {
  return (
    <div>
      <span>{arg1}</span>
      <span>{arg2}</span>
    </div>
  );
}
/////////////////////////////////////////////
