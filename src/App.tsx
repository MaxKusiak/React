import './App.css'
import { newsArray } from './fixture/news'
import NewsBlock from './components/newsContainer'

function App() {
  return (
    <>
      <div>
          {
            newsArray.map((element) => (
                <NewsBlock {...element}/>
            ))
          }
      </div>
    </>
  )
}

export default App
