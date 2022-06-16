/// <reference types="react" />
import { Post } from "../components/GetPosts";
interface PostItemPropse {
    post: Post;
}
declare const PostItem: React.FC<PostItemPropse>;
export default PostItem;
