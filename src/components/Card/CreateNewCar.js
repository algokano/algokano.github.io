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


class CreateNewCar extends Component {
    render() {
        return (
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>Create new car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup controlId="formControlNumber">
                            <ControlLabel>Number</ControlLabel>
                            <FormControl
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup controlId="formControlNote">
                            <ControlLabel>Note</ControlLabel>
                            <FormControl type="text"/>
                        </FormGroup>
                        <FormGroup controlId="formControlCars">
                            <ControlLabel>Car</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">select</option>
                                <option>Nexia</option>
                            </FormControl>
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
)(CreateNewCar);