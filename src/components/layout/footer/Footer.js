import { Container, Flex, Heading, Box, Text } from "@chakra-ui/react"

const Footer = () => {

    return (
        <Container maxW="container.xl" paddingTop="60px" paddingBottom="60px">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading size="lg">React Project</Heading>
                <Box>
                    <Text>Curso React CoderHouse</Text>
                </Box>
            </Flex>
        </Container>
    )
}

export default Footer