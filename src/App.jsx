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
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Pie from "./scenes/pie/pie";
import BarCHart from "./components/barchart";
import LineChart from "./scenes/line/linechart";
import Geography from "./scenes/geography.jsx";
import Contacts from "./scenes/contact/contact.jsx";
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
        <Route path="/form" element={<Form/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/bar" element={<BarCHart/>}/>
        <Route path="/pie" element={<Pie/>}/>
        <Route path="/line" element={<LineChart/>}/>
        <Route path="/geography" element={<Geography/>}/>
        <Route path="/contacts" element={<Contacts/>}/>

      </Routes>
      </main>
      </div>
    </ThemeProvider>
     
  </ColorModeContext.Provider>
    </>
  )
}

export default App
