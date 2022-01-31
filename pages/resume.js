import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Form, Button, Stack, Alert, Container, Row, Col, Image, Ratio, FloatingLabel } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { WithContext as ReactTags } from "react-tag-input";


export default function Resume() {
  return (
      <Container fluid >
        <Row>
          <Col xs={4} md={4}>
            <Row>
              <Col xs={2} md={2}>
                <Row>
                  <FloatingLabel>
                    <Image className="rounded" src="/images/img_avatar.png" style={{width:"8vh" ,height: "8vh", borderRadius:"50%", margin:"20px"}}></Image>
                  </FloatingLabel>
                </Row>
                </Col>
              <Col xs={10} md={10}>
              <Row>
              <FloatingLabel>
                  <Form.Label style={{fontFamily:"Arial,FontAwesome", fontSize:"small", margin:"10px", textAlign:"left"}}><h5>Nombre Alumno</h5><p>&#xf041; Valencia, España:</p></Form.Label>
              </FloatingLabel>
            </Row>
            </Col>
              <Row>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-3" style={{textAlign:"left"}}>
                    <Form.Label style={{fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Nombre y Apellidos</Form.Label>
                    <Form.Control placeholder="Ej. Juan Pérez Lorca" size="sm" style={{fontSize:"small"}} />
                  </Form.Group>
                </Col>
              </Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" style={{textAlign:"left"}}>
                  <Form.Label style={{fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>País</Form.Label>
                  <Form.Select size="sm" style={{fontSize:"small", color:"gray"}}>
                    <option>Seleccione el País</option>
                    <option value="1">España</option>
                    <option value="2">USA</option>
                    <option value="3">Brazil</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" style={{textAlign:"left"}}>
                  <Form.Label style={{fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Teléfono</Form.Label>
                  <Form.Control placeholder="Ej. +34 354 23 65" size="sm" style={{fontSize:"small"}} />
                </Form.Group>
                <Form.Group className="mb-3" style={{textAlign:"left"}}>
                  <Form.Label style={{fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Presencialidad</Form.Label>
                  <Form.Select size="sm" style={{fontSize:"small", color:"gray"}}>
                    <option>Seleccione la Opción</option>
                    <option value="1">Presencial</option>
                    <option value="2">En remoto</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" style={{textAlign:"left"}}>
                  <Form.Label style={{fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Ciudad</Form.Label>
                  <Form.Select size="sm" style={{fontSize:"small", color:"gray"}}>
                    <option>Seleccione la Ciudad</option>
                    <option value="1">Barcelona</option>
                    <option value="2">Atlanta</option>
                    <option value="3">Sao Paulo</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ej: username@email.com" size="sm" style={{fontSize:"small"}}/>
                </Form.Group>
                <Form.Group className="mb-3" style={{textAlign:"left"}}>
                  <Form.Label style={{fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Traslado</Form.Label>
                  <Form.Select size="sm" style={{fontSize:"small", color:"gray"}}>
                    <option>Seleccione la Opción</option>
                    <option value="1">Sí</option>
                    <option value="2">No</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="mb-3" style={{textAlign:"left"}}>
              <Form.Label style={{fontSize:"small", marginBottom:"0px", marginTop:"25px"}}>Documento CV</Form.Label>
              </Form.Group>
            </Row>
            <Row className="g-2">
              <Col xs={4} md={4}>
                <Button style={{fontFamily:"Arial,FontAwesome", margin:"5px", fontSize:"small"}} variant="secondary" size="sm" as="input" type="submit" value="&#xf0ee; Subir de nuevo" />{' '}
              </Col>
              <Col xs={4} md={8}>
              <FloatingLabel>
              <h6 style={{fontFamily:"Arial,FontAwesome", textAlign:"left", margin:"12px", fontSize:"small"}}> &#xf014; Borrar</h6>
              </FloatingLabel>
              </Col>
            </Row>
            <Form.Group style={{textAlign:"left"}}>
              <h6 style={{textAlign:"left", fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Etiquetas</h6>
              <Form.Control placeholder="PHP HTML&CSS REACT" size="sm" style={{fontSize:"small"}} />
            </Form.Group>
          </Col>
        <Col xs={8} md={8}>
          <div style={{ width: 'auto', height: 'auto' }}>
            <Ratio aspectRatio="1x1">
              <iframe type="image/svg+xml" src="/images/resume.pdf" />
            </Ratio>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
