import axios from 'axios'
import './App.css'
import { Suspense } from 'react';
import Countries from './Components/Countries';


const dataPromise = axios.get('https://openapi.programming-hero.com/api/all');

function App() {

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Countries dataPromise={dataPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
