import Link from 'next/link';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Form,
    Responsive,
    Segment,
    Sidebar,
    Visibility
  } from "semantic-ui-react";

export default function Feedback() {


  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
  
  class FormExampleSubcomponentControl extends Component {
    state = {}
  
    handleChange = (e, { value }) => this.setState({ value })
  
    render() {
      const { value } = this.state
      return (
        <Form> 
          <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' />
            <Form.Input fluid label='Last name' placeholder='Last name' />
            <Form.Select
              fluid
              label='Gender'
              options={options}
              placeholder='Gender'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Size</label>
            <Form.Radio
              label='Small'
              value='sm'
              checked={value === 'sm'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Medium'
              value='md'
              checked={value === 'md'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Large'
              value='lg'
              checked={value === 'lg'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button>Submit</Form.Button>
        </Form>
      )
    }
  }
  
  
  



}