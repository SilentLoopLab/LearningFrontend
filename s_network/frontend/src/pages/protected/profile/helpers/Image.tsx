import { BASE } from "../../../../config/axios";
type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export const Image: React.FC<Props> = ({ src, ...props }) => {
    return (
        <>
            <img
                src={
                    !src
                        ? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                        : BASE + "/" + src
                }
                {...props}
                className={props.className}
            />
        </>
    );
};
