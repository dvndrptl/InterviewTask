import React from 'react'
import Form from 'react-bootstrap/Form'
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';
import { useState } from 'react';

// import Button from 'react-bootstrap/Button'
export default function Login() {
    return (
        <>
            <div>

                <div className='container main'>
                    <div className='formBody d-flex'>
                        <div className='signup-left'>
                            <img className='image' src="https://images.unsplash.com/photo-1648737851533-764e54e52b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                        </div>
                        <div className='form-body'>

                            <div className='head-Form'>
                                <h4>Resister</h4>
                                <p className='heading'><strong>manage all your lottery efficiently</strong></p>
                                <p className='heading-inner'>lets get you all setup so you can verify your personal account and begin <br /> setting up your profile</p>
                            </div>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="email" placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="password" placeholder="Last Name" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="email" placeholder="Phone" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="password" placeholder="Email" />
                                    </Form.Group>
                                </Row><Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="email" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                </Row>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3 checkbox">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={`Yes i want to receive lottery display Email`}
                                        />
                                    </div>
                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3 checkbox">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={`Yes i agree to all the Term and conditions`}
                                        />
                                    </div>
                                ))}
                                <Button className='pl-3' variant="primary">Create Account</Button>{' '}


                            </Form>
                            <br />
                            <p>Already have an account? <span className='text-primary'>Login</span></p>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}


