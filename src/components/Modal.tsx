import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import Btn from './Btn';
import Icons from './Icons';


interface ModalProps {
  
}

const Modal: FC<ModalProps> = ({}) => {
  return <Dialog.Root>
    <Dialog.Trigger asChild >
          <Btn>
            <Icons.search className=" hover:text-primary-300 w-6 h-6 "/>
          </Btn>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className=' fixed inset-0 z-20 bg-gray-950/80 ' >
      <Dialog.Content className=' xs:top-16 xs:max-w-[500px] -translate-x-1/2 left-1/2  w-full absolute top-0 '>
        <div className='bg-stone-50  px-4 flex h-14 w-full justify-center items-center xs:rounded-[28px] overflow-hidden'>
           <div className=' h-full px-2 flex justify-center items-center   '>
           <Icons.search className="    hover:text-primary-300 w-6 h-6 "/>
           </div>
        <input placeholder='search products' type="text" className=' bg-stone-50 placeholder:capitalize placeholder:text-xl border-none w-full h-full ' />
        </div>
         <div className=' bg-gray-300 text-white flex justify-center items-center text-xl xs:mx-auto rounded-[40px] mx-8 my-4 h-14 '>
Preview Mode
         </div>
      </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  </Dialog.Root>
}

export default Modal