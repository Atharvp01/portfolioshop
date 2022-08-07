import React from 'react'
import { Box, Container, Button, Backdrop, CircularProgress } from '@mui/material'
import GoogleLogoutComp from '../Components/ThirdPartyButtons/GoogleLogoutComp'
import { UserContext } from '../Providers/UserStateProvider'
import { UserDataContext } from '../Providers/UserDataStateProvider'
import Website from '../Components/Dashboard/Website'
import UserDisplayItems from '../Components/Dashboard/UserDisplayItems'
import About from '../Components/Dashboard/About'
import Skills from '../Components/Dashboard/Skills'
import Resume from '../Components/Dashboard/Resume'
import Projects from '../Components/Dashboard/Projects'
import Contact from '../Components/Dashboard/Contact'
import Savebutton from '../Components/Dashboard/SaveButton'
import TicketModal from '../Components/Dashboard/TicketModal'

const Dashboard = () => {
    const { loading } = React.useContext(UserDataContext)
    const { userEmail } = React.useContext(UserContext)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <>
            <Box sx={{ marginTop: 10 }}>
                <Container>
                    <a href={`/api/portfolioGenerator?email=${userEmail}`} target="blank" style={{ textDecoration: "none" }}>
                        <Button sx={{ height: 45 }} color="info" variant="outlined">
                            Visit your website
                        </Button>
                    </a>
                    <Button sx={{ height: 45 }}
                        color="info"
                        variant="outlined"
                        onClick={handleOpen}>
                        Raise a Ticket
                    </Button>
                    <TicketModal open={open} onClose={handleClose} />
                    <GoogleLogoutComp />
                    {/* Loading screen while the user data is being fetched */}
                    <Backdrop
                        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={loading}
                    >
                        <CircularProgress size={50} />
                    </Backdrop>
                    <Website />
                    <UserDisplayItems />
                    <About />
                    <Skills />
                    <Resume />
                    <Projects />
                    <Contact />
                    <Savebutton />
                </Container>
            </Box>
        </>
    )
}

export default Dashboard