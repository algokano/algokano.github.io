import React, { Component } from "react";
import {
    Grid, Row, Col, Table, Checkbox, FormGroup,
    ControlLabel, FormControl, InputGroup
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { Routines } from 'common/api'
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {ClipLoader} from "react-spinners";
import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";

class DriverAdd extends Component {
    componentDidMount(){
        //Routines.admin.getDriversList({}, this.props.dispatch)
       Routines.admin.getCarsList({}, this.props.dispatch)
        this.setState({ _notificationSystem: this.refs.notificationSystem });
    }
    constructor(props) {
        super(props);
        this.handleNotificationClick = this.handleNotificationClick.bind(this);
        this.state = {
            _notificationSystem: null
        };
    }
    baza = [{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Rashidov Rustam","tabletSerial":"","active":true,"car_id":"5b502129b022aa0014ff96df","position":100,"id":"5b5021bbb022aa0014ff96e0"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Toshboltayev Baxtiyor","tabletSerial":"","active":true,"car_id":"57cbb4faa9ff360011cf700d","position":5,"id":"586eb4d40a4797110015517c"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Ibragimxodjayev Baxrom","tabletSerial":"","active":true,"car_id":"57c2ad8a58bf9e00119bcc24","position":3,"id":"586eb4e50a4797110015517d"},{"phone":null,"birthDate":"2018-06-27T00:00:00.000Z","passportSerial":null,"innSerial":null,"image":null,"address":null,"note":"7","name":"Alimatov Ibroxim","tabletSerial":null,"active":true,"car_id":"57cbb539a9ff360011cf700f","position":7,"id":"586eb51b0a4797110015517e"},{"phone":null,"birthDate":null,"passportSerial":null,"innSerial":null,"image":null,"address":null,"note":null,"name":"Saidkasimov Hikmatilla","tabletSerial":null,"active":true,"car_id":"57cbb54ea9ff360011cf7010","position":8,"id":"586eb52e0a4797110015517f"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Umarov Alijon","tabletSerial":"","active":true,"car_id":"57cbb56da9ff360011cf7011","position":9,"id":"586eb53f0a47971100155180"},{"phone":null,"birthDate":null,"passportSerial":null,"innSerial":null,"image":null,"address":null,"note":null,"name":"Ismatillayev Hislatilla","tabletSerial":null,"active":true,"car_id":"57cbb581a9ff360011cf7012","position":10,"id":"586eb5b60a47971100155181"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Лыпко Александр","tabletSerial":"","active":true,"car_id":"57cbb5aaa9ff360011cf7013","position":11,"id":"586eb6580a47971100155182"},{"phone":null,"birthDate":null,"passportSerial":null,"innSerial":null,"image":null,"address":null,"note":null,"name":"Djuraboev Jamshid","tabletSerial":null,"active":true,"car_id":"57cbb5c1a9ff360011cf7014","position":12,"id":"586eb6690a47971100155183"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Mirzadjanov G'anisher","tabletSerial":"","active":true,"car_id":"57cbb5d8a9ff360011cf7015","position":13,"id":"586eb67e0a47971100155184"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Nurmuxamed Xasan","tabletSerial":"","active":true,"car_id":"57cbb5eaa9ff360011cf7016","position":14,"id":"586eb69d0a47971100155185"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Shiraxmedov Sobirjon","tabletSerial":"","active":true,"car_id":"57cbb5fea9ff360011cf7017","position":15,"id":"586eb6ad0a47971100155186"},{"phone":null,"birthDate":null,"passportSerial":null,"innSerial":null,"image":null,"address":null,"note":null,"name":"Djuraboev Rovshan","tabletSerial":null,"active":true,"car_id":"580b0f9c7bfd4c0011b1cc8b","position":16,"id":"586eb6ece0b34911007a8738"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Abduramonov Ma'ruf","tabletSerial":"","active":true,"car_id":"580b0fdd7bfd4c0011b1cc8e","position":20,"id":"586eb799e0b34911007a873b"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Spirkin Mixail","tabletSerial":"","active":true,"car_id":"580b0fee7bfd4c0011b1cc8f","position":21,"id":"586eb7a7e0b34911007a873c"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Begmatov Darhon","tabletSerial":"","active":true,"car_id":"586eb3ed0a47971100155176","position":22,"id":"586eb7b7e0b34911007a873d"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Shakirov Otabek","tabletSerial":"","active":true,"car_id":"586eb4070a47971100155177","position":23,"id":"586eb7d9e0b34911007a873e"},{"phone":"123","passportSerial":null,"innSerial":null,"address":null,"note":"c","name":"Farrux","tabletSerial":"11,","active":true,"car_id":"57c29f58bd58a600116ca834","position":100,"id":"587799503e7e791100fab88c"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Чилотонов Мурод","tabletSerial":"","active":true,"car_id":"57c2ab6b58bf9e00119bcc22","position":1,"id":"586eb4950a47971100155178"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Раимов Зафap","tabletSerial":"","active":true,"car_id":"57c2ad6158bf9e00119bcc23","position":2,"id":"586eb4a60a47971100155179"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Asomov Shuhrat","tabletSerial":"","active":true,"car_id":"57c2ae2358bf9e00119bcc25","position":4,"id":"586eb4c70a4797110015517b"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Alimov Rustam","tabletSerial":"","active":true,"car_id":"580b0fb67bfd4c0011b1cc8c","position":17,"id":"586eb6fde0b34911007a8739"},{"phone":"","birthDate":null,"passportSerial":"","innSerial":"","image":null,"address":"","note":"","name":"Ergashov Baxodir","tabletSerial":"","active":true,"car_id":"580b0fc87bfd4c0011b1cc8d","position":19,"id":"586eb74ee0b34911007a873a"},{"phone":"","passportSerial":"","innSerial":"","address":"","note":"","name":"Tuymaev Rustam","tabletSerial":"","active":true,"car_id":"57cbb514a9ff360011cf700e","position":7,"id":"58a18b69445e990011ea8673"},{"phone":null,"passportSerial":null,"innSerial":null,"address":null,"note":null,"name":"Satvoldiev Barat","tabletSerial":null,"active":true,"car_id":"580b0fc87bfd4c0011b1cc8d","position":19,"id":"59ab85bbe3b4320011868ec2"},{"phone":"","passportSerial":"","innSerial":"","address":"","note":"","name":"Djamolov Alisher","tabletSerial":"","active":false,"car_id":"57cbb5aaa9ff360011cf7013","position":11,"id":"587704813e7e791100fab861"},{"phone":"","passportSerial":"","innSerial":"","address":"","note":"","name":"Latipov Jasur","tabletSerial":"","active":false,"car_id":"57cbb5aaa9ff360011cf7013","position":11,"id":"587704823e7e791100fab862"},{"phone":null,"passportSerial":null,"innSerial":null,"address":null,"note":null,"name":"Alimatov Ibroxim","tabletSerial":null,"active":false,"car_id":"57cbb5c1a9ff360011cf7014","position":12,"id":"58a54841a8f20a00119052f2"},{"phone":null,"passportSerial":null,"innSerial":null,"address":null,"note":null,"name":"Saidxodjaev Saidorip","tabletSerial":null,"active":false,"car_id":"57cbb5d8a9ff360011cf7015","position":13,"id":"58b12c0b6852340011d8a31c"},{"phone":null,"passportSerial":null,"innSerial":null,"address":null,"note":null,"name":"Axmedov Ravshan","tabletSerial":null,"active":false,"car_id":"57cbb4faa9ff360011cf700d","position":19,"id":"59b4c8ecb8e38400117eb899"}]

    handleNotificationClick(position) {
        this.state._notificationSystem.addNotification({
            title: <span data-notify="icon" className="pe-7s-id" />,
            message: (
                <div>
                    Element successfully created
                </div>
            ),
            level: 'info',
            position: position,
            autoDismiss: 15
        });
    }

    onPress(){
        const {handleSubmit} = this.props
        return handleSubmit((data)=>{
            //console.log(data)
            Routines.admin.driverAdd({request:{
                data
            }}, this.props.dispatch)
        })()
    }
    render() {
        if(this.props.toastActive)
            this.handleNotificationClick('tr')
        return (
            <div className="content">
                <NotificationSystem ref="notificationSystem" style={style} />
              <Grid fluid>
                  <Card
                    content={
                        <form>
                            <FormGroup controlId="tel-number">
                                <ControlLabel>Phone number (with code)</ControlLabel>
                                <Field
                                    name={'phone'}
                                    component={(field)=>(
                                        <FormControl type="text"
                                                     value={field.value} {...field.input}
                                        />
                                    )}
                                    placeholder={''}
                                    type={'text'}
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlName">
                                <ControlLabel>Name</ControlLabel>
                                <Field
                                    name={'name'}
                                    component={(field)=>(
                                        <FormControl type="text"
                                                     value={field.value} {...field.input}
                                        />
                                    )}
                                    placeholder={''}
                                    type={'text'}
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlDate">
                                <ControlLabel>BirthDate</ControlLabel>
                                <Field
                                    name={'birthDate'}
                                    component={(field)=>(
                                        <FormControl type="text"
                                                     value={field.value} {...field.input}
                                        />
                                    )}
                                    placeholder={''}
                                    type={'text'}
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlDate">
                                <ControlLabel>Passport Serial</ControlLabel>
                                <Field
                                    name={'passportSerial'}
                                    component={(field)=>(
                                        <FormControl type="text"
                                                     value={field.value} {...field.input}
                                        />
                                    )}
                                    placeholder={''}
                                    type={'text'}
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlDate">
                                <ControlLabel>INN Serial</ControlLabel>
                                <Field
                                    name={'innSerial'}
                                    component={(field)=>(
                                        <FormControl type="text"
                                                     value={field.value} {...field.input}
                                        />
                                    )}
                                    placeholder={''}
                                    type={'text'}
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlDate">
                                <ControlLabel>Tablet Serial</ControlLabel>
                                <Field
                                    name={'tabletSerial'}
                                    component={(field)=>(
                                        <FormControl type="text"
                                                     value={field.value} {...field.input}
                                        />
                                    )}
                                    placeholder={''}
                                    type={'text'}
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlDate">
                                <ControlLabel>Address</ControlLabel>
                                <Field
                                    name={'address'}
                                    component={(field)=>(
                                        <FormControl type="text"
                                                     value={field.value} {...field.input}
                                        />
                                    )}
                                    placeholder={''}
                                    type={'text'}
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlCars">
                                <ControlLabel>Car</ControlLabel>
                                <Field
                                    name={'car_id'}
                                    component={(field)=>(
                                        <FormControl componentClass="select" placeholder="select"
                                                     value={field.value} {...field.input}>
                                            {
                                                this.props.carsList && this.props.carsList.map((item, index)=>{
                                                    return(
                                                        <option key={index}>{item.number}</option>
                                                    )
                                                })
                                            }
                                        </FormControl>
                                    )}
                                    placeholder={''}
                                    type={'text'}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Field
                                    name={'active'}
                                    placeholder={''}
                                    type={'checkbox'}
                                    component={'input'}
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlPosition">
                                <ControlLabel>Position</ControlLabel>
                                <Field
                                    name={'position'}
                                    component={(field)=>(
                                        <FormControl
                                            type="number"
                                            min='1'
                                            step='1'
                                            value={field.value} {...field.input}
                                        />
                                    )}
                                    placeholder={''}
                                    type={'text'}
                                />
                            </FormGroup>
                            <button type="submit" onClick={(e)=>{
                                e.preventDefault()
                                this.onPress()
                            }}>
                                Submit
                            </button>
                        </form>
                    }
                  />
                  <div style={{position:'absolute',  bottom: 300, left:400,
                      justifyContent: 'center',
                      alignItems: 'center' }}>
                      <ClipLoader
                          sizeUnit={"px"}
                          size={50}
                          color={'#337AB7'}
                          loading={this.props.is_Active}
                      />
                  </div>
              </Grid>
            </div>
        );
    }
}
const _DriverAdd = reduxForm({
    form: 'DriverAdd',
    enableReinitialize: true
})(DriverAdd);
const mapStateToProps = (state, ownProps) => {
    return {
        initialValues:{
            name:'',
            passportSerial:'',
            innSerial:'',
            car_id:'',
            phone:'',
            address:'',
            position:'100',
            tabletSerial:'',
            note:''
        },
        carsList: state.Cars.carsList,
        driversList: state.Drivers.driversList,
        is_Active: state.DriverAdd.is_Active,
        toastActive: state.DriverAdd.toastActive
    }
}
export default connect(mapStateToProps)(_DriverAdd)