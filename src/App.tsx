// function App() {
//   return (
//     <div className="nebula-background">
//       <div className="nebula-app">
//         <h1>Nebula</h1>
//       </div>
//     </div>
//   )
// }

// export default App

import AppShell from "./components/layout/AppShell";

function App() {
  return (
    <div className="nebula-background">
      <AppShell />
    </div>
  );
}

export default App;