import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const MusicianForm = (props) => {
  return (
    <>
    <Form>
      <FormGroup>
        <Label for="firstName">first name</Label>
        <Input type="text" name="firstName" id="firstName" placeholder="enter first name" />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">last name</Label>
        <Input type="text" name="lastName" id="lastName" placeholder="enter last name" />
      </FormGroup>
      <FormGroup>
        <Label for="instrument">instrument(s)</Label>
        <Input type="text" name="instrument" id="instrument" placeholder="enter instrument" />
      </FormGroup>            
    </Form>
    <Button className="btn btn-sm">Submit</Button>
    </>
  );
}

export default MusicianForm;