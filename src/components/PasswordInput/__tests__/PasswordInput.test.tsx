import { fireEvent, render, screen } from "test-utils"
import { PasswordInput } from "../PasswordInput"
import { IconProps } from "@components";

describe('<PasswordInput />', () => {
  it('starts hidden password', () => {
    const mockedOnChange = jest.fn();
    render(
      <PasswordInput
        label="Password"
        value="123456"
        placeholder="password"
        onChangeText={mockedOnChange}
      />
    )
    const inputElements = screen.getByPlaceholderText(/password/);
    expect(inputElements.props.secureTextEntry).toBeTruthy()
  })
  it('when pressing the eye icon, it should show the password, and change the eye off icon', () => {
    const mockedOnChange = jest.fn();
    render(
      <PasswordInput
        label="Password"
        value="123456"
        placeholder="password"
        onChangeText={mockedOnChange}
      />,
    );
    const eyeIcon: IconProps['name'] = 'eyeOn'
    fireEvent.press(screen.getByTestId(eyeIcon))

    const eyeOffIcon: IconProps['name'] = 'eyeOff'
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon);

    expect(eyeOffIconElement).toBeTruthy()

    const inputElements = screen.getByPlaceholderText(/password/);
    expect(inputElements.props.secureTextEntry).toBeFalsy();
  })

})
