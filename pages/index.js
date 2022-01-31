import utilStyles from '../styles/utils.module.css'
import styles from '../styles/utils.module.css'
import Link from 'next/link'
import { Form, Button, Stack, Alert, Container, Row, Col, Image } from 'react-bootstrap';

export default function Home() {
  return (
      <Container fluid >
          <Row>
              <Col sm={3} style={{border:"none"}}>
                  <Form className={utilStyles.loginForm} style={{width:"80%", marginLeft:"10%",  marginTop:"25%", fontFamily:"Raleway" }}>

                      <p> Open Bootcamp <b style={{color:"#32D4A4"}}> | Alumnos </b></p>

                      <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginTop:"10%"}}>
                          <Form.Label style={{fontSize:"90%", fontWeight:"bold"}}>Email</Form.Label>
                          <Form.Control type="email" placeholder="Introduce tu correo" style={{fontSize:"small"}} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginTop:"10%"}}>
                          <Form.Label style={{fontSize:"90%", fontWeight:"bold"}}>Contraseña</Form.Label>
                          <Form.Control type="password" placeholder="Introduce tu contraseña" style={{fontSize:"small"}}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{marginTop:"10%"}}>
                          <Stack direction="horizontal" gap={3}>
                              <Form.Check type="checkbox" label="Recuérdame" style={{fontSize:"80%"}} />
                              <div className='ms-auto' style={{fontSize:"80%", color:"#32D4A4"}}>He olvidado la contraseña</div>
                          </Stack>
                      </Form.Group>

                      <div className="d-grid gap-2" >
                          <Link href="/dashboard">
                              <Button size="sm" type="submit" style={{backgroundColor:"#32D4A4", border:"none"}}>
                                  Iniciar Sesión
                              </Button>
                          </Link>
                      </div>

                  </Form>
                      <Alert variant="Light" className={utilStyles.adress} style={{width:"80%", marginLeft:"7%", marginTop:"2vh",color:"#7d8582"}}>
                          <p className='m-0'>Copyright © 2021 Open Bootcamp SL, Imagina Group</p>
                          <p className='m-0'>Todos los derechos reservados.</p>
                          <p className='m-0'>Política de Privacidad.</p>
                      </Alert>
                  </Col>
              <Col  className={utilStyles.colRight} sm={9} >
                  <Image fluid priority
                  src="/images/bg_login.jpg" style={{border:"none", padding:"0rem", height: "100vh"}}></Image>
              </Col>
          </Row>
      </Container>
  )
}
