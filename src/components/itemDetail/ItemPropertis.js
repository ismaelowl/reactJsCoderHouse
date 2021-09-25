import { Text, Box, useColorModeValue } from '@chakra-ui/react';

const ItemPropertis = ({ props, value }) => {

    const bgBorder = useColorModeValue('#a71bb11c', '#a31cb24a')

    return (
            <Box
                className="fadeIn"
                maxW="200px"
                borderWidth="1px"
                backgroundColor="#a31cb20d"
                borderRadius="lg"
                borderColor={bgBorder}
                overflow="hidden"
                p="6"
                textAlign="center"
                marginBottom="5">
                <Text fontWeight="500">{props}</Text>
                <Text>{value}</Text>
            </Box>
    )
}

export default ItemPropertis