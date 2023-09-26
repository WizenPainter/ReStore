import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItemText, Typography } from "@mui/material";
import agents from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage() {
    const [validationErrors, setValidationErrors] = useState<string[]>([]); // [] is the initial state

    function getValidationError() {
        agents.TestErrors.getValidationError()
        .then(() => console.log('Should not see'))
        .catch(error => setValidationErrors(error));
    }

    return (
        <Container>
            <Typography variant="h2">Errors for testing purposes</Typography>
            <ButtonGroup fullWidth>
                <Button variant='contained' onClick={() => agents.TestErrors.get400Error().catch(error => console.log(error))}>Test 400 Error</Button>
                <Button variant='contained' onClick={() => agents.TestErrors.get401Error().catch(error => console.log(error))}>Test 401 Error</Button>
                <Button variant='contained' onClick={() => agents.TestErrors.get404Error().catch(error => console.log(error))}>Test 404 Error</Button>
                <Button variant='contained' onClick={() => agents.TestErrors.get500Error().catch(error => console.log(error))}>Test 500 Error</Button>
                <Button variant='contained' onClick={getValidationError}>Test Validation Error</Button>
            </ButtonGroup>
            {validationErrors.length > 0 && (
                <Alert severity='error'>
                    <AlertTitle>Validation Errors</AlertTitle>
                    <List>
                        {validationErrors.map(error => (
                            <List key={error}>
                                <ListItemText>
                                    {error}
                                </ListItemText>
                            </List>
                        ))}
                    </List>
                </Alert>
            )}
        </Container>
    )
}