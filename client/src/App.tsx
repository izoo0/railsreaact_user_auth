import {Suspense, lazy} from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import route from './routes'
const Registration = lazy(() =>import('../src/pages/auth/Registration'))

function App() {
  return(
     <>
        <Routes>
            <Route index element={<Registration/>}/>
             <Route>
                {
                  route.map((routes,index)=>{
                    const {path, component: Component} = routes;
                    return(
                      <Route
                      key={index}
                      path={path}
                      element= {
                        <Suspense>
                           <Component/>
                        </Suspense>
                      }
                      
                      />
                    )
                  })
}
             </Route>
        </Routes>
     </>
  )
}

export default App
