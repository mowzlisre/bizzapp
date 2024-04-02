import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react"
import { FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Domain = (item) => {
    const navigate = useNavigate()

    return (
        <>
            <Card role="button" onClick={() => navigate(`/business?type=${item.name}`)} mx={'auto'} width={{ base: 'md', md: 'sm' }} p={5} bg={"orange.100"}>
                <Flex justifyContent={'center'} my={10}>
                    <Text>{item.icon}</Text>
                </Flex>
                <Text textAlign={'center'} fontWeight={'bold'} fontSize={'xl'}>{item.name.toUpperCase()}</Text>
            </Card>
        </>
    )
}

export default Domain