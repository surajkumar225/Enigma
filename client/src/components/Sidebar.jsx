import { Drawer, styled } from "@mui/material";

import SideBarContent from "./SideBarContent";

const StyledDrawer = styled(Drawer)({
    marginTop: 54,
  
})

const SideBar = ({ toggleDrawer, openDrawer }) => {

    return (
        <StyledDrawer
            anchor='left'
            open={openDrawer}
            onClose={toggleDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': { 
                    width: 250,
                    borderRight: 'none',
                    background: '#001d35',
                    color: 'white',
                    marginTop: '64px',
                    height: 'calc(100vh - 64px)'
                },
            }}
          >
            <SideBarContent />
        </StyledDrawer>
    )
}



export default SideBar;
