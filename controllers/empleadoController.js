import firebase from '../firebase.js';
import Empleado from '../models/empleadoModel.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
const db = getFirestore(firebase);

// Crear (CREATE)

export const createEmpleado = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'empleados'), data);
    res.status(200).send('Empleado creado exitosamente');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Obtener todos (GET)

export const getEmpleados = async (req, res) => {
  try {
    const empleadosSnapshot = await getDocs(collection(db, 'empleados'));
    const empleadosArray = [];

    if (empleadosSnapshot.empty) {
      res.status(400).send('No se encontraron empleados');
    } else {
      empleadosSnapshot.forEach((doc) => {
        empleadosArray.push({ id: doc.id, ...doc.data() });
      });

      res.status(200).send(empleadosArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Obtener por id (GET BY ID)

export const getEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const empleadoDoc = doc(db, 'empleados', id);
    const empleadoSnapshot = await getDoc(empleadoDoc);

    if (empleadoSnapshot.exists()) {
      res.status(200).send({ id: empleadoSnapshot.id, ...empleadoSnapshot.data() });
    } else {
      res.status(404).send('Empleado no encontrado');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Modificar (UPDATE)

export const updateEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const empleadoDoc = doc(db, 'empleados', id);
    await updateDoc(empleadoDoc, data);
    res.status(200).send('Empleado actualizado exitosamente');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Eliminar (DELETE)

export const deleteEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'empleados', id));
    res.status(200).send('Empleado eliminado exitosamente');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
