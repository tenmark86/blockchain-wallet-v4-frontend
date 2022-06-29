import React from 'react'
import styled from 'styled-components'

import { Text, TextInput } from 'blockchain-info-components'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: ${(props) => props.height};
  ${({ errorBottom }) => errorBottom && `padding-bottom: 6px;`}
`
const Error = styled(Text)`
  position: absolute;
  display: block;
  top: ${(props) => (props.errorBottom ? props.height : '-20px')};
  left: ${(props) => (props.errorLeft ? '0' : 'initial')};
  bottom: ${(props) => (props.errorBottom ? '-20px' : 'initial')};
  right: 0;
  ${({ errorBottom }) => errorBottom && `padding-top: 6px;`}
  height: 15px;
`

const getErrorState = ({ invalid, touched }) => {
  return touched && invalid ? 'invalid' : 'initial'
}

const TextBox = (field) => {
  const {
    autoComplete,
    autoFocus,
    borderRightNone,
    center,
    className,
    disableSpellcheck,
    disabled,
    errorBottom,
    height,
    icon,
    input,
    maxLength,
    meta,
    noLastPass,
    placeholder
  } = field
  const { active, error, initial, touched, warning } = meta
  const errorState = getErrorState(meta)

  return (
    <Container className={className} height={height} errorBottom={errorBottom}>
      <TextInput
        {...input}
        active={active}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        borderRightNone={borderRightNone}
        center={center}
        data-e2e={field['data-e2e']}
        disabled={disabled}
        disableSpellcheck={disableSpellcheck}
        errorState={errorState}
        height={height}
        icon={icon}
        initial={initial}
        maxLength={maxLength}
        noLastPass={noLastPass}
        placeholder={placeholder}
      />
      {touched && error && (
        <Error
          size='12px'
          weight={500}
          color='error'
          height={height}
          errorBottom={errorBottom}
          {...field}
          data-e2e='textBoxError'
        >
          {error}
        </Error>
      )}
      {touched && !error && warning && (
        <Error size='12px' weight={400} color='sent' errorBottom={errorBottom}>
          {warning}
        </Error>
      )}
    </Container>
  )
}

TextBox.defaultProps = {
  height: '48px'
}

export default TextBox
