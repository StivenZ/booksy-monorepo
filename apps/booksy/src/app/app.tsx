// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Navbar } from "./components/Navbar";
import { ChakraTabs } from "./components/ChakraTabs";
import mockData from "./MockData/MockData.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { books } from "./MockData/newMock";


type BookProps = {
  name: string;
  id: number;
}

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path={"/books/:id"} element={<ChakraTabs data={books}></ChakraTabs>} />
          <Route path={"/"} element={<ChakraTabs data={books}></ChakraTabs>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
