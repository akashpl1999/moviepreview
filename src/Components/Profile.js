import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';




const Profile = () => {

    const [open, setOpen] = useState(false);




    return (

        <>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}

            >


                <div style={{ backgroundColor: 'white', padding: '20px', width: '60%', }}>

                    <h2>Edit</h2>

                    <Box m={2} style={{ margin: '10px' }}>

                      
                      
                        <TextField variant='outlined' color='secondary' label='username' style={{ display: 'inline-block' }} />
                  
                    </Box>

                    <Box m={2} style={{ margin: '10px' }}>

                        <TextField variant='outlined' color='secondary' label='email' style={{ display: 'inline-block' }} />
                    </Box>

                    <Box m={2} style={{ margin: '10px' }}>

                        <TextField variant='outlined' color='secondary' label='Phone Number' style={{ display: 'inline-block' }} />
                    </Box>



                    <Box style={{ margin: '10px' }}>

                        <Button variant='outlined' color='secondary' style={{ backgroundColor: "red", color: "white", margin: '10px' }}>Edit</Button>

                      
                        <Button color='secondary' style={{ backgroundColor: "lightblue", color: 'white' }} onClick={() => setOpen(false)}>Close</Button>
               
                    </Box>

                </div>
            </Modal>






            <div style={{ margin: '50px', backgroundColor: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center',border:'1px solid black' , backgroundColor:'lightcoral', height:"100vh"}}>


                <Typography style={{ margin: '10px' }} >

                    <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" style={{ margin: "10px", width: '200px', height: '200px',  }} />

                    <Box>
                  
                    <Button variant='contained'  color='secondary'>Edit Pic</Button>

                    </Box>
             


                </Typography>


                <Typography>


                    <div style={{ margin: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>


                        <Typography variant='h5' style={{ margin: '10px' }}>  Username</Typography>
                        <Typography variant='h5' style={{ margin: '10px' }}>  Email@gmail.com</Typography>
                        <Typography variant='h5' style={{ margin: '10px' }}>  Phone:6465666566</Typography>

                        <Box>

                                     <Button variant='contained'style={{marginTop:'58px' }}  color='secondary' onClick={() => setOpen(true)}>Edit</Button>

                        </Box>
               
                    </div>


                </Typography>



            </div>
        </>

    );

}
export default Profile; 
