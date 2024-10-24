import React from 'react'
import './main2.css';

export default function AlterCard() {
  return (
    <>
      <div className="cards">
        <div className="card card-side">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
          <span> JavaScript </span>
        </div>
        <div className="card">
          <img src="https://www.cdnlogo.com/logos/r/85/react.svg" alt="" />
          <span> React </span>
        </div>
        <div className="card">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-vuejs-1175052.png?f=webp&w=256" alt="" />
          <span> Vue </span>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="" />
          <span> Angular </span>
        </div>
        <div className="card">
          <img src="https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg" alt="" />
          <span> Next.js </span>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2Xzo4FaWE5PDu0slKdrqVZDsDF1z7eOLMg&s" alt="" />
          <span> Nuxt.js </span>
        </div>
        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" />
          <span> Node.js </span>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" alt="" />
          <span> Salesface </span>
        </div>
        <div className="card">
          <img src="https://cdn.icon-icons.com/icons2/3053/PNG/512/microsoft_sharepoint_alt_macos_bigsur_icon_189964.png" alt="" />
          <span> SharePoint </span>
        </div>
      </div>
    </>
  )
}
