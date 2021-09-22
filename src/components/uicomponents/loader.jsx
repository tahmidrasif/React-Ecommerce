import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


export default function AppLoader() {



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        </div>

    );
}


