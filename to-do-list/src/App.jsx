import React, {useEffect, useState} from "react";
import Input from "./Input";
import Display from "./Display";

function App() {
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);

  // input to li data
  const getData = (data) => {
    // console.log(value);
    setLeftItems(
      [
        ...leftItems,
        data
      ]
    )
  }

  // remove li from right box
  const removeRightList = (index) => {
    if(rightItems.length == 1){
      localStorage.removeItem('rightLi')
    }
    const newData = rightItems.filter(
      (d,i)=> {
        if(i == index) return false;
        else return true;
      }
    )
    setRightItems(newData)
  }

  // remove li from left box
  const removeLeftList = (index) => {
    if(leftItems.length == 1){
      localStorage.removeItem('leftLi')
    }
    const newData = leftItems.filter(
      (d,i)=> {
        if(i == index) return false;
        else return true;
      }
    )
    setLeftItems(newData)
  }

  
  const leftToRight = (index) => {
    if(leftItems.length == 1){
      localStorage.removeItem('leftLi')
    }

    // move from Right data to Left data
    // step:1 add a copy of that data to Left box first
    setRightItems(
      [
        ...rightItems,
        leftItems[index]
      ]
    )

     // step:2 Delete data from RightData
    const newLeftItems = leftItems.filter(
      (lD,i) => {
        if(i == index) return false;
        else return true;
      }
    )
    setLeftItems(newLeftItems);
  }

  const rightToLeft = (index) => {
    if(rightItems.length == 1){
      localStorage.removeItem('rightLi')
    }

    // move from right data to left data
    // step:1 add a copy of that data to left box first
    setLeftItems(
      [
        ...leftItems,
        rightItems[index]
      ]
    )

     // step:2 Delete data from right
    const newRightItems = rightItems.filter(
      (lD,i) => {
        if(i == index) return false;
        else return true;
      }
    )
    setRightItems(newRightItems);
  }
  
  // state to Local Storage
  useEffect(
    ()=> {
      // console.log(leftItems);
      if(leftItems.length != 0){
        const leftLS = JSON.stringify(leftItems) // Array to JSON
        localStorage.setItem('leftLi', leftLS);  // add ls 
      }

      if(rightItems.length != 0){
        const rightLS = JSON.stringify(rightItems) // Array to JSON
        localStorage.setItem('rightLi', rightLS);  // add ls
      }
    },
    [leftItems, rightItems]
  )

  // Local Storage to State
  // first render and re-render/items-change
  useEffect(
    () => {
      const leftLsItems = localStorage.getItem('leftLi');  // get to ls items
      if(leftLsItems != null){
        const data = JSON.parse(leftLsItems)  // JSON to Array
        setLeftItems(data);
      }
      
      const rightLsItems = localStorage.getItem('rightLi');  // get to ls items
      if(rightLsItems != null){
        const data = JSON.parse(rightLsItems);   // JSON to Array
        setRightItems(data);
      }
    },
    []
  ) 

  return (
    <div className="container my-3">
      <h2 className="text-center">Task Application</h2>
      <Input handler={getData} />
      <div className="d-flex mt-3 gap-3">
        <Display title="Today Task" items={leftItems} moveHandler={leftToRight} removeHandler={removeLeftList} />
        <Display title="Complete Task"  items={rightItems} moveHandler={rightToLeft} removeHandler={removeRightList} />
      </div>
      
    </div>
  );
}

export default App;
