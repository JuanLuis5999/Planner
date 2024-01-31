import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Sistema.css'; 


function Sistema() {
  // Estados para controlar la visibilidad de cada tabla
  const [expanded, setExpanded] = useState({
    tabla1: false,
    tabla2: false,
    tabla3: false,
    tabla4: false
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded({ ...expanded, [panel]: isExpanded });
  };
  
    // Nuevo estado para almacenar los datos de la tabla 1
  const [tableOneData, setTableOneData] = useState([]);

  // Función para añadir un nuevo registro a la tabla 1
  const addDataToTableOne = (newData) => {
    setTableOneData([...tableOneData, newData]);
  };
  
    // Estado para los datos de entrada del formulario
  const [formData, setFormData] = useState({
    contactoCliente: '',
    modelo: '',
    renta: '',
    accesorios: '',
    estatus: '',
    observaciones: ''
  });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    addDataToTableOne(formData);
    // Limpiar el formulario después de la inserción
    setFormData({
      contactoCliente: '',
      modelo: '',
      renta: '',
      accesorios: '',
      estatus: '',
      observaciones: ''
    });
  };




  const renderTableOne = () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="greenHeader">
            {/* Columnas de la primera tabla */}
            <TableCell>Contacto / Cliente</TableCell>
            <TableCell>Modelo</TableCell>
            <TableCell>Renta</TableCell>
            <TableCell>Accesorios</TableCell>
            <TableCell>Estatus</TableCell>
            <TableCell>Observaciones</TableCell>
            {/* Agregar más <TableCell> aquí para las demás columnas */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Iterar sobre tableOneData para mostrar las filas */}
          {tableOneData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.contactoCliente}</TableCell>
              <TableCell>{row.modelo}</TableCell>
              <TableCell>{row.renta}</TableCell>
              <TableCell>{row.accesorios}</TableCell>
              <TableCell>{row.estatus}</TableCell>
              <TableCell>{row.observaciones}</TableCell>
              {/* Agregar más celdas aquí si es necesario */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );


  // Función para renderizar la segunda tabla con estilo azul
  const renderTableTwo = () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="blueHeader">
            {/* Columnas de la segunda tabla */}
            <TableCell>No. OP</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Contacto</TableCell>
            <TableCell>Canal de Venta</TableCell>
            {/* Agregar más <TableCell> aquí para las demás columnas */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Datos de las filas para la segunda tabla */}
        </TableBody>
      </Table>
    </TableContainer>
  );

  // Función para renderizar la tercera tabla con estilo naranja
  const renderTableThree = () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="orangeHeader">
            {/* Columnas de la tercera tabla */}
            <TableCell>Clasificación</TableCell>
            <TableCell>No. OP</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Equipo</TableCell>
            <TableCell>Pago</TableCell>
            <TableCell>Factura</TableCell>
            <TableCell>Contrato</TableCell>
            <TableCell>Seguro</TableCell>
            <TableCell>Firma</TableCell>
            <TableCell>Fecha de entrega</TableCell>
            <TableCell>Estatus</TableCell>
            <TableCell>Observaciones</TableCell>
            {/* Agregar más <TableCell> aquí para las demás columnas */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Datos de las filas para la tercera tabla */}
        </TableBody>
      </Table>
    </TableContainer>
  );

  // Función para renderizar la cuarta tabla con estilo amarillo
  const renderTableFour = () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="yellowHeader">
            {/* Columnas de la cuarta tabla */}
            <TableCell>No. OP</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Contacto</TableCell>
            <TableCell>Canal de Venta</TableCell>
            {/* Agregar más <TableCell> aquí para las demás columnas */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Datos de las filas para la cuarta tabla */}
        </TableBody>
      </Table>
    </TableContainer>
  );

  // Renderizado condicional basado en el número de tabla
  const renderTable = (num) => {
    switch (num) {
      case 1: return renderTableOne();
      case 2: return renderTableTwo();
      case 3: return renderTableThree();
      case 4: return renderTableFour();
      default: return null;
    }
  };

  // Nombres para cada tabla basados en el número de tabla
  const tableNames = {
    1: 'Prospecciones',
    2: 'Operaciones',
    3: 'Equipos',
    4: 'Tabla 4',
  };

  return (
    <div className="Sistema">
      <h1>Agenda de Control de Actividades</h1>

      {/* Acordiones para las tablas */}
      {[1, 2, 3, 4].map((num) => (
        <Accordion expanded={expanded[`tabla${num}`]} onChange={handleChange(`tabla${num}`)} key={num}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{tableNames[num]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {renderTable(num)}
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Formulario para agregar datos a la tabla 1 */}
      <div className="formulario-agregar-datos">
        <h2>Nueva prospección</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="contactoCliente"
            value={formData.contactoCliente}
            onChange={handleInputChange}
            placeholder="Contacto / Cliente"
          />
          <input
            type="text"
            name="modelo"
            value={formData.modelo}
            onChange={handleInputChange}
            placeholder="Modelo"
          />
          <input
            type="text"
            name="renta"
            value={formData.renta}
            onChange={handleInputChange}
            placeholder="Renta"
          />
          <input
            type="text"
            name="accesorios"
            value={formData.accesorios}
            onChange={handleInputChange}
            placeholder="Accesorios"
          />
          <input
            type="text"
            name="estatus"
            value={formData.estatus}
            onChange={handleInputChange}
            placeholder="Estatus"
          />
          <input
            type="text"
            name="observaciones"
            value={formData.observaciones}
            onChange={handleInputChange}
            placeholder="Observaciones"
          />
          <button type="submit">Agregar a la Tabla</button>
        </form>
      </div>
    </div>
  );
}

export default Sistema;








