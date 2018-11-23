import React, { Component } from "react";
import {
    Grid, Row, Col,
    ControlLabel, FormControl, Table
} from "react-bootstrap";
import {reduxForm, Field, formValueSelector} from 'redux-form'
import {connect} from "react-redux";
import Routines from "../../common/api/routines";
import Calendar from "react-calendar";
import { ClipLoader } from 'react-spinners';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";
import RenderFields from './RenderFields'
import ChartLine from "./Chart";
let moment = require('moment');

class DriverInfo extends Component {
    componentDidMount(){
        Routines.admin.getDriverInfo({request:{
            id:this.props.match.params && this.props.match.params.id
        }}, this.props.dispatch)
        this.getRows(this.state.startDate, this.state.endDate)
        this.setState({ _notificationSystem: this.refs.notificationSystem });
    }
    getRows(start, end){
        Routines.admin.getRows({
            request:{
                startDate:start.toISOString(),
                endDate:end.toISOString(),
                id:this.props.match.params && this.props.match.params.id
            }}, this.props.dispatch)
    }
    onPress(){
        const {handleSubmit} = this.props
        return handleSubmit((data)=>{
            Routines.admin.driverEdit({request:{
                id:this.props.match.params && this.props.match.params.id,
                data
            }}, this.props.dispatch)
        })()
    }
    state = {
        startDate:moment(new Date()).subtract('days', 14).toDate(),
        endDate: moment(new Date()).startOf('day').toDate(),
        _notificationSystem: null
    }
    thArray = ["Plan", "Date","Status"]

    handleNotificationClick(position) {
        this.state._notificationSystem.addNotification({
            title: <span data-notify="icon" className="pe-7s-id" />,
            message: (
                <div>
                    Element successfully edited
                </div>
            ),
            level: 'info',
            position: position,
            autoDismiss: 15
        });
    }
  render() {
      if(this.props.toastActive)
          this.handleNotificationClick('tr')
      return (
          <div className="content">
              <NotificationSystem ref="notificationSystem" style={style} />
              <Grid fluid>
                  <form>
                      <Row>
                          <Col className={"card"} md={4}>
                              <div className={"content"}>
                                  {RenderFields("Name", {fieldName:"name", componentName:'input', placeholder:'',type:'text', style:{width:300}})}
                                  {RenderFields("Phone", {fieldName:"phone", componentName:'input', placeholder:'',type:'text', style:{width:300}})}
                                  {RenderFields("Address", {fieldName:"address", componentName:'input', placeholder:'',type:'text', style:{width:300}})}
                                  {RenderFields('Passport Serial', {fieldName:'passportSerial', componentName:'input', type:'text', style:{width:300}})}
                                  {RenderFields('INN Serial', {fieldName:'innSerial', componentName:'input', type:'text', style:{width:300}})}
                                  {RenderFields('Car ID', {fieldName:'car_id', componentName:'input', type:'text', style:{width:300}})}
                                  {RenderFields('Tablet Serial', {fieldName:'tabletSerial', componentName:'input', type:'text', style:{width:300}})}
                                  {RenderFields('Active', {fieldName:'active', componentName:'input', type:'checkbox'})}
                                  {RenderFields('Note', {fieldName:'note', componentName:'input', type:'text', style:{width:300}})}
                                  {RenderFields('Position', {fieldName:'position', componentName:'input', type:'text', style:{width:300}})}
                                  <button style={{marginBottom:30}} type="submit" onClick={(e)=>{
                                      e.preventDefault()
                                      this.onPress()
                                  }}>
                                      Submit
                                  </button>
                              </div>
                          </Col>
                          <Col md={8}>
                              <Card
                                  content={
                                      <Row>
                                          <Col md={6}>
                                              <ControlLabel>Start</ControlLabel>
                                              <Calendar
                                                  onChange={(date) => {
                                                      this.setState({ startDate:date })
                                                      this.getRows(date, this.state.endDate)
                                                  }}
                                                  value={this.state.startDate}
                                              />
                                              <FormControl
                                                  disabled
                                                  type="text"
                                                  value={moment(this.state.startDate).format("DD-MM-YYYY")}
                                                  placeholder="Start Time"
                                              />
                                          </Col>
                                          <Col md={6}>
                                              <ControlLabel>End</ControlLabel>
                                              <Calendar
                                                  onChange={(date) => {
                                                      this.setState({ endDate:date })
                                                      this.getRows(this.state.startDate, date)
                                                  }}
                                                  value={this.state.endDate}
                                              />
                                              <FormControl
                                                  disabled
                                                  type="text"
                                                  value={moment(this.state.endDate).format("DD-MM-YYYY")}
                                                  placeholder="Start Time"
                                              />
                                          </Col>
                                      </Row>
                                  }
                              />
                              <Card
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
                                          {this.props.rows && this.props.rows.map((prop, key) => {
                                              return (
                                                  <tr key={key}>
                                                      <td>{prop.plan}</td>
                                                      <td>{moment(prop.date).format("DD-MM-YYYY")}</td>
                                                      <td>{prop.status}</td>
                                                  </tr>
                                              );
                                          })}
                                          </tbody>
                                      </Table>
                                  }
                              />
                          </Col>
                      </Row>
                  </form>
                  {ChartLine(this.props.dates, this.props.plan)}
                  <div style={{position:'absolute',  top: 300, left:400,
                      justifyContent: 'center',
                      alignItems: 'center' }}>
                      <ClipLoader
                          sizeUnit={"px"}
                          size={50}
                          color={'#337AB7'}
                          loading={this.props.processing}
                      />
                  </div>
              </Grid>
          </div>
      );
  }
}

const _DriverInfo = reduxForm({
    form: 'driverInfo',
    enableReinitialize: true
})(DriverInfo);

export default connect(state => {
    return {
        initialValues:{
            name: state.DriverInfo.data.name,
            passportSerial: state.DriverInfo.data.passportSerial,
            innSerial: state.DriverInfo.data.innSerial,
            car_id: state.DriverInfo.data.car_id,
            phone: state.DriverInfo.data.phone,
            address: state.DriverInfo.data.address,
            position: state.DriverInfo.data.position,
            id: state.DriverInfo.data.id,
            active: state.DriverInfo.data.active,
            tabletSerial: state.DriverInfo.data.tabletSerial,
            note: state.DriverInfo.data.note,
        },
        dates:state.DriverInfo.dates,
        plan:state.DriverInfo.plan,
        processing:state.DriverInfo.processing,
        rows:state.DriverInfo.rows,
        toastActive: state.DriverInfo.toastActive

    }
})(_DriverInfo)