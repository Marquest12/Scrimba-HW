import React from "react";


export default function App(){
  return(
    <>
    <div className="container">
    <img src="\src\Me.jpg" />
      <div className="me" >
      
        <p id="name">Marquest Anderson</p>
        <p id="title">Frontend Developer</p>
        <p id="email">Marquest.anderson12@gmail.com</p>
      </div>
      <button><span class="material-symbols-outlined">
mail
</span>Email</button>
      <div className="about-me">
      <h1 className="section">About</h1>
      <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum accusamus blanditiis 
        veritatis,
        tenetur quo explicabo placeat asperiores nemo aliquam 
        quaerat doloremque id reprehenderit! Magnam consectetur iste
        perferendis cupiditate explicabo.
      </p>

      <h1 className="section">Interests</h1>
      <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum accusamus blanditiis 
        veritatis,
        tenetur quo explicabo placeat asperiores nemo aliquam 
        quaerat doloremque id reprehenderit! Magnam consectetur iste
        perferendis cupiditate explicabo.
      </p>
      </div>
      <div className="footer">
      <small>@Anderson LLC 2024 Student of BVT</small>
      </div>
      
    </div>

    </>
  )
}
