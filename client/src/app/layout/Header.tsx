import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Re-Store
                </Typography>
                <Switch
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    checked={darkMode}
                    onChange={() => { 
                        handleThemeChange()
                    }
                    }
                />
            </Toolbar>
        </AppBar>
    )
}