/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'

// Define the data types props the component
type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

// Define the functional component
const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  return (
    <>
      <p>{logo}</p>
      <p>{phone}</p>
      <p>{message}</p>
      <p>{width}</p>
      <p>{height}</p>
    </>
  )
}

// Define the data types validations
WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

// Define the default props values
WhatsappButton.defaultProps = {
  logo: 'undefined',
  phone: '3208698580',
  message: 'Hello, welcome to TechInn store. How can we help you',
  width: 80,
  height: 80,
}

export default WhatsappButton
