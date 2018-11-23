import React, { Component } from "react";
import {Grid, Row, Col, Table, Checkbox, FormGroup, DropdownButton, MenuItem, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { Routines } from 'common/api'
import {connect} from "react-redux";
import NewDriver from "./NewDriver";

class Drivers extends Component {
    componentDidMount(){
        Routines.admin.getDriversList({}, this.props.dispatch)
    }
    thArray = [<FormGroup><Checkbox
        onChange={e =>
            this.checkAll(e.target.checked)
        }
        inline/></FormGroup>,"Position", "ID","Name", "Note", "Активность"]
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
        this.props.driversList &&
        this.props.driversList.map(v => {
            checkList[v.id] = check;
            return "";
        });
        let c = check ? this.props.driversList.length : 0
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
                                      <MenuItem onClick={()=>{
                                          // let checkList = this.state.checkList
                                          // Object.keys(checkList).map(function(key, index) {
                                          //     if(checkList[key])
                                          //     Routines.admin.driverDelete({request:{
                                          //         id: checkList[key]
                                          //     }}, this.props.dispatch)
                                          // });
                                      }} key="1">Delete</MenuItem>
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
                        title="Drivers List"
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
                            {this.props.driversList && this.props.driversList.map((prop, key) => {
                                return (
                                    <tr key={key}>
                                        <td><FormGroup><Checkbox
                                            onChange={e =>
                                                this.onChange(
                                                    prop.id,
                                                    e.target.checked
                                                )
                                            }
                                            checked={this.state.checkList[prop.id]}
                                            inline/></FormGroup></td>
                                        <td>{prop.position}</td>
                                        <td><Link to={`/drivers/${prop.id}`}>{prop.id}</Link></td>
                                        <td>{prop.name}</td>
                                        <td>{prop.note}</td>
                                        <td>{prop.active ? "Активный" : "Не активный"}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                          </Table>
                        }
                    />
                  </Col>
                </Row>
                  <NewDriver show={this.state.show} close={()=>this.handleClose()} open={()=>this.handleShow()}/>
              </Grid>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        driversList: state.Drivers.driversList
    }
}
export default connect(mapStateToProps)(Drivers)