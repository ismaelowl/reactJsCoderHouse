import { Container, Heading, Box, Flex, Button, IconButton, useColorMode, useColorModeValue, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider } from '@chakra-ui/react';
import { Link, NavLink } from "react-router-dom"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import CartWidget from '../CartWidget';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import './navBar.css'

const NavBar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const border = useColorModeValue("#b9b9b9", "#6c757d")

    return (
        <Container maxW="container.xl" mt="5">
            <Flex h="60px" gap={6} border="1px" borderColor={border} borderRadius="lg" padding="0 30px 0 30px">

                <Box w="100%" h="100%" display="flex" alignItems="center" pb="2">
                    <Link to="/">
                        <Heading size="lg">React Project</Heading>
                    </Link>
                </Box>

                <Box w="100%" h="100%" className="list-menu">
                    <Flex h="100%" alignItems="center" justifyContent="space-around">
                        <Box>
                            <Link to="/" fontWeight="bold">Home</Link>
                        </Box>
                        <Box>
                            <Link to="/category/1" fontWeight="bold">Nuevos</Link>
                        </Box>
                        <Box>
                            <Link to="/category/2" fontWeight="bold">Destacados</Link>
                        </Box>
                        <Box>
                            <Link to="/" fontWeight="bold">Ingresar</Link>
                        </Box>
                    </Flex>
                </Box>
                <Box w="100%" h="100%" className="btn-menu">
                    <Flex h="100%" alignItems="center" justifyContent="flex-end">
                        <Link to="/cart"><Button marginRight="5"><CartWidget></CartWidget></Button></Link>
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                </Box>

                <Box w="100%" h="100%" className="mobile-menu">
                    <Flex h="100%" alignItems="center" justifyContent="space-evenly">
                    <Link to="/cart"><Button><CartWidget></CartWidget></Button></Link>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<HiOutlineMenuAlt1 size={30} />}
                                variant="none"
                            />
                            <MenuList>
                                <MenuItem>Home</MenuItem>
                                <MenuItem>Categorias</MenuItem>
                                <MenuItem>Ofertas</MenuItem>
                                <MenuItem>Ingresar</MenuItem>
                                <MenuDivider />
                                <MenuGroup title="Destacado">
                                    <MenuItem>Categoria 1</MenuItem>
                                    <MenuItem>Categoria 2</MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Box>

            </Flex>
        </Container>
    );
};

export default NavBar;
