import React from 'react';
import { InputGroup, Form, FormControl, Row, Col, Button } from 'react-bootstrap';
import "./style.css"

const Header = ({onSearchSubmit, searchTerm}) => (
    <div>
        <div>
            <h1>Docker Workshop</h1>
            <h2>Docker ToDo App</h2>
        </div>
        <div className='headerWrapper'>
            <Form onSubmit={onSearchSubmit}>
                <InputGroup>
                    <FormControl
                        id="txtSearch"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        defaultValue={searchTerm}
                    />
                    <InputGroup.Append>
                        <Button type="submit">Search</Button>
                    </InputGroup.Append>
                </InputGroup>  
            </Form>
        </div>
    </div>
)

export default Header;