import React, {Component} from 'react';
import {
    Button,
    ControlLabel,
    FormControl,
    FormGroup,
    Modal,
    InputGroup, Checkbox
} from "react-bootstrap";
import {connect} from "react-redux";


class NewDriver extends Component {
    render() {
        return (
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>Create new driver</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup controlId="tel-number">
                                <ControlLabel>Phone number (with code)</ControlLabel>
                                <InputGroup>
                                    <InputGroup.Button>
                                        <Button>+</Button>
                                    </InputGroup.Button>
                                    <FormControl type="text" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup controlId="formControlName">
                                <ControlLabel>Name</ControlLabel>
                                <FormControl
                                    onChange={(e)=>{this.setState({quantity: e.target.value})}}
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlDate">
                                <ControlLabel>BirthDate</ControlLabel>
                                <FormControl
                                    onChange={(e)=>{this.setState({quantity: e.target.value})}}
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlCars">
                                <ControlLabel>Car</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    {
                                        this.props.carsList && this.props.carsList.map((item, index)=>{
                                            return(
                                                <option key={index}>{item.number}</option>
                                            )
                                        })
                                    }
                                </FormControl>
                            </FormGroup>
                            <FormGroup>
                                <Checkbox inline>Active</Checkbox>
                            </FormGroup>
                            <FormGroup controlId="formControlPosition">
                                <ControlLabel>Position</ControlLabel>
                                <FormControl
                                    onChange={(e)=>{this.setState({quantity: e.target.value})}}
                                    type="number"
                                    min='1'
                                    step='1'
                                />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit"
                                bsStyle="primary"
                                onClick={(e)=>{
                                    e.preventDefault()
                                    this.props.close()
                                }}
                        >Submit</Button>
                        <Button type="submit"
                                bsStyle="danger"
                                onClick={(e)=>{
                                    e.preventDefault()
                                    this.props.close()
                                }}
                        >Close</Button>
                    </Modal.Footer>
                </Modal>
        );
    }
}

export default connect(
    (state) => ({
        carsList: state.Cars.carsList
    }),
    (dispatch) => ({
    })
)(NewDriver);