import React from 'react'
import {
    Row, Col,
    FormGroup, ControlLabel
} from "react-bootstrap";
import {Field} from 'redux-form'

const RenderFields = (label, field)=>{
    return(
        <FormGroup>
            <ControlLabel>{label}</ControlLabel>
            <Row>
                <Col md={12}>
                    <Field
                        style={field.style}
                        name={field.fieldName}
                        component={field.componentName}
                        placeholder={field.placeholder}
                        type={field.type}
                    />
                </Col>
            </Row>
        </FormGroup>
    )
}
export default RenderFields