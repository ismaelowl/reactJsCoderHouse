import { Container, Img, Box, Flex, IconButton, useColorMode, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom"
import CartWidget from '../../cart/CartWidget';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { FiMoon, FiSun } from 'react-icons/fi';
import './navBar.css'
import logoDark from '../../../assets/logo_dark.svg'
import logoWhite from '../../../assets/logo_white.svg'

const NavBar = () => {

    const { colorMode, toggleColorMode } = useColorMode()


    return (
        <Container maxW="container.xl" className="slideInDown">
            <Flex h="80px" gap={6}>

                <Box w="100%" h="100%" display="flex" alignItems="center">
                    <Link to="/">
                    {colorMode === "light" ? <Img src={logoDark} width="140px"/> : <Img src={logoWhite} width="140px"/>}
                    </Link>
                </Box>

                <Box w="100%" h="100%" className="list-menu">
                    <Flex h="100%" alignItems="center" justifyContent="space-around">
                        <Box>
                            <Link to="/"><Text fontWeight="bold">Home</Text></Link>
                        </Box>
                        <Box>
                            <Link to="/category/nuevosProductos"><Text fontWeight="bold">Nuevos</Text></Link>
                        </Box>
                        <Box>
                            <Link to="/category/productosDestacados"><Text fontWeight="bold">Destacados</Text></Link>
                        </Box>
                        <Box>
                            <Link to="/"><Text fontWeight="bold">Ingresar</Text></Link>
                        </Box>
                    </Flex>
                </Box>
                <Box w="100%" h="100%" className="btn-menu">
                    <Flex h="100%" alignItems="center" justifyContent="flex-end">
                        <Link to="/cart"><CartWidget></CartWidget></Link>
                        <Box width="56px" height="56px" display="flex" justifyContent="center" alignItems="center" onClick={toggleColorMode} cursor="pointer" className="hover_box">
                            {colorMode === "light" ? <FiMoon size={24}/> : <FiSun size={24}/>}
                        </Box>
                    </Flex>
                </Box>

                <Box w="100%" h="100%" className="mobile-menu">
                    <Flex h="100%" alignItems="center" justifyContent="flex-end">
                    <Link to="/cart"><CartWidget></CartWidget></Link>
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
