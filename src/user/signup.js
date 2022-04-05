import React from 'react'
import Form from 'react-bootstrap/Form'
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';
import { useState } from 'react';

// import Button from 'react-bootstrap/Button'
export default function Signup() {
    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState()
    const [confpass, setConfpass] = useState("")





    const ValidateEmail = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }


    const handleChange = () => {
        var pass = pass
        var re  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        var test = re.test(pass);
        if (test) {
            return true
            this.setState({ value: pass });
        } else {
            return alert("wrong pass")
        }
    }

    const handleClick = () => {
        if (ValidateEmail() && handleChange()) {
            let data = {
                name: name,
                lastName: lastname,
                phone: phone,
                email: email,
                pass: pass,
                confpass: confpass
            }
            console.log(data)
            return data
        } else {
            return "error"
        }
    }



    return (
        <>
            <div>

                <div className='container main'>
                    <div className='formBody d-flex'>
                        <div className='signup-left'>
                            <img className='image' src="https://images.unsplash.com/photo-1649087922851-5c3f54f6a775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2235&q=80" alt="" />
                        </div>

                        <div className='form-body'>

                            <div className='head-Form'>
                                <h4>Resister</h4>
                                <p className='heading'><strong>manage all your lottery efficiently</strong></p>
                                <p className='heading-inner'>lets get you all setup so you can verify your personal account and begin <br /> setting up your profile</p>
                            </div>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridText">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control onChange={(e) => { setName(e.target.value) }} type="text" placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridText1">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control onChange={(e) => { setLastName(e.target.value) }} type="text" placeholder="Last Name" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridNumber">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control onChange={(e) => { setPhone(e.target.value) }} type="number" placeholder="Phone" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Email" />
                                    </Form.Group>
                                </Row><Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={(e) => { setPass(e.target.value) }} type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword1">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control onChange={(e) => { setConfpass(e.target.value) }} type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                </Row>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3 checkbox">
                                        <Form.Check onChange={(e) => { }}
                                            type={type}
                                            id={`permission-${type}`}
                                            label={`Yes i want to receive lottery display Email`}
                                        />
                                    </div>
                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3 checkbox">
                                        <Form.Check onChange={(e) => { }}
                                            type={type}
                                            id={`term-${type}`}
                                            label={`Yes i agree to all the Term and conditions`}
                                        />
                                    </div>
                                ))}
                                <Button onClick={handleClick} className='pl-3' variant="primary">Create Account</Button>{' '}


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


