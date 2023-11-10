// import { useState, useEffect } from 'react';

// const checkBreakpoint = () => {
//   const [breakpoint, setBreakpoint] = useState(false);

//   useEffect(() => {
//     const breakpoints = {
//       sm: "(max-width: 640px)",
//       md: "(max-width: 768px)",
//       lg: "(max-width: 1024px)",
//       xl: "(max-width: 1280px)",
//       "2xl": "(max-width: 1536px)",
//     };

//     const mediaQueryLists = Object.keys(breakpoints).map((key) => {
//       return {
//         name: key,
//         mediaQueryList: window.matchMedia(breakpoints[key]),
//       };
//     });

//     const handleMediaQueryChange = (event, name) => {
//       if (event.matches) {
//         setBreakpoint(name);
//       }
//     };

//     const listeners = mediaQueryLists.map(({ mediaQueryList, name }) => {
//       const listener = (event) => handleMediaQueryChange(event, name);
//       mediaQueryList.addEventListener("change", listener);
//       return { mediaQueryList, listener };
//     });

//     return () => {
//       listeners.forEach(({ mediaQueryList, listener }) =>
//         mediaQueryList.removeEventListener("change", listener)
//       );
//     };
//   }, []);

//   console.log(breakpoint)

//   return breakpoint;
// };

// export default checkBreakpoint;