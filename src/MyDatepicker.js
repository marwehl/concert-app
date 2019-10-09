import React from 'react'
import styled from 'styled-components'
import DatePicker, { registerLocale } from 'react-datepicker'
import de from 'date-fns/locale/de'
import 'react-datepicker/dist/react-datepicker.css'
registerLocale('de', de)

export default function MyDatepicker({ date, onChange }) {
  return (
    <DatePickerStyled
      selected={date}
      onChange={onChange}
      locale='de'
      shouldCloseOnSelect={true}
      showTimeSelect
      timeFormat='HH:mm'
      timeIntervals={15}
      timeCaption='time'
      dateFormat='dd.MM.yyyy, HH:mm'
    />
  )
}

const DatePickerStyled = styled(DatePicker)`
  font-size: inherit;
`