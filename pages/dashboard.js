import Head from 'next/head'
import styled from 'styled-components'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/utils.module.css'
import Link from 'next/link'
import React, {useState} from "react";
import { FormSelect,
  Modal,
  Navbar,
  Image,
  Container,
  NavDropdown,
  Nav,
  Row,
  Col,
  Table,
  Form,
  FormControl,
  Button,
  FloatingLabel,
  Badge
} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { Info } from '../data/info';
import Select from 'react-select'
import Creatable, { useCreatable } from 'react-select/creatable';



const skills = [
  { label: 'ReactJS', value: 'ReactJS' },
  { label: 'HTML/CSS', value: 'HTML/CSS' },
  { label: 'Javascript', value: 'Javascript' },
  { label: 'PHP', value: 'PHP' },
  { label: 'NodeJS', value: 'NodeJS' },
  { label: 'Python', value: 'Python' },
];

const countries = [
  { label: 'España', value: 'España' },
  { label: 'USA', value: 'USA' },
  { label: 'Alemania', value: 'Alemania' },
  { label: 'Argentina', value: 'Argentina' },
  { label: 'Uruguay', value: 'Uruguay' },
  { label: 'Francia', value: 'Francia' },
];

const cities = [
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Oregon', value: 'Oregon' },
  { label: 'Munich', value: 'Munich' },
  { label: 'Buenos Aires', value: 'Buenos Aires' },
  { label: 'Montevideo', value: 'Montevideo' },
  { label: 'Sao Paulo', value: 'Sao Paulo' },
];



//Sort section

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig,] = React.useState(config);

    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
      let direction = "ascending";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ key, direction });
};

  return { items: sortedItems, requestSort, sortConfig };
};

// Tags section


const TablePage = (props) => {


// Sort table

  const { items, requestSort, sortConfig, } = useSortableData(props.students);
const getClassNamesFor = (name) => {
  if (!sortConfig) {
    return;
  }
  return sortConfig.key === name ? sortConfig.direction : undefined;
};

// Modal

const [modalShow, setModalShow] = useState(false);
const [searchedVal, setSearchedVal] = useState("");

function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nuevo Alumno
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              <Row>
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
            </Col>
              <Col xs={6} md={6}>
                <Row>
                  <Form.Group className="mb-3" style={{textAlign:"left"}}>
                  <Form.Label style={{fontSize:"small", marginBottom:"0px", marginTop:"25px"}}>Foto de Perfil</Form.Label>
                  </Form.Group>
                </Row>
                <Row className="g-2">
                  <Col xs={4} md={4}>
                    <Button style={{fontFamily:"Arial,FontAwesome", margin:"5px"}} variant="secondary" size="sm" as="input" type="submit" value="&#xf0ee; Subir imagen" />{' '}
                  </Col>
                  <Col xs={4} md={8}>
                    <Form.Label style={{fontSize:"small", margin:"0px"}}>Archivos soportados <b>.png, .jpg y .jpeg</b><p>Tamaño de archivo máximo: <b>2 MB</b></p></Form.Label>
                  </Col>
                </Row>
                <Row className="g-2">
                  <Col xs={4} md={4}>
                    <Button style={{fontFamily:"Arial,FontAwesome", margin:"5px"}} variant="secondary" size="sm" as="input" type="submit" value="&#xf0ee; Subir documento PDF" />{' '}
                  </Col>
                  <Col xs={8} md={8}>
                    <Form.Label style={{fontSize:"small", marginLeft:"50px"}}>Archivos soportados <b>.pdf</b><p>Tamaño de archivo máximo: <b>20 MB</b></p></Form.Label>
                  </Col>
                </Row>
                <Form.Group style={{textAlign:"left"}}>
                  <h6 style={{textAlign:"left", fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Etiquetas</h6>
                    <Select
                      options={skills}
                      placeholder={'Selecione Etiquetas'}
                       isMulti
                      onChange={opt => console.log(opt.label, opt.value)}
                    />
                </Form.Group>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Guardar</Button>
        <Button variant="secondary" onClick={props.onHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
}

// Table section

return (
    <>
    <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#" style={{fontFamily:"Raleway"}}>
                Open Bootcamp <b style={{color:"#32D4A4"}}> | Alumnos </b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '60px', paddingLeft:"80px" }}
                    navbarScroll
                >
                </Nav>
                <Image
                    className="roundedCircle"
                    src="/images/img_avatar.png"
                    style={{width:"3vh" ,height: "3vh", borderRadius:"50%"}}
                >
                </Image>
                <NavDropdown title="UserName" style={{fontSize:"small", color:"gray", paddingLeft:"20px"}}>
                    <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <Container fluid>
        <Row>
            <Col sm={9} style={{paddingLeft:"80px"}}>
                <Row className="align-items-center">
                    <Col md={1}>
                      <h6 style={{textAlign:"right", fontSize:"medium", marginBottom:"0px"}}>Alumnos</h6>
                    </Col>
                    <Col md={6}>
                      <Form className="d-flex" style={{fontFamily:"Arial,FontAwesome"}}>
                          <FormControl
                              placeholder= "&#xF002; Busca por nombre"
                              className="me-2"
                              aria-label="Search"
                              vertical-align="top"
                              size="sm"
                              color="gray"
                              onChange={(e) => setSearchedVal(e.target.value)} />
                      </Form>
                    </Col>
                    <Col style={{textAlign:"right"}}>
                      <button type="button" style={{ border:"none", fontSize:"small", marginBottom:"0px"}} onClick={() => setModalShow(true)}>
                      + Añadir Alumnos
                      </button>
                    </Col>
                    <MydModalWithGrid size="xl" show={modalShow} onHide={() => setModalShow(false)}/>
                </Row>
                <Table borderless hover size="sm">
                    <thead style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}>
                        <tr >
                        <th>
                            <button
                            type="button"
                            onClick={() => requestSort("name")}
                            className={getClassNamesFor("name")}
                            style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                            >
                            Nombre &#xf175;&#xf176;
                            </button>
                        </th>
                        <th>
                            <button
                            type="button"
                            onClick={() => requestSort("city")}
                            className={getClassNamesFor("city")}
                            style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                            >
                            Ciudad &#xf175;&#xf176;
                            </button>
                        </th>
                        <th>
                            <button
                            type="button"
                            onClick={() => requestSort("country")}
                            className={getClassNamesFor("country")}
                            style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                            >
                            País &#xf175;&#xf176;
                            </button>
                        </th>
                        <th>
                            <button
                            type="button"
                            onClick={() => requestSort("phone")}
                            className={getClassNamesFor("phone")}
                            style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                            >
                            Teléfono &#xf175;&#xf176;
                            </button>
                        </th>
                            <th>
                            <button
                            type="button"
                            onClick={() => requestSort("email")}
                            className={getClassNamesFor("email")}
                            style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                            >
                            Correo Electrónico &#xf175;&#xf176;
                            </button>
                        </th>
                            <th>
                            <button
                            type="button"
                            onClick={() => requestSort("tags")}
                            className={getClassNamesFor("tags")}
                            style={{border:"none", color:"#898c8b",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}
                            >
                            Etiquetas &#xf175;&#xf176;
                            </button>
                        </th>
                        </tr>
                    </thead>
                    <tbody style={{border:"none",fontFamily:"Arial,FontAwesome", textAlign:"left", fontSize:"small"}}>
                      {Info.filter((row) =>
                        !searchedVal.length || row.name
                          .toString()
                          .toLowerCase()

                          .includes(searchedVal.toString().toLowerCase()
                        )
                      )
                        .map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.country}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.tags}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
              </Col>
              <Col sm={3} style={{paddingRight:"100px"}}>
                  <Form>
                      <Row className="g-2">
                          <Col md style={{marginTop:"30px"}}>
                              <FloatingLabel>
                              <h6 style={{textAlign:"left", fontSize:"medium", marginBottom:"10px", marginTop:"20px"}}> Filtros de Búsqueda </h6>
                              </FloatingLabel>
                          </Col>
                          <Col md style={{marginTop:"30px"}}>
                              <FloatingLabel>
                              <h6 style={{color:"#32D4A4",fontFamily:"Arial,FontAwesome", textAlign:"center", marginTop:"20px"}}> &#xf014; </h6>
                              </FloatingLabel>
                          </Col>
                      </Row>

                      {/* inicio tags*/}
                      <Form.Group style={{textAlign:"left"}}>
                        <h6 style={{textAlign:"left", fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Etiquetas</h6>
                          <Select
                            options={skills}
                            placeholder={'Selecione Etiquetas'}
                             isMulti
                            onChange={opt => console.log(opt.label, opt.value)}
                          />
                      </Form.Group>
                      {/* fin tags*/}

                      <Form.Group className="mb-3" style={{textAlign:"left"}}>
                          <Form.Label style={{fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>País</Form.Label>
                            <Select
                              options={countries}
                              placeholder={'Selecione País'}
                              onChange={opt => console.log(opt.label, opt.value)}
                            />
                      </Form.Group>
                      <Form.Group className="mb-3" style={{textAlign:"left"}}>
                          <Form.Label style={{fontSize:"small", marginBottom:"10px", marginTop:"20px"}}>Ciudad</Form.Label>
                            <Select
                              options={cities}
                              placeholder={'Selecione Ciudad'}
                              onChange={opt => console.log(opt.label, opt.value)}
                            />
                      </Form.Group>
                      <Form className="mb-3" style={{textAlign:"left", fontSize:"small"}}>
                      <Form.Label style={{marginBottom:"10px", marginTop:"20px"}}>Presencial / a distancia</Form.Label>
                        {['checkbox'].map((type) => (
                          <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                              type={type}
                              id={`default-${type}`}
                              label={`Presencial`}
                            />
                            <Form.Check
                              type={type}
                              label={`En remoto`}
                              id={`disabled-default-${type}`}
                            />
                          </div>
                        ))}
                    </Form>
                    <Form className="mb-3" style={{textAlign:"left", fontSize:"small"}}>
                      <Form.Label style={{marginBottom:"10px", marginTop:"20px"}}>Posibilidad traslado</Form.Label>
                        {['checkbox'].map((type) => (
                          <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                              type={type}
                              id={`default-${type}`}
                              label={`Sí`}
                            />
                            <Form.Check
                              type={type}
                              label={`No`}
                              id={`disabled-default-${type}`}
                            />
                          </div>
                        ))}
                    </Form>
                  </Form>
              </Col>
          </Row>
      </Container>
    </>
  )
}

export default function App() {
    return (
      <div className="App">
        <TablePage
          students={Info}
        />
      </div>
    );
  }
