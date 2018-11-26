import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';

import { FormGroup, Label, Col } from 'reactstrap';

import Button from '@skbkontur/react-ui/Button';
import Input from '@skbkontur/react-ui/Input';
import Textarea from '@skbkontur/react-ui/Textarea';


class ClientProjectForm extends React.Component {
    render() {
        let { onSubmit, project } = this.props;
        return (
            <Formik
                initialValues={project}
                onSubmit={onSubmit}
                render={({ 
                    values,
                    handleChange, 
                    handleBlur,
                    isSubmitting 
                }) => (
                    <Form>
                        <FormGroup row>
                            <Label  for="title"
                                    className="col-sm-2 col-form-label">Название</Label>
                            <Col sm={8}>
                                <Input 
                                    type="text" 
                                    id="title"
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                    value={values.title} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label  for="description" 
                                    className="col-sm-2 col-form-label">Описание</Label>
                            <Col sm={8}>
                                <Textarea 
                                    id="description"
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                    value={values.description}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={3}>
                                <Button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    width={150} >
                                        Сохранить
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                )} 
            />
        )
    }
}

ClientProjectForm.propTypes = {
    onSubmit:   PropTypes.func.isRequired,
    project:    PropTypes.shape({
        title:          PropTypes.string.isRequired,
        description:    PropTypes.string.isRequired
    }).isRequired,
}

ClientProjectForm.defaultProps = {
    project: {
        title: '',
        description: '',
    },
    onSubmit: (values, actions) => {
        console.log(values, actions);
    }
}

export { ClientProjectForm };