import GalleryCardAction from "./GalleryCardAction";
import GalleryCardDescription from "./GalleryCardDescription";
import GalleryCardTitle from "./GalleryCardTitle";
import GalleryCardVideo from "./GalleryCardVideo";

export default function GalleryCard(props) {
    return (
        <>
            <GalleryCardTitle />
            <GalleryCardVideo />
            <GalleryCardDescription />
            <GalleryCardAction />
        </>
    )
}