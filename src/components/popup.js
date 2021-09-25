import React, { useState } from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import AccountHelp from './accounthelp-img'

const Modal = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button
        className='  active:bg-gray-600  text-sm underline hover:bg-gray-600 hover:text-white  mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowModal(true)}
      >
        <FormattedMessage id='find-account-help' />
      </button>
      {showModal ? (
        <div onClick={() => setShowModal(false)}>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative  my-6 mx-auto max-w-screen-md w-4/5'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none'>
                <div className='relative p-6 flex-auto max-w-screen-lg'>
                  <p className='my-4 font-bold text-lg'>
                    <AccountHelp />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </div>
      ) : null}
    </div>
  )
}
export default injectIntl(Modal)
