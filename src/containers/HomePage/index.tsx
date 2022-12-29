import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

export default function HomePage() {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    }

    return (
        <div className='bg-website-primary-color vh-100'>

        <Container className='d-flex flex-column align-items-center justify-content-center gap-3 h-100'>
            {/* Title */}
            <div className='text-center text-light'>
                <h1 className='display-4'>Api</h1>
                <p className='text-accent-color' style={{fontSize:'20px'}}>React Hook Form's API overview</p>
            </div>

            {/* Chapters */}
            <Row>
                <Col className='border p-0 text-light chapter-card mr-1' onClick={()=> navigateTo('useFormPage')}>
                    <div className='bg-website-secondary-color p-3 border-bottom'>
                        {'< /> useForm'}
                    </div>
                    <p className='p-3'>
                        A powerful custom hook to validate a form with minimal rerender
                    </p>
                </Col>
                <Col className='border p-0 text-light chapter-card mr-1' onClick={()=> navigateTo('useControllerPage')}>
                    <div className='bg-website-secondary-color p-3 border-bottom'>
                        {'< /> UseController'}
                    </div>
                    <p className='p-3'>
                        For controlled components: <br />
                        Interface with the useForm method and isolate its rerender
                    </p>
                </Col>
                <Col className='border p-0 text-light chapter-card mr-1' onClick={()=> navigateTo('useFormContextPage')}>
                    <div className='bg-website-secondary-color p-3 border-bottom'>
                        {'< /> useFormContext'}
                    </div>
                    <p className='p-3'>
                       Get Access to useForm method and properties from nested components
                    </p>
                </Col>
                
            </Row>
            <Row>
                <Col className='border p-0 text-light chapter-card mr-1' onClick={()=> navigateTo('useWatchPage')}>
                    <div className='bg-website-secondary-color p-3 border-bottom'>
                        {'< /> useWatch'}
                    </div>
                    <p className='p-3'>
                        To subscribe to an individual form input changes without impacting the root component's render 
                    </p>
                </Col>
                <Col className='border p-0 text-light chapter-card mr-1' onClick={()=> navigateTo('useFormStatePage')}>
                    <div className='bg-website-secondary-color p-3 border-bottom'>
                        {'< /> UseFormState'}
                    </div>
                    <p className='p-3'>
                        subscribe to an individual form state updates and isolate rerender at the hook level
                    </p>
                </Col>
                <Col className='border p-0 text-light chapter-card mr-1' onClick={()=> navigateTo('useFieldArrayPage')}>
                    <div className='bg-website-secondary-color p-3 border-bottom'>
                        {'< /> useFieldArray'}
                    </div>
                    <p className='p-3'>
                       manage form dynamically. Ideal for complex CRUD data entry scenarios
                    </p>
                </Col>
                
            </Row>
        </Container>
        </div>
    )
}
