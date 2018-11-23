import React, { Component } from "react";
import {
    Grid, Row, Col, Table, Checkbox, FormGroup, FormControl, Button, DropdownButton,
    MenuItem
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { Routines } from 'common/api'
import {connect} from "react-redux";
import CreateNewCar from "../../components/Card/CreateNewCar";

class Cars extends Component {
    componentDidMount(){
        Routines.admin.getCarsList({}, this.props.dispatch)
    }
    thArray = [<FormGroup><Checkbox
        onChange={e =>
            this.checkAll(e.target.checked)
        }
        inline/></FormGroup>,"ID","Number", "Note"]
    state = {
        show: false,
        checkList: {},
        count:0
    };

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({show: true})
    }
    componentWillMount() {
        this.checkAll(false)
    }
    onChange(key, value) {
        let c = this.state.count
        if(value) c++
        else c--
        this.setState({count:c, checkList: { ...this.state.checkList, [key]: value } });
    }
    checkAll(check){
        let checkList = {};
        this.props.carsList &&
        this.props.carsList.map(v => {
            checkList[v.id] = check;
            return "";
        });
        let c = check ? this.props.carsList.length : 0
        this.setState({count:c, checkList });
    }

    render() {
        return (
            <div className="content">
              <Grid fluid>
                  <Row className="text-right">
                      <Col md={10}>
                          {
                              this.state.count ?
                                  <DropdownButton
                                      bsStyle="primary"
                                      id="input-dropdown-addon"
                                      title={this.state.count + " Selected"}
                                  >
                                      <MenuItem key="1">Delete</MenuItem>
                                  </DropdownButton>
                                  : null
                          }
                      </Col>
                      <Col md={2}>
                          <Button bsStyle="danger" onClick={(e)=>{
                              e.preventDefault()
                              this.handleShow()
                          }}>Create</Button>
                      </Col>
                  </Row>
                <Row>
                  <Col md={12}>
                    <Card
                        title="Cars List"
                        category=""
                        ctTableFullWidth
                        ctTableResponsive
                        content={
                          <Table striped hover>
                            <thead>
                            <tr>
                                {this.thArray.map((prop, key) => {
                                    return <th key={key}>{prop}</th>;
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.carsList && this.props.carsList.map((prop, key) => {
                                return (
                                    <tr key={key}>
                                        <td><FormGroup><Checkbox
                                            onChange={e =>
                                                this.onChange(
                                                    prop.id,
                                                    e.target.checked
                                                )
                                            }
                                            checked={
                                                this.state.checkList[
                                                    prop.id
                                                    ]
                                            }
                                            inline/></FormGroup></td>
                                        <td>{prop.id}</td>
                                        <td>{prop.number}</td>
                                        <td>{prop.note}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                          </Table>
                        }
                    />
                  </Col>
                </Row>
                  <CreateNewCar show={this.state.show} close={()=>this.handleClose()} open={()=>this.handleShow()}/>
              </Grid>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        carsList: state.Cars.carsList
    }
}
export default connect(mapStateToProps)(Cars)