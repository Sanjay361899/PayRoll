import React from 'react'

import { styled } from '@mui/material'

const Footer = () => {
    const Footers=styled("div")({
        borderLeft: "1px solid #81B441",
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor:"#262626",
        position: "fixed",
        bottom: 0,
        left: 0,
        width:"100%",
        color:"whitesmoke",
    })
  return (
    <Footers>This is a footer</Footers>
  )
}

export default Footer