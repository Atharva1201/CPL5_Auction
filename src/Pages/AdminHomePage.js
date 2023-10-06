import Table from 'react-bootstrap/Table';
import './UserPages.css';
import { Button } from 'react-bootstrap';
import AddNewPlayerPopup from './AddNewPlayerPopup';
import { useState } from 'react';

function AdminHomePage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const teams = [
    { name: 'Mighty Bulls', captain: 'Digesh Panchal', alias: 'bulls' },
    { name: 'Power Hitters', captain: 'Akshay Upare', alias: 'hitters' },
    { name: 'Fiercy Tigers', captain: 'Suhas Dhekane', alias: 'tigers' },
    { name: 'Stormbreaker', captain: 'Jagdeep Deogade', alias: 'breakers' },
    { name: 'Phoenix Fury', captain: 'Pritam Pashankar', alias: 'fury' },
    { name: 'Yoddhas', captain: 'Dilip Achari', alias: 'yoddhas' },
  ];
  return (
    <>
      <div className='text-center  mt-3'>
        <a href='https://fontmeme.com/calligraphy-fonts/'>
          <a href='https://fontmeme.com/calligraphy-fonts/'>
            <img
              src='https://fontmeme.com/permalink/230927/749938cdb63644fb61a7e28676c598a3.png'
              alt='calligraphy-fonts'
              border='0'
              className='responsiveLogo'
            />
          </a>
        </a>
      </div>
      <div className='container-fluid'>
        <div class='input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Search Player...'
            aria-label="Recipient's username"
            aria-describedby='button-addon2'
          />
          <div className='col-9'>
            <button
              className='btn btn-outline btn-warning'
              type='button'
              id='button-addon2'
            >
              Search
            </button>
          </div>
          <div>
            <div>
              <button
                className='btn btn-outline btn-warning'
                type='button'
                id='button-addon2'
                onClick={() => setShowAddModal(true)}
              >
                Add New Player &nbsp;
                <i className='bi bi-person-plus'></i>
              </button>
              <AddNewPlayerPopup
                showModal={showAddModal}
                hideModal={() => setShowAddModal(false)}
              />
            </div>
          </div>
        </div>

        <div className='curd-table mt-2'>
          <Table striped='columns'>
            <thead>
              <tr>
                <th className=''>ID</th>
                <th>Player Name</th>
                <th>Team Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>buttons</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <button
                    varient='primary'
                    className='btn btn-warning'
                    style={{ borderRadius: '4px',}}
                    size='lg'
                  >
                    Mark Unsold
                  </button>{' '}
                  <button
                    varient='primary'
                    className='btn btn-warning'
                    style={{ borderRadius: '4px' }}
                  >
                    Sell
                  </button>{' '}
                  <button
                    varient='primary'
                    className='btn btn-warning'
                    style={{ borderRadius: '4px' }}
                  >
                    Delete
                  </button>{' '}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>
                  <button>i</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td> mdn</td>
                <td>@mdo</td>
                <td>
                  <button>i</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default AdminHomePage;
