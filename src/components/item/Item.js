import { Box, Image, Badge, useColorModeValue, Text } from '@chakra-ui/react';
import { FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './item.css'

const Item = ({ data }) => {

    const bgCard = useColorModeValue('#a71bb105', '#a31cb20d')
    const bgBorder = useColorModeValue('#a71bb11c', '#a31cb24a')

    return (
        <Link to={`/item/${data.id}`}>
            <Box
                className="box-item fadeIn"
                borderWidth="1px"
                borderRadius="lg"
                borderColor={bgBorder}
                overflow="hidden"
                marginLeft="2"
                marginRight="2"
                mt="5">
                <Image src={data.imageUrl} backgroundSize="cover" />
                <Box p="6" backgroundColor={bgCard}>
                    <Box d="flex" alignItems="baseline">
                        <Badge
                            borderRadius="full"
                            px="2"
                            bgGradient="linear(to-l, #7928ca8f, #ff0080ba)"
                            color="whiteAlpha.900">
                            NFT
                        </Badge>
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            Market Place
                        </Box>
                    </Box>
                    <Box
                        mt="2"
                        fontSize="1.2em"
                        fontWeight="bold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                        color="gray.500"
                    >
                        {data.nombreProducto}
                    </Box>
                    <Box
                        fontSize="1.4rem"
                        display="flex"
                        gridGap="1.5"
                        alignItems="center"
                        mt="1.5">
                        <FaEthereum

                            size={24}
                            color="#035d91" />
                        <Text className="price">{data.precio}</Text>
                        <Box>
                            <Text className="price">ETH</Text>
                        </Box>
                    </Box>
                    <Box
                        d="flex"
                        mt="1.5"
                        alignItems="center"
                        gridGap="3">
                        <Image
                            borderRadius="full"
                            boxSize="30px"
                            src={data.userImg}
                            alt="Segun Adebayo"
                        />
                        <Text fontWeight="500" color="gray.500">{data.user}</Text>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}

export default Item