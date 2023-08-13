import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react'
import { AiOutlineSend, AiFillYoutube, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'



const Footer = () => {
    return (
        <Box
            bg={'rgb(138, 81, 204)'}
            w={'100%'}

            minH={'40'}
            p={'16'}
            color={'rgb(29, 29, 29)'}
        >

            <Stack direction={['column', 'row']} w={'full'}>
                <VStack alignContent={'stretch'} w={'full'} px={'4'}>
                    <Heading
                        size={'md'}
                        textTransform={'capitalize'}
                        color={'rgb(29, 29, 29)'}
                    >
                        we will provide you best service
                    </Heading>
                    <HStack
                        borderBottom={'2px solid white'} py={'2'}>
                        <Button
                            p={'0'}
                            colorScheme='pink'
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}

                        >
                            <Input placeholder='Enter Email' border={'none'
                            }

                                borderRadius={'none'}
                                outline={'none'}
                                focusBorderColor='none' />
                            <AiOutlineSend size={'20'} />
                        </Button>
                    </HStack>
                </VStack >
                <VStack w={'full'}
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}
                >

                    <Heading textTransform={'capitalize'} textAlign={'center'}
                        color={'rgb(29, 29, 29)'}>
                        Amazon
                    </Heading>
                    <Text color={'rgb(29, 29, 29)'}> All rights reserved. </Text>
                </VStack>
                <VStack w={'full'}

                    borderRight={['none', '1px solid white']}
                >

                    <Heading size={'md'} textTransform={'capitalize'} color={'rgb(29, 29, 29)'}> social media</Heading>
                    <Button variant={'link'} color={'rgb(29, 29, 29)'}>
                        <AiFillYoutube />
                        <a href='https://youtube.com/' color={'rgb(29, 29, 29)'}> Youtube</a>
                    </Button>
                    <Button variant={'link'} color={'rgb(29, 29, 29)'}>
                        <AiFillInstagram />
                        <a href='https://web.whatsapp.com/'> Instagram</a>
                    </Button>
                    <Button variant={'link'} color={'rgb(29, 29, 29)'}>
                        <AiFillLinkedin />
                        <a href='https://www.linkedin.com/in/subhashscm/'> Linkedin</a>
                    </Button>

                </VStack>


            </Stack>
        </Box>
    )
}

export default Footer