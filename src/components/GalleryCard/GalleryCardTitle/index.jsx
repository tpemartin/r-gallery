import { Avatar, IconButton, Stack, Typography } from "@mui/material"
import GroupsIcon from '@mui/icons-material/Groups';

export default function GalleryCardTitle(props) {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <GroupNumber />
                <Title />
                <Members />
            </Stack>
        </>
    )
}

// helpers

// https://mui.com/material-ui/react-avatar/#letter-avatars
function GroupNumber({ group_number = 1 }) {
    return (
        <>
            <Avatar sx={{ bgcolor: 'deepskyblue' }}>{group_number}</Avatar>
        </>
    )
}

function Title({ title = "Title", subtitle = "Subtitle" }) {
    return (
        <>
            <Stack direction="column" spacing={0}>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography variant="subtitle1">
                    {subtitle}
                </Typography>
            </Stack>
        </>
    )
}

// https://mui.com/material-ui/react-button/#basic-button
// https://mui.com/material-ui/react-button/#icon-button
// https://mui.com/material-ui/material-icons/?query=groups
function Members(props) {
    return (
        <>
            <IconButton arial-label="Members">
                <GroupsIcon />
            </IconButton>
        </>
    )
}