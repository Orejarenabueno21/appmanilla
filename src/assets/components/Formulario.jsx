<<<<<<< HEAD
import React from 'react'
=======
import React,{useState, useEffect} from 'react'
import { db } from '../firebase'
import {collection, doc, addDoc, onSnapshot, deleteDoc, updateDoc} from 'firebase/firestore'
>>>>>>> develop

const Formulario = () => {
  return (
    <div>Formulario</div>
  )
}

export default Formulario