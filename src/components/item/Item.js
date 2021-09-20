import { Box, Image, Badge } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import './item.css'

const Item = ({ data }) => {

    return (
        <Link to={`/item/${data.id}`}>
            <Box className="box-item" borderWidth="1px" boxShadow="sm" borderRadius="lg" overflow="hidden" marginLeft="2" marginRight="2" mt="5">
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
                        {data.nombreProducto}
                    </Box>
                    <Box>
                        $ {data.precio}
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
        </Link>
    )
}

export default Item