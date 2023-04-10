import { fireEvent, render } from '@testing-library/react'
import { describe, it, vi, expect } from 'vitest'

import { ToggleTheme } from '@/components/buttons/ToggleTheme'

describe('ToggleTheme', () => {
	it('should render', () => {
		const { getByText } = render(<ToggleTheme />)
		const button = getByText('Change Theme')
		expect(button).toBeTruthy()
	})
})
