import './App.css'
import InputTask from './components/InputTask'
import AddTask from './components/AddTask'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    // 状態を呼び出せるコンポーネントを指定できる
    <RecoilRoot>
      <div className="task">
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  )
}

export default App
