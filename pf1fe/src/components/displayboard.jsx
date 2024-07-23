import {Grid} from "@mui/material"

import styles from './banner.module.css'
import { Nameboard } from "./nameboard"
import { Navbar } from "./navbar/navbar"
export function Displayboard(){

return(

<>

<Navbar/>

    <Grid container className={styles.Displayboard} sm={12}>
    



<Nameboard/>



   
    

    </Grid>




</>)



}