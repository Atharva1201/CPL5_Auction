import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
const addScreen = () => {
  function resetFile() {}
  return (
    <>
      <div className='bgwhite mt-5 ms-6 me-6'>
        <h1 className='ms-2'> Add New Player </h1>
        <Formik>
          <Form>
              <div className='row'>
                <div className='ms-2 col-4 p-3 required'>
                  <label htmlFor='fullName' className='form-label required'>
                    Player name
                  </label>
                  <input
                    className='form-control'
                    name='fullName'
                    type='text'
                    placeholder='Please enter player name'
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

                <div className='sm-2 col-4 p-3 required'>
                  <label htmlFor='file' className='form-label required'>
                    Player Image
                  </label>
                  <input
                    type='file'
                    className='form-control'
                    id='avatar'
                    name='avatar'
                    accept='image/png, image/jpeg, image/pdf'
                  />
                </div>
                </div>

                {/* <div className='sm-2 col-2 p-2 required'>
                <label htmlFor='description' className='form-label required'>
                  Player Description
                </label>
                <textarea
                  className='form-control'
                  name='description'
                  type='text'
                  placeholder='Please enter player description'
                  // value={fullName}
                  autoComplete='off'
                  aria-autocomplete='none'
                />
                <div> */}
                  {/* <ErrorMessage
                      name='description'
                      component='span'
                      className='error'
                    /> */}
                {/* </div> */}
              {/* </div> */}
              <div className=' col-3 p-2'>
                <Button
                  variant='btn btn-warning mx-auto'
                  style={{ fontSize: '15px', padding: '4px 40px' }}
                >
                  Submit
                </Button>
              </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default addScreen;