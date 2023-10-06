import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function AddNewPlayerPopup({ showModal, hideModal }) {
  const handleClose = () => {
    hideModal();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <div>
      <h3>Add New Player</h3>
      </div>
      <br></br>

      </Modal.Header>
      <div className='required'>
        <label htmlFor='playerName' className='form-label required'>
                  Player name
                </label>
                <input
                  className='form-control'
                  name='playerName'
                  type='text'
                  placeholder='Please enter name'
                  // value={playerName}
                  autoComplete='off'
                  aria-autocomplete='none'
                />
                <div>
                  {/* <ErrorMessage
                      name='playerName'
                      component='span'
                      className='error'
                    /> */}
                </div>
                </div>
      {/* <Modal.Body>Enter Player Name...</Modal.Body> */}
      <Modal.Footer>
        {/* <Button variant='secondary' onClick={handleClose}>
          Close
        </Button> */}
        <div>
        <Button variant='primary' onClick={handleClose}>
          Add Player
        </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default AddNewPlayerPopup;
