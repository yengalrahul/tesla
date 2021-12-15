import React,{useState} from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../../features/Car/carSlice';
import {useSelector} from 'react-redux';


function Header() {
    const [BurgerStatus,setBurgerStatus]= useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);
    return (
        <Container>
        <a href="#">
        
        <img src='/images/logo.svg' alt="logo"/>
        </a>
        <Menu>
        {cars && cars.map((car, index)=>(
            <a href="#">{car}</a>
          )
           
           )}
        
       
        </Menu>
        <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        
        </RightMenu>
        <RightMenu1 onClick={()=>setBurgerStatus(true)}>
        <a herf="#"> Menu</a>
        </RightMenu1>

        <BurgerNav show={BurgerStatus}>

        <CloseWrapper> 
        <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        {cars && cars.map((car, index)=>(
            <li key={index}><a href='#'>{car}</a></li>
          ))}
        <li><a href="#">Exisiting Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Investor Relation</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">More</a></li>
        </BurgerNav>

            
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height:60px;
position: fixed;
display:flex;
align-items: center;
justify-content: space-between;
padding:0 20px;
top:0;
left:0;
right:0;
Z-index:1;

`
const Menu = styled.div`
display:flex;
align-items: center;
justify-content: center;

flex:1;
a{
    font-weight:600;
    padding: 0 10px;
    flex-wrap:nowrap;
    cursor: pointer;

}
margin:8px;

@media(max-width:768px){
    display:none;
}

`
const RightMenu = styled.div`
display:flex;
align-items: center;
a{
    font-weight:600;
    padding:0 10px;
    margin-right: 10px;
    
} 
`
const RightMenu1 = styled.div`

a{
  font-weight:600;
  padding: 0 10px ;
 
  cursor:pointer;
}
`

const BurgerNav = styled.div`
position: fixed;
top:0;
bottom: 0;
right: 0;
background: white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction: column;
text-align:start;
transform:${props => props.show ? 'translateX(0)':'translateX(100%)'};
transition:transform 0.2s ease-in;
li{
    padding:15px 0;
    cursor: pointer;
    
}
a{
    font-weight:600;
}


`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content: flex-end;

`