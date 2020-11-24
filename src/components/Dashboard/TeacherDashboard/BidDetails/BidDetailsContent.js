import React from 'react';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {Link} from 'react-router-dom';
import math from "../../../../resources/undraw_teaching_f1cm 1.png";
import { Container,Row,Col } from 'react-bootstrap';
import "./BidDetailsContent.css";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import {Modal } from 'react-bootstrap';

const BidDetailsContent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="main_content">
            <Container>
                <Row>
                    <Col sm={8}>
                        <h3>How To Solve This Math</h3>
                        <div className="name_details" >
                            <Row>
                                <AccountCircleIcon style={{marginLeft:"10px",color:"#ff8a00"}}/>
                                <p style={{fontWeight:"600"}}>Jason doe</p>
                                <StarBorderIcon style={{color:"#ff8a00"}}/>
                                <StarBorderIcon style={{color:"#ff8a00"}}/>
                                <StarBorderIcon style={{color:"#ff8a00"}}/>
                                <StarBorderIcon style={{color:"#ff8a00"}}/>
                                <StarBorderIcon style={{color:"#ff8a00"}}/>
                                <p style={{color:"#ff8a00"}}> 4.5 </p>
                                <p>(35 Reviews)</p>
                            </Row>
                        </div>
                        <div className="img_details">
                            <img src={math} alt="" style={{paddingLeft:"20px", width:"45%"}}/>
                            <br/>
                            <h5>Assignment Details</h5>
                            <p style={{fontWeight:"500"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat adipisci id, cumque nesciunt repellendus quas tempora sequi officiis maiores atque odio ducimus cupiditate voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut.</p>
                            <h5>Skill Required</h5>
                            <Row style={{fontWeight:"400"}}>
                               <a href="#" className="skills" style={{textDecoration:"none"}}>Mathmetics</a> 
                               <a href="#" className="skills" style={{textDecoration:"none"}}>Calculus</a>
                               <a href="#" className="skills" style={{textDecoration:"none"}}>Calculus Math</a>
                            </Row>
                            <br/>
                            <h5>Attachments:</h5>
                            <div style={{color:"#ff8a00"}}>
                                <p>Screenshot2020 14 at 7:54:33.png</p>
                                <p>Screenshot2020 14 at 7:54:33.png</p>
                                <p>Screenshot2020 14 at 7:54:33.png</p>
                                <p>Screenshot2020 14 at 7:54:33.png</p>
                                <p>Screenshot2020 14 at 7:54:33.png</p>
                            </div>
                        </div>
                        <br/>
                        <div className="about_profile">
                            <h5>About Jason doe</h5>
                            <Row>
                                <AccountCircleIcon style={{height:"80px",width:"90px",marginTop:"5px",color:"#ff8a00"}}/>
                                <div className="profile_rating" style={{paddingTop:"15px"}}>
                                <h6 style={{fontWeight:"600"}} >Jason doe</h6>
                                <Row >
                                <StarBorderIcon style={{color:"#ff8a00"}}/>
                                <StarBorderIcon style={{color:"#ff8a00"}}/>
                                <StarBorderIcon style={{color:"#ff8a00"}}/>
                                <StarBorderIcon style={{color:"#ff8a00"}}/>
                                <StarBorderIcon style={{color:"#ff8a00"}}/>
                                <p style={{color:"#ff8a00"}}> 4.5 </p>
                                <p>(35 Reviews)</p>
                                </Row>
                                </div>
                            </Row>
                            <br/>
                            <p style={{fontWeight:"500"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci sunt atque nostrum ducimus odio, impedit quasi corporis voluptatum reprehenderit Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, praesentium!</p>
                        </div>   
                    </Col>
                    <Col sm={4}>
                        <div className="details_bid">
                            <h6>Assignment Name: <span>How To Solve This Math</span></h6><br/>
                            <h6>Subject: <span>Mathmatics</span></h6><br/>
                            <h6>Time Duration: <span>72 hours</span></h6><br/>
                            <h6>Price: <span>45$</span></h6><br/>
                            <Button
                                variant="warning"
                                className="brand-btn"
                                onClick={handleShow}
                                style={{ color: "white", fontSize: 16 }}
                            >
                                Bid Now!
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Enter a Number</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input type="text" className="form-control"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                     Close
                    </Button>
                    <Button variant="warning">Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BidDetailsContent;