import React, { useState } from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import Popup from './popup'
import { useForm } from 'react-hook-form'

const ContactForm = ({ intl }) => {
  const [submitted, setSubmitted] = useState(false)
  const [state, setState] = useState({})

  /* Handling change on field conditionals */

  const handleChange = (e) => {
    setState({ ...state, reason: e.target.value })
  }
  const isSelection = state.reason
  let selectValueD
  let normalValue
  let selectValueQI
  if (isSelection === 'dispute' || isSelection === 'complaint') {
    selectValueD = <div></div>
  } else {
    normalValue = <div></div>
  }
  if (isSelection === 'question' || isSelection === 'information') {
    selectValueQI = <div></div>
  }

  const { register, handleSubmit, setError, watch, errors, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      await fetch(`${process.env.GATSBY_GATEWAY_URL}`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      setSubmitted(true)
      reset()
    } catch (error) {
      setError(
        'submit',
        'submitError',
        `Oops! There seems to be an issue! ${error.message}`
      )
    }
  }
  const otherValue = watch('other')
  const checkBox1 = watch('email')

  const showSubmitError = (msg) => <p className='msg-error'>{msg}</p>

  const showThankYou = (
    <div className='msg-confirm my-8 bg-blue01 text-white font-medium h-auto p-6'>
      <p>
        <FormattedMessage id='form-confirmation' />
      </p>
      <button
        className='border hover:bg-white border-white rounded p-4 m-6 font-medium hover:text-blue01'
        type='button'
        onClick={() => setSubmitted(false)}
      >
        <FormattedMessage id='form-confirmation-button' />
      </button>
    </div>
  )

  const showForm = (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)} method='post'>
        <div className='pt-12'>
          <label htmlFor='reasons'>
            <div className='text-gray-700'>
              <FormattedMessage id='form-reason' />
            </div>
            <select
              id='reasons'
              name='reasons'
              value={state.reason}
              onChange={handleChange}
              ref={register({ required: true })}
              className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
            >
              <option value=''>
                {intl.formatMessage({ id: 'form-reason-option' })}
              </option>
              <option value='question' name='question' id='question'>
                {intl.formatMessage({ id: 'form-reason-option-a' })}
              </option>
              <option value='dispute' name='dispute' id='dispute'>
                {intl.formatMessage({ id: 'form-reason-option-e' })}
              </option>
              <option value='complaint' name='complaint' id='complaint'>
                {intl.formatMessage({ id: 'form-reason-option-c' })}
              </option>
              <option value='compliment' name='compliment' id='compliment'>
                {intl.formatMessage({ id: 'form-reason-option-d' })}
              </option>
              <option value='information' name='information' id='information'>
                {intl.formatMessage({ id: 'form-reason-option-b' })}
              </option>
            </select>
          </label>
        </div>
        {errors.reasons && (
          <p className='text-error font-medium italic'>
            <FormattedMessage id='form-reason-error' />
          </p>
        )}
        {selectValueD && (
          <div className='ml-4'>
            <div className='items-left mt-1 mb-6'>
              <div className='mr-4'>
                <label className=' block'>
                  <input
                    className='mr-2 leading-tight'
                    type='checkbox'
                    ref={register()}
                    name='notmydebt'
                    id='notmydebt'
                  />
                  <span className='text-sm'>
                    <FormattedMessage id='dispute-not-my-debt' />
                  </span>
                </label>
              </div>
              <div className='mr-4'>
                <label className='block'>
                  <input
                    className='mr-2 leading-tight'
                    type='checkbox'
                    ref={register()}
                    name='wrongamount'
                    id='wrongamount'
                  />
                  <span className='text-sm'>
                    <FormattedMessage id='dispute-wrong-amount' />
                  </span>
                </label>
              </div>

              <div className='mr-4'>
                <label className=' block'>
                  <input
                    className='mr-2 leading-tight'
                    type='checkbox'
                    ref={register()}
                    name='creditorname'
                    id='creditorname'
                  />
                  <span className='text-sm'>
                    <FormattedMessage id='dispute-original-creditor-name' />
                  </span>
                </label>
              </div>
              <div className='mr-4'>
                <label className=' block'>
                  <input
                    className='mr-2 leading-tight'
                    type='checkbox'
                    name='other'
                    id='other'
                    ref={register()}
                  />
                  <span className='text-sm'>
                    <FormattedMessage id='dispute-other' />
                  </span>
                </label>
                {otherValue && (
                  <div>
                    <label name='disputeother'>
                      <input
                        className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
                        type='text'
                        name='disputeother'
                        id='disputeother'
                        ref={register()}
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className='mt-4'>
          <label htmlFor='fname'>
            <div className='text-gray-700'>
              <FormattedMessage id='form-fname' />
            </div>
            <input
              type='text'
              name='fname'
              id='fname'
              placeholder={intl.formatMessage({ id: 'form-fname-placeholder' })}
              ref={register({ required: true })}
              className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
            />
          </label>
          {errors.fname && (
            <p className='text-error font-medium italic'>
              <FormattedMessage id='form-fname-error' />
            </p>
          )}
        </div>
        <div className='mt-4'>
          <label htmlFor='lname'>
            <div className='text-gray-700'>
              <FormattedMessage id='form-lname' />
            </div>
            <input
              type='text'
              name='lname'
              id='lname'
              placeholder={intl.formatMessage({ id: 'form-lname-placeholder' })}
              ref={register({ required: true })}
              className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
            />
          </label>
          {errors.lname && (
            <p className='text-error font-medium italic'>
              <FormattedMessage id='form-lname-error' />
            </p>
          )}
        </div>
        {selectValueD && (
          <div>
            <div className='mt-4'>
              <label htmlFor='account'>
                <div className='text-gray-700'>
                  <FormattedMessage id='form-account-required' />
                </div>
                <input
                  type='text'
                  name='account'
                  id='account'
                  placeholder={intl.formatMessage({
                    id: 'form-account-placeholder',
                  })}
                  ref={register({ required: true })}
                  className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
                />
              </label>
              <div className='leading-tight'>
                <Popup />
              </div>
            </div>
            {errors.account && (
              <p className='text-error font-medium italic'>
                <FormattedMessage id='form-account-error' />
              </p>
            )}
          </div>
        )}
        {normalValue && (
          <div className='mt-4'>
            <label htmlFor='account'>
              <div className='text-gray-700'>
                <FormattedMessage id='form-account' />
              </div>
              <input
                type='text'
                name='account'
                id='account'
                placeholder={intl.formatMessage({
                  id: 'form-account-placeholder',
                })}
                ref={register}
                className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
              />
            </label>
          </div>
        )}
        {selectValueQI && (
          <div>
            <div className='mt-4'>
              <label htmlFor='email'>
                <div className='text-gray-700'>
                  <FormattedMessage id='form-email' />
                </div>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder={intl.formatMessage({
                    id: 'form-email-placeholder',
                  })}
                  ref={register()}
                  className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
                />
              </label>
            </div>
          </div>
        )}
        {checkBox1 && (
          <div>
            <div className='flex nowrap mt-1'>
              <div className='mx-2'>
                <input
                  type='checkbox'
                  id='emailconsent'
                  name='emailconsent'
                  ref={register({ required: true })}
                  className=''
                ></input>
              </div>
              {errors.emailconsent && (
                <div className='text-error font-medium italic mr-2'>
                  <FormattedMessage id='form-checkbox-consent-error' />
                </div>
              )}
              <div className=''>
                <FormattedMessage id='form-email-consent' />
              </div>
            </div>

            <div className='mx-2 text-sm'>
              <FormattedMessage id='form-email-consent-disclaimer' />
            </div>
          </div>
        )}
        <div className='mt-4'>
          <label htmlFor='phone'>
            <div className='text-gray-700'>
              <FormattedMessage id='form-phone' />
            </div>
            <input
              type='text'
              name='phone'
              id='phone'
              placeholder={intl.formatMessage({ id: 'form-phone-placeholder' })}
              ref={register}
              className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
            />
          </label>
        </div>
        <div className='mt-4'>
          <label htmlFor='message'>
            <div className='text-gray-700'>
              <FormattedMessage id='form-message' />
            </div>
            <textarea
              ref={register({ required: true })}
              name='message'
              id='message'
              rows='3'
              placeholder={intl.formatMessage({
                id: 'form-message-placeholder',
              })}
              className='mt-1 p-2 block w-full border-gray-400 rounded border-2'
            />
          </label>
          {errors.message && (
            <p className='text-error font-medium italic'>
              <FormattedMessage id='form-message-error' />
            </p>
          )}
        </div>
        <div className='submit-wrapper py-4'>
          <button
            type='submit'
            className='bg-blue01 text-white text-base rounded font-medium hover:bg-white hover:text-blue01 border-blue01 btn-outline-primary transition duration-300 ease-in-out focus:shadow-outline py-2 px-4'
          >
            <FormattedMessage id='form-send' />
          </button>
        </div>
      </form>
    </div>
  )

  return (
    <div className='page contact-page'>
      <div className='text-side'>
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </div>
      <div className='form-side'>{submitted ? showThankYou : showForm}</div>
    </div>
  )
}

export default injectIntl(ContactForm)
