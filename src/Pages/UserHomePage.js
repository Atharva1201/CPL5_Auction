import React from 'react';
import Card from 'react-bootstrap/Card';
import './UserPages.css';
import { Container, Row, Tabs, Button } from 'react-bootstrap';
import { Tab } from 'bootstrap';
import {Link} from 'react-router-dom';
// import groundImage from '../../src/Photo/groundImage.png';
const UserHomePage = () => {
  const data = [
    {
      headerimg: 'http://raneonkar.com/cpl/auction4.0/img/conan_banner.jpeg',
      imageSub:
        'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1679308734%2Fzlktya6v7velm4cd9tmc.png',
      proImage:
        'https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg',
      fund: 'Fund',
      fundamount: 600,
      totalPlayersNo: 8,
      totalPlayers: 'Total Players :',
      captain: 'Captain',
      captainName: 'MS Dhoni',
      playerName: 'Onkar Rane',
      points: 3600,
    },
    {
      headerimg: 'http://raneonkar.com/cpl/auction4.0/img/conan_banner.jpeg',
      imageSub:
        'https://i.pinimg.com/originals/29/2b/d5/292bd5c291ff709c415928ff94454259.png',
      proImage:
        'https://s.ndtvimg.com/images/entities/300/rohit-sharma-857.png',
      fund: 'Fund',
      fundamount: 600,
      totalPlayersNo: 8,
      totalPlayers: 'Total Players :',
      captain: 'Captain',
      captainName: 'Rohit Sharma',
      playerName: 'Onkar Rane',
      points: 3600,
    },
    {
      headerimg: 'http://raneonkar.com/cpl/auction4.0/img/conan_banner.jpeg',
      imageSub:
        'https://th-i.thgim.com/public/sport/cricket/85u9fe/article30817624.ece/alternates/FREE_1200/rcb',
      proImage:
        'https://static.indiatvnews.com/ins-web/images/kohli-profile-1540274232.jpg',
      fund: 'Fund',
      fundamount: 600,
      totalPlayersNo: 8,
      totalPlayers: 'Total Players :',
      captain: 'Captain',
      captainName: 'Virat kohli',
      playerName: 'Onkar Rane',
      points: 3600,
    },
    {
      headerimg: 'http://raneonkar.com/cpl/auction4.0/img/conan_banner.jpeg',
      imageSub:
        'https://i.pinimg.com/originals/c8/e9/e6/c8e9e65d1d2f9d2472dd64a875c5c238.jpg',
      proImage:
        'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/148.png',
      fund: 'Fund',
      fundamount: 600,
      totalPlayersNo: 8,
      totalPlayers: 'Total Players :',
      captain: 'Captain',
      captainName: 'Nitish Rana',
      playerName: 'Onkar Rane',
      points: 3600,
    },
    {
      headerimg: 'http://raneonkar.com/cpl/auction4.0/img/conan_banner.jpeg',
      imageSub:
        'https://i.pinimg.com/736x/b3/da/e8/b3dae8a78c22f8549e973f64c1c48795.jpg',
      proImage:
        'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/214.png',
      fund: 'Fund',
      fundamount: 600,
      totalPlayersNo: 8,
      totalPlayers: 'Total Players :',
      captain: 'Captain',
      captainName: 'David Warner',
      playerName: 'Onkar Rane',
      points: 3600,
    },
    {
      headerimg: 'http://raneonkar.com/cpl/auction4.0/img/conan_banner.jpeg',
      imageSub:
        'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png',
      proImage:
        'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319938.png',
      fund: 'Fund',
      fundamount: 600,
      totalPlayersNo: 8,
      totalPlayers: 'Total Players :',
      captain: 'Captain',
      captainName: 'Hardik Pandya',
      playerName: 'Onkar Rane',
      points: 3600,
    },
  ];
  return (
    <div className='px-2'>
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
        <div className='text-end'>
          {/* <Button variant='btn btn-warning'>Admin Login</Button> */}
          <Link to="/adminlogin" className='btn btn-warning'>Admin Login</Link>
        </div>
      </div>
      <Tabs
        defaultActiveKey='teamview'
        id='uncontrolled-tab-example'
        className='mb-3 tab-teams'
      >
        <Tab eventKey='teamview' title='Team View'>
          <div className='row'>
            {data.map((item, index) => (
              <div className='col-lg-2 col-md-6 mb-3' key={index}>
                <div className='card'>
                  <img src={item.headerimg} className='img-fluid headerImg' />
                  <img src={item.imageSub} className='subimg' />
                  {/* <img src='https://w7.pngwing.com/pngs/309/810/png-transparent-indian-rupee-sign-computer-icons-currency-symbol-icon-design-rupee-angle-text-hand.png' /> */}

                  <div className='card-content mx-2 mb-2 p-3 mt-3'>
                    <div className='d-flex gap-1'>
                      <div>{item.fund}</div>
                      <div className='fw-bold'>{item.fundamount}</div>
                    </div>
                    <div class='progress mt-1'>
                      <div
                        class='progress-bar'
                        role='progressbar'
                        aria-valuenow='20'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        style={{ width: '25%' }}
                      ></div>
                    </div>
                    <div className='mt-2'>
                      {item.totalPlayers} &nbsp;
                      {item.totalPlayersNo}
                    </div>
                  </div>
                  <div className='mx-2 mb-2 py-3 px-2 shadowcustom bg-body rounded'>
                    <div className='d-flex gap-2'>
                      <div>
                        <img src={item.proImage} className='proImage' />
                      </div>
                      <div>
                        <div>{item.captain}</div>
                        <div className='fw-bold'>{item.captainName}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey='unsoldplayers' title='Unsold Players'>
          <div className='row'>
            <div className='col-lg-2 unsoldplayer'>
              <div className='mx-2 mb-2 py-3 px-2 shadowcustom bg-body rounded'>
                <div className='text-center gap-2'>
                  <div>
                    <img
                      src='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'
                      className='proImage'
                    />
                  </div>
                  <div>
                    {/* <div>Athrav</div> */}
                    <div className='fw-bold'>Atharva Mane</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-2 unsoldplayer'>
              <div className='mx-2 mb-2 py-3 px-2 shadowcustom bg-body rounded'>
                <div className='text-center gap-2'>
                  <div>
                    <img
                      src= 'https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'
                      className='proImage'
                    />
                  </div>
                  <div>
                    {/* <div>Athrav</div> */}
                    <div className='fw-bold'>Atharva Mane</div> 
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-2 unsoldplayer'>
              <div className='mx-2 mb-2 py-3 px-2 shadowcustom bg-body rounded'>
                <div className='text-center gap-2'>
                  <div>
                    <img
                      src='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'
                      className='proImage'
                    />
                  </div>
                  <div>
                    {/* <div>Athrav</div> */}
                    <div className='fw-bold'>Atharva Mane</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-2 unsoldplayer'>
              <div className='mx-2 mb-2 py-3 px-2 shadowcustom bg-body rounded'>
                <div className='text-center gap-2'>
                  <div>
                    <img
                      src='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'
                      className='proImage'
                    />
                  </div>
                  <div>
                    {/* <div>Athrav</div> */}
                    <div className='fw-bold'>Atharva Mane</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-2 unsoldplayer'>
              <div className='mx-2 mb-2 py-3 px-2 shadowcustom bg-body rounded'>
                <div className='text-center gap-2'>
                  <div>
                    <img
                      src='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'
                      className='proImage'
                    />
                  </div>
                  <div>
                    {/* <div>Athrav</div> */}
                    <div className='fw-bold'>Atharva Mane</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-2 unsoldplayer'>
              <div className='mx-2 mb-2 py-3 px-2 shadowcustom bg-body rounded'>
                <div className='text-center gap-2'>
                  <div>
                    <img
                      src='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'
                      className='proImage'
                    />
                  </div>
                  <div>
                    {/* <div>Athrav</div> */}
                    <div className='fw-bold'>Atharva Mane</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-2 unsoldplayer'>
              <div className='mx-2 mb-2 py-3 px-2 shadowcustom bg-body rounded'>
                <div className='text-center gap-2'>
                  <div>
                    <img
                      src='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'
                      className='proImage'
                    />
                  </div>
                  <div>
                    {/* <div>Athrav</div> */}
                    <div className='fw-bold'>Atharva Mane</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-2 unsoldplayer'>
              <div className='mx-2 mb-2 py-3 px-2 shadowcustom bg-body rounded'>
                <div className='text-center gap-2'>
                  <div>
                    <img
                      src='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'
                      className='proImage'
                    />
                  </div>
                  <div>
                    {/* <div>Athrav</div> */}
                    <div className='fw-bold'>Atharva Mane</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default UserHomePage;
