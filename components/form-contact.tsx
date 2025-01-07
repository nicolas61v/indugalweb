'use client'

import { Button } from '@nextui-org/button'
import { Form } from '@nextui-org/form'
import { Input, Textarea } from '@nextui-org/input'
import { Send } from 'lucide-react'

export const FormContact = () => {
  return (
    <Form className='w-full gap-4' validationBehavior='native' onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col w-full">
        <div className='flex flex-col'>
          <Input
            isRequired
            errorMessage='Este campo es requerido'
            color='primary'
            label="Nombre de la Empresa/Persona"
            type="text"
            variant='underlined'
            maxLength={30}
          />
        </div>
        <div className='flex flex-col sm:flex-row sm:space-x-6'>
          <Input
            isRequired
            errorMessage='Este campo es requerido'
            color='primary'
            label="Celular"
            type="number"
            variant='underlined'
            maxLength={10}
          />
          <Input
            color='primary'
            label="Télefono"
            type="number"
            variant='underlined'
            maxLength={7}
          />
        </div>
        <div className='flex flex-col'>
          <Input
            isRequired
            errorMessage='Este campo es requerido | Correo inválido'
            color='primary'
            label="Correo eléctronico"
            type="email"
            maxLength={50}
            variant='underlined'
          />
        </div>
        <div className='flex flex-col'>
          <Input
            isRequired
            errorMessage='Este campo es requerido'
            color='primary'
            label="Asunto"
            type="text"
            variant='underlined'
            maxLength={40}
          />
        </div>
        <div className='flex flex-col'>
          <Textarea
            isRequired
            errorMessage='Este campo es requerido'
            disableAnimation
            disableAutosize
            classNames={{
              input: "resize-y min-h-[210px] max-h-[500px]",
            }}
            color='primary'
            label="Mensaje"
            type="textarea"
            variant='underlined'
            maxLength={2000}
          />
        </div>
        <Button type='submit' className='mt-4' color='primary' startContent={<Send className='w-4 h-4'/>}>
          Enviar
        </Button>
      </div>
    </Form>
  )
}
