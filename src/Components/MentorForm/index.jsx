import React, { Component } from 'react'
//import firebase from '../../Services/firebase'

import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

class MentorForm extends Component{
    constructor(){
        super();
        this.state = {
            name:"",
            email:"",
            module:""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler( event ){
        let value = event.target.value
        let inputName = event.target.name
        console.log([inputName])
        this.setState({ [inputName]: value })
        console.log(value)
    }

    onSubmitHandler(){
        let name = this.state.name;
        let module = this.state.module;
        let email = this.state.email;

        let mentorObject = { name, module, email }

        console.log( mentorObject )
        var url = 'https://react-vercel.firebaseio.com/mentors.json';
        var data = mentorObject;

        fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }

    componentDidMount(){
        console.log("hola koders")
        fetch('https://react-vercel.firebaseio.com/.json').then(
            response => {
                response.json().then(
                    json => {
                        console.log(json)
                    }
                )
            }
        )
    }

    render(){
        return(
            <Container>
                <Row>
                <Col xs="12">
                    <Form className="bg-dark text-white p-3 mt-3 border rounded">
                    <FormGroup>
                        <Label for="exampleEmail">Nombre:</Label>
                        <Input type="text" name="name"  placeholder="with a placeholder" onChange={this.onChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Módulo:</Label>
                        <Input type="text" name="module"  placeholder="with a placeholder" onChange={this.onChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email"  placeholder="with a placeholder" onChange={this.onChangeHandler}/>
                    </FormGroup>
                    
                    <Button onClick={this.onSubmitHandler}>Submit</Button>
                    </Form>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default MentorForm