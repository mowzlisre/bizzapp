import { Box, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const value = useColorModeValue('orange.500', 'orange.800')
  const navigate = useNavigate()


  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg={value}
      color="white"
    >
      <Flex align="center" mr={5}>
        <Box fontSize="lg" fontWeight="bold" role="button" onClick={() =>navigate('/')}>
          MyBizz
        </Box>
      </Flex>


      <Box>
        <Box onClick={toggleColorMode}>
          {
            colorMode === 'light' ? 
            <Text role="button"><MdDarkMode fontSize={20} /></Text> 
            : <Text role="button"><MdOutlineLightMode fontSize={20} /></Text>
          }          
        </Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
