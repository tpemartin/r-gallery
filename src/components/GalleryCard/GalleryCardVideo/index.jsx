import {
    FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Stack,
    CardMedia
} from "@mui/material"

export default function GalleryCardVideo(props) {
    return (
        <>
            <Stack direction="column" spacing={0}>
                <Language />
                <VideoEmbed />
            </Stack>
        </>
    )
}

// helpers

// https://mui.com/material-ui/react-radio-button/#direction
function Language(props) {
    return (
        <>
            <FormControl>
                <FormLabel id="video-language">Language</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="video-language"
                    defaultValue="ch"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="ch" control={<Radio />} label="中" />
                    <FormControlLabel value="en" control={<Radio />} label="En" />
                </RadioGroup>
            </FormControl>
        </>
    )
}


function VideoEmbed(props) {
    return (
        <>
            <CardMedia
                sx={{ height: 140 }}
                // image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                component="iframe"
                src="https://player.vimeo.com/video/877867752?h=15bd33812f"
                title="green iguana"
            >
                <iframe width={640} height={564} frameBorder={0} allow="autoplay; fullscreen" allowFullScreen />

            </CardMedia>

        </>
    )
}