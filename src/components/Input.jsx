import React from 'react'

function Input(props) {

    


  return (
        <div>
            <h1>Desafio de Estados y Componentes</h1>
            {/* {props.error?<p style={{background:'red'}}>"DEBES INTRODUCIR TODOS LOS CAMPOS"</p>:null} */}
            <form >

                <div className='group-name'>
                    <div>
                        <label htmlFor="">Name: </label>
                    </div>
                    <div>
                        <input type="text" placeholder='Insert your name'
                        name='name'
                        onChange={(e)=>{
                            props.setNombre(e.target.value)
                        }}
                        />

                    </div>


                </div>
                <div className='group-password'>
                    <div>
                        <label htmlFor="">Password:</label>
                    </div>
                    <div>
                        <input type="text" placeholder='Insert your password'
                        name='password'
                        onChange={(e)=>{props.setPassword(e.target.value)}}
                         />

                    </div>

                 {/*    Tiene que ser la contraseña */}
                    


                </div>



            </form>
            {/* <div>
                <p>Nombre: {name}</p>
                <p>Password:{password}</p>
            </div> */}

        </div>
    )
}

export default Input
