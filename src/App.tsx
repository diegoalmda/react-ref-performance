import { FormEvent, useCallback, useRef } from 'react'

import Input from './components/Input'
import Modal, { ModalHandles } from './components/Modal'

import './styles/global.css'

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const acceptTermsRef = useRef({ value: false })
  const modalRef = useRef<ModalHandles>(null)

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()    
    
    console.log(nameInputRef.current?.value)
    console.log(acceptTermsRef.current?.value)
  }, [])
  
  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
  }, [])
  
  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal()
  }, [])

  return (
    <div className="App">
      <h3>Exemplo 1: Passando referência de um elemento pai para o filho.</h3>
      <form onSubmit={handleSubmit}>
        
        <Input 
          name="name"
          label="Nome completo"
          ref={nameInputRef}
        />

        <div className="action-buttons">
          <button type="button" onClick={handleAcceptTerms}>Aceitar termos</button>

          <button type="submit" onClick={handleSubmit}>Enviar</button>
        </div>

      </form>

      <h3>Exemplo 2: Passando referência de um elemento filho para o pai.</h3>

      <button onClick={handleOpenModal}>Abrir modal</button>

      <Modal ref={modalRef} />
    </div>
  )
}

export default App
