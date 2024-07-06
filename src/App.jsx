import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import countAtom from './Store/atoms/count';
import { useMemo } from 'react';

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}
function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
  </div>
}
function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  // const count = useRecoilValue(countAtom);
  // const isEven = useMemo(()=>{
  //   return count % 2 === 0;
  // },[count])
  return <div>
    {isEven ? " It is even" : null}
  </div>
}


function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  //performance wise its a better approach as re-render will only happens in count rerender button comp. only
  //so use useSetRecoilState instead of useRecoilState as it will give you count value so if this is being used in this component and if its changes the component will also re-render
  //and also use setCount(count => count + 1) another way of setting a value this will get the current value of the count and return the updated value.
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>
      Increment
    </button>
    <button onClick={() => {
      setCount(count => count - 1)
    }}>
      Decrement
    </button>
  </div>

}

export default App
