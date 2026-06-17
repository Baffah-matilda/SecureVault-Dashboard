/* eslint-env vitest */
/* eslint-disable no-unused-vars */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import MainPanel from '../MainPanel'

const files = [
  { id: '1', name: 'File One', type: 'pdf', size: '1 KB' },
  { id: '2', name: 'File Two', type: 'sheet', size: '2 KB' }
]

test('renders file cards and responds to click', async () => {
  const handleSelect = vi.fn()
  render(<MainPanel files={files} onSelect={handleSelect} selectedId={null} />)

  const fileOne = screen.getByLabelText('Open File One')
  expect(fileOne).toBeInTheDocument()

  fireEvent.click(fileOne)
  expect(handleSelect).toHaveBeenCalledWith(files[0])
})
