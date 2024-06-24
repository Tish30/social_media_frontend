import { Grid ,Card } from '@mui/material'
import React from 'react'
import Login from './Login'
import Register from './Register'

const Authentication = () => {
  return (
   <div>
    <Grid container>
        <Grid className='h-screen overflow-hidden' item xs={7}>
           <img className="h-full w-full" src="https://media.istockphoto.com/id/1312423107/vector/stealing-data-concept-flat-vector-illustration-online-registration-form-login-to-social.jpg?s=612x612&w=0&k=20&c=7Trftif8xV9FCDO5B4M7JiBpZUFlXo51m5lfI6hYCog=" alt="" />
        </Grid>
        <Grid item xs={5}>
            <div className='px-20 flex flex-col justify-center h-full'>
                <Card className='card p-8'>
                    <div className='flex flex-column tem-center mb-5 space-y-1'>
                        <h1 className='logo text-center'> Tisha 's Social</h1>
                        <p className='text-center text-sm w-[70%]'>Connecting with people </p>

                    </div>
                    <Login/>
                    {/* <Register/> */}
                </Card>

            </div>
        </Grid>
    </Grid>
   </div>
  )
}

export default Authentication