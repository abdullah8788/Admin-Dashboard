import { ColorModeContext, useMode } from "./theme"
import { CssBaseline,ThemeProvider } from "@mui/material"
import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
import Side from "./scenes/global/Side";
import { Route,Routes } from "react-router-dom";
// import { Dashboard } from "@mui/icons-material";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices"
function App() {
const [theme,colorMode]= useMode();


  return (
  <>
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app">
      <Side/>
      <main className="content">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/invoices" element={<Invoices/>}/>
      </Routes>
      </main>
      </div>
    </ThemeProvider>
     
  </ColorModeContext.Provider>
    </>
  )
}

export default App
