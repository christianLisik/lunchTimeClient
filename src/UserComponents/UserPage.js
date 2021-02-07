import React from 'react';
import SideNavAndHeader from './Components/SideNavAndHeader.js';
import SubHeader from './Components/SubHeader.js';
import ShowMenu from './Components/ShowMenu.js';
import SearchBarFood from './Components/SearchBarFood.js';
import FilterFood from './Components/FilterFood.js';
import FilterFoodModal from './Components/FilterFoodModal.js'
import {connect} from 'react-redux';

const UserPage = (props) => {

    return (
        <main className="userPage">
            
            <SideNavAndHeader/>
            <SubHeader /> {/* Subheader shows the current dateTime. For Example Monday/Thai-Tuesday/Wendesday ....*/}
            {
                props.canUserOrder?
                <div>
                    <SearchBarFood />
                    <div className="contentFood">
                        <div className="filterFood">
                            <FilterFood/>
                        </div> 
                        <ShowMenu />
                    </div>
                    <FilterFoodModal />
                </div>
                :
                <div className="showNoMenu"><b>Wir öffnen demnächst</b><p> Unsere Öffnungszeiten: Mo-Fr 7.00 - 11:30 Uhr</p></div>
            }
        </main>
        
    );
};


const mapStateToProps = state =>{
    return {
        canUserOrder: state.user.canUserOrder
    }
  }
  export default connect(mapStateToProps,null)(UserPage);