import { useEffect } from "react";
import { useState } from "react";
import Header from "../show-nav/Header";


const Menu = () => {
    const [navs,setNavs] = useState([])

    useEffect(()=>{
        fetch('navbar.json')
        .then(res=>res.json())
        .then(data=>setNavs(data))
    },[])
    return (
        <div>
            
            <Header nav={navs} ></Header>
            {/* {
                navs.map(nav=> <a>{nav.pos_name}</a>)
            } */}
        </div>
    );
};

export default Menu;