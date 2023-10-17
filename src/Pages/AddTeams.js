import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
const AddTeams = () => {
  return (
    <>
      <div className='main-wrapper d-flex align-items-center justify-content-center'>
        <div className='admincontainer align col-4 px-5 sm-8 mx-auto p-3 my-5'>
          {' '}
          <h1>Add Teams</h1>
          <Formik>
            <Form>
              <div className='col-12 required'>
                <label htmlFor='fullName' className='form-label required'>
                  Team Name
                </label>
                <input
                  className='form-control'
                  name='fullName'
                  type='text'
                  placeholder='Please enter name'
                  // value={fullName}
                  autoComplete='off'
                  aria-autocomplete='none'
                />
                <div>
                  {/* <ErrorMessage
                      name='fullName'
                      component='span'
                      className='error'
                    /> */}
                </div>
              </div>
              <div className='col-12 required'>
                <label htmlFor='captainName' className='form-label'>
                  Captain Name
                </label>
                <input
                  className='form-control'
                  name='captainName'
                  type='text'
                  placeholder='Please enter captain name'
                  // value={fullName}
                  autoComplete='off'
                  aria-autocomplete='none'
                />
                <div>
                  {/* <ErrorMessage
                      name='captainName'
                      component='span'
                      className='error'
                    /> */}
                </div>
              </div>
              <div className='col-12 required'>
                <label htmlFor='fund' className='form-label'>
                   Fund Amount
                </label>
                <input
                  className='form-control'
                  name='fund'
                  type='text'
                  placeholder='Please enter fund amount'
                  // value={fullName}
                  autoComplete='off'
                  aria-autocomplete='none'
                />
                <div>
                  {/* <ErrorMessage
                      name='fullName'
                      component='span'
                      className='error'
                    /> */}
                </div>
              </div>
              <div className='col-12 required'>
                <label htmlFor='teamLogo' className='form-label'>
                   Team Logo
                </label>
                <input
                  className='form-control'
                  name='teamLogo'
                  type='text'
                  placeholder='Please enter team logo'
                  // value={fullName}
                  autoComplete='off'
                  aria-autocomplete='none'
                />
                <div>
                  {/* <ErrorMessage
                      name='teamLogo'
                      component='span'
                      className='error'
                    /> */}
                </div>
              </div>
              
              <div className='text-end mb-4 p-3 '>
                <Button
                  variant='btn btn-warning mx-auto'
                  style={{ fontSize: '15px', padding: '6px 40px' }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddTeams;
