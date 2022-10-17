
import React from "react";
import "../css/coloroption.css" 


const Coloroption = () => {
   return  (
    <div class="coloropton-wrap">
        <input type="color" id="color"/>
        <div className="color-option" style="background-color: #16a085;" data-color="#16a085"></div>
        <div className="color-option" style="background-color: #e74c3c;" data-color="#e74c3c"></div>
        <div className="color-option" style="background-color: #e74c3c;" data-color="#e74c3c"></div>
        <div className="color-option" style="background-color: #8e44ad;" data-color="#8e44ad"></div>
        <div className="color-option" style="background-color: #f1c40f;" data-color="#f1c40f"></div>
        <div className="color-option" style="background-color: #e67e22;" data-color="#e67e22"></div>
        <div className="color-option" style="background-color: #e74c3c;" data-color="#e74c3c"></div>
        <div className="color-option" style="background-color: #ecf0f1;" data-color="#ecf0f1"></div>
        <div className="color-option" style="background-color: #95a5a6;" data-color="#95a5a6"></div>
    </div>
   )
   
}

export default Coloroption