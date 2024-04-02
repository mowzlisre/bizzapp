import { Card, CardBody, CardHeader } from "@chakra-ui/react"

const Item = (item) => {
    const navigate = '' /* navigate route */
    return (
        <>
            <Card onClick={() => navigate('')}> {/* insert navigation route */}
                <CardHeader fontWeight={'bold'}>{item.name}</CardHeader>
                <CardBody>
                    <p>{item.description}</p>
                </CardBody>
            </Card>
        </>
    )
}

export default Item