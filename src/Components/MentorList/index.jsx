import React, { Component } from 'react'
import firebase from '../../Services/firebase'

import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Table} from 'reactstrap';

class MentorList extends Component{
    constructor(){
        super();
        this.state = {
            mentorsList:{}
        }
    }

    componentDidMount(){
        console.log("hola koders")
        const mentorsRef = firebase.database().ref('/mentors')
        mentorsRef.on('value', snapshot => {
            console.log('snapshot', snapshot.val())
            this.setState({mentorsList:snapshot.val()})
        }) 
    }

    render(){
        return(
            <Container>
                <Row>
                <Col xs="12" md="6">
                <Table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Módulo</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(this.state.mentorsList).map( (key, index) => {
                                let mentorName = this.state.mentorsList[key].name;
                                let mentorEmail = this.state.mentorsList[key].email;
                                let mentorModule = this.state.mentorsList[key].module;
                                return( 
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{mentorName}</td>
                                    <td>{mentorEmail}</td>
                                    <td>{mentorModule}</td>
                                </tr>
                                )
                            })
                        }
                        
                    </tbody>
                    </Table>            
                </Col>
                </Row>
            </Container>
        )
    }
}

export default MentorList