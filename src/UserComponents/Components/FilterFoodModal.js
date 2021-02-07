import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FilterFood from '../Components/FilterFood.js'
import FilterIcon from '../../assets/filter.svg'

const useStyles = makeStyles((theme) => ({

    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const FilterFoodModal = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div>
            <Modal
                className={classes.modal}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="FilterFoodModalContent">
                        <span onClick={handleClose} className="closeModalIcon">x</span>
                        <FilterFood />
                    </div>
                </Fade>
            </Modal>

            <button onClick={handleOpen} className="filterButton" color="primary">
               <img alt="filterIcon" src={FilterIcon} />
            </button>

        </div>
    );

    
};



export default FilterFoodModal;