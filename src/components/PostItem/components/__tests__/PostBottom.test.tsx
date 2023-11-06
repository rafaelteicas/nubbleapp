import { Post } from "@domain"
import { fireEvent, render, screen } from "test-utils";
import { PostBottom } from "../PostBottom";
import { mockedPost } from "./mockedData/mockedPost";

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});
describe('<PostBottom />', () => {
  it('it does not show the comment link if it has no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />)
    const commentLinkElement = screen.queryByText(/comentario/)
    expect(commentLinkElement).toBeFalsy();
  })
  it('navigates to PostCommentScreen when pressing the comment link', () => {
    render(<PostBottom {...mockedPost} commentCount={4} />);
    const commentLinkElement = screen.getByText(/comentario/);
    fireEvent.press(commentLinkElement);
    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      authorId: mockedPost.author.id,
    });

  })
})
