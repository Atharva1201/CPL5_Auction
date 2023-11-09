import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
const addScreen = () => {
  const playerSubmit = () => {};
  //   function resetFile() {}
  return (
    <>
      <div className='bgwhite m-5 px-3 py-2'>
        <h1 className='ms-2'> Add New Player </h1>
        <Formik>
          <Form>
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-md-3 required'>
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

              <div className='col-xs-12 col-sm-12 col-md-3 required'>
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
              <div className='col-xs-12 col-sm-12 col-md-3 required'>
                <label htmlFor='file' className='form-label required'>
                  Player Category
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='avatar'
                  name='avatar'
                  placeholder='Please enter player category'
                  // value={fullName}
                  autoComplete='off'
                  aria-autocomplete='none'
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
            <div className='row mt-3'>
              <div className='col-12'>
                <Button
                  type='button'
                  variant='btn btn-warning mx-auto'
                  style={{ fontSize: '15px', padding: '4px 40px' }}
                  onClick={playerSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default addScreen;
