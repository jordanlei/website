import React, { Component } from 'react';
import "../css/style.css"
import "../css/mobile.css"

export default function Layout({children, style}) {
  return (
    <div className = "layout" style = {style}>
      {children}
    </div>
  )
}