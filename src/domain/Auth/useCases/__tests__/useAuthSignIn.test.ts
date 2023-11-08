import { renderHook } from "@testing-library/react-native"
import { useAuthSignIn } from "../useAuthSignIn"
import { AllTheProviders } from "test-utils"

describe('', () => {
  it('save credentials if the sign-in successfully', () => {
    const { result } = renderHook(() => useAuthSignIn(), {
      wrapper: AllTheProviders
    })
  })
})
