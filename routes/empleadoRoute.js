import express from 'express';

import {
  createEmpleado,
  getEmpleado,
  getEmpleados,
  updateEmpleado,
  deleteEmpleado,
} from '../controllers/empleadoController.js';

const router = express.Router();

router.get('/Empleados', getEmpleados);
router.post('/newEmpleado', createEmpleado);
router.get('/empleado/:id', getEmpleado);
router.put('/updateEmpleados/:id', updateEmpleado);
router.delete('/deleteEmpleado/:id', deleteEmpleado);

export default router;
