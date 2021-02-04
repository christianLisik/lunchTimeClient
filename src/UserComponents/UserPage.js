import React from 'react';
import SideNavAndHeader from './Components/SideNavAndHeader.js';
import SubHeader from './Components/SubHeader.js';
import ShowMenu from './Components/ShowMenu.js';
import {connect} from 'react-redux';

const UserPage = (props) => {

    return (
        <main className="userPage">
            
            <SideNavAndHeader/>
            <SubHeader />
            {
                props.canUserOrder?
                <ShowMenu />
                :
                <div className="showNoMenu"><b>Wir öffnen demnächst</b><p> Unsere Öffnungszeiten: Mo-Fr 7.00 - 11:30 Uhr</p></div>
            }
        </main>
    );
};


const mapStateToProps = state =>{
    return {
        canUserOrder: state.canUserOrder
    }
  }
  export default connect(mapStateToProps,null)(UserPage);