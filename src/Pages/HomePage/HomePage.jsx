import { Grid } from '@mui/material'
import Sidebar from '../../Components/Sidebar'
import { Route, Routes, useLocation } from 'react-router-dom';
import MiddlePart from '../../Components/MiddlePart';
import Reels from '../../Components/Reels/Reels';
import CreateReelsForm from '../../Components/Reels/CreateReelsForm';
import Profile from '../Profile/Profile';

const HomePage = () => {
    const location= useLocation();
  return (
    <div className='px-20'>
        <Grid container spacing={0}>
            <Grid item xs={0} letterSpacing={3}>
            <div className='sticky top-0'>
                <Sidebar/>
            </div>  
            </Grid>
            <Grid lg={location.pathname==="/"?6:9} 
            item className='px-5 flex justify-center'
            xs={12}>
            
            <Routes>
                <Route path="/" element={<MiddlePart/>}/>
                <Route path="/reels" element={<Reels/>}/>
                <Route path="/createReels" element={<CreateReelsForm/>}/>
                <Route path="/profile/:id" element={<Profile/>}/>
            </Routes>
            </Grid>
        </Grid>


    </div>
  )
}

export default HomePage