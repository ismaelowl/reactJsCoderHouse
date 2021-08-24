import { Box, Image, Badge } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'

const Item = ({ data }) => {

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mr="4">
            <Image src={data.imageUrl} />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        Destacado
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        Categoria
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {data.title}
                </Box>

                <Box>
                    $ {data.price}
                    <Box as="span" color="gray.600" fontSize="sm" ml="1.5">
                        ARS
                    </Box>
                </Box>

                <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < data.rating ? "teal.500" : "gray.300"}
                            />
                        ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Item