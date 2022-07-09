/// <reference types="react" />
import { Post } from "../components/GetPosts";
interface PostItemPropse {
    post: Post;
    posts: Array<Post>;
    setPosts: Function;
    children?: JSX.Element | JSX.Element[];
}
declare const PostItem: React.FC<PostItemPropse>;
export default PostItem;
