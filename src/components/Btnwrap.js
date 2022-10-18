
import React from "react";
import "../css/btnwrap.css" 


const Btnwrap = () => {
   return  (
        <div className="btns">
            <label htmlFor="">
                <input id="line-width" type="range" min="1" max="10" defaultValue="5"/>
            </label>
            <button id="mode-btn">Fill</button>
            <button id="destroy-btn">destroy</button>
            <button id="erase-btn">erase</button>
            <label htmlFor="file">
                Add Photo 
                <input type="file" accept="image/*" id="file"/>
            </label>
            <input type="text" placeholder="작성 하시고 난 뒤 두번 클릭 해주세요" id="text"/>
            <button id="save">SAVE</button>
        </div>
   )
   
}

export default Btnwrap