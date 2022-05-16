import React from 'react'

import { Container } from './styles'

export function Datepicker() {
  return (
    <Container>
      <label>Data</label>
      <input type="date" />
    </Container>
  )
}