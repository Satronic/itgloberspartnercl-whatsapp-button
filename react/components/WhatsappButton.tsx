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
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className="fixed bottom-1 right-1 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={logo} width={width} height={height} alt="Whatsapp Logo" />
        </a>
      </div>
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

// Define schema for backoffice admin
WhatsappButton.schema = {
  title: 'Whatsapp Button',
  type: 'object',
  properties: {
    logo: {
      title: 'Whatsapp logo',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Sales support whatsapp phone',
      type: 'string',
    },
    message: {
      title: 'Message sent to client',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
  },
}
export default WhatsappButton
