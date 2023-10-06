import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
const AdminLogin = () => {
  return (
    <>
      <div className='main-wrapper d-flex align-items-center justify-content-center'>
        <div className='admincontainer align col-4 px-5 sm-8 mx-auto p-3 my-5'>
          {' '}
          <h1>Admin Login</h1>
          <Formik>
            <Form>
              <div className='sm 2 col-12 required'>
                <label htmlFor='fullName' className='form-label required'>
                  Username
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
                <label htmlFor='fullName' className='form-label'>
                  Password
                </label>
                <input
                  className='form-control'
                  name='fullName'
                  type='text'
                  placeholder='Please enter password'
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
                <br></br>
              </div>
              <div className='text-end mb-4'>
                <Button
                  variant='btn btn-warning mx-auto'
                  style={{ fontSize: '15px', padding: '6px 40px' }}
                >
                  Login
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
