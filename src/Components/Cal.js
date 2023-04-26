import { useDispatch, useSelector } from 'react-redux'
import { loadAnswer, loadBackspace, loadButtons, loadClear } from '../Action/Calaction'


const Calucaterapp = () => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.cal)

    const handleAnswer = (e) => {
        e.preventDefault()

        dispatch(loadAnswer(count))
    }


    return (


        <div style={{backgroundColor:"darkcyan"}} >

          

            <div className='grid grid-cols-4 gap-2 mt-10 mx-3' style={{ display: 'flex', justifyContent: "flex-start", alignItems: 'center', width: "300px", height: "600px", flexWrap: "wrap" ,margin:"auto", }}>
  

            <input type='text' placeholder='0' value={(count.ans).length === 0 ? count.number : count.ans}   style={{padding:"12px", margin:"15px", width:'100%', fontSize:"20px"}}  />


                <button onClick={() => dispatch(loadClear())}   style={{padding:"12px", margin:"15px", fontWeight:'900',fontSize:"15px"}} >AC</button>
                <button onClick={() => dispatch(loadBackspace())}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}} >C</button>
                <button onClick={() => dispatch(loadButtons('/'))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}}>/</button>
                <button onClick={() => dispatch(loadButtons('+'))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}}>+</button>



                <button onClick={() => dispatch(loadButtons(1))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}} >1</button>
                <button onClick={() => dispatch(loadButtons(2))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}} >2</button>
                <button onClick={() => dispatch(loadButtons(3))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}} >3</button>
                <button onClick={() => dispatch(loadButtons('-'))} style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}}>-</button>


                <button onClick={() => dispatch(loadButtons(4))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}} >4</button>
                <button onClick={() => dispatch(loadButtons(5))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}} >5</button>
                <button onClick={() => dispatch(loadButtons(6))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}} >6</button>
                <button onClick={() => dispatch(loadButtons('*'))} style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}}>*</button>


                <button onClick={() => dispatch(loadButtons(7))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}} >7</button>

                <button onClick={() => dispatch(loadButtons(8))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}}>8</button>

                <button onClick={() => dispatch(loadButtons(9))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}} >9</button>


                <button onClick={() => dispatch(loadButtons('.'))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}} >.</button>

                <button onClick={() => dispatch(loadButtons(0))}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}}>0</button>


                <button onClick={handleAnswer}  style={{padding:"12px", margin:"15px",fontWeight:'900',fontSize:"15px"}} >=</button>



            </div>
        </div>




    )

}

export default Calucaterapp;