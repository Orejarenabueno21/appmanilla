import {React,useState, useEffect} from 'react'
import { db } from '../firebase'
import {collection, doc, addDoc, onSnapshot, deleteDoc, updateDoc} from 'firebase/firestore'

function Formulario() {
    return (
        <div><h1>Formulario</h1></div>

    )
}

export default Formulario